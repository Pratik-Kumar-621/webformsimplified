import {
  Layers,
  LayoutGrid,
  Workflow,
  SquareMousePointer,
  Palette,
} from "lucide-react";

export const features = [
  {
    header: <Layers className="h-24 w-24" />,
    title: "Repetitive Form Setup",
    contentNeg: (
      <>
        Every new form requires manually wiring inputs, labels, validation
        rules, and React Hook Form bindings repeatedly.
      </>
    ),
    contentPos: (
      <>
        WebFormSimplified offers ready-to-use form components with React Hook
        Form and Zod validation already integrated seamlessly.
      </>
    ),
  },
  {
    header: <LayoutGrid className="h-24 w-24" />,
    title: "Inconsistent Form Design",
    contentNeg: (
      <>
        Forms across applications often look inconsistent because they are built
        differently each time without shared design patterns.
      </>
    ),
    contentPos: (
      <>
        Built on shadcn/ui, WebFormSimplified ensures consistent design,
        accessibility, and reusable UI patterns across all forms.
      </>
    ),
  },
  {
    header: <Workflow className="h-24 w-24" />,
    title: "Multi-Step Forms Are Hard",
    contentNeg: (
      <>
        Creating multi-step forms involves managing state, navigation logic, and
        validation across steps, which becomes complex quickly.
      </>
    ),
    contentPos: (
      <>
        WebFormSimplified provides built-in multi-step support with step
        navigation, validation, and state handling out of the box.
      </>
    ),
  },
  {
    header: <SquareMousePointer className="h-24 w-24" />,
    title: "Visual Builders Generate Bad Code",
    contentNeg: (
      <>
        Most drag-and-drop builders generate bloated, unreadable code that is
        difficult to maintain and integrate into real projects.
      </>
    ),
    contentPos: (
      <>
        WebFormSimplified exports clean, readable React and TypeScript code
        following shadcn conventions for easy maintenance and scalability.
      </>
    ),
  },
  {
    header: <Palette className="h-24 w-24" />,
    title: "Theming Is Time Consuming",
    contentNeg: (
      <>
        Theming forms often requires custom CSS overrides and repetitive styling
        work, making design updates slow and error-prone.
      </>
    ),
    contentPos: (
      <>
        WebFormSimplified includes a real-time theming system to customize form
        styles easily without writing complex CSS overrides.
      </>
    ),
  },
];
