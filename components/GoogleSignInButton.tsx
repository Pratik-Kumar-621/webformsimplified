"use client";

import { signInWithGoogle } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");

    const result = await signInWithGoogle();

    if (!result.success) {
      setError(result.error || "Failed to sign in with Google");
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="w-full">
      {error && (
        <div className="mb-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
          {error}
        </div>
      )}
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full bg-white hover:bg-gray-50 border border-gray-300 disabled:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#EA4335"
            d="M23.745 12.27c0-.79-.1-1.54-.25-2.05H12v3.72h6.84c-.29 1.48-1.14 2.73-2.4 3.58v3h3.85c2.27-2.09 3.57-5.17 3.57-8.25z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.85-3c-1.08.72-2.45 1.13-4.08 1.13-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.1C3.99 21.3 7.7 24 12 24z"
          />
          <path
            fill="#4285F4"
            d="M5.27 14.26c-.4-1.17-.63-2.41-.63-3.76s.23-2.59.63-3.76V3.4H1.07A11.97 11.97 0 0 0 0 12c0 1.92.44 3.75 1.07 5.36l4.2-3.1z"
          />
          <path
            fill="#FBBC05"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.92 2.38 15.24 1 12 1 7.7 1 3.99 3.7 2.92 7.38l4.2 3.1c.9-2.85 3.55-4.9 6.88-4.9z"
          />
        </svg>
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
}
