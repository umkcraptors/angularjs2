import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './routes/app.routes';
import { AppComponent }  from './app.component';
import { headerComponent } from '../app/header/header';
import { marketerComponent } from '../app/marketer/marketer.component';
import { consumerComponent } from '../app/consumer/consumer.component';
import { supplierComponent } from '../app/supplier/supplier.component';
import { productComponent } from '../app/product/product.component';
import { supplierPComponent } from '../app/supplier_product/supplier_product.component';
import { marketerPComponent } from '../app/marketer_product/marketer_product.component';
import { homeComponent } from '../app/Home/home.component';
//import { routerTransition } from '../app/router.transition/router.transition';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, routing ],
  declarations: [ AppComponent, headerComponent, marketerComponent,
                 consumerComponent, supplierComponent, productComponent, supplierPComponent, marketerPComponent, homeComponent ],
  providers: [appRoutingProviders],
  exports:[],               
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
