"use client";

import { Course } from "@/types/course";
import DynamicListInput from "@/components/common/DynamicListInput";
import MediaUploader from "@/components/common/MediaUploader";

interface Props {
  course: Course;
  onChange: (course: Course) => void;
}

export default function CourseForm({
  course,
  onChange,
}: Props) {

  function updateField<K extends keyof Course>(
    field: K,
    value: Course[K]
  ) {

    onChange({
      ...course,
      [field]: value,
    });
  }

  return (

    <div className="space-y-8">

      {/* ==========================
          Basic Information
      =========================== */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block mb-2 font-medium">

            Course Title

          </label>

          <input

            value={course.title}

            onChange={(e)=>

              updateField(
                "title",
                e.target.value
              )

            }

            className="w-full border rounded-lg px-4 py-3"

          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Slug

          </label>

          <input

            value={course.slug}

            onChange={(e)=>

              updateField(
                "slug",
                e.target.value
              )

            }

            className="w-full border rounded-lg px-4 py-3"

          />

        </div>

<MediaUploader
    label="Course Thumbnail"
    value={course.thumbnail}
    onChange={(url)=>
        updateField(
            "thumbnail",
            url
        )
    }
/>

      </div>

      {/* ==========================
          Short Description
      =========================== */}

      <div>

        <label className="block mb-2 font-medium">

          Short Description

        </label>

        <textarea

          rows={3}

          value={course.shortDescription}

          onChange={(e)=>

            updateField(
              "shortDescription",
              e.target.value
            )

          }

          className="w-full border rounded-lg px-4 py-3"

        />

      </div>

      {/* ==========================
          Full Description
      =========================== */}

      <div>

        <label className="block mb-2 font-medium">

          Full Description

        </label>

        <textarea

          rows={8}

          value={course.description}

          onChange={(e)=>

            updateField(
              "description",
              e.target.value
            )

          }

          className="w-full border rounded-lg px-4 py-3"

        />

      </div>

      {/* ==========================
          Pricing
      =========================== */}

      <div className="grid md:grid-cols-4 gap-6">

        <div>

          <label className="block mb-2 font-medium">

            Price

          </label>

          <input

            type="number"

            value={course.price}

            onChange={(e)=>

              updateField(
                "price",
                Number(e.target.value)
              )

            }

            className="w-full border rounded-lg px-4 py-3"

          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Duration

          </label>

          <input

            value={course.duration}

            onChange={(e)=>

              updateField(
                "duration",
                e.target.value
              )

            }

            className="w-full border rounded-lg px-4 py-3"

          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Category

          </label>

          <input

            value={course.category}

            onChange={(e)=>

              updateField(
                "category",
                e.target.value
              )

            }

            className="w-full border rounded-lg px-4 py-3"

          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Level

          </label>

          <select

            value={course.level}

            onChange={(e)=>

              updateField(
                "level",
                e.target.value as Course["level"]
              )

            }

            className="w-full border rounded-lg px-4 py-3"

          >

            <option>

              Beginner

            </option>

            <option>

              Intermediate

            </option>

            <option>

              Advanced

            </option>

          </select>

        </div>

      </div>

    </div>

  );

}