import { supabase } from "@/lib/supabaseClient";

/* =========================
   GET DATA
========================= */

export const getPadiOpenDiver = async () => {

  const { data, error } = await supabase
    .from("padi_open_diver")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.error(error);
  }

  return { data, error };
};

/* =========================
   CREATE DATA
========================= */

export const createPadiOpenDiver = async (payload: any) => {

  const { data, error } = await supabase
    .from("padi_open_diver")
    .insert([payload])
    .select()
    .single();

  if (error) {
    console.error(error);
  }

  return { data, error };
};

/* =========================
   UPDATE DATA
========================= */

export const updatePadiOpenDiver = async (
  id: string,
  payload: any
) => {

  const { data, error } = await supabase
    .from("padi_open_diver")
    .update({
      ...payload,
      updated_at: new Date(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
  }

  return { data, error };
};

/* =========================
   DELETE DATA
========================= */

export const deletePadiOpenDiver = async (
  id: string
) => {

  const { error } = await supabase
    .from("padi_open_diver")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
  }

  return { error };
};