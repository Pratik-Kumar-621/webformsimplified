"use client";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <h3 className="text-xl font-bold text-black dark:text-white">
            webformify
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 webformify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
