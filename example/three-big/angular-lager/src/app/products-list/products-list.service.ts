import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProductsList {
  data: object;
}

@Injectable()
export class ProductsListService {
  constructor(private http: HttpClient) { }

  fetchProductsList() {
    const apiKey = "a1963bba7c5ad2d272f18a45b819cb55";
    const url = `https://lager.emilfolino.se/v2/products?api_key=${apiKey}`;

    return this.http.get<ProductsList>(url);
  }
}
