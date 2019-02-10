import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpService: HttpClient) { }

  getProductList() {
    return this.httpService.get('./assets/productList.json');

  }

}
