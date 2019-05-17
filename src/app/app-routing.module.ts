import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { Route } from '@angular/compiler/src/core';

const routes: Route = [
  {
    path: 'employees',
    component: EmployeesComponent,
    data: { title: 'Employees List'}
  },
  {
    path: 'employee-details/:id',
    componet: EmployeeDetailComponent,
    data: { title: 'Employee Details'}
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
    data: { title: 'Add employee' }
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { title: 'Edit employee' }
  },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
