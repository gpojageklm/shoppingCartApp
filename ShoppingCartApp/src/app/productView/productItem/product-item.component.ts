import { Component,Input, OnChanges,SimpleChange } from '@angular/core';
import { CartService } from '../../cart.service';
import {ProductCartPrice} from '../../Model/product-cart-price';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnChanges {
  productItems:any;
  selectedProductList=new Array<ProductCartPrice>();
  @Input() categoryId:string;
  table;

  constructor(private cartService:CartService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.cartService.getProductItems(changedProp.currentValue).subscribe((resp)=>{
        this.productItems=resp;
        this.fillArray();
    }
   );
     
    }

   
  }
 
 fillArray()
{
   let m=0;
   let rowCount=this.productItems.length/4;
   this.table=new Array(rowCount);
    for(let i=0;i<this.table.length;i++)
    {
      this.table[i]=new Array(4);
    }  
    for(let row=0;row<this.table.length;row++)
    {
      for(let col=0;col<this.table[row].length;col++)
      {
        if(this.productItems[m]!=null)
        {
         this.table[row][col]=this.productItems[m];
         m++;
         }
      }
    }  
}
handleBarClicked(value,_productName,_productId,_basePrice)
{
  let obj:ProductCartPrice={
  basePrice:_basePrice,
  productId:_productId,
  productName:_productName,
  quantity:value
  }
  this.updateList(obj);
}
 updateList(item)
 {
   let itemExist=false;
    for(let i=0;i<this.selectedProductList.length;i++)
    {
         if(this.selectedProductList[i].productId==item.productId)
         {
           this.selectedProductList[i].quantity=item.quantity;
           itemExist=true;
           break;
         }
         
    }
    if(!itemExist)
    {
       this.selectedProductList.push(item);
    }
 }
  getCart()
  {
    console.log(this.selectedProductList);
  }

}
