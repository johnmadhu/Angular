import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private apiService:CommonService) { 
    this.regForm = formBuilder.group({
      name:['',Validators.required],
      mail:['', [Validators.required,
                  Validators.email]],
      phone:['',Validators.required],
      role:['', Validators.required],
      district:['',Validators.required]
    })
  }
  addUser(){
    console.log(this.regForm)
      this.apiService.register(this.regForm.value).subscribe(response =>{
        // this.router.navigate(['../login']);
      },
      error=>{
        console.log('registration not done!')
      })
      //  console.log(this.regForm.value);
  };

  ngOnInit(): void {
    // console.log(this.regForm.value);
  }
  ngOnChanges(): void {
    console.log('onchange');
  }

}
