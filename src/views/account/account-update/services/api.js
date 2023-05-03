import { AxiosInstance } from "@/services/api";

class ApiCustomer {
  onApiGetCustomer = () => {
    return AxiosInstance({
      method: "get",
      url: "/api/v1/user",
    });
  };
}

export const API_ACCOUNT_UPDATE = new ApiCustomer();
