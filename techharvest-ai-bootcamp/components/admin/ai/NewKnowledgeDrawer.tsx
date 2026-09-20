// "use client";

// import { X } from "lucide-react";
// import KnowledgeForm from "./KnowledgeForm";

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function NewKnowledgeDrawer({
//   open,
//   onClose,
// }: Props) {

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50">

//       <div
//         className="absolute inset-0 bg-black/40"
//         onClick={onClose}
//       />

//       <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">

//         <div className="flex items-center justify-between border-b px-8 py-6">

//           <h2 className="text-2xl font-bold">
//             New Knowledge
//           </h2>

//           <button onClick={onClose}>
//             <X />
//           </button>

//         </div>

//         <div className="p-8">

//           <KnowledgeForm
//             onSuccess={() => {
//               onClose();
//               window.location.reload();
//             }}
//           />

//         </div>

//       </div>

//     </div>
//   );
// }


"use client";

import { X } from "lucide-react";
import KnowledgeForm from "./KnowledgeForm";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NewKnowledgeDrawer({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-2xl overflow-y-auto bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b px-8 py-6">
          <h2 className="text-2xl font-bold">
            New Knowledge
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-8">
          <KnowledgeForm
            onSuccess={() => {
              onClose();
              window.location.reload();
            }}
          />
        </div>

      </div>
    </>
  );
}