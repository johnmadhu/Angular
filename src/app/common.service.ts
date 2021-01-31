import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) { }
  baseUrl = environment.baseUrl;
  register(user){
    return this.http.post(this.baseUrl +"admin", user);
    console.log('service');
  }
  getList(){
    return this.http.get(this.baseUrl +"admin");
  }
  // newServiceCall(user){
  //   return this.http.post(this.baseUrl + "admin", user);
  // }

}
