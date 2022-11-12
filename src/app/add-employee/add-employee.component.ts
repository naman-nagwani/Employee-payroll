import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeClass } from '../model/employee-class.model';
import { EmployeeServiceService } from '../service/employee-service.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }

  constructor(
    private router:Router,
    private service:EmployeeServiceService,
    private route:ActivatedRoute
    ){ }

  deptName: any;  
tempArr : Array<any> = [];
depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
checkBoxChange(dptname:any){

    if(!this.tempArr.includes(dptname)){
      this.tempArr.push(dptname);
    }
    else{
      const index = this.tempArr.indexOf(dptname);
      if (index > -1) { // only splice array when item is found
        this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }

  employee = new EmployeeClass("",0,"",new Date,"","",[]);

  onSubmit():void {
    this.employee.departments=this.tempArr;
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["/"])
    })
  }

}
