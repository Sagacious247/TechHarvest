"use client";

import { Lock, ShieldCheck, Send } from "lucide-react";
import FadeIn from "./FadeIn";
import { useState } from "react";
import { registerStudent } from "@/lib/api";

export default function Register() {
  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  occupation: "",
});
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setLoading(true);

  setMessage("");

  try {
    const result = await registerStudent(formData);

    setMessage(result.message);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      occupation: "",
    });

  } catch {

    setMessage("Something went wrong.");

  } finally {

    setLoading(false);

  }
};

  return (
    <FadeIn>
     <section
       id="register"
        className="bg-gradient-to-br from-[#08142D] via-[#10203F] to-[#08142D] py-28">


      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-green-400 font-bold">
            REGISTER TODAY
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Secure Your Seat
          </h2>

          <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
            Join hundreds of future-ready students, professionals and entrepreneurs
            learning Artificial Intelligence with TechHarvest.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="bg-[#10203F] rounded-3xl p-10 border border-slate-700">

            <h3 className="text-white text-3xl font-bold">
              Why Register Today?
            </h3>

            <ul className="mt-8 space-y-5">

              <li className="flex gap-3">
                <ShieldCheck className="text-green-500 mt-1" />
                <span className="text-gray-300">
                  Live Zoom classes with practical demonstrations.
                </span>
              </li>

              <li className="flex gap-3">
                <ShieldCheck className="text-green-500 mt-1" />
                <span className="text-gray-300">
                  Lifetime access to recordings.
                </span>
              </li>

              <li className="flex gap-3">
                <ShieldCheck className="text-green-500 mt-1" />
                <span className="text-gray-300">
                  Prompt Engineering Playbook included.
                </span>
              </li>

              <li className="flex gap-3">
                <ShieldCheck className="text-green-500 mt-1" />
                <span className="text-gray-300">
                  Certificate of Completion.
                </span>
              </li>

              <li className="flex gap-3">
                <ShieldCheck className="text-green-500 mt-1" />
                <span className="text-gray-300">
                  Exclusive TechHarvest Community.
                </span>
              </li>

            </ul>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-slate-900">
              Registration Form
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Address"
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="WhatsApp Number"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                required
                onChange={handleChange}
                placeholder="Occupation"
                className="w-full p-4 rounded-xl border"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 transition text-white font-bold py-5 rounded-xl flex justify-center items-center gap-3"
              >

                <Send size={20} />

                {loading ? "Please wait..." : "Continue Registration"}

              </button>
              {
                message && (
                  <p className="text-center text-green-600 font-semibold mt-4">
                    {message}
                  </p>
                )
              }
            </form>

            <div className="flex items-center justify-center gap-2 mt-6">

              <Lock
                className="text-green-500"
                size={18}
              />

              <p className="text-gray-500 text-sm">
                Your information is secure and will never be shared.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  </FadeIn>
  );
}