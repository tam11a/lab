import instance from "@instance";
import { useQuery } from "@tanstack/react-query";

export const getAllProduct = () => {
	return instance.get("products");
};

export const useGetAllProduct = () => {
	return useQuery(["get-products"], getAllProduct, {
		// refetchInterval: 100,
	});
};
