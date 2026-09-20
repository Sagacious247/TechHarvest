"use client";

import { useState } from "react";
import { useKnowledge } from "@/hooks/useKnowledge";
import {
  FileText,
  Tag,
  Calendar,
} from "lucide-react";
import KnowledgeActions from "./KnowledgeActions";
import EditKnowledgeDrawer from "./EditKnowledgeDrawer";
import DeleteKnowledgeDialog from "./DeleteKnowledgeDialog";
import KnowledgeDetailsDrawer from "./KnowledgeDetailsDrawer";
import { KnowledgeDocument } from "@/types/knowledge";

interface Props {
  search: string;
  category: string;
}
export default function KnowledgeTable({
  search,
  category,
}: Props) {

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] =
  useState(false);

const [deletingDocument, setDeletingDocument] =
  useState<KnowledgeDocument | null>(null);

const [deleting, setDeleting] =
  useState(false);

const [editingDocument, setEditingDocument] =
  useState<KnowledgeDocument | null>(null);
  const [selectedDocument, setSelectedDocument] =
  useState<KnowledgeDocument | null>(null);

const [openDetails, setOpenDetails] =
  useState(false);

  // DELETE
  async function handleDelete() {

  if (!deletingDocument) return;

  try {

    setDeleting(true);

    await remove(deletingDocument.id);

    setOpenDelete(false);

    setDeletingDocument(null);

    refresh();

  } catch (err) {

    console.error(err);

    alert("Unable to delete knowledge.");

  } finally {

    setDeleting(false);

  }

}

 const {
  documents,
  loading,
  refresh,
  remove,
} = useKnowledge();

// const filteredDocuments = documents.filter((doc) => {

//   const keyword = search.toLowerCase().trim();

//   if (!keyword) return true;

//   return (
//     doc.title.toLowerCase().includes(keyword) ||

//     doc.category.toLowerCase().includes(keyword) ||

//     doc.source.toLowerCase().includes(keyword) ||

//     doc.tags.some(tag =>
//       tag.toLowerCase().includes(keyword)
//     )
//   );

// });

const filteredDocuments = documents.filter((doc) => {

  const keyword = search.toLowerCase().trim();

  const matchesSearch =
    !keyword ||

    doc.title.toLowerCase().includes(keyword) ||

    doc.category.toLowerCase().includes(keyword) ||

    doc.source.toLowerCase().includes(keyword) ||

    doc.tags.some(tag =>
      tag.toLowerCase().includes(keyword)
    );

  const matchesCategory =
    !category ||

    doc.category.toLowerCase() === category.toLowerCase();

  return matchesSearch && matchesCategory;

});

  if (loading) {

    return (
      <div className="rounded-2xl border bg-white p-10 text-center">
        Loading knowledge...
      </div>
    );

  }

  if (!filteredDocuments.length) {

    return (
      <div className="rounded-2xl border bg-white p-12 text-center">

        <FileText
          className="mx-auto mb-4 text-slate-300"
          size={48}
        />

       <h3 className="text-xl font-semibold">
            No matching knowledge found
        </h3>

        <p className="mt-2 text-slate-500">
          Try another keyword or upload a new document.
        </p>

      </div>
    );

  }

  return (
<>
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr className="text-left text-sm text-slate-600">

            <th className="px-6 py-4">Document</th>

            <th>Category</th>

            <th>Tags</th>

            <th>Source</th>

            <th>Created</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {filteredDocuments.map((doc) => (

            <tr
              key={doc.id}
              className="border-t hover:bg-slate-50 transition"
            >

              <td className="px-6 py-5">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-green-100 p-3">

                    <FileText
                      className="text-green-600"
                      size={18}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {doc.title}
                    </h4>

                  </div>

                </div>

              </td>

              <td>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">

                  {doc.category}

                </span>

              </td>

              <td>

                <div className="flex flex-wrap gap-2">

                  {doc.tags.map(tag => (

                    <span
                      key={tag}
                      className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs"
                    >

                      <Tag size={12} />

                      {tag}

                    </span>

                  ))}

                </div>

              </td>

              <td>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">

                  {doc.source}

                </span>

              </td>

              <td>

                <div className="flex items-center gap-2 text-sm text-slate-500">

                  <Calendar size={14} />

                  {new Date(doc.created_at).toLocaleDateString()}

                </div>

              </td>

              <td className="pr-6">

                <KnowledgeActions

                  onView={() => {
                  setSelectedDocument(doc);
                  setOpenDetails(true);
                }}

                 onEdit={() => {
                 setEditingDocument(doc);
                 setOpenEdit(true);
               }}

                 onDelete={() => {
                 setDeletingDocument(doc);
                 setOpenDelete(true);
               }}

                />

              </td>

            </tr>

))}

        </tbody>

      </table>

    </div>

    <KnowledgeDetailsDrawer
  open={openDetails}
  document={selectedDocument}
  onClose={() => setOpenDetails(false)}
/>

<EditKnowledgeDrawer
  open={openEdit}
  document={editingDocument}
  onClose={() => setOpenEdit(false)}
  onSuccess={() => {
    refresh();
    setOpenEdit(false);
  }}
/>


<DeleteKnowledgeDialog
  open={openDelete}
  title={deletingDocument?.title}
  loading={deleting}
  onClose={() => {
    setOpenDelete(false);
    setDeletingDocument(null);
  }}
  onConfirm={handleDelete}
/>

</>

  );

}