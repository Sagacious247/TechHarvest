"use client";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  CreditCard,
  Award,
} from "lucide-react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Props {
  onView: () => void;

  onEdit: () => void;

  onDelete: () => void;
}

export default function StudentActions({

  onView,

  onEdit,

  onDelete,

}: Props) {

  return (

    <DropdownMenu.Root>

      <DropdownMenu.Trigger asChild>

        <button className="p-2 rounded hover:bg-gray-100">

          <MoreHorizontal size={18} />

        </button>

      </DropdownMenu.Trigger>

      <DropdownMenu.Content

        className="bg-white rounded-lg shadow-xl border w-56 p-2"

        sideOffset={6}

      >

        <DropdownMenu.Item

          onClick={onView}

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        >

          <Eye size={16} />

          View Profile

        </DropdownMenu.Item>

        <DropdownMenu.Item

          onClick={onEdit}

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        >

          <Pencil size={16} />

          Edit Student

        </DropdownMenu.Item>

        <DropdownMenu.Item

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        >

          <CreditCard size={16} />

          Payment History

        </DropdownMenu.Item>

        <DropdownMenu.Item

          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"

        >

          <Award size={16} />

          Certificates

        </DropdownMenu.Item>

        <DropdownMenu.Separator className="my-2 border-t"/>

        <DropdownMenu.Item

          onClick={onDelete}

          className="flex items-center gap-3 p-2 rounded text-red-600 hover:bg-red-50 cursor-pointer"

        >

          <Trash2 size={16} />

          Delete Student

        </DropdownMenu.Item>

      </DropdownMenu.Content>

    </DropdownMenu.Root>

  );

}