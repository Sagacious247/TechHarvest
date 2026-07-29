// "use client";

// import Image from "next/image";
// import { Mail, Phone, MapPin } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import FadeIn from "./../FadeIn";

// export default function Footer() {
//   return (
//     <FadeIn>
//     <footer className="bg-[#050B18] text-white">

//       <div className="max-w-7xl mx-auto px-6 py-20">

//         <div className="grid lg:grid-cols-4 gap-12">

//           {/* Company */}

//           <div>

//             <Image
//               src="/logo.png"
//               alt="TechHarvest Logo"
//               width={180}
//               height={60}
//               className="h-16 w-auto"
//             />

//             <p className="text-gray-400 mt-6 leading-8">
//               TechHarvest Creative Lab is committed to equipping students,
//               professionals and entrepreneurs with practical Artificial
//               Intelligence skills that prepare them for the future.
//             </p>

//           </div>

//           {/* Quick Links */}

//           <div>

//             <h3 className="text-2xl font-bold mb-6">
//               Quick Links
//             </h3>

//             <ul className="space-y-4 text-gray-400">

//               <li><a href="#">Home</a></li>

//               <li><a href="#">Curriculum</a></li>

//               <li><a href="#">Pricing</a></li>

//               <li><a href="#">Register</a></li>

//               <li><a href="#">FAQ</a></li>

//             </ul>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="text-2xl font-bold mb-6">
//               Contact
//             </h3>

//             <div className="space-y-5">

//               <div className="flex gap-3">

//                 <Mail className="text-green-500"/>

//                 <span className="text-gray-400">
//                   techharvestcreativelab@gmail.com
//                 </span>

//               </div>

//               <div className="flex gap-3">

//                 <Phone className="text-green-500"/>

//                 <span className="text-gray-400">
//                   +234 7067005759
//                 </span>

//               </div>

//               <div className="flex gap-3">

//                 <MapPin className="text-green-500"/>

//                 <span className="text-gray-400">
//                   Nigeria
//                 </span>

//               </div>

//             </div>

//           </div>

//           {/* Social */}

//           <div>

//             <h3 className="text-2xl font-bold mb-6">
//               Connect With Us
//             </h3>

//             <div className="flex gap-4">

//               <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
//                 <FaFacebookF size={20} />
//               </div>

//               <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
//                 <FaInstagram size={20} />
//               </div>

//               <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
//                 <FaYoutube size={20} />
//               </div>

//               <div className="bg-[#10203F] p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
//                 <FaLinkedinIn size={20} />
//               </div>

//             </div>

//           </div>

//         </div>

//         <hr className="border-slate-800 my-12"/>

//         <div className="flex flex-col md:flex-row justify-between items-center">

//           <p className="text-gray-500">
//             © 2026 TechHarvest Creative Lab. All Rights Reserved.
//           </p>

//           <div className="flex gap-8 mt-6 md:mt-0">

//             <a href="#" className="text-gray-500 hover:text-green-500">
//               Privacy Policy
//             </a>

//             <a href="#" className="text-gray-500 hover:text-green-500">
//               Terms of Service
//             </a>

//           </div>

//         </div>

//       </div>

//     </footer>
//     </FadeIn>
//   );
// }


"use client";

import Link from "next/link";

import {
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

import FadeIn from "../FadeIn";
import footer from "@/data/footer";

export default function Footer() {
  return (
    <FadeIn>
      <footer className="border-t border-slate-800 bg-slate-950">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-16 lg:grid-cols-5">

            {/* Brand */}

            <div className="lg:col-span-2">

              <h2 className="text-3xl font-black text-white">

                {footer.brand.name}

              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-400">

                {footer.brand.description}

              </p>

              <div className="mt-8 flex gap-4">

                {footer.socials.map((social, index) => {

                  const Icon = social.icon;

                  return (

                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-green-500 hover:bg-green-500 hover:text-white"
                    >
                      <Icon size={20} />
                    </Link>

                  );

                })}

              </div>

            </div>

            {/* Courses */}

            <div>

              <h3 className="text-lg font-bold text-white">

                Courses

              </h3>

              <div className="mt-6 space-y-4">

                {footer.courses.map((item) => (

                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-slate-400 transition hover:text-green-400"
                  >
                    {item.title}
                  </Link>

                ))}

              </div>

            </div>

            {/* Company */}

            <div>

              <h3 className="text-lg font-bold text-white">

                Company

              </h3>

              <div className="mt-6 space-y-4">

                {footer.company.map((item) => (

                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-slate-400 transition hover:text-green-400"
                  >
                    {item.title}
                  </Link>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-lg font-bold text-white">

                Contact

              </h3>

              <div className="mt-6 space-y-5">

                <div className="flex items-center gap-3 text-slate-400">

                  <Mail
                    className="text-green-400"
                    size={18}
                  />

                  <span>

                    {footer.contact.email}

                  </span>

                </div>

                <div className="flex items-center gap-3 text-slate-400">

                  <Globe
                    className="text-green-400"
                    size={18}
                  />

                  <span>

                    {footer.contact.website}

                  </span>

                </div>

                <div className="flex items-center gap-3 text-slate-400">

                  <MapPin
                    className="text-green-400"
                    size={18}
                  />

                  <span>

                    {footer.contact.location}

                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="my-12 border-t border-slate-800" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-slate-500">

              {footer.brand.copyright}

            </p>

            <p className="text-sm text-slate-500">

              Built with ❤️ by TechHarvest Creative Lab

            </p>

          </div>

        </div>

      </footer>

    </FadeIn>
  );
}