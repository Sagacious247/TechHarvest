"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RegistrationSuccess from "./RegistrationSuccess";
import axios from "axios";

import {
  Lock,
  ShieldCheck,
  Send,
} from "lucide-react";

import FadeIn from "../FadeIn";

import { registerStudent } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterForm() {

  const router = useRouter();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      occupation: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const [registered, setRegistered] =
    useState(false);

  const [registeredName, setRegisteredName] =
    useState("");

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

    setSuccess(false);

    try {

      const result =
        await registerStudent(formData);

      setSuccess(true);

      setRegistered(true);

      setRegisteredName(
        result.student.fullName
      );

      login(
        result.student,
        result.token
      );

      setFormData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        occupation: "",
      });

      // setTimeout(() => {

      //   router.push("/dashboard");

      // }, 2500);

    } catch (error) {

      if (axios.isAxiosError(error)) {

        setMessage(

          error.response?.data?.message ??

          "Registration failed."

        );

      } else {

        setMessage(
          "Something went wrong."
        );

      }

      setSuccess(false);

    } finally {

      setLoading(false);

    }

  };

  /**
   * Success Screen
   */

  // if (registered) {

  //   return (

  //     <FadeIn>

  //       <section className="min-h-screen bg-gradient-to-br from-[#08142D] via-[#10203F] to-[#08142D] flex items-center justify-center px-6">

  //         <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-12 text-center">

  //           <div className="w-24 h-24 rounded-full bg-green-100 mx-auto flex items-center justify-center">

  //             <span className="text-5xl">

  //               🎉

  //             </span>

  //           </div>

  //           <h2 className="text-4xl font-black text-slate-900 mt-8">

  //             Registration Successful!

  //           </h2>

  //           <p className="text-xl mt-6">

  //             Welcome

  //             <span className="text-green-600 font-bold">

  //               {" "}
  //               {registeredName}

  //             </span>

  //             !

  //           </p>

  //           <p className="text-slate-500 mt-4 leading-7">

  //             Your TechHarvest AI Bootcamp account
  //             has been created successfully.

  //           </p>

  //           <div className="mt-10">

  //             <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">

  //               <div className="h-2 bg-green-500 animate-pulse w-full"></div>

  //             </div>

  //             <p className="text-green-600 font-semibold mt-5">

  //               Preparing your dashboard...

  //             </p>

  //           </div>

  //         </div>

  //       </section>

  //     </FadeIn>

  //   );

  // }

  if (registered) {

  return (

    <RegistrationSuccess
      fullName={registeredName}
    />

  );

}

  return (

    <FadeIn>

      <section
        className="bg-gradient-to-br from-[#08142D] via-[#10203F] to-[#08142D] py-28"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-green-400 font-bold">

              REGISTER TODAY

            </span>

            <h2 className="text-5xl font-black text-white mt-4">

              Secure Your Seat

            </h2>

            <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">

              Join hundreds of future-ready students,
              professionals and entrepreneurs learning
              Artificial Intelligence with TechHarvest.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-[#10203F] rounded-3xl p-10 border border-slate-700">

              <h3 className="text-white text-3xl font-bold">

                Why Register Today?

              </h3>

              <ul className="mt-8 space-y-5">

                {[
                  "Live Zoom classes with practical demonstrations.",
                  "Lifetime access to recordings.",
                  "Prompt Engineering Playbook included.",
                  "Certificate of Completion.",
                  "Exclusive TechHarvest Community."
                ].map((item) => (

                  <li
                    key={item}
                    className="flex gap-3"
                  >

                    <ShieldCheck className="text-green-500 mt-1" />

                    <span className="text-gray-300">

                      {item}

                    </span>

                  </li>

                ))}

              </ul>

            </div>

            <div className="bg-white rounded-3xl p-10">

              <h3 className="text-3xl font-bold text-slate-900">

                Registration Form

              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4"
                  required
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4"
                  required
                />

                <input
                  name="phone"
                  placeholder="WhatsApp Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4"
                  required
                />

                <input
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 transition text-white font-bold py-5 rounded-xl flex justify-center items-center gap-3"
                >

                  <Send size={20} />

                  {loading

                    ? "Creating Account..."

                    : "Continue Registration"}

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