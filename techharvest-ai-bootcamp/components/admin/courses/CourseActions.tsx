"use client";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  BookOpen,
  Star,
  UploadCloud,
} from "lucide-react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Course } from "@/types/course";

interface Props {

    course: Course;

    currentAdminId: string;

    currentRole: string;

    onView: () => void;

    onEdit: () => void;

    onDelete: () => void;

    onPublish?: () => void;

    onFeature?: () => void;

    onModules?: () => void;

}

export default function CourseActions({
  course,
  currentAdminId,
  currentRole,
  onView,
  onEdit,
  onDelete,
  onPublish,
  onFeature,
  onModules,
}: Props) {

   const ownerId =
    typeof course.createdBy === "string"
      ? course.createdBy
      : course.createdBy?._id;

  const canManage =
    currentRole === "super_admin" ||
    ownerId === currentAdminId;


    console.log("Current Admin:", currentAdminId);
console.log("Current Role:", currentRole);
console.log("Course:", course);
console.log("Created By:", course.createdBy);

  return (

    <DropdownMenu.Root>

      <DropdownMenu.Trigger asChild>

        <button className="p-2 rounded hover:bg-gray-100">

          <MoreHorizontal size={18} />

        </button>

      </DropdownMenu.Trigger>

      <DropdownMenu.Content

        className="bg-white rounded-lg shadow-xl border w-60 p-2"

        sideOffset={6}

      >

        <DropdownMenu.Item

          onClick={onView}

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        >

          <Eye size={16} />

          View Course

        </DropdownMenu.Item>

        <DropdownMenu.Item
           disabled={!canManage}
  onClick={canManage ? onEdit : undefined}
  className={`flex items-center gap-3 p-2 rounded ${
    canManage
      ? "hover:bg-gray-100 cursor-pointer"
      : "opacity-50 cursor-not-allowed"
  }`}
  title={
    !canManage
      ? "Only the course owner or Super Admin can perform this action."
      : ""
    }
    // className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"
        >

          <Pencil size={16} />

          Edit Course

        </DropdownMenu.Item>

        <DropdownMenu.Item

          onClick={onModules}

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        >

          <BookOpen size={16} />

          Manage Modules

        </DropdownMenu.Item>

        {/* <DropdownMenu.Item
          onClick={onPublish}
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"
        > */}
        <DropdownMenu.Item
  disabled={!canManage}
  onClick={canManage ? onPublish : undefined}
  className={`flex items-center gap-3 p-2 rounded ${
    canManage
      ? "hover:bg-gray-100 cursor-pointer"
      : "opacity-50 cursor-not-allowed"
  }`}
  title={
    !canManage
      ? "Only the course owner or Super Admin can perform this action."
      : ""
  }
>

          <UploadCloud size={16} />

          Publish Course

        </DropdownMenu.Item>

        {/* <DropdownMenu.Item

          onClick={onFeature}

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        > */}

        <DropdownMenu.Item
  disabled={!canManage}
  onClick={canManage ? onFeature : undefined}
  className={`flex items-center gap-3 p-2 rounded ${
    canManage
      ? "hover:bg-gray-100 cursor-pointer"
      : "opacity-50 cursor-not-allowed"
  }`}
  title={
    !canManage
      ? "Only the course owner or Super Admin can perform this action."
      : ""
  }
>

          <Star size={16} />

          Feature Course

        </DropdownMenu.Item>

        <DropdownMenu.Separator className="my-2 border-t" />

        {/* <DropdownMenu.Item

          onClick={onDelete}

          className="flex items-center gap-3 p-2 rounded text-red-600 hover:bg-red-50 cursor-pointer"

        > */}

        <DropdownMenu.Item
  disabled={!canManage}
  onClick={canManage ? onDelete : undefined}
  className={`flex items-center gap-3 p-2 rounded ${
    canManage
      ? "hover:bg-gray-100 cursor-pointer"
      : "opacity-50 cursor-not-allowed"
  }`}
  title={
    !canManage
      ? "Only the course owner or Super Admin can perform this action."
      : ""
  }
>

          <Trash2 size={16} />

          Delete Course

        </DropdownMenu.Item>

      </DropdownMenu.Content>

    </DropdownMenu.Root>

  );

}
