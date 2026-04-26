import { supabase } from "../lib/supabaseClient";
import { Product } from "../types/product";

export async function addProduct(product: Product) {
  const { data, error } = await supabase
    .from("products")
    .insert([product]);

  if (error) throw error;
  return data;
}

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}