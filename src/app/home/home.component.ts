import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

employees : any;

  constructor(
    private service:EmployeeServiceService,
    private router:Router
    ){ }

  ngOnInit(): void {
    this.service.getAllEmployee().subscribe(data => {
      console.log(data);
      this.employees = Object(data)["data"];
    });
  }

  remove(employeeId: Number) :void {
    this.service.deleteEmployee(employeeId).subscribe(data =>{
      console.log(data);
    });
    this.ngOnInit();
  } 

  edit(employeeId: Number) :void {
    this.router.navigate(["/update",employeeId])
  } 

}
