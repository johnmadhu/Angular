import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public courseId:any;
  constructor(private _actRoute:ActivatedRoute, private _route:Router) { }
  ngOnInit(): void {
    // let cId = parseInt(this._actRoute.snapshot.paramMap.get('id'));
    // this.courseId = cId;
     this._actRoute.paramMap.subscribe((params:ParamMap)=>{
        let pId = parseInt(params.get('id'))
        this.courseId = pId;
     })
  }
  onPrev(){
    let prId = this.courseId - 1;
    this._route.navigate(['/student',prId])
  }
  onNext(){
    let nexId = this.courseId + 1;
    this._route.navigate(['/student',nexId])
  }
  back(){
      let selectedId = this.courseId
      this._route.navigate(['/home',{id:selectedId}])
      // this._route.navigate(['/home'])
  }
}
