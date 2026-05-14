import { supabase } from "@/lib/supabaseClient";

// ==========================
// GET HERO
// ==========================

export const getHero = async () => {
  // console.log("🚀 [GET HERO] Fetching hero content...");

  const { data, error } = await supabase
    .from("kadir_hero_content")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  // console.log("📦 [GET HERO RESULT]", {
  //   data,
  //   error,
  // });

  if (error) {
    console.error("❌ [GET HERO ERROR]", error.message);
  }

  return { data, error };
};

// ==========================
// UPDATE HERO
// ==========================

export const updateHero = async (data: any) => {
  // console.log("🚀 [UPDATE HERO] Updating hero...", data);

  const response = await supabase
    .from("kadir_hero_content")
    .update({
      top_text: data.top_text,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      price: data.price,
      old_price: data.old_price,
      cta_text: data.cta_text,
      updated_at: new Date().toISOString(),
    })
    .eq("id", data.id)
    .select()
    .single();

  // console.log("📦 [UPDATE HERO RESULT]", response);

  if (response.error) {
    console.error(
      "❌ [UPDATE HERO ERROR]",
      response.error.message
    );
  }

  return response;
};