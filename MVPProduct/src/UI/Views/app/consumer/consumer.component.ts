import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'consumer',
  templateUrl: 'app/consumer/cons.html',
 
  
  styleUrls: ['app/lib/css/styles.css'],
  styles: [`input.ng-valid{border-left:5px solid green}
            input.ng-invalid{border-left:5px solid red}`],
            animations: [routerTransition()],
            host: {'[@routerTransition]': ''}
})
export class consumerComponent implements OnInit {
    constructor( private router: Router) { }

    ngOnInit() { }

    private onSave(value:any){
      alert("In Progress");
    }
    gotoDepartments(){
           
           this.router.navigate(['']);
       }

}