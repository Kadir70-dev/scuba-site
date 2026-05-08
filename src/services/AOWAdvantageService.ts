import { supabase } from "@/lib/supabaseClient";

/* =========================================
   GET SECTION
========================================= */

export const getAOWAdvantageSection =
  async () => {

    const { data, error } =
      await supabase
        .from("aow_advantage_section")
        .select("*")
        .limit(1)
        .single();

    if (error) {
      console.error(error);
    }

    return { data, error };
  };

/* =========================================
   UPDATE SECTION
========================================= */

export const updateAOWAdvantageSection =
  async (
    id: string,
    payload: any
  ) => {

    const { data, error } =
      await supabase
        .from("aow_advantage_section")
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

/* =========================================
   GET POINTS
========================================= */

export const getAOWAdvantagePoints =
  async () => {

    const { data, error } =
      await supabase
        .from("aow_advantage_points")
        .select("*")
        .order("sort_order", {
          ascending: true,
        });

    if (error) {
      console.error(error);
    }

    return { data, error };
  };

/* =========================================
   CREATE POINT
========================================= */

export const createAOWAdvantagePoint =
  async (payload: any) => {

    const { data, error } =
      await supabase
        .from("aow_advantage_points")
        .insert([payload])
        .select()
        .single();

    if (error) {
      console.error(error);
    }

    return { data, error };
  };

/* =========================================
   UPDATE POINT
========================================= */

export const updateAOWAdvantagePoint =
  async (
    id: string,
    payload: any
  ) => {

    const { data, error } =
      await supabase
        .from("aow_advantage_points")
        .update(payload)
        .eq("id", id)
        .select()
        .single();

    if (error) {
      console.error(error);
    }

    return { data, error };
  };

/* =========================================
   DELETE POINT
========================================= */

export const deleteAOWAdvantagePoint =
  async (id: string) => {

    const { error } =
      await supabase
        .from("aow_advantage_points")
        .delete()
        .eq("id", id);

    if (error) {
      console.error(error);
    }

    return { error };
  };