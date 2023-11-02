import { api } from "../api";

export class ProductsService {
  static async getProducts() {
    const response = await api.get("/products");
    return response.data;
  }
}
