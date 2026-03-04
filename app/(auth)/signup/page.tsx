"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import ProtectedRoute from "@/components/ProtectedRoute";
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (
    email: string,
    password: string,
    displayName: string = "",
  ) => {
    setIsLoading(true);
    setError("");

    const result = await signUp(email, password, displayName);

    if (!result.success) {
      setError(result.error || "Failed to sign up");
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <ProtectedRoute requireAuth={false}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            WebFormSimplified
          </h1>
          <p className="text-gray-600">Create stunning forms in minutes</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <AuthForm
            title="Create Your Account"
            buttonText="Sign Up"
            onSubmit={handleSignup}
            isLoading={isLoading}
            error={error}
            showDisplayName={true}
          />

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-3 text-gray-500 text-sm">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <GoogleSignInButton />

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
