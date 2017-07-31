import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-start',
  templateUrl: './input-date.component.html',
  styles: []
})
export class PolicyStartComponent implements OnInit {

  public label: string = "Cover Start Date";
  public name: string = "policystart";
  
  constructor() { }

  ngOnInit() {
  }

}
