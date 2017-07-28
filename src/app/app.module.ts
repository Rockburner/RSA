import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeadComponent } from './head/head.component';
import { PetNameComponent } from './form/pet-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeadComponent,
    PetNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
