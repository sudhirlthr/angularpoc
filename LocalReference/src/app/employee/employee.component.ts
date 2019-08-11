import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empName:String;
  address:String;
  phone:number;

  @Output() employeeDEtails:Array<{empName:String,address:String,phone:number}>;
  constructor() { }

  ngOnInit() {
    this.employeeDEtails = new Array();
  }
  submitEmployee(eName:String, addr:String,phon:number){
    console.log((document.getElementById("empName") as HTMLInputElement).value);
    console.log(eName);
    this.empName = eName;
    this.address = addr;
    this.phone = phon;
    this.employeeDEtails.push({empName:(document.getElementById("empName") as HTMLInputElement).value,address:addr,phone:phon});
    console.log(this.empName)
  }

}
