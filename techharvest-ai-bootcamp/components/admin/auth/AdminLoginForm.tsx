"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

import { loginAdmin } from "@/services/adminAuth.service";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export default function AdminLoginForm() {

  const router = useRouter();

  const { login } =
    useAdminAuth();

  const [loading, setLoading] =
    useState(false);
  const [error, setError] =
    useState("");
  const [showPassword, setShowPassword] =
    useState(false);
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");


  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      const response =
        await loginAdmin(
          email,
          password
        );

      login(
        response.admin,
        response.token
      );

      router.replace(
        "/admin/dashboard"
      );

    } catch (err: any) {

      setError(

        err.response?.data?.message ||

        "Invalid email or password."

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-10">

        <div className="flex justify-center">

          <ShieldCheck
            size={60}
            className="text-green-600"
          />

        </div>

        <h1 className="text-center text-3xl font-bold mt-4">

          TechHarvest

        </h1>

        <p className="text-center text-gray-500 mb-8">

          Admin Portal

        </p>

        {error && (

          <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-red-600 mb-5">

            {error}

          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="font-medium">

              Email Address

            </label>

            <input

              type="email"

              value={email}

              onChange={(e)=>
                setEmail(e.target.value)
              }

              required

              className="w-full border rounded-lg mt-2 px-4 py-3"

            />

          </div>

          <div>

            <label className="font-medium">

              Password

            </label>

            <div className="relative">

              <input

                type={
                  showPassword
                    ? "text"
                    : "password"
                }

                value={password}

                onChange={(e)=>
                  setPassword(e.target.value)
                }

                required

                className="w-full border rounded-lg mt-2 px-4 py-3"

              />

              <button

                type="button"

                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }

                className="absolute right-4 top-6"

              >

                {showPassword

                  ? <EyeOff size={20}/>

                  : <Eye size={20}/>

                }

              </button>

            </div>

          </div>

          <button

            disabled={loading}

            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold"

          >

            {loading

              ? "Signing In..."

              : "Login"}

          </button>

        </form>

      </div>

    </div>

  );

}