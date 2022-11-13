import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  insertEmployee(employee:any) {
    return this.httpClient.post("http://localhost:8080/employeepayrollservice/create",employee);
  }

  getAllEmployee() {
    return this.httpClient.get("http://localhost:8080/employeepayrollservice/get");
  }

  deleteEmployee(employeeId: Number) {
    return this.httpClient.delete("http://localhost:8080/employeepayrollservice/delete/"+ employeeId);
  }

  updateEmployee(employeeId: Number, employee: any) {
    return this.httpClient.put("http://localhost:8080/employeepayrollservice/update/"+ employeeId,employee)
  }

  getEmployeeById(employeeId: Number) {
    return this.httpClient.get("http://localhost:8080/employeepayrollservice/get/"+ employeeId);
  }

}
