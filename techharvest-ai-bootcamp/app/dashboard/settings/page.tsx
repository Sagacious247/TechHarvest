"use client";

import { useEffect, useState } from "react";

import {
  getStudentProfile,
  changePassword,
} from "@/lib/api";

import { User } from "@/types/auth";

export default function SettingsPage() {

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [form, setForm] = useState({

    currentPassword: "",

    newPassword: "",

    confirmPassword: "",

  });

  /**
   * Load student profile
   */
  useEffect(() => {

    const loadProfile = async () => {

      try {

        const response =
          await getStudentProfile();

        setUser(response.user);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    };

    loadProfile();

  }, []);

  /**
   * Handle input
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,

    });

  };

  /**
   * Update password
   */
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setSaving(true);

    setMessage("");

    setError("");

    if (
      form.newPassword !==
      form.confirmPassword
    ) {

      setError(
        "Passwords do not match."
      );

      setSaving(false);

      return;

    }

    try {

      await changePassword({

        currentPassword:
          form.currentPassword,

        newPassword:
          form.newPassword,

        confirmPassword:
          form.confirmPassword,

      });

      setMessage(
        "Password updated successfully."
      );

      setForm({

        currentPassword: "",

        newPassword: "",

        confirmPassword: "",

      });

    } catch (err: any) {

      setError(

        err.response?.data?.message ??

        "Unable to update password."

      );

    } finally {

      setSaving(false);

    }

  };

  if (loading) {

    return (

      <div className="p-10">

        Loading...

      </div>

    );

  }

  return (

    <div className="max-w-4xl mx-auto space-y-8">

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold">

          Account Settings

        </h1>

        <p className="text-gray-500 mt-2">

          Update your password and
          manage your account.

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div>

            <label className="font-medium">

              Current Password

            </label>

            <input

              type="password"

              name="currentPassword"

              value={form.currentPassword}

              onChange={handleChange}

              className="w-full mt-2 border rounded-xl p-3"

              required

            />

          </div>

          <div>

            <label className="font-medium">

              New Password

            </label>

            <input

              type="password"

              name="newPassword"

              value={form.newPassword}

              onChange={handleChange}

              className="w-full mt-2 border rounded-xl p-3"

              required

            />

          </div>

          <div>

            <label className="font-medium">

              Confirm Password

            </label>

            <input

              type="password"

              name="confirmPassword"

              value={form.confirmPassword}

              onChange={handleChange}

              className="w-full mt-2 border rounded-xl p-3"

              required

            />

          </div>

          <button

            type="submit"

            disabled={saving}

            className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-xl shadow hover:shadow-lg disabled:opacity-60"

          >

            {

              saving

                ? "Updating Password..."

                : "Update Password"

            }

          </button>

        </form>

        {message && (

          <div className="mt-6 rounded-2xl border border-green-300 bg-green-50 p-5 flex gap-4">

            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">

              ✓

            </div>

            <div>

              <h3 className="font-semibold text-green-700">

                Success

              </h3>

              <p className="text-green-600">

                {message}

              </p>

            </div>

          </div>

        )}

        {error && (

          <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-5 flex gap-4">

            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">

              !

            </div>

            <div>

              <h3 className="font-semibold text-red-700">

                Error

              </h3>

              <p className="text-red-600">

                {error}

              </p>

            </div>

          </div>

        )}

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold">

          Account Security

        </h2>

        <p className="text-gray-500 mt-2">

          Information about your account.

        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">

              Email

            </p>

            <p className="font-semibold mt-2">

              {user?.email}

            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">

              Account Status

            </p>

            <p className="font-semibold text-green-600 mt-2">

              🟢 {user?.status ?? "Active"}

            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">

              Occupation

            </p>

            <p className="font-semibold mt-2">

              {user?.occupation || "Not provided"}

            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">

              Last Login

            </p>

            <p className="font-semibold mt-2">

              {user?.lastLogin
                ? new Date(
                    user.lastLogin
                  ).toLocaleString()
                : "Unavailable"}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}