import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employeeDetails:Array<{empName:String, address:String}>;
  constructor() {
    
   }

  ngOnInit() {
     this.employeeDetails = new Array();
    // this.employeeDetails.push({empName:"sudhir",address:"Hyd"});
    // this.employeeDetails.push({empName:"Akanksha",address:"Varanasi"});
    // this.employeeDetails.push({empName:"Nikki",address:"Aus"});
    // this.employeeDetails.push({empName:"Shreya",address:"Lucknow"});
    // this.employeeDetails.push({empName:"Future girl",address:"----"});
  }
  storeData(data:{empName:String, address:String}){
    this.employeeDetails.push(data);
  }
}
