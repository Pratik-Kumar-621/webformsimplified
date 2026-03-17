"use client";
import SectionHead from "@/components/SectionHead";
import {
  Layers,
  LayoutGrid,
  Workflow,
  SquareMousePointer,
  Palette,
} from "lucide-react";
import "./features.css";

const features = [
  {
    header: <Layers className="h-24 w-24" />,
    title: "Repetitive Form Setup",
    contentNeg:
      "Every new form requires manually wiring inputs, labels, validation rules, and React Hook Form bindings repeatedly.",
    contentPos:
      "WebFormSimplified offers ready-to-use form components with React Hook Form and Zod validation already integrated seamlessly.",
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
const featureGrid = ["a", "b", "c", "d", "e"];
const Features = () => {
  return (
    <div
      id="features"
      className="relative z-20 px-8 pt-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] md:px-16 md:pt-8 lg:px-24 lg:pt-10 dark:shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <SectionHead
        title="What WebFormSimplified solved?"
        description="Building forms from scratch is error-prone and time-consuming. We've solved
the common pain points so you don't have to."
      />
      <div className="feature-grid grid gap-4 pb-10">
        {features.map((feature, idx: number) => (
          <div
            key={idx}
            style={{ gridArea: `${featureGrid[idx]}` }}
            className={`dark:shadow-white-50 flex flex-col items-start gap-4 rounded-xl border border-(--content-border) bg-(--box-background) p-6 shadow-md transition duration-300 ease-in-out hover:scale-[1.02] dark:shadow-gray-500/50`}
          >
            <div className="rounded-md bg-(--muted) p-4 text-(--button)">
              {feature.header}
            </div>
            <h3 className="text-lg font-semibold text-(--foreground)">
              {feature.title}
            </h3>
            <p className="text-sm text-red-600 dark:text-red-300">
              {feature.contentNeg}
            </p>
            <p className="-mt-3 text-sm text-green-600 dark:text-green-300">
              {feature.contentPos}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
