"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg">
            WebFormSimplified
          </div>
          <div className="flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-xl"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            )}
            <Button className="rounded-2xl">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          The Form Layer
          <br />
          for shadcn.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Advanced form components, production-ready templates, and a visual
          playground — all built on shadcn. Fully typed. Fully customizable.
        </motion.p>
        <div className="mt-12 flex justify-center gap-6">
          <Button size="lg" className="rounded-2xl px-8">
            Explore Components
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl px-8">
            View Playground
          </Button>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">
            Competitive Landscape
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most tools solve parts of the problem. Not all of it.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-6">Feature</th>
                <th className="p-6">Exists Today?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Drag & drop form builder", "✔️ Yes"],
                ["Exportable React code", "✔️ Yes"],
                ["Based on shadcn UI", "✔️ Partially"],
                ["Prebuilt editable form templates", "❌ Rare"],
                ["Live theme color customization", "❌ Mostly no"],
                ["Multi-step form support in builder", "❌ Very limited"],
                ["Tight React Hook Form + Zod output", "Some"],
                ["Playground panel with config controls", "✔️ Partial"],
                ["Developer-friendly export (clean, editable)", "✔️ Some"],
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="p-6">{row[0]}</td>
                  <td className="p-6 text-muted-foreground">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Playground Mock */}
      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">
            Visual Form Playground
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drag. Configure. Export clean React code.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 rounded-2xl border p-6 shadow-xl bg-background">
          {/* Sidebar */}
          <div className="rounded-xl border p-4 space-y-3 bg-muted/30">
            <p className="font-medium">Components</p>
            {["Input", "Select", "Checkbox", "Radio Group", "Date Picker"].map(
              (item, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg border bg-background text-sm"
                >
                  {item}
                </div>
              ),
            )}
          </div>

          {/* Canvas */}
          <div className="rounded-xl border p-6 bg-muted/20 space-y-4">
            <div className="p-4 rounded-lg border bg-background">
              Email Input
            </div>
            <div className="p-4 rounded-lg border bg-background">
              Password Input
            </div>
            <div className="p-4 rounded-lg border bg-background">
              Remember Me Checkbox
            </div>
          </div>

          {/* Config Panel */}
          <div className="rounded-xl border p-4 bg-muted/30 space-y-4">
            <p className="font-medium">Field Settings</p>
            <div className="text-sm text-muted-foreground">Label: Email</div>
            <div className="text-sm text-muted-foreground">Required: true</div>
            <div className="text-sm text-muted-foreground">
              Validation: Zod schema
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl font-semibold tracking-tight">
          Build Better Forms.
        </h2>
        <p className="mt-6 text-muted-foreground">
          Production-ready. Copy-paste friendly. Fully customizable.
        </p>
        <div className="mt-10">
          <Button size="lg" className="rounded-2xl px-10">
            Get WebFormSimplified
          </Button>
        </div>
      </section>
    </div>
  );
}
