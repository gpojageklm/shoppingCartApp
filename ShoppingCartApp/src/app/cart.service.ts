import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

 const userUrl="http://localhost:3000/users";
 const productCategoryUrl="http://localhost:3000/productCategories";
 const productItemUrl="http://localhost:3000/products";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  public register(userData)
  {
    return this.http.post(userUrl, { userData },httpOptions);
  }

  public login(userName:string,password:string)
  {
    return this.http.get(`${userUrl}?userName=${userName}&password=${password}`);
  }

  public getCategories()
  {
    return this.http.get(productCategoryUrl);
  }

   public getProductItems(category:string)
  {
    return this.http.get(`${productItemUrl}?categoryId=${category}`);
  }
}
