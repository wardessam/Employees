import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly API_URL ="https://localhost:7129/api";
readonly Photo_URL = "https://localhost:7129/Photos/";
  constructor(private http: HttpClient) { }
  //Department Methods
  getDepartments():Observable<any[]>{
    return this.http.get<any>(this.API_URL+'/department');
  }
  addDepartment(val:any){
    return this.http.post(this.API_URL+'/department',val)
  }
  updateDepartment(val:any){
    return this.http.put(this.API_URL+'/department',val)
  }
  deleteDepartment(val:any){
    return this.http.delete(this.API_URL+'/department/'+val)
  }
  //Employee Methods
  getEmployees():Observable<any[]>{
    return this.http.get<any>(this.API_URL+'/employee');
  }
  addEmployee(val:any){
    return this.http.post(this.API_URL+'/employee',val)
  }
  updateEmployee(val:any){
    return this.http.put(this.API_URL+'/employee',val)
  }
  deleteEmployee(val:any){
    return this.http.delete(this.API_URL+'/employee/'+val)
  }
  //Uploading Profile Picture
  uploadPhoto(val:any){
    return this.http.post(this.API_URL+'/Employee/SaveFile',val);
  }
  //Getting all departments names
  getDepsNames():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'/Employee/GetAllDepartmentsNames');
  }
  //Getting Family Members
  getFamilyMembers(val:any){
    return this.http.get(this.API_URL+'/Employee/GetFamilyMembers/'+val);
  }
  //Adding Family Member
  addFamilyMember(val:any){
    return this.http.post(this.API_URL+'/Employee/AddFamilyMember',val);
  }
  //Deleting Family Member - All family members
  deleteFamilyMembers(val:any){
    return this.http.delete(this.API_URL+'/Employee/DeleteFamilyMembers/'+val);
  }
  //Deleting Specific Family Member 
  deleteFamilyMember(val:any){
    return this.http.delete(this.API_URL+'/Employee/DeleteFamilyMember/'+val);
  }
  //Getting Department Name from its ID
  getDeptName(id){
    return this.http.get(this.API_URL+'/department/GetDeptName/'+id);
  }
   //Getting Department ID from its Name
   getDeptID(obj){
    return this.http.get(this.API_URL+'/department/GetDeptID',obj);
  }
}
