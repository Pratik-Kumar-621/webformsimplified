# WebFormSimplified

### A Form UI Toolkit & Playground

WebFormSimplified is a component-driven interface designed specifically for building forms. Not only do you get every input element, select menu, radio group, checkbox, and more — you also get a live drag‑and‑drop playground where you can arrange, customize, and preview forms before exporting clean, production-ready code.

Key aspects of the product:

- 🧩 **Component Library** – All essential form controls (single‑line, multi‑line, selects, radios, checkboxes, switches, date pickers, file inputs, etc.) designed with a modern, sharp aesthetic.
- 🔧 **Drag‑and‑Drop Builder** – Visually assemble forms by dragging components into place, rearranging them, and configuring properties on the fly.
- 🏹 **Multi‑Step Support** – Create wizard‑style flows with progress indicators and conditional navigation between steps.
- 📄 **Code Export** – Once your form is ready, export the JSX/HTML and accompanying styles to drop directly into your project.
- 🎨 **Themeable UI** – Built‑in light/dark mode with system detection, and simple theming for colors and typography.
- 📦 **Standalone** – Can be integrated into any front‑end stack; the playground itself is framework‑agnostic once exported.

This repository hosts a demo application showcasing the product’s capabilities (including a landing page, authentication, and dashboard). You can use it as a starting point or tailor the playground UI to your own requirements.

---

## Quick Start (Demo)

This section only applies if you want to run the demo environment that ships with the component playground:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Provide a `.env` file with your Firebase credentials if you wish to test authentication. Only the playground UI itself does not require any backend.
3. Launch:
   ```bash
   npm run dev
   ```
4. Visit http://localhost:3000 to explore the landing page, sign up/in flows, and the playground interface.

For product usage, you can ignore all the demo-specific pages and focus on the `components/` folder containing the UI toolkit.

---

## Product Focus

If you’re evaluating WebFormSimplified as a UI kit for your own application, the core area of interest is:

```
components/form/         # form field components and layouts
components/dragdrop/     # playground drag-and-drop helpers
components/theme/        # theme utilities (light/dark)
hooks/usePlayground.ts   # playground state management
lib/exportCode.ts        # logic to generate exportable markup
```

All other directories (auth, landing, dashboard) are simply part of the demo shell and can be removed when using the toolkit alone.

---

## License

MIT © Your Name

