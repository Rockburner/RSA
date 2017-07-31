import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-dob',
  templateUrl: './input-date.component.html',
  styles: []
})
export class PetDobComponent implements OnInit {

  public label: string = "Date of Birth";
  public name: string = "petdob";

  constructor() { }

  ngOnInit() {
  }

}
