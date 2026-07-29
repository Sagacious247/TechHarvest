"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { registerAdmin } from "@/services/adminAuth.service";

export default function AdminRegisterForm() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [form, setForm] =
    useState({

      fullName: "",

      email: "",

      password: "",

    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      await registerAdmin(

        form.fullName,

        form.email,

        form.password

      );

      setMessage(

        "Administrator created successfully."

      );

      setTimeout(() => {

        router.push("/admin/login");

      }, 2000);

    } catch (err: any) {

      setError(

        err.response?.data?.message ||

        "Registration failed."

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg">

        <h1 className="text-center text-3xl font-bold">

          Create Administrator

        </h1>

        <p className="text-center text-gray-500 mb-8">

          TechHarvest CMS

        </p>

        {message && (

          <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-green-700 mb-5">

            {message}

          </div>

        )}

        {error && (

          <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-red-600 mb-5">

            {error}

          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input

            name="fullName"

            placeholder="Full Name"

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

          />

          <input

            name="email"

            type="email"

            placeholder="Email"

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

          />

          <input

            name="password"

            type="password"

            placeholder="Password"

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

          />

          <button

            disabled={loading}

            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3"

          >

            {loading

              ? "Creating..."

              : "Register"}

          </button>

        </form>

      </div>

    </div>

  );

}