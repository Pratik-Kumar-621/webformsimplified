"use client";
import React, { useState } from "react";
import { navActionItems } from "./navLinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { Skeleton } from "@/components/ui/skeleton";

const NavActionItems = () => {
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
  return (
    <div className="relative flex items-center gap-3">
      {loading ? (
        <>
          {[...Array(2)].map((_, id: number) => (
            <Skeleton key={id} className="h-8 w-24" />
          ))}
        </>
      ) : (
        <>
          {navActionItems
            .filter((item) => !!user === item.user)
            .map((item) => (
              <>
                {item.name === "Logout" ? (
                  <Button
                    key={item.name}
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    variant="ghost"
                    color="error"
                    className="h-8 cursor-pointer rounded-md px-3 text-[14px] font-bold text-red-600 shadow-none transition-all duration-300 ease-in-out outline-none hover:bg-red-100"
                  >
                    <LogOut /> {isLoggingOut ? "Logging out..." : "Logout"}
                  </Button>
                ) : (
                  <Link key={item.name} href={item.to}>
                    <Button
                      variant="default"
                      className={`${item.name === "Sign Up" ? "bg-(--button) hover:bg-(--button-hover)" : "bg-(--foreground) hover:bg-slate-700 dark:text-(--background) dark:hover:bg-slate-200"} h-9 w-24 cursor-pointer rounded-md px-5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )}
              </>
            ))}
        </>
      )}
    </div>
  );
};

export default NavActionItems;
