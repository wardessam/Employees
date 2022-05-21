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
  emp_firstname:string;
  emp_lastname:string;
  emp_birthdate:string;
  emp_address:string;
  emp_mobile:string;
  emp_phone:string;
  emp_dept_id:string;
  emp_photo:string;
  emp_age:string;
  emp_photo_path:any;
  departments:any=[];
  year:any;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadDeps();
  }
  loadDeps(){
    this.service.getDepsNames().subscribe(data=>{
      this.departments = data;
      this.emp_id = this.emp.emp_id;
      this.emp_firstname = this.emp.emp_firstname;
      this.emp_lastname = this.emp.emp_lastname;
      this.emp_birthdate = this.emp.emp_birthdate;
      this.emp_address = this.emp.emp_address;
      this.emp_mobile = this.emp.emp_mobile;
      this.emp_phone = this.emp.emp_phone;
      this.emp_dept_id = this.emp.emp_dept_id;
      this.emp_age = this.emp.emp_age;
      this.emp_photo_path = this.service.Photo_URL + this.emp_photo;

    })
  }
  calculateAge(){
    this.year = Number(this.emp_birthdate.substring(0,4));
    let date =  new Date().getFullYear();
    this.emp_age = (date - this.year).toString();
    return this.emp_age;
  }
  addEmployee(){
    // alert("Entered");
    var val = {
             employee_firstname : this.emp_firstname,
             employee_lastname : this.emp_lastname,
             employee_birthdate : this.emp_birthdate,
             employee_address : this.emp_address,
             employee_phone : this.emp_phone,
             employee_mobile : this.emp_mobile,
             employee_photo : this.emp_photo,
             employee_dept_id : this.emp_dept_id,
             employee_age : this.calculateAge(),
            };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
   }
   updateEmployee(){
    var val = {
      employee_firstname : this.emp_firstname,
      employee_lastname : this.emp_lastname,
      employee_birthdate : this.emp_birthdate,
      employee_address : this.emp_address,
      employee_phone : this.emp_phone,
      employee_mobile : this.emp_mobile,
      employee_photo : this.emp_photo,
      employee_dept_id : this.emp_dept_id,
      employee_age : this.calculateAge()
     };
  this.service.updateEmployee(val).subscribe(res=>{
  alert(res.toString());
  });
   }
   uploadPhoto(event:any){
      var file = event.target.files[0];
      const formData: FormData = new FormData();
      formData.append('uploadedFile',file,file.name);
      this.service.uploadPhoto(formData).subscribe(data=>{
        this.emp_photo = data.toString();
        this.emp_photo_path = this.service.Photo_URL + this.emp_photo;
      })
   }
}
