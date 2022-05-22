import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
 @Input() emp:any;
  emp_id:string;
  emp_dept_id:string;
  emp_deptName:string="";
  emp_photo_path:any;
  departments:any=[];
  year:any;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  this.getDeptName();
    this.loadDeps();
  }
  loadDeps(){
    this.service.getDepartments().subscribe(data=>{
      this.departments = data;
    })
  }
  calculateAge(){
    this.year = Number(this.emp.emp_birthdate.substring(0,4));
    let date =  new Date().getFullYear();
    let age = date - this.year;
    //alert(this.emp.emp_age);
    if( age <18){
      alert("Age should be above 18");
    }
    else{
      this.emp.emp_age = age.toString();
    }
  }
  validatePhoneNumber(input_str) {
    var re = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (re.test(input_str)){
       this.emp.emp_phone=input_str;
    }
    else{
      alert("Wrong Number Format!")
    }
  }
  validateMobileNumber(input_str) {
    var re = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (re.test(input_str)){
       this.emp.emp_mobile=input_str;
    }
    else{
      alert("Wrong Number Format!")
    }
  }
  addEmployee(){
    var val = {
             employee_firstname : this.emp.emp_firstname,
             employee_lastname : this.emp.emp_lastname,
             employee_birthdate : this.emp.emp_birthdate,
             employee_address : this.emp.emp_address,
             employee_phone : this.emp.emp_phone,
             employee_mobile : this.emp.emp_mobile,
             employee_photo : this.emp.emp_photo_filename,
             employee_dept_id : this.emp.emp_dept_id,
             employee_age : this.emp.emp_age,
            };
    console.log(val);
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
   }
   selectOption(event) {
     this.emp.emp_dept_id = event.target.value;
   // alert(this.emp.emp_dept_id);
  }
   updateEmployee(){
    var val = {
      employeeID:this.emp.emp_id,
      employee_firstname : this.emp.emp_firstname,
      employee_lastname : this.emp.emp_lastname,
      employee_birthdate : this.emp.emp_birthdate,
      employee_address : this.emp.emp_address,
      employee_phone : this.emp.emp_phone,
      employee_mobile : this.emp.emp_mobile,
      employee_photo : this.emp.emp_photo_filename,
      employee_dept_id : this.emp.emp_dept_id,
      employee_age : this.calculateAge()
     };
  console.log(val);
  this.service.updateEmployee(val).subscribe(res=>{
  alert(res.toString());
  });
   }
   
   getDeptName(){
    this.service.getDeptName(this.emp.emp_dept_id).subscribe((data:any)=>{
      this.emp.emp_dept_name = data.dept_name;
    })
   }
   uploadPhoto(event:any){
      var file = event.target.files[0];
      const formData: FormData = new FormData();
      formData.append('uploadedFile',file,file.name);
      this.service.uploadPhoto(formData).subscribe(data=>{
        this.emp.emp_photo_filename = this.service.Photo_URL+data.toString();
        alert(this.emp.emp_photo_filename);
        
      })
   }
}
