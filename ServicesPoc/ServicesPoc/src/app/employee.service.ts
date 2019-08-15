import { Injectable } from '@angular/core';
import { EmployeeInfo } from './employee-info';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeDetails:Array<EmployeeInfo>;

  constructor() { 
    this.employeeDetails = new Array();
  }

  addEmployeeInService(empName:String, address:String){   
    this.employeeDetails.push(new EmployeeInfo(empName,address));
    console.log(this.employeeDetails.length);
  }
}
