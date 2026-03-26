"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../Contexts/AuthContext";

export default function Week10Page() {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list"); 
    }
  }, [user, router]);

  async function handleLogin() {
    try {
      setErrorMessage("");
      setLoading(true);
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
      setErrorMessage("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Week 10 Shopping List</h1>

      <p className="mb-6 text-center">
        Please log in or sign up with GitHub to continue.
      </p>

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Login / Sign Up with GitHub"}
      </button>

      {errorMessage && (
        <p className="text-red-400 mt-4">{errorMessage}</p>
      )}
    </main>
  );
}