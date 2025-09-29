import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
}

interface FloatingNavigationProps {
  items: NavigationItem[];
}

export default function FloatingNavigation({ items }: FloatingNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navigationRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Handle navigation click
  const handleNavigate = (href: string, itemName: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(href);
      setIsOpen(false);
      setFocusedIndex(-1);

      // Announce navigation to screen readers
      const announcement = `Navegando a la sección ${itemName}`;
      announceToScreenReader(announcement);

      // Return focus to trigger button after navigation
      setTimeout(() => {
        triggerRef.current?.focus();
      }, 100);
    }
  };

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Keyboard navigation handler
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
        setTimeout(() => {
          itemRefs.current[0]?.focus();
        }, 50);
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        announceToScreenReader('Menú de navegación cerrado');
        break;

      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = focusedIndex < items.length - 1 ? focusedIndex + 1 : 0;
        setFocusedIndex(nextIndex);
        itemRefs.current[nextIndex]?.focus();
        break;

      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : items.length - 1;
        setFocusedIndex(prevIndex);
        itemRefs.current[prevIndex]?.focus();
        break;

      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        itemRefs.current[0]?.focus();
        break;

      case 'End':
        event.preventDefault();
        const lastIndex = items.length - 1;
        setFocusedIndex(lastIndex);
        itemRefs.current[lastIndex]?.focus();
        break;

      case 'Tab':
        if (event.shiftKey && focusedIndex === 0) {
          setIsOpen(false);
          setFocusedIndex(-1);
        } else if (!event.shiftKey && focusedIndex === items.length - 1) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
    }
  };

  // Handle trigger button interactions
  const handleTriggerClick = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);

    if (newOpenState) {
      setFocusedIndex(0);
      announceToScreenReader('Menú de navegación abierto. Use las flechas para navegar y Enter para seleccionar.');
      setTimeout(() => {
        itemRefs.current[0]?.focus();
      }, 50);
    } else {
      setFocusedIndex(-1);
      announceToScreenReader('Menú de navegación cerrado');
    }
  };

  // Auto-detect current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveSection = `#${entry.target.id}`;
            setActiveSection(newActiveSection);

            // Announce section change to screen readers
            const sectionName = items.find(item => item.href === newActiveSection)?.name;
            if (sectionName) {
              announceToScreenReader(`Ahora en la sección: ${sectionName}`);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Current section for screen readers
  const currentSectionName = items.find(item => item.href === activeSection)?.name || 'Ninguna';

  return (
    <nav
      ref={navigationRef}
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (document.activeElement === triggerRef.current ||
          itemRefs.current.includes(document.activeElement as HTMLButtonElement)) {
          return; // Don't close if focused via keyboard
        }
        setIsOpen(false);
        setFocusedIndex(-1);
      }}
      aria-label="Navegación del currículum vitae"
      role="navigation"
    >
      {/* Screen reader only status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Sección actual: {currentSectionName}
      </div>

      {/* Trigger Button */}
      <Button
        ref={triggerRef}
        variant="default"
        size="icon"
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        className={`
          rounded-l-xl rounded-r-none shadow-lg
          bg-primary/90 hover:bg-primary
          transition-all duration-300 focus:outline-none 
          focus:ring-2 focus:ring-primary focus:ring-offset-2
          ${isOpen ? 'scale-105 shadow-xl' : 'hover:scale-105'}
        `}
        aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación del CV'}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="cv-navigation-menu"
        aria-describedby="cv-nav-instructions"
      >
        <ChevronLeft
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? '-translate-x-1 rotate-12' : ''
            }`}
          aria-hidden="true"
        />
      </Button>

      {/* Hidden instructions for screen readers */}
      <div id="cv-nav-instructions" className="sr-only">
        Menú de navegación del currículum. Use Enter o Space para abrir, flechas para navegar, Enter para seleccionar, Escape para cerrar.
      </div>

      {/* Navigation Panel */}
      <div
        id="cv-navigation-menu"
        className={`
          absolute right-full top-1/2 -translate-y-1/2 mr-1
          bg-background/55 backdrop-blur-md border border-border/40
          rounded-xl shadow-2xl w-56
          transition-all duration-300 origin-right
          ${isOpen
            ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
          }
        `}
        role="menu"
        aria-label="Secciones del currículum vitae"
        aria-hidden={!isOpen}
      >
        {/* Navigation Items */}
        <div className="p-2" role="none">
          {items.map((item, index) => {
            const isActive = activeSection === item.href;

            return (
              <Button
                key={item.href}
                ref={(el) => { itemRefs.current[index] = el }}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavigate(item.href, item.name)}
                onKeyDown={handleKeyDown}
                className={`
                  w-full justify-start gap-3 mb-1 h-9
                  transition-all duration-200 group/item
                  cursor-pointer focus:outline-none 
                  focus:ring-2 focus:ring-primary focus:ring-inset
                  ${isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'hover:bg-accent/50'
                  }
                `}
                role="menuitem"
                aria-label={`Ir a la sección ${item.name}${isActive ? ' (sección actual)' : ''}`}
                aria-current={isActive ? 'location' : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                <span className="font-medium text-sm flex-1 text-left truncate">
                  {item.name}
                </span>
                <ChevronLeft
                  className={`h-3 w-3 rotate-180 transition-all duration-200 ${isActive
                      ? 'opacity-100'
                      : 'opacity-0 group-hover/item:opacity-70'
                    }`}
                  aria-hidden="true"
                />
                {isActive && (
                  <span className="sr-only">Sección actual</span>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}