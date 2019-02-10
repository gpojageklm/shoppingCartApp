import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductServiceService } from '../product-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private selectedProduct: Array<any>;
  private productData:Array<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService

  ) { }

  ngOnInit() {
    this.selectedProduct=new Array();
    let id = this.route.snapshot.paramMap.get('id').split(":")[1];
     this.productService.getProductList().subscribe(resp=>
    {
       this.productData = resp as string [];
       for(var i=0;i<this.productData.length;i++)
       {
         if (this.productData[i].ID===id)
         {
          this.selectedProduct.push(this.productData[i]);
          console.log(this.selectedProduct);
         }
       }
    }, 
    (err: HttpErrorResponse) => {
        console.log (err.message);
      }
  );
}
navigateToProductList()
{
 this.router.navigate(['/products']);
}

}
