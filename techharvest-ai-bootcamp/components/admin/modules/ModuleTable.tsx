"use client";

import { Module } from "@/types/module";
import Link from "next/link";
import ModuleActions from "./ModuleActions";

interface ModuleTableProps {

  modules: Module[];

  onEdit: (module: Module) => void;

  onDelete: (module: Module) => void;

}

export default function ModuleTable({

  modules,

  onEdit,

  onDelete,

}: ModuleTableProps) {

  return (

    <div className="overflow-hidden rounded-xl border bg-white">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-5 py-3 text-left">
              Order
            </th>

            <th className="px-5 py-3 text-left">
              Title
            </th>

            <th className="px-5 py-3 text-left">
              Description
            </th>

            <th className="px-5 py-3 text-left">
              Status
            </th>

            <th className="px-5 py-3 text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {modules.map((module) => (

            <tr
              key={module._id}
              className="border-t"
            >

              <td className="px-5 py-4">

                {module.order}

              </td>

              <td className="px-5 py-4 font-medium">

                {module.title}

              </td>

              <td className="px-5 py-4">

                {module.description}

              </td>

              <td className="px-5 py-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs

                  ${
                    module.isPublished

                      ? "bg-green-100 text-green-700"

                      : "bg-yellow-100 text-yellow-700"

                  }`}
                >

                  {module.isPublished

                    ? "Published"

                    : "Draft"}

                </span>

              </td>

              <td className="px-5 py-4">

                {/* <div className="flex justify-end">

                  <ModuleActions

                    module={module}

                    onEdit={() => onEdit(module)}

                    onDelete={() => onDelete(module)}

                  />

                </div> */}
                <div className="flex items-center justify-end gap-3">

  <Link
    href={`/admin/modules/${module.course}/${module._id}/lessons`}
    className="text-green-600 hover:text-green-700 font-medium"
  >
    Lessons
  </Link>

  <ModuleActions
    module={module}
    onEdit={() => onEdit(module)}
    onDelete={() => onDelete(module)}
  />

</div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}