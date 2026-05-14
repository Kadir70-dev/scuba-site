import { supabase } from "@/lib/supabaseClient";

// ================= GET =================

// MAIN
export const getFooter = async () => {
  return await supabase
    .from("kadir_footer_content")
    .select("*")
    .limit(1)
    .maybeSingle();
};

// SOCIALS
export const getSocials = async () => {
  return await supabase
    .from("kadir_footer_socials")
    .select("*");
};

// LOCATIONS
export const getLocations = async () => {
  return await supabase
    .from("kadir_footer_locations")
    .select("*")
    .order("position");
};

// ================= UPDATE =================

export const updateFooter = async (
  id: string,
  payload: any
) => {
  return await supabase
    .from("kadir_footer_content")
    .update({
      description: payload.description,
      email: payload.email,
      phone: payload.phone,
      location: payload.location,
      copyright: payload.copyright,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
};

export const updateSocial = async (
  id: string,
  payload: any
) => {
  return await supabase
    .from("kadir_footer_socials")
    .update({
      url: payload.url,
      platform: payload.platform,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
};

export const updateLocation = async (
  id: string,
  payload: any
) => {
  return await supabase
    .from("kadir_footer_locations")
    .update({
      title: payload.title,
      address: payload.address,
      map_url: payload.map_url,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
};

// ================= ADD =================

export const addSocial = async (payload: any) => {
  return await supabase
    .from("kadir_footer_socials")
    .insert([
      {
        platform: payload.platform,
        url: payload.url,
      },
    ]);
};

// ================= DELETE =================

export const deleteSocial = async (id: string) => {
  return await supabase
    .from("kadir_footer_socials")
    .delete()
    .eq("id", id);
};