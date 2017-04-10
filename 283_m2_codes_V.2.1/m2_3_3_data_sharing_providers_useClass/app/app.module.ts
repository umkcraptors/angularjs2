import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './app.component';
import {DevDetailsComponent} from './dev-details.component';
/* Importing DevService */
import {DevService} from './dev.service';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule],
    exports: [],
    declarations: [RootComponent, DevDetailsComponent],
    providers: [{provide:DevService,useClass:DevService}],
    bootstrap:[RootComponent]
})
export class AppModule { }

/* Providers will create the instance as service of normal class to be used across app. Dont instantiate again to use as singleton */
/* You can use useValue, useClass for value and service class respectively */
/* You can use useExisting if the provider or service has already been instanciated */