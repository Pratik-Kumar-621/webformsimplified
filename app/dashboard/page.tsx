"use client";

import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const result = await logout();
    if (result.success) {
      router.push("/");
    }
    setIsLoggingOut(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="bg-white shadow">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              WebFormSimplified
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                Welcome,{" "}
                <span className="font-semibold">
                  {user?.displayName || user?.email}
                </span>
              </span>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="rounded-lg bg-red-600 px-4 py-2 font-bold text-white transition hover:bg-red-700 disabled:bg-gray-400"
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-12 shadow-lg">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Welcome to Your Dashboard
            </h2>

            <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="mb-2 text-gray-700">
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              {user?.displayName && (
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span>{" "}
                  {user?.displayName}
                </p>
              )}
            </div>

            <p className="mb-8 text-lg text-gray-600">
              You're all set! Start creating your first form and simplify your
              form management process.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <h3 className="mb-3 text-xl font-bold text-blue-900">
                  📝 Create Form
                </h3>
                <p className="mb-4 text-blue-800">
                  Start creating a new form with our intuitive form builder.
                </p>
                <button className="rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition hover:bg-blue-700">
                  New Form
                </button>
              </div>

              <div className="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-8">
                <h3 className="mb-3 text-xl font-bold text-green-900">
                  📊 View Forms
                </h3>
                <p className="mb-4 text-green-800">
                  Manage and organize all your forms in one place.
                </p>
                <button className="rounded-lg bg-green-600 px-6 py-2 font-bold text-white transition hover:bg-green-700">
                  View Forms
                </button>
              </div>

              <div className="rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                <h3 className="mb-3 text-xl font-bold text-purple-900">
                  📈 Analytics
                </h3>
                <p className="mb-4 text-purple-800">
                  Track submissions and get insights about your forms.
                </p>
                <button className="rounded-lg bg-purple-600 px-6 py-2 font-bold text-white transition hover:bg-purple-700">
                  Analytics
                </button>
              </div>

              <div className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-8">
                <h3 className="mb-3 text-xl font-bold text-orange-900">
                  🔗 Integrations
                </h3>
                <p className="mb-4 text-orange-800">
                  Integrate your forms with other tools and services.
                </p>
                <button className="rounded-lg bg-orange-600 px-6 py-2 font-bold text-white transition hover:bg-orange-700">
                  Integrations
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">0</div>
                <p className="text-gray-600">Forms Created</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-green-600">0</div>
                <p className="text-gray-600">Total Submissions</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">0</div>
                <p className="text-gray-600">Active Forms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
