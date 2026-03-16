"use client";
import {
  Layers,
  LayoutGrid,
  Workflow,
  SquareMousePointer,
  Palette,
} from "lucide-react";

const features = [
  {
    header: <Layers className="h-24 w-24" />,
    title: "Repetitive Form Setup",
    content:
      "Every form requires setting up inputs, labels, validation, and React Hook Form bindings from scratch. WebFormSimplified provides prebuilt form components and templates with React Hook Form and Zod support already integrated.",
  },
  {
    header: <LayoutGrid className="h-24 w-24" />,
    title: "Inconsistent Form Design",
    content:
      "Forms across applications often look inconsistent because they are built differently each time. Built on top of shadcn/ui, WebFormSimplified ensures consistent UI patterns and accessible components.",
  },
  {
    header: <Workflow className="h-24 w-24" />,
    title: "Multi-Step Forms Are Hard",
    content:
      "Traditional multi-step forms require complex logic for step transitions and validation. WebFormSimplified includes built-in multi-step support with step navigation and per-step validation.",
  },
  {
    header: <SquareMousePointer className="h-24 w-24" />,
    title: "Visual Builders Generate Bad Code",
    content:
      "Most drag-and-drop builders generate unreadable code. WebFormSimplified exports clean React + TypeScript code built with shadcn patterns.",
  },
  {
    header: <Palette className="h-24 w-24" />,
    title: "Theming Is Time Consuming",
    content:
      "Update form colors and styles instantly with live theme customization inside the playground and export the themed code.",
  },
];
const Features = () => {
  return (
    <div className="relative z-20 min-h-40 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      Features
    </div>
  );
};

export default Features;
