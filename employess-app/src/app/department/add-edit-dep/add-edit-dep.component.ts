import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  @Input() dept;
  dept_id:string;
  dept_name:string;
  constructor(private service:SharedService) {}
  
  ngOnInit(): void {
    setTimeout(() => {
    this.dept_id =this.dept.dept_id;
    this.dept_name=this.dept.dept_name; 
    });
    
  }
  
 addDepartment(){
  var val = {
           departmentName:this.dept_name
          };
         
  this.service.addDepartment(val).subscribe(res=>{
    alert(res.toString());
  });
 }
 updateDepartment(){
  var val = {
    departmentID:this.dept.dept_id,
    departmentName:this.dept.dept_name
   };
this.service.updateDepartment(val).subscribe(res=>{
alert(res.toString());
});

 }
}
