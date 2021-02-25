import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) { }
  baseUrl = environment.baseUrl;
  userList :[];

  getUsers(){
    return this.userList;
  }


  register(user){
    return this.http.post(this.baseUrl +"admin", user);
    console.log('service');
  }
  getList(){
    return this.http.get<any[]>(this.baseUrl +"admin").pipe(catchError(this.errHandler));
  }

  errHandler(error:HttpErrorResponse){
      return throwError(error.message || "Unkown error response");
  }
  loginAuth(log){
    console.log('call heres')
    return this.http.post(this.baseUrl +"admin", log).pipe(map((data:any)=>{
        const currentUser = data.id;
        console.log(currentUser);
    }));
  }

}
