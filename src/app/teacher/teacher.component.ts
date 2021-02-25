import { Component, Input, OnInit } from '@angular/core';
import { CommonService} from '../common.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  list:any;
  @Input() fromParent:any
  constructor(private CommonServ:CommonService) { 
    this.CommonServ.getList().subscribe(data =>{
      const list = JSON.stringify(data);
      console.log(list);
    })
  }

  // teachlist:any[];
  // get:any[];

    
  
  ngOnInit(){
  }

}
