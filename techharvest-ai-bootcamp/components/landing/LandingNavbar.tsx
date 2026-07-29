// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   LayoutDashboard,
//   ChevronRight,
// } from "lucide-react";

// import { useAuth } from "@/hooks/useAuth";

// export default function Navbar() {

//   const { user, isAuthenticated } = useAuth();

//   return (

//     <header className="fixed inset-x-0 top-0 z-50">

//       <nav className="mx-auto mt-4 flex h-20 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08142D]/70 px-8 backdrop-blur-xl shadow-2xl">

//         {/* Logo */}

//         <Link href="/" className="flex items-center">

//           <Image
//             src="/logo.png"
//             alt="TechHarvest Logo"
//             width={180}
//             height={60}
//             className="h-14 w-auto object-contain"
//             priority
//           />

//         </Link>

//         {/* Desktop Menu */}

//         <div className="hidden lg:flex items-center gap-10">

//           {[
//             "Home",
//             "Courses",
//             "Bootcamp",
//             "Success Stories",
//             "Pricing",
//             "FAQs",
//           ].map((item) => (

//             <a
//               key={item}
//               href="#"
//               className="relative text-white font-medium transition hover:text-green-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
//             >
//               {item}
//             </a>

//           ))}

//         </div>

//         {/* Right Side */}

//         <div className="flex items-center gap-5">

//           {isAuthenticated ? (

//             <>

//               {/* Avatar */}

//               <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">

//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 font-bold text-white shadow-lg">

//                   {user?.fullName
//                     ?.split(" ")
//                     .map((name) => name.charAt(0))
//                     .join("")
//                     .slice(0, 2)
//                     .toUpperCase()}

//                 </div>

//                 <div className="hidden md:block">

//                   <p className="text-sm text-gray-400">

//                     Welcome back

//                   </p>

//                   <p className="font-semibold text-white">

//                     {user?.fullName?.split(" ")[0]}

//                   </p>

//                 </div>

//               </div>

//               <Link
//                 href="/dashboard"
//                 className="group flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 shadow-lg"
//               >

//                 <LayoutDashboard size={18} />

//                 My Learning

//               </Link>

//             </>

//           ) : (

//             <>

//               <Link
//                 href="/login"
//                 className="font-semibold text-white transition hover:text-green-400"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="group flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600"
//               >

//                 Enroll Now

//                 <ChevronRight
//                   size={18}
//                   className="transition group-hover:translate-x-1"
//                 />

//               </Link>

//             </>

//           )}

//         </div>

//       </nav>

//     </header>

//   );

// }



"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronRight,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Bootcamp", href: "#bootcamp" },
  { label: "Success Stories", href: "#success" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function LandingNavbar() {

  const { user, isAuthenticated } = useAuth();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (

    <header className="fixed inset-x-0 top-0 z-50 px-4">

      <nav className="mx-auto mt-4 flex h-20 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08142D]/70 px-6 backdrop-blur-xl shadow-2xl">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center"
        >

          <Image
            src="/logo.png"
            alt="TechHarvest"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />

        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="relative font-medium text-white transition hover:text-green-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
            >

              {item.label}

            </a>

          ))}

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {isAuthenticated ? (

            <>

              <div className="hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 font-bold text-white">

                  {user?.fullName
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0,2)
                    .toUpperCase()}

                </div>

                <div>

                  <p className="text-xs text-gray-400">

                    Welcome back

                  </p>

                  <p className="font-semibold text-white">

                    {user?.fullName?.split(" ")[0]}

                  </p>

                </div>

              </div>

              <Link
                href="/dashboard"
                className="hidden sm:flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
              >

                <LayoutDashboard size={18} />

                My Learning

              </Link>

            </>

          ) : (

            <>

              <Link
                href="/login"
                className="hidden sm:block font-semibold text-white hover:text-green-400"
              >

                Login

              </Link>

              <Link
                href="/register"
                className="hidden sm:flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
              >

                Enroll Now

                <ChevronRight size={18}/>

              </Link>

            </>

          )}

          {/* Mobile Menu */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="rounded-lg p-2 text-white lg:hidden"
          >

            {mobileOpen
              ? <X size={28}/>
              : <Menu size={28}/>}

          </button>

        </div>

      </nav>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100 mt-3"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-auto max-w-7xl rounded-2xl bg-[#08142D] p-6 shadow-2xl">

          <div className="flex flex-col gap-5">

            {navItems.map((item) => (

              <a
                key={item.label}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="font-medium text-white hover:text-green-400"
              >

                {item.label}

              </a>

            ))}

            <hr className="border-slate-700"/>

            {!isAuthenticated ? (

              <>

                <Link
                  href="/login"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="text-white"
                >

                  Login

                </Link>

                <Link
                  href="/register"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="rounded-xl bg-green-500 py-3 text-center font-semibold text-white"
                >

                  Enroll Now

                </Link>

              </>

            ) : (

              <Link
                href="/dashboard"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="rounded-xl bg-green-500 py-3 text-center font-semibold text-white"
              >

                Go to Dashboard

              </Link>

            )}

          </div>

        </div>

      </div>

    </header>

  );

}