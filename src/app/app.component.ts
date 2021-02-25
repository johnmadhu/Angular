import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService} from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  get:any;
  studlist = [];
  public teachlist:string = 'this is from parent';
  constructor(){
  }
  
}
