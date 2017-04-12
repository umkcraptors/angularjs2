import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { headerComponent } from '../header/header';
import { marketerComponent } from '../marketer/marketer.component';
import { consumerComponent } from '../consumer/consumer.component';
import { supplierComponent } from '../supplier/supplier.component';
import { productComponent } from '../product/product.component';
import { supplierPComponent } from '../supplier_product/supplier_product.component';
import { marketerPComponent } from '../marketer_product/marketer_product.component';
import { homeComponent } from '../Home/home.component';
import { routerTransition } from '../router.transition/router.transition';
import { slideToRight } from '../router.transition/router.transition';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: homeComponent },
    { path: 'consumer', component: consumerComponent },
    { path: 'supplier', component: supplierComponent },
    { path: 'marketer', component: marketerComponent },
    { path: 'product', component: productComponent },
    { path: 'supplierP', component: supplierPComponent },
    { path: 'marketerP', component: marketerPComponent }
        //{ path: '**', component: ErrorComponent }
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,
 {
     useHash: true
 });