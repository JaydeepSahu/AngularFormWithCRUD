import { Component } from "@angular/core";
import { EmployeeDetails } from "./employee-details";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "FormWithCRUD";

  public id:number=0;
  public name:string='';
  public mobile:string='';
  public email:string='';
  public gender:string='';
  public city:string='';
  public postalCode:string='';
  public address:string='';

  cities = [
    "Lucknow",
    "Fatehpur",
    "Jaipur",
    "Kanpur",
    "Prayagraj",
    "Delhi",
    "Kota",
    "Mirzapur",
  ];

  // EmplDetail:EmployeeDetails{}|undefined;

  EmpDetail: any = {};
  EmplList: any[] = [];
  empId: number = 0;

  SaveEmpDetails(form: NgForm) {
    debugger;
    console.log(this.EmpDetail);
    this.EmpDetail = form;
    this.empId = this.EmpDetail.id;
    if (
      this.EmpDetail.id !== null &&
      this.EmpDetail.id !== undefined &&
      this.EmpDetail.id !== "" &&
      this.EmpDetail.id !== 0
    ) {
      var index: number = this.EmplList.findIndex(
        (obj) => obj.id === this.EmpDetail.id
      );
      this.EmplList[index] = this.EmpDetail;
    } else {
      this.EmpDetail.id = this.EmplList.length+1;
      this.EmplList.push(this.EmpDetail);
    }
    this.resetForm();
  }

  DeleteEmpDetails(id: number) {
    debugger;
    this.EmplList = this.EmplList.filter((obj) => obj.id !== id);
    this.resetForm();
  }
  EditEmpDetails(id: number) {
    debugger;
    // this.EmpDetail= this.EmplList.find(
    //   (obj) => (obj.id = id)
    // ) as EmployeeDetails;
    // this.EmpDetail.name = this.EmpDetail.name;
    var index=this.EmplList.findIndex(x => x.id == id)
    this.id=this.EmplList[index].id;
    this.name=this.EmplList[index].name;
    this.mobile=this.EmplList[index].mobile;
    this.email=this.EmplList[index].email;
    this.gender=this.EmplList[index].gender;
    this.city=this.EmplList[index].city;
    this.postalCode=this.EmplList[index].postalCode;
    this.address=this.EmplList[index].address;
  }

  resetForm(){
    this.id=0;
    this.name='';
    this.mobile='';
    this.email='';
    this.gender='';
    this.city='';
    this.postalCode='';
    this.address='';
  }
}
