import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'supplier',
  template: '<h2>Supplier</h2>',
  //templateUrl: 'app/supplier/Supplier.html',
  styleUrls: ['app/lib/css/styles.css'],
  animations: [routerTransition()],
            host: {'[@routerTransition]': ''}
})
export class supplierComponent implements OnInit {
    user: any = {Name: null, Email: null, Phone: null, Status: null};
    data: any;
    constructor() { }

    ngOnInit() { }
 /*
    onSubmit(user: any){
        console.log(user);
        this.data = JSON.stringify(user);
    }
*/
}