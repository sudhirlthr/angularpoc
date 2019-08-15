import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-display',
  templateUrl: './emp-display.component.html',
  styleUrls: ['./emp-display.component.css']
})
export class EmpDisplayComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

}
