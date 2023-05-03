import { AxiosInstance } from "@/services/api";

class ApiCart {
  onApiGetCart = (id) => {
    return AxiosInstance({
      method: "get",
      url: `api/v1/cart/${id}`,
    });
  };
}

export const API_CART = new ApiCart();
