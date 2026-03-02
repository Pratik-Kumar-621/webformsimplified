"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { isAuthenticated, loading } = useAuth();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // use resolvedTheme when deciding which icon to show and what to toggle to
  const current = mounted ? resolvedTheme : theme;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          WebFormSimplified
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(current === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {current === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          )}

          {/* Auth Links */}
          <div className="flex gap-4 items-center">
            {!loading && isAuthenticated ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium transition-colors hover:opacity-80"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="px-4 py-2 text-black dark:text-white font-medium hover:opacity-60 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium transition-colors hover:opacity-80"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
