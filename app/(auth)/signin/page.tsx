"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import ProtectedRoute from "@/components/ProtectedRoute";
import { signIn } from "@/lib/auth";

export default function SigninPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignin = async (email: string, password: string) => {
    setIsLoading(true);
    setError("");

    const result = await signIn(email, password);

    if (!result.success) {
      setError(result.error || "Failed to sign in");
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
          <p className="text-gray-600">Welcome back to your forms</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <AuthForm
            title="Sign In"
            buttonText="Sign In"
            onSubmit={handleSignin}
            isLoading={isLoading}
            error={error}
            showDisplayName={false}
          />

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-3 text-gray-500 text-sm">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <GoogleSignInButton />

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
