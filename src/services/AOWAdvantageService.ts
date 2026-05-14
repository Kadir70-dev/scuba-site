import { supabase } from "@/lib/supabaseClient";

/* ================= GET ================= */

export const getAOWAdvantage =
  async () => {

    const [
      { data: section },
      { data: points },
    ] = await Promise.all([

      supabase
        .from("aow_advantage_section")
        .select("*")
        .limit(1)
        .single(),

      supabase
        .from("aow_advantage_points")
        .select("*")
        .order("sort_order"),

    ]);

    return {
      section,
      points: points || [],
    };
  };

/* ================= UPDATE SECTION ================= */

export const updateAOWAdvantageSection =
  async (
    id: string,
    payload: any
  ) => {

    return await supabase
      .from("aow_advantage_section")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
  };

/* ================= UPDATE POINT ================= */

export const updateAOWAdvantagePoint =
  async (
    id: string,
    payload: any
  ) => {

    return await supabase
      .from("aow_advantage_points")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
  };

/* ================= CREATE ================= */

export const createAOWAdvantagePoint =
  async (payload: any) => {

    return await supabase
      .from("aow_advantage_points")
      .insert([payload])
      .select()
      .single();
  };

/* ================= DELETE ================= */

export const deleteAOWAdvantagePoint =
  async (id: string) => {

    return await supabase
      .from("aow_advantage_points")
      .delete()
      .eq("id", id);
  };