import axios from "axios";
const apiUrl = 'https://fakestoreapi.com/';

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json"
  }
});

export const fetchProducts = (): Promise<any> => {
  return http.get<any>(`products`);
};
// export const getItems = (query: string): Promise<AxiosResponse<ApiResponse>> => {
//   return http.get<ApiResponse>(`items?q=${query}`);
// };

// export const getItemDetail: any = (id: string) => {
//   return http.get<ApiResponse>(`items/${id}`);
// };
