import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonService } from '../common.service';
// import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public list = [
    {"id":1,"name":"angular"},
    {"id":2,"name":"NodeJs"},
    {"id":3,"name":"Facebook"},
    {"id":4,"name":"Reactjs"},
    {"id":5,"name":"Vuejs"}
  ]
  getList : any;
  public errMsg;
  public courseId;
  constructor(private service:CommonService, private router:Router, private _actRoute:ActivatedRoute) { 
    this.service.getList().subscribe(data=>
      this.getList = data,
      error => this.errMsg = error 
    );
  }
  delete(i){
    this.getList.splice(i,1);
  }
   getId(x){
      this.router.navigate(['/student', x.id])
     
  }
  
  ngOnInit(): void {
    this._actRoute.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.courseId = id;
    })
    
    
  }
  isSelected(i){
    return i.id === this.courseId;
  }
 
}
