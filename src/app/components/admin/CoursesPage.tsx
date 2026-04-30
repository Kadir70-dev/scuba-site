"use client";

import { useEffect, useState } from "react";
import { getCourses, updateCourse } from "@/services/courseService";

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔥 FETCH
  const fetchCourses = async () => {
    console.log("📡 FETCHING COURSES...");
    const { data, error } = await getCourses();

    console.log("📦 FETCH RESPONSE:", data);
    console.log("❌ FETCH ERROR:", error);

    setCourses(data || []);
    setLoading(false);
  };

  // 🔥 CHANGE
  const handleChange = (id: string, field: string, value: any) => {
    console.log("🟡 CHANGE:", { id, field, value });

    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, [field]: value } : c
      )
    );
  };

  // 🔥 SAVE (FIXED)
  const handleSave = async (course: any) => {
    console.log("🚀 SAVING:", course);

    setSaving(true);

    const res = await updateCourse(course.id, course);
    console.log("📡 API RESPONSE:", res);

    // ✅ OPTIMISTIC UI UPDATE (IMPORTANT FIX)
    setCourses((prev) =>
      prev.map((c) =>
        c.id === course.id ? { ...c, age: course.age } : c
      )
    );

    console.log("🧠 UPDATED UI STATE");

    setSaving(false);
    setEditingId(null);
  };

  const handleCancel = () => {
    console.log("❌ CANCEL");
    setEditingId(null);
    fetchCourses();
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0b2c44] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#0b2c44] py-20 text-white min-h-screen">

      <h1 className="text-center text-4xl font-bold mb-10">
        CHOOSE YOUR <span className="text-cyan-400">PATH</span>
      </h1>

      <div className="flex justify-center gap-6 flex-wrap">

        {courses.map((course) => {
          const isEditing = editingId === course.id;

          return (
            <div
              key={course.id}
              className={`w-[260px] rounded-2xl overflow-hidden relative transition ${
                isEditing
                  ? "ring-2 ring-cyan-400 scale-105"
                  : "hover:scale-105"
              }`}
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={course.image || "/1.avif"}
                  className="w-full h-[350px] object-cover"
                />

                {isEditing && (
                  <div className="absolute top-0 left-0 w-full p-3">
                    <input
                      value={course.image || ""}
                      onChange={(e) => {
                        console.log("🖼 IMAGE:", e.target.value);
                        handleChange(course.id, "image", e.target.value);
                      }}
                      className="w-full px-2 py-1 text-white text-xs bg-white/10 border border-white/20 rounded"
                    />
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end pointer-events-none">

                {/* EDIT BUTTON */}
                {!isEditing && (
                  <button
                    onClick={() => {
                      console.log("✏️ EDIT:", course.id);
                      setEditingId(course.id);
                    }}
                    className="absolute top-3 right-3 bg-white/20 px-2 py-1 text-xs rounded pointer-events-auto"
                  >
                    Edit
                  </button>
                )}

                {/* AGE */}
                {isEditing ? (
                  <input
                    value={course.age || ""}
                    onChange={(e) => {
                      console.log("🔥 AGE:", e.target.value);
                      handleChange(course.id, "age", e.target.value);
                    }}
                    className="text-xs text-white bg-white/10 px-2 py-1 rounded mb-2 pointer-events-auto border border-white/20"
                  />
                ) : (
                  <span className="text-xs bg-white text-black px-2 py-1 rounded mb-2 w-fit">
                    {course.age}
                  </span>
                )}

                {/* TITLE */}
                {isEditing ? (
                  <input
                    value={course.title || ""}
                    onChange={(e) =>
                      handleChange(course.id, "title", e.target.value)
                    }
                    className="text-lg font-bold text-white bg-white/10 px-2 rounded pointer-events-auto"
                  />
                ) : (
                  <h2 className="text-lg font-bold">{course.title}</h2>
                )}

                {/* PRICE */}
                {isEditing ? (
                  <input
                    type="number"
                    value={course.price || 0}
                    onChange={(e) =>
                      handleChange(course.id, "price", Number(e.target.value))
                    }
                    className="text-cyan-300 text-lg bg-white/10 px-2 rounded pointer-events-auto"
                  />
                ) : (
                  <p className="text-cyan-400 text-lg font-semibold">
                    AED {course.price}
                  </p>
                )}

                {/* DESCRIPTION */}
                {isEditing ? (
                  <textarea
                    value={course.description || ""}
                    onChange={(e) =>
                      handleChange(course.id, "description", e.target.value)
                    }
                    className="text-xs text-white bg-white/10 px-2 rounded pointer-events-auto"
                  />
                ) : (
                  <p className="text-xs text-white/70">
                    {course.description}
                  </p>
                )}

                {/* ACTIONS */}
                {isEditing && (
                  <div className="flex gap-2 mt-3 pointer-events-auto">

                    <button
                      onClick={() => handleSave(course)}
                      className="bg-green-400 text-black px-3 py-1 rounded text-sm"
                    >
                      {saving ? "Saving..." : "Save"}
                    </button>

                    <button
                      onClick={handleCancel}
                      className="bg-red-500 px-3 py-1 rounded text-sm"
                    >
                      Cancel
                    </button>

                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}