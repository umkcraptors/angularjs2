import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule],
    exports: [],
    declarations: [RootComponent],
    providers: [],
    bootstrap:[RootComponent]
})
export class AppModule { }
