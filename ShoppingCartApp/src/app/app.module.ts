import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { CartService } from './cart.service';
import { ProductViewModule } from './productView/product-view.module';
import { ProductItemComponent } from './productView/productItem/product-item.component';
import { ProductCategoryComponent } from './productView/productCategory/product-category.component';
import { ProductContainerComponent } from './productView/product-container.component';
import { AddRemoveBarComponent } from './add-remove-bar/add-remove-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductItemComponent,
    ProductCategoryComponent,
    ProductContainerComponent,
    AddRemoveBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsModule,
    CartModule,
    PageNotFoundModule,
    AppRoutingModule,
    ProductViewModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
