import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public legendPet: string = "Pet Information";
  public legendOwner: string = "Owner Information";
  public legendPolicy: string = "Policy Information";
  public buttonTxt: string = "Continue";

  submitForm(){
    // post form data to console here
  }

  constructor() { }

  ngOnInit() {
  }

  
}
