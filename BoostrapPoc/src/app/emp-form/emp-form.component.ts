import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent  {

  empName:String;
  address:String;

  @Output() employeeDetails:EventEmitter<{empName:String,address:String}>;

  constructor() { 
    this.employeeDetails = new EventEmitter<{empName:String,address:String}>();
  }


  submitEmployee(){
    this.employeeDetails.emit({
      empName:this.empName,
      address:this.address
    });
  }

}
