# 🤖 GitHub Copilot – Instrucciones para mi proyecto de Portafolio

## 🎯 Contexto del proyecto
- Este es un **portafolio profesional de desarrollo web**.
- Tecnologías principales: **Astro, React, TypeScript, TailwindCSS, shadcn/ui, Lucide Icons, Framer Motion (opcional)**.
- Objetivo: código limpio, mantenible y aplicando **principios SOLID**.

---

## 📌 Estilo de código
- Usar **TypeScript** con tipado fuerte en todos los componentes.
- Mantener los componentes **funcionales** (`function ComponentName()`) y no clases.
- Usar **arrow functions** solo para handlers internos (`onClick={() => ...}`).
- Siempre exportar componentes como **default export** si son únicos en el archivo.
- Importar primero librerías externas, luego componentes internos, luego estilos/utilidades.
- Nombrar archivos y carpetas en **PascalCase** para componentes (`Sidebar.tsx`), y **camelCase** para helpers (`useTheme.ts`).

---

## 🧩 Principios de arquitectura
- **Single Responsibility (SRP):** cada componente hace una sola cosa.
- **Open/Closed:** componentes configurables con `props`, no hardcodear estilos o textos.
- **Reutilizables:** preferir `ProjectCard`, `SocialLink`, `NavItem` antes que repetir JSX.
- **Separación de responsabilidades:** lógica en hooks (`/lib/hooks`) y vista en componentes.

---

## 🎨 Estilo y diseño
- Usar **TailwindCSS** para estilos rápidos.
- Usar **shadcn/ui** para componentes base (botones, cards, modals, sidebar).
- Preferir **Lucide-react** para iconos.
- Respetar tipografía global:
  - **Poppins** para títulos
  - **Inter** para textos
- Sidebar fijo en desktop, **drawer** en mobile con `Sheet` de shadcn.
- Footer minimalista: iconos de redes sociales + año dinámico.

---

## 🔄 Transiciones y animaciones
- Usar **Framer Motion** para transiciones entre páginas y microinteracciones.
- Animaciones suaves, con `duration: 0.2–0.3s`.
- Evitar animaciones excesivas que afecten la legibilidad.

---

## 📝 Convenciones
- Carpetas:
```
/components
Sidebar.tsx
Footer.tsx
ThemeToggle.tsx
ProjectCard.tsx
/pages
index.astro
about.astro
projects.astro
resume.astro
contact.astro
/lib
hooks/
utils/
```

- Usar `const navItems = [...]` para navegación en sidebar/footer.
- Footer debe incluir enlaces a **GitHub, LinkedIn, Twitter**.

---

## ✅ Ejemplos de prompts para Copilot
- “Crea un componente `ProjectCard` en React + TS, con props: title, description, techStack, repoLink, demoLink.”
- “Genera un hook `useTheme` para manejar dark/light mode con localStorage.”
- “Agrega animación fade-in con Framer Motion al cargar la sección de proyectos.”
- “Implementa un componente `Sidebar` responsivo con shadcn/ui, fijo en desktop y drawer en mobile.”

---

## 🚫 Qué evitar
- No generar código en JavaScript plano (usar siempre TypeScript).
- No repetir JSX cuando se puede abstraer en un componente.
- No usar librerías de UI adicionales (ej. Material UI, Chakra, etc.).
- No hardcodear enlaces o estilos repetidos.

---

✍️ Con estas instrucciones, **Copilot debe priorizar código limpio, reutilizable, accesible y consistente con la arquitectura del portafolio.**

¡Feliz codificación! 🚀