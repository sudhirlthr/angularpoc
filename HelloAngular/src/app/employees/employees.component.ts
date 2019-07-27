import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private empName:String;
  private isButtonDisabled:boolean = true;
  constructor() { 
    this.empName = "Shyam";
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 3000);
  }

  ngOnInit() {
  }
  performOpr():void{ // for Input binding
    console.log("button clicked");
  }
}
