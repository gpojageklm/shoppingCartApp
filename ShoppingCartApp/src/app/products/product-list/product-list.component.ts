import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   productJSON:any;
   selectedProductList:Array<string>;
  constructor(private productService:ProductServiceService,private router: Router) { }

  ngOnInit(){
    this.selectedProductList=new Array();
    this.productService.getProductList().subscribe(resp=>
    {
       this.productJSON = resp as string [];
       console.log(this.productJSON)	;
   
    }, 
    (err: HttpErrorResponse) => {
        console.log (err.message);
      }
  );
 
}

addProduct(productId,product)
{
  product.isDisabled=true;
  this.selectedProductList.push(productId);

}

navigateToCart()
{
   this.router.navigate(['/cart/:'+this.selectedProductList]);
}

}
