import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
// import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  getList : any;
  constructor(private service:CommonService) { 
    this.service.getList().subscribe(data=>{
      this.getList = data;
    });
  }

  ngOnInit(): void {

  }

}
