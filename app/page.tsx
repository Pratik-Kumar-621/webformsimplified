"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function LandingPage() {
  const { isAuthenticated, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            WebFormSimplified
          </h1>
          <div className="flex gap-4">
            {!loading && isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-gray-700 hover:text-gray-900 font-semibold py-2 px-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Create, Organize & Integrate Forms Seamlessly
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            WebFormSimplified is a one-stop solution for creating stunning
            forms, organizing them effortlessly, and integrating them into any
            project with just a few clicks.
          </p>

          {!isAuthenticated && (
            <div className="flex gap-4 justify-center mb-16">
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
              >
                Get Started Free
              </Link>
              <Link
                href="/signin"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Easy Creation
            </h3>
            <p className="text-gray-600">
              Create beautiful, professional forms without any coding knowledge.
              Drag, drop, and customize.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Smart Organization
            </h3>
            <p className="text-gray-600">
              Keep all your forms organized in one place. Tag, categorize, and
              filter with ease.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Integrate forms into any website or application with just an embed
              code or API.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        {!isAuthenticated && (
          <div className="bg-blue-600 text-white rounded-lg p-12 text-center mt-20">
            <h3 className="text-3xl font-bold mb-4">
              Ready to simplify your forms?
            </h3>
            <p className="text-lg mb-8 text-blue-100">
              Join thousands of creators building better forms today.
            </p>
            <Link
              href="/signup"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition inline-block"
            >
              Start Free Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
