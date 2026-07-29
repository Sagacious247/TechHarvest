"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Eye, EyeOff, Lock, LogIn } from "lucide-react";

import FadeIn from "../FadeIn";

import { loginStudent } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { LoginResponse } from "@/types/auth";

export default function LoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    setSuccess(false);

    try {

      const result: LoginResponse =
        await loginStudent(
          email,
          password
        );

      if (!result.student) {
        throw new Error(
          "Student account not found."
        );
      }

      login(
        result.student,
        result.token
      );

      setSuccess(true);

      setMessage(result.message);

      setTimeout(() => {
        router.push("/dashboard");
      }, 800);

    } catch (error) {

      if (axios.isAxiosError(error)) {

        setMessage(
          error.response?.data?.message ??
          "Login failed."
        );

      } else if (
        error instanceof Error
      ) {

        setMessage(error.message);

      } else {

        setMessage(
          "Something went wrong."
        );

      }

    } finally {

      setLoading(false);

    }

  };

  return (

    <FadeIn>

      <section className="min-h-screen bg-gradient-to-br from-[#08142D] via-[#10203F] to-[#08142D] flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <h1 className="text-4xl font-black text-slate-900">
              Welcome Back
            </h1>

            <p className="text-slate-600 mt-3">
              Login to continue your AI journey.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 mt-10"
          >

            <div>

              <label className="font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />

            </div>

            <div>

              <label className="font-semibold text-slate-700">
                Password
              </label>

              <div className="relative mt-2">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl p-4 pr-12 outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="********"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-4 text-gray-500"
                >

                  {showPassword
                    ? <EyeOff size={20}/>
                    : <Eye size={20}/>}

                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold rounded-xl py-4 flex justify-center items-center gap-3 transition"
            >

              <LogIn size={20}/>

              {loading
                ? "Signing In..."
                : "Login"}

            </button>

            {message && (

              <p
                className={`text-center font-semibold ${
                  success
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>

            )}

          </form>

          <div className="flex justify-center items-center gap-2 mt-8">

            <Lock
              className="text-green-500"
              size={18}
            />

            <span className="text-gray-500 text-sm">
              Secure Login Powered by TechHarvest
            </span>

          </div>

        </div>

      </section>

    </FadeIn>

  );
}
