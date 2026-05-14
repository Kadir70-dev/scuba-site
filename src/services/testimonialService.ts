import { supabase } from "@/lib/supabaseClient";

// =====================================
// GET TESTIMONIALS
// =====================================

export const getTestimonials = async () => {
  console.log("🚀 [GET TESTIMONIALS] Fetching...");

  const response = await supabase
    .from("kadir_testimonials")
    .select("*")
    .order("position", { ascending: true });

  // console.log(
  //   "📦 [GET TESTIMONIALS RESULT]",
  //   response
  // );

  if (response.error) {
    console.error(
      "❌ [GET TESTIMONIALS ERROR]",
      response.error
    );
  }

  return response;
};

// =====================================
// UPDATE TESTIMONIAL
// =====================================

export const updateTestimonial = async (
  id: string,
  payload: any
) => {
  // console.log("🚀 [UPDATE TESTIMONIAL]", {
  //   id,
  //   payload,
  // });

  const response = await supabase
    .from("kadir_testimonials")
    .update({
      category: payload.category,
      feature: payload.feature,
      others: payload.others,
      dive_campus: payload.dive_campus,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  // console.log(
  //   "📦 [UPDATE TESTIMONIAL RESULT]",
  //   response
  // );

  if (response.error) {
    console.error(
      "❌ [UPDATE TESTIMONIAL ERROR]",
      response.error
    );
  }

  return response;
};