import { supabase } from "@/lib/supabaseClient";

// GET
export const getGallery = async () => {
  return await supabase
    .from("gallery")
    .select("*")
    .order("position", { ascending: true });
};

// UPDATE
export const updateGalleryImage = async (id: string, url: string) => {
  return await supabase
    .from("gallery")
    .update({ image_url: url })
    .eq("id", id)
    .select()
    .single();
};