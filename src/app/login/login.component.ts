import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  router:Router;
  constructor(private formBuilder:FormBuilder, private logService:CommonService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login(){
    console.log(this.loginForm.value)
    this.logService.loginAuth(this.loginForm.value).subscribe(data =>{
       localStorage.setItem('raw',JSON.stringify(data));
     })
  }
  ngOnInit(): void {
  }

}
