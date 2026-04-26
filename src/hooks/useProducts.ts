import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "../types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data || []);
    }

    fetchData();
  }, []);

  return { products };
}