import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() dept:any;
  dept_id:string;
  dept_name:string;
  ngOnInit(): void {
    this.dept_id =this.dept.dept_id;
    this.dept_name=this.dept.dept_name;
    alert("hi");
    console.log("enter");
    alert(this.dept_id)
  }
 addDepartment(){
  // alert("Entered");
  
  var val = {
           departmentName:this.dept_name
          };
  this.service.addDepartment(val).subscribe(res=>{
    alert(res.toString());
  });
 }
 updateDepartment(){
  //alert(this.dept.dept_name);
  var val = {
    departmentID:this.dept.dept_id,
    departmentName:this.dept_name
   };
this.service.updateDepartment(val).subscribe(res=>{
alert(res.toString());
});
 }
}
