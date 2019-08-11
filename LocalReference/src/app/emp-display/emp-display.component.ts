import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emp-display',
  templateUrl: './emp-display.component.html',
  styleUrls: ['./emp-display.component.css']
})
export class EmpDisplayComponent implements OnInit {

  @Input() emp:{empName:String, address:String, phone:number};

  constructor() { }

  ngOnInit() {
  }

}
