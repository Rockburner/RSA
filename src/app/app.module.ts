import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FormComponent } from './form/form.component';
import { PetNameComponent } from './form/pet-name.component';
import { PetTypeComponent } from './form/pet-type.component';
import { PetGenderComponent } from './form/pet-gender.component';
import { PetDobComponent } from './form/pet-dob.component';
import { PetChippedComponent } from './form/pet-chipped.component';
import { OwnerTitleComponent } from './form/owner-title.component';
import { OwnerNameComponent } from './form/owner-name.component';
import { OwnerDobComponent } from './form/owner-dob.component';
import { OwnerEmailComponent } from './form/owner-email.component';
import { OwnerContactComponent } from './form/owner-contact.component';
import { PolicyStartComponent } from './form/policy-start.component';
import { FormContinueComponent } from './form/form-continue.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeadComponent,
    PetNameComponent,
    PetTypeComponent,
    PetGenderComponent,
    PetDobComponent,
    PetChippedComponent,
    OwnerTitleComponent,
    OwnerNameComponent,
    OwnerDobComponent,
    OwnerEmailComponent,
    OwnerContactComponent,
    PolicyStartComponent,
    FormContinueComponent
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
