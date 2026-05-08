import { supabase } from "@/lib/supabaseClient";

/* =========================================
   GET SECTION
========================================= */

export const getAdvancedProtocolSection =
  async () => {

    const { data, error } =
      await supabase
        .from("advanced_protocol_section")
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

export const updateAdvancedProtocolSection =
  async (
    id: string,
    payload: any
  ) => {

    const { data, error } =
      await supabase
        .from("advanced_protocol_section")
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
   GET CARDS
========================================= */

export const getAdvancedProtocolCards =
  async () => {

    const { data, error } =
      await supabase
        .from("advanced_protocol_cards")
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
   CREATE CARD
========================================= */

export const createAdvancedProtocolCard =
  async (payload: any) => {

    const { data, error } =
      await supabase
        .from("advanced_protocol_cards")
        .insert([payload])
        .select()
        .single();

    if (error) {
      console.error(error);
    }

    return { data, error };
  };

/* =========================================
   UPDATE CARD
========================================= */

export const updateAdvancedProtocolCard =
  async (
    id: string,
    payload: any
  ) => {

    const { data, error } =
      await supabase
        .from("advanced_protocol_cards")
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
   DELETE CARD
========================================= */

export const deleteAdvancedProtocolCard =
  async (id: string) => {

    const { error } =
      await supabase
        .from("advanced_protocol_cards")
        .delete()
        .eq("id", id);

    if (error) {
      console.error(error);
    }

    return { error };
  };