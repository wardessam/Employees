import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
declare var window:any;

@Component({
  selector: 'app-show-del-emp',
  templateUrl: './show-del-emp.component.html',
  styleUrls: ['./show-del-emp.component.css']
})
export class ShowDelEmpComponent implements OnInit {
 constructor(private service:SharedService) { }

  Employees:any=[];
  formModal:any;
  ModalTitle:string;
  emp:any={};
  birthdateFilter_start:string="";
  birthdateFilter_end:string="";
  employeesWithoutFilter:any=[];
  
  ngOnInit(): void {
    this.refreshEmps();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )
    
   
  }
  deleteEmp(item:any){
    if(confirm("Are you Sure?")){
    this.service.deleteFamilyMembers(item.emp_id).subscribe(data=>{
     // alert("entered");
      //alert(data.toString());
      this.service.deleteEmployee(item.emp_id).subscribe(data=>{
        alert(data.toString());
        setTimeout(() => {
         this.refreshEmps(); 
        })
       })
    })
   
      
      
    }
   }
   editEmp(item:any){
   this.emp=item;
   this.ModalTitle = "Edit Employee"
   this.formModal.show();
   
   }
   addClick(){
     this.emp={
      emp_id :0,
      emp_firstname:"",
      emp_lastname:"",
      emp_birthdate:"", 
      emp_address:"",
      emp_mobile:"",
      emp_phone:"",
      emp_dept_id:"",
      emp_dept_name:"",
      emp_photo_filename:this.service.Photo_URL+"unknown.jpg",
      emp_age:""
     }
     
     this.ModalTitle = "Add Employee";
     this.formModal.show();
     
  
   }
   closeClick(){
     this.formModal.hide();
     this.refreshEmps();
   }
   refreshEmps(){
     this.service.getEmployees().subscribe(data=>{
       this.Employees = data;
       this.employeesWithoutFilter = data;
     })
   }
   
   filter(){
     if(this.birthdateFilter_start&&this.birthdateFilter_end){
     var start = new Date(this.birthdateFilter_start);
     var end = new Date(this.birthdateFilter_end);
    // alert(start);
    // alert(end);
     this.Employees = this.employeesWithoutFilter.filter( el =>
       new Date(el.emp_birthdate) >= start && new Date(el.emp_birthdate) <= end);
     }
     else{
       alert("Please Enter Start & End Dates to filter Properly!");
     }
    
   }
}
