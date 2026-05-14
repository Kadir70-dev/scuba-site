import { supabase } from "@/lib/supabaseClient";

// =====================================
// GET FEATURED
// =====================================

export const getFeatured = async () => {
      // console.log("🚀 [GET FEATURED] Fetching featured content...");

  const response = await supabase
    .from("kadir_featured_content")
    .select("*")
    .limit(1)
    .single();

  // console.log("📦 [GET FEATURED RESULT]", response);

  if (response.error) {
    console.error(
      "❌ [GET FEATURED ERROR]",
      response.error
    );
  }

  return response;
};

// =====================================
// UPDATE FEATURED
// =====================================

export const updateFeatured = async (
  id: string,
  payload: any
) => {
  // console.log("🚀 [UPDATE FEATURED]", {
  //   id,
  //   payload,
  // });

  const response = await supabase
    .from("kadir_featured_content")
    .update({
      subtitle: payload.subtitle,
      title: payload.title,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  // console.log("📦 [UPDATE FEATURED RESULT]", response);

  if (response.error) {
    console.error(
      "❌ [UPDATE FEATURED ERROR]",
      response.error
    );
  }

  return response;
};