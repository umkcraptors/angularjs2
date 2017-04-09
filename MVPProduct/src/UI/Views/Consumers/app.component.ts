import { Component,  } from '@angular/core';
import{ Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,

  styles:[`input.ng-invalid{border-left:5px solid red}
           input.ng-valid{border-left:5px solid green}
  `]

  
})
export class AppComponent { 
  private 
  
  onSave(value:any){
    alert("In Progress");
/*
  $Http({
  method: 'GET',  // when server is ready for save use POST
  url: '/someUrl' // enter 192.168.1.128 url link
}).then(function successCallback(response) {
    alert(response);
    // handle the json respose and show the message to user
  }, function errorCallback(response) {
    alert(response);
    // handle the json respose and show the error message to user
  });
    */
  }
}
