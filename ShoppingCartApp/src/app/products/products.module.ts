import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductServiceService } from './product-service.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent],
  providers: [ProductServiceService]
})
export class ProductsModule { }
