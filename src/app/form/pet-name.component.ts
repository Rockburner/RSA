import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-name',
  templateUrl: './pet-name.component.html',
  styles: []
})
export class PetNameComponent implements OnInit {

  public errorMessage: string = "";
  public errorClass: string = "";
// do validation here

  onBlur(event: any) {
    if(event.target.value == '') {
      this.errorMessage = "Pet's name required";
      this.errorClass = 'error';
    }
    if(event.target.value.length> 1) {
      this.errorMessage = "";
      this.errorClass = '';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
