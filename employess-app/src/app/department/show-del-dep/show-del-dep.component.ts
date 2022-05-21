import { Component, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
declare var window:any;

@Component({
  selector: 'app-show-del-dep',
  templateUrl: './show-del-dep.component.html',
  styleUrls: ['./show-del-dep.component.css']
})
export class ShowDelDepComponent implements OnInit {

  constructor(private service:SharedService) {}
  Departments:any=[];
  formModal:any;
  ModalTitle:string;
  dept:any;
  ngOnInit(): void {
    this.refreshDeps();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    
    )
  }
  
  deleteDep(item:any){
   if(confirm("Are you Sure?")){
     this.service.deleteDepartment(item.dept_id).subscribe(data=>{
      alert(data.toString());
     })
     this.refreshDeps(); 
   }
  }
  editDep(item:any){
  this.dept=item;
  this.ModalTitle = "Edit Department"
  
  this.formModal.show();
  
  }
  addClick(){
    this.dept={
      dept_id :0,
      dept_name:""
    }
    
    this.ModalTitle = "Add Department";
    this.formModal.show();
    
 
  }
  closeClick(){
    this.formModal.hide();
    this.refreshDeps();
  }
  refreshDeps(){
    this.service.getDepartments().subscribe(data=>{
      this.Departments = data;
    })
  }
}
