"use client";

import { Bell } from "lucide-react";

export default function AdminNavbar() {

    return (

        <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

            <div>

                <h2 className="text-3xl font-bold">

                    Welcome Director 👋

                </h2>

                <p className="text-gray-500">

                    Manage your TechHarvest platform.

                </p>

            </div>

            <div className="flex items-center gap-6">

                <Bell className="text-gray-600" />

                <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">

                    A

                </div>

            </div>

        </header>

    );

}