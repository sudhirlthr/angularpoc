import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  private empName:String;
  private address:String
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
  }
  submitEmployee(){
    this.empService.addEmployeeInService(this.empName, this.address);
  }

}
