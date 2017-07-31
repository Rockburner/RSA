import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-dob',
  templateUrl: './input-date.component.html',
  styles: []
})
export class OwnerDobComponent implements OnInit {

  public label: string = "Date of Birth";
  public name: string = "ownerdob";

  constructor() { }

  ngOnInit() {
  }

}
