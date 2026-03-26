"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../Contexts/AuthContext";

export default function Navbar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function handleLogin() {
    try {
      await gitHubSignIn();
      router.push("/week-10/shopping-list"); // 
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
      router.push("/week-10"); 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-800 text-white">
      {/* Left side */}
      <Link href="/week-10" className="font-bold text-lg">
        Dashboard
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm opacity-80">
              {user.displayName || user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}