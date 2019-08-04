import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  /* example for css */
   //private employeeDetails:Array<{eName:String,addr:String}> = new Array[];
   private employeeDetails2 = Array<{eName:String,addr:String}>();

   /* example of ngSwitch */
   private eNo:number;

  private empList:Array<String>;
  private empName:String;
  private isButtonClicked:boolean;
  constructor() { 
    this.isButtonClicked = false;
    this.empName = "";
    this.empList = new Array<String>();
    this.empList.push("Anil", "Rama", "Chama", "Eric", "Adam", "punter");
  }

  clickButton():void{
    this.empName = ""+this.empName
    this.isButtonClicked = true;
  }

  ngOnInit() {
    this.employeeDetails2.push({eName:"Sudhir",addr:"abc"});
    this.employeeDetails2.push({eName:"Ramam",addr:"absassac"});
    this.employeeDetails2.push({eName:"Susasasdhir",addr:"ab121555c"});
    this.employeeDetails2.push({eName:"Sudhsasasir",addr:"ab21212c"});
    this.employeeDetails2.push({eName:"Suasasasadhir",addr:"ab2121c"});
    this.eNo = 555;
  }

}
