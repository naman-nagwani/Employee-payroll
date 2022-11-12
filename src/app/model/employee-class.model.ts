export class EmployeeClass {

    employeeId:number=0;
    name:string="";
    salary:number=0;
    gender:string="";
    startDate:Date=new Date();
    note:string="";
    profilePic:string="";
    departments:Array<any>=["",""];


    constructor(name:string,salary:number,gender:string,startDate:Date,note:string,profilePic:string,departments:Array<any>) {

        this.name=name;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
        this.note=note;
        this.profilePic=profilePic;
        this.departments=departments;

    }

}
