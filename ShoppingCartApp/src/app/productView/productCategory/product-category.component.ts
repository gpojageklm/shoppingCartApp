import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategoryHeader="Categories"
  productCategories:any;
  selectedCategoryId:string="101";

  constructor(private cartService:CartService) { }

  ngOnInit() {
     this.cartService.getCategories().subscribe( res=>{
     this.productCategories=res;
     },
     err=>{
        console.log("error in getting categories");
     });
     
  }
  selectCategory(categoryId:string)
  {
    console.log("in selectCat"+categoryId);
    this.selectedCategoryId=categoryId;
  }

}
