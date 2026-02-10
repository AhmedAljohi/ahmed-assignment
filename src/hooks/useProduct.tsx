import { http } from "@/helper/http";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  dimensions: {
    height: number;
    width: number;
  };
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const getProductsKey = (query?: string) => ["products", query];
const getProductDetailsKey = (id: string) => ["product-details", id];

const getProducts = async (query?: string) => {
  const response = await http.get("/products/search", {
    params: { q: query },
  });
  return response.data;
};

const getProductDetails = async (id: string) => {
  const response = await http.get(`/products/${id}`);
  return response.data;
};

  export const useProductDataLoad = <TData = ProductsResponse>(
    query?: string,
  ): UseQueryResult<TData> => {
    return useQuery({
      queryKey: getProductsKey(query),
      queryFn: () => getProducts(query),
    });
  };

  export const useProductDetailsDataLoad = <TData = Product>(
    id: string,
  ): UseQueryResult<TData> => {
    return useQuery({
      queryKey: getProductDetailsKey(id),
      queryFn: () => getProductDetails(id),
      enabled: !!id,
    });
  };