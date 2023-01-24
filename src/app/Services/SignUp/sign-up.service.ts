import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signup } from 'src/app/user/signup/signup';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  API_URL=environment.API_URL
  constructor(private http:HttpClient) { }

  post(data:signup){
    return this.http.post(this.API_URL+`signup`,data)
  }

  getLogin(data:signup){
    return this.http.get<signup>(this.API_URL+`signup?email=${data.email}&&pasword=${data.password}`)
  }
}
