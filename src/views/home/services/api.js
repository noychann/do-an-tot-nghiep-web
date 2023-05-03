import { AxiosInstance } from "@/services/api";

class ApiHome {
  onApiGetProducts = () => {
    return AxiosInstance({
      method: "get",
      url: "api/v1/plant",
    });
  };
}

export const API_HOME = new ApiHome();
