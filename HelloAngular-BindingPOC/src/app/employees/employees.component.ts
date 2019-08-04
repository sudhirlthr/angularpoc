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
  private inputTextData:String;
  private outputData:String;

  // for 2 way binding, just create a variable and use it in template file
  private twoWayBindingVaribale:String;

  constructor() { 
    this.empName = "Shyam";
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 3000);
    this.outputData = "Default";
  }
  getInputData(eventData:any){
    console.log((<HTMLInputElement>eventData.target).value);
    this.inputTextData = eventData.target.value;
  }

  ngOnInit() {
  }
  performOpr():void{ // for Input binding
    console.log("button clicked");
    this.outputData = this.inputTextData; 
  }

}
