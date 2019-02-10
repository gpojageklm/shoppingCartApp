import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../products/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
selectedProductList:Array<any>;
productData:Array<any>;
totalAmount:Number;
  constructor(
    private productService:ProductServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.selectedProductList=new Array();
    this.totalAmount=0;
   
    let ids = this.route.snapshot.paramMap.get('ids').split(":")[1];
    var idList=ids.split(",");
    let total=0;
    this.productService.getProductList().subscribe(resp=>
    {
       this.productData = resp as string [];
       for(var i=0;i<this.productData.length;i++)
       {
          for(var j=0;j<idList.length;j++)
          {
             if (this.productData[i].ID===idList[j])
             {
                this.selectedProductList.push(this.productData[i]);
                total=total+parseInt(this.productData[i].Price,10);
                console.log(this.selectedProductList);
             }
          }
        }
        this.totalAmount=total;
    }, 
    (err: HttpErrorResponse) => {
        console.log (err.message);
      }
  );
  }

}
