"use client";

import { useEffect, useState } from "react";

import {
  getStudentProfile,
  updateStudentProfile,
} from "@/lib/api";

export default function ProfilePage() {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    occupation: "",
    experience: "",
  });

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const response =
        await getStudentProfile();

      const user = response.user;

      setForm({

        fullName:
          user.fullName || "",

        email:
          user.email || "",

        phone:
          user.phone || "",

        occupation:
          user.occupation || "",

        experience:
          user.experience || "",

      });

    } finally {

      setLoading(false);

    }

  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
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

    setSaving(true);

    setMessage("");

    try {

      await updateStudentProfile({

        fullName:
          form.fullName,

        phone:
          form.phone,

        occupation:
          form.occupation,

        experience:
          form.experience,

      });

      setMessage(
        "✅ Profile updated successfully."
      );

    } catch {

      setMessage(
        "❌ Failed to update profile."
      );

    } finally {

      setSaving(false);

    }

  };

  if (loading) {

    return (
      <div className="bg-white rounded-2xl p-8 shadow">
        Loading profile...
      </div>
    );

  }
  return (

<div className="max-w-4xl mx-auto">

  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

    {/* Header */}

<div className="bg-gradient-to-r from-green-600 to-emerald-500 px-10 py-10 text-white">

  <div className="flex flex-col md:flex-row items-center gap-8">

    <div className="relative">

      <div className="w-28 h-28 rounded-full bg-white text-green-600 flex items-center justify-center text-5xl font-bold shadow-xl">

        {form.fullName.charAt(0).toUpperCase()}

      </div>

      <button
        type="button"
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 text-xs px-3 py-1 rounded-full shadow hover:bg-gray-100"
      >
        Upload Photo
      </button>

    </div>

    <div className="text-center md:text-left">

      <h1 className="text-3xl font-bold">

        {form.fullName}

      </h1>

      <p className="text-green-100">

        {form.email}

      </p>

      <p className="mt-3 text-sm bg-white/20 inline-block px-3 py-1 rounded-full">

        TechHarvest AI Student

      </p>

    </div>

  </div>

</div>

    {/* Body */}

    <form
      onSubmit={handleSubmit}
      className="p-10 space-y-6"
    >

      <h2 className="text-xl font-semibold text-slate-700">

        Personal Information

      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block mb-2 font-medium">

            Full Name

          </label>

          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Email Address

          </label>

          <input
            value={form.email}
            disabled
            className="w-full border rounded-xl p-3 bg-slate-100 text-gray-500"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Phone Number

          </label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Occupation

          </label>

          <input
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

        </div>

      </div>

      <div>

        <label className="block mb-2 font-medium">

          Experience Level

        </label>

        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
        >

          <option value="">

            Select Experience

          </option>

          <option value="Beginner">

            Beginner

          </option>

          <option value="Intermediate">

            Intermediate

          </option>

          <option value="Advanced">

            Advanced

          </option>

        </select>

      </div>

      <div className="pt-4">

        <button
          type="submit"
          disabled={saving}
          className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-xl font-semibold shadow"
        >

          {saving
            ? "Saving..."
            : "Save Changes"}

        </button>

      </div>

      {message && (

        <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-green-700">

          {
  message && (

    <div className="rounded-xl border border-green-300 bg-green-50 p-4 flex items-center gap-3">

      <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">

        ✓

      </div>

      <p className="text-green-700 font-medium">

        {message}

      </p>

    </div>

  )
}

        </div>

      )}

    </form>

    <div className="mt-8 border rounded-2xl p-6 bg-slate-50">

  <h3 className="font-bold text-lg mb-4">

    Account Information

  </h3>

  <div className="grid md:grid-cols-2 gap-6">

    <div>

      <p className="text-sm text-gray-500">

        Account Status

      </p>

      <p className="font-semibold text-green-600">

        Active

      </p>

    </div>

    <div>

      <p className="text-sm text-gray-500">

        Membership

      </p>

      <p className="font-semibold">

        TechHarvest AI Bootcamp

      </p>

    </div>

  </div>

    </div>

  </div>

</div>

);

}