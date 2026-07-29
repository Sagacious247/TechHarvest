"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Module } from "@/types/module";

interface Props {

  module: Module;

  onEdit: () => void;

  onDelete: () => void;

}

export default function ModuleActions({

  onEdit,

  onDelete,

}: Props) {

  return (

    <div className="flex gap-2">

      <button

        onClick={onEdit}

        className="rounded-lg border p-2 hover:bg-gray-100"

      >

        <Pencil size={18} />

      </button>

      <button

        onClick={onDelete}

        className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"

      >

        <Trash2 size={18} />

      </button>

    </div>

  );

}