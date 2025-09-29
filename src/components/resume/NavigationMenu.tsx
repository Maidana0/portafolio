import { useState, useEffect } from "react";
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

  // Handle navigation click
  const handleNavigate = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  // Auto-detect current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
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

  return (
    <div 
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)} // For mobile touch
    >
      {/* Trigger Button */}
      <Button 
        variant="default"
        size="icon"
        className={`
          rounded-l-xl rounded-r-none shadow-lg
          bg-primary/90 hover:bg-primary
          transition-all duration-300
          ${isOpen ? 'scale-105 shadow-xl' : 'hover:scale-105'}
        `}
      >
        <ChevronLeft 
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? '-translate-x-1 rotate-12' : ''
          }`}
        />
      </Button>

      {/* Navigation Panel */}
      <div 
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
      >
        {/* Navigation Items */}
        <div className="p-2">
          {items.map((item) => {
            const isActive = activeSection === item.href;
            
            return (
              <Button
                key={item.href}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavigate(item.href)}
                className={`
                  w-full justify-start gap-3 mb-1 h-9
                  transition-all duration-200 group/item
                  cursor-pointer
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'hover:bg-accent/50'
                  }
                `}
              >
                <span className="font-medium text-sm flex-1 text-left">
                  {item.name}
                </span>
                <ChevronLeft 
                  className={`h-3 w-3 rotate-180 transition-all duration-200 ${
                    isActive 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover/item:opacity-70'
                  }`}
                />
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}