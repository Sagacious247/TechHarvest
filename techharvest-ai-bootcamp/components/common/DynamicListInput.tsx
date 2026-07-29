"use client";

import { Plus, Trash2 } from "lucide-react";

interface Props {

  title: string;

  placeholder: string;

  items: string[];

  onChange: (items: string[]) => void;

}

export default function DynamicListInput({

  title,

  placeholder,

  items,

  onChange,

}: Props) {

  const updateItem = (
    index: number,
    value: string
  ) => {

    const updated = [...items];

    updated[index] = value;

    onChange(updated);

  };

  const addItem = () => {

    onChange([
      ...items,
      "",
    ]);

  };

  const removeItem = (
    index: number
  ) => {

    onChange(

      items.filter(
        (_, i) => i !== index
      )

    );

  };

  return (

    <div className="space-y-4">

      <div className="flex justify-between items-center">

        <h3 className="font-semibold text-lg">

          {title}

        </h3>

        <button

          type="button"

          onClick={addItem}

          className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"

        >

          <Plus size={16} />

          Add

        </button>

      </div>

      {items.length === 0 && (

        <div className="text-gray-400 italic">

          No items added.

        </div>

      )}

      {items.map((item, index) => (

        <div

          key={index}

          className="flex gap-3"

        >

          <input

            value={item}

            placeholder={placeholder}

            onChange={(e)=>

              updateItem(
                index,
                e.target.value
              )

            }

            className="flex-1 border rounded-lg px-4 py-3"

          />

          <button

            type="button"

            onClick={()=>

              removeItem(index)

            }

            className="text-red-600 hover:bg-red-50 rounded-lg px-3"

          >

            <Trash2 size={18} />

          </button>

        </div>

      ))}

    </div>

  );

}