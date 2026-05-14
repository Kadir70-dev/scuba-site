"use client";

import { useEffect, useState } from "react";

import {
  Shield,
  Star,
  Award,
  Save,
} from "lucide-react";

import {
  getGoldStandard,
  updateGoldSection,
  updateGoldTag,
  updateGoldImage,
} from "@/services/goldStandardService";

const iconMap: any = {
  Star: (
    <Star size={14} />
  ),

  Award: (
    <Award size={14} />
  ),

  Shield: (
    <Shield size={14} />
  ),
};

export default function GoldStandardAdmin() {
  const [section, setSection] =
    useState<any>(null);

  const [tags, setTags] =
    useState<any[]>([]);

  const [images, setImages] =
    useState<any[]>([]);

  const [editing, setEditing] =
    useState<string | null>(null);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const {
      section,
      tags,
      images,
    } = await getGoldStandard();

    setSection(section);

    setTags(tags);

    setImages(images);
  };

  const handleSave =
    async () => {
      setSaving(true);

      await updateGoldSection(
        section
      );

      await Promise.all(
        tags.map(
          updateGoldTag
        )
      );

      await Promise.all(
        images.map(
          updateGoldImage
        )
      );

      setSaving(false);
    };

  if (!section) return null;

  const getImage = (
    pos: string
  ) =>
    images.find(
      (img) =>
        img.position === pos
    );

  return (
    <section className="py-32 bg-[#f5f7fa]">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT */}
        <div>

          <input
            value={section.badge}
            onChange={(e) =>
              setSection({
                ...section,
                badge:
                  e.target.value,
              })
            }
            className="mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-white"
          />

          <div className="space-y-4 mb-6">

            <input
              value={section.title}
              onChange={(e) =>
                setSection({
                  ...section,
                  title:
                    e.target.value,
                })
              }
              className="w-full text-4xl font-bold bg-white p-4 rounded-2xl"
            />

            <input
              value={
                section.highlight
              }
              onChange={(e) =>
                setSection({
                  ...section,
                  highlight:
                    e.target.value,
                })
              }
              className="w-full text-cyan-500 text-2xl bg-white p-4 rounded-2xl"
            />

          </div>

          <textarea
            value={
              section.description
            }
            onChange={(e) =>
              setSection({
                ...section,
                description:
                  e.target.value,
              })
            }
            className="w-full bg-white p-4 rounded-2xl mb-8"
          />

          {/* CARD */}
          <div className="bg-white p-8 rounded-3xl border border-yellow-200">

            <input
              value={
                section.card_title
              }
              onChange={(e) =>
                setSection({
                  ...section,
                  card_title:
                    e.target.value,
                })
              }
              className="w-full text-xl font-bold mb-4"
            />

            <textarea
              value={
                section.card_description
              }
              onChange={(e) =>
                setSection({
                  ...section,
                  card_description:
                    e.target.value,
                })
              }
              className="w-full mb-6"
            />

            {/* TAGS */}
            <div className="space-y-4">

              {tags.map(
                (
                  tag,
                  i
                ) => (
                  <div
                    key={tag.id}
                    className="flex items-center gap-3 bg-yellow-50 p-3 rounded-xl"
                  >

                    {
                      iconMap[
                        tag.icon
                      ]
                    }

                    <input
                      value={
                        tag.text
                      }
                      onChange={(
                        e
                      ) => {
                        const updated =
                          [
                            ...tags,
                          ];

                        updated[
                          i
                        ].text =
                          e.target.value;

                        setTags(
                          updated
                        );
                      }}
                      className="bg-transparent flex-1 outline-none"
                    />

                  </div>
                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">

          {[
            "big",
            "small1",
            "small2",
          ].map((pos, i) => {
            const img =
              getImage(pos);

            return (
              <div
                key={pos}
                className={
                  i === 0
                    ? "row-span-2"
                    : ""
                }
              >

                <input
                  value={
                    img?.image_url ||
                    ""
                  }
                  onChange={(
                    e
                  ) => {
                    const updated =
                      images.map(
                        (
                          im
                        ) =>
                          im.position ===
                          pos
                            ? {
                                ...im,
                                image_url:
                                  e
                                    .target
                                    .value,
                              }
                            : im
                      );

                    setImages(
                      updated
                    );
                  }}
                  className="w-full mb-3 bg-white p-3 rounded-xl"
                />

                <img
                  src={
                    img?.image_url
                  }
                  className="rounded-2xl"
                />

              </div>
            );
          })}

        </div>

      </div>

      {/* SAVE */}
      <div className="fixed bottom-8 right-8">

        <button
          onClick={handleSave}
          className="flex items-center gap-3 px-8 py-4 bg-cyan-400 text-black rounded-2xl font-semibold"
        >

          <Save className="w-5 h-5" />

          {saving
            ? "Saving..."
            : "Save Changes"}

        </button>

      </div>

    </section>
  );
}