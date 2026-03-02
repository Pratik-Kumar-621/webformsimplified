# WebFormSimplified

WebFormSimplified is a modern, minimal builder for creating customizable forms using a drag‑and‑drop playground. It ships with a full set of form components (input, select, radio, checkbox, etc.), multi‑step support, and a code export feature so you can integrate forms seamlessly into any project.

The repository demonstrates a Next.js 16 application with built‑in Firebase authentication (email/password + Google provider), a polished light/dark theme, and a custom landing page that showcases all features and UI components.

---

## Features

- **Custom Landing Page** with:
  - Hero, features, testimonials, founder bio, CTA, and footer sections
  - Animated shader background and responsive design
  - Bento grid, draggable testimonial cards, and microinteractions
  - Light/dark mode switch with system preference detection
- **Firebase Authentication** (email/password, Google, password reset)
- **Protected Routes** (signup, signin, dashboard with redirects)
- **Context API** for auth state and custom hooks
- **Tailwind CSS** with dark mode and utility-first styling
- **Next Themes** for theme management
- **Framer Motion** for animations and draggable elements
- **TypeScript** throughout for type safety

---

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   # or yarn install
   # or pnpm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env` and provide your Firebase configuration values (shown in the repo). Variables should use `NEXT_PUBLIC_FIREBASE_*` prefix.

3. **Run development server**

   ```bash
   npm run dev
   # or yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Build for production**

   ```bash
   npm run build
   ```

---

## Project Structure

```
app/                 # Next.js app directory (routing + pages)
components/          # Reusable React components (landing, auth, etc.)
context/             # React context providers (AuthContext)
hooks/               # Custom hooks
lib/                 # Utility modules (firebase, auth, theme)
public/              # Static assets
.env                 # Environment variables (not checked in)
next.config.ts       # Next.js configuration
tailwind.config.ts   # Tailwind CSS configuration
package.json         # Dependencies & scripts
README.md            # This file
```

---

## Acknowledgements

This project was built as a demonstration of a customizable form builder platform with strong UI/UX and theme support. It uses popular libraries like Next.js, Tailwind CSS, Firebase, and Framer Motion.

---

## License

MIT © Your Name

