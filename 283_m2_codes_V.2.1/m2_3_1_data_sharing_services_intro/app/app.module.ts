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
    providers: [DevService],
    bootstrap:[RootComponent]
})
export class AppModule { }
