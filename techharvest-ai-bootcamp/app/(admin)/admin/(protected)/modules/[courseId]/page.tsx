"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Plus } from "lucide-react";

import { useModuleDashboard } from "@/hooks/useModuleDashboard";
import { useAdminModules } from "@/hooks/useAdminModules";

import CourseHeader from "@/components/admin/modules/CourseHeader";
import ModuleStatistics from "@/components/admin/modules/ModuleStatistics";
import ModulesGrid from "@/components/admin/modules/ModulesGrid";

import CreateModuleModal from "@/components/admin/modules/CreateModuleModal";
import EditModuleModal from "@/components/admin/modules/EditModuleModal";
import DeleteModuleDialog from "@/components/admin/modules/DeleteModuleDialog";

import { Module } from "@/types/module";

export default function ModuleDashboardPage() {

  const params = useParams();

  const courseId = params.courseId as string;

  const {
    dashboard,
    loading: dashboardLoading,
  } = useModuleDashboard(courseId);

  const {
    modules,
    loading,
    createModule,
    updateModule,
    deleteModule,
  } = useAdminModules(courseId);

  const [selectedModule, setSelectedModule] =
    useState<Module | null>(null);

  const [createOpen, setCreateOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  if (dashboardLoading || loading) {

    return (
      <div className="p-10">

        Loading...

      </div>
    );

  }

  if (!dashboard) {

    return (
      <div className="p-10">

        Course not found.

      </div>
    );

  }

  return (

    <div className="space-y-8">

      <CourseHeader
        course={dashboard.course}
      />

      <ModuleStatistics
        statistics={dashboard.statistics}
      />

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold">

            Modules

          </h2>

          <p className="text-slate-500">

            Organize your course curriculum.

          </p>

        </div>

        <button
          onClick={() => setCreateOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >

          <Plus size={20} />

          New Module

        </button>

      </div>

      {/* Grid */}

      <ModulesGrid

        modules={modules}

        onEdit={(module) => {

          setSelectedModule(module);

          setEditOpen(true);

        }}

        onDelete={(module) => {

          setSelectedModule(module);

          setDeleteOpen(true);

        }}

      />

      {/* Create */}

      <CreateModuleModal

        open={createOpen}

        onClose={() => setCreateOpen(false)}

        createModule={createModule}

        courseId={courseId}

      />

      {/* Edit */}

      {selectedModule && (

        <EditModuleModal

          open={editOpen}

          module={selectedModule}

          onClose={() => setEditOpen(false)}

          updateModule={updateModule}

        />

      )}

      {/* Delete */}

      {/* {selectedModule && (

        <DeleteModuleDialog

          open={deleteOpen}

          module={selectedModule}

          onClose={() => setDeleteOpen(false)}

          deleteModule={deleteModule}

        />

      )} */}

      {selectedModule && (

  <DeleteModuleDialog

    open={deleteOpen}

    moduleTitle={selectedModule.title}

    onClose={() => {
      setDeleteOpen(false);
      setSelectedModule(null);
    }}

    onConfirm={async () => {
      await deleteModule(selectedModule._id);

      setDeleteOpen(false);

      setSelectedModule(null);
    }}

  />

)}

    </div>

  );

}