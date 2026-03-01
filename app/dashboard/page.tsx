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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="bg-white shadow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              WebFormSimplified
            </h1>
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
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Your Dashboard
            </h2>

            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              {user?.displayName && (
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span>{" "}
                  {user?.displayName}
                </p>
              )}
            </div>

            <p className="text-lg text-gray-600 mb-8">
              You're all set! Start creating your first form and simplify your
              form management process.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  📝 Create Form
                </h3>
                <p className="text-blue-800 mb-4">
                  Start creating a new form with our intuitive form builder.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
                  New Form
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  📊 View Forms
                </h3>
                <p className="text-green-800 mb-4">
                  Manage and organize all your forms in one place.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition">
                  View Forms
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  📈 Analytics
                </h3>
                <p className="text-purple-800 mb-4">
                  Track submissions and get insights about your forms.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition">
                  Analytics
                </button>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-3">
                  🔗 Integrations
                </h3>
                <p className="text-orange-800 mb-4">
                  Integrate your forms with other tools and services.
                </p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition">
                  Integrations
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
                <p className="text-gray-600">Forms Created</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">0</div>
                <p className="text-gray-600">Total Submissions</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <p className="text-gray-600">Active Forms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
