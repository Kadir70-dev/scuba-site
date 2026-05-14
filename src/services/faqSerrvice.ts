import { supabase } from "@/lib/supabaseClient";

export const getFaqs = async () => {
  return await supabase
    .from("kadir_faq")
    .select("*")
    .order("position", { ascending: true });
};

export const updateFaq = async (
  id: string,
  payload: any
) => {
  return await supabase
    .from("kadir_faq")
    .update({
      question: payload.question,
      answer: payload.answer,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
};