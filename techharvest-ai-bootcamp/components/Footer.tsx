"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <FadeIn>
    <footer className="bg-[#050B18] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <Image
              src="/logo.png"
              alt="TechHarvest Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            />

            <p className="text-gray-400 mt-6 leading-8">
              TechHarvest Creative Lab is committed to equipping students,
              professionals and entrepreneurs with practical Artificial
              Intelligence skills that prepare them for the future.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#">Home</a></li>

              <li><a href="#">Curriculum</a></li>

              <li><a href="#">Pricing</a></li>

              <li><a href="#">Register</a></li>

              <li><a href="#">FAQ</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Mail className="text-green-500"/>

                <span className="text-gray-400">
                  techharvestcreativelab@gmail.com
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-green-500"/>

                <span className="text-gray-400">
                  +234 7067005759
                </span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-green-500"/>

                <span className="text-gray-400">
                  Nigeria
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
                <FaFacebookF size={20} />
              </div>

              <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
                <FaInstagram size={20} />
              </div>

              <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
                <FaYoutube size={20} />
              </div>

              <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
                <FaLinkedinIn size={20} />
              </div>

            </div>

          </div>

        </div>

        <hr className="border-slate-800 my-12"/>

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 TechHarvest Creative Lab. All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-6 md:mt-0">

            <a href="#" className="text-gray-500 hover:text-green-500">
              Privacy Policy
            </a>

            <a href="#" className="text-gray-500 hover:text-green-500">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
    </FadeIn>
  );
}