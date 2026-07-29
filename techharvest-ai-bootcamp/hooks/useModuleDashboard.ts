// "use client";

// import { useEffect, useState } from "react";

// import {
//   getModuleDashboard,
// } from "@/services/adminModuleDashboard.service";

// export function useModuleDashboard(
//   courseId: string
// ) {

//   const [dashboard, setDashboard] =
//     useState<any>(null);

//   const [loading, setLoading] =
//     useState(true);

//   const loadDashboard = async () => {

//     try {

//       const data =
//         await getModuleDashboard(
//           courseId
//         );

//       setDashboard(data);

//     } finally {

//       setLoading(false);

//     }

//   };

//   useEffect(() => {

//     if (!courseId) return;

//     loadDashboard();

//   }, [courseId]);

//   return {

//     dashboard,

//     loading,

//     refresh: loadDashboard,

//   };

// }

"use client";

import { useEffect, useState } from "react";

import { getModuleDashboard } from "@/services/adminModuleDashboard.service";
// import { getModules } from "@/services/adminModuleApi.service";

import { Module } from "@/types/module";
import { getModules } from "@/services/adminModuleApi";

export function useModuleDashboard(courseId: string) {

  const [dashboard, setDashboard] = useState<any>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  async function loadDashboard() {

    try {

      setLoading(true);

      setError("");

   const [dashboardData, modulesData] =
await Promise.all([
    getModuleDashboard(courseId),
    getModules(courseId),
]);

setDashboard(dashboardData);

setModules(modulesData);

      setDashboard(dashboardData);

setModules(modulesData);

    } catch (err: any) {

      setError(

        err?.response?.data?.message ||

        err.message ||

        "Failed to load module dashboard."

      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    if (courseId) {

      loadDashboard();

    }

  }, [courseId]);

  return {

    dashboard,

    modules,

    loading,

    error,

    refresh: loadDashboard,

  };

}