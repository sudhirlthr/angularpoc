import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpDisplayComponent } from './emp-display/emp-display.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpFormComponent,
    EmpDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
