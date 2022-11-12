import { Component, OnInit } from '@angular/core';
import { EmployeeClass } from '../model/employee-class.model';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

employees : any;

  constructor(
    private service:EmployeeServiceService
    ){ }

  ngOnInit(): void {
    this.service.getAllEmployee().subscribe(data => {
      console.log(data);
      this.employees = Object(data)["data"];
    });
  }

}
