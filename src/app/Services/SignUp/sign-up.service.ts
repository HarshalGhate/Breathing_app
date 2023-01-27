import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from 'src/app/user/signup/signup';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  API_URL=environment.API_URL
  constructor(private http:HttpClient,private route:Router) { }

  post(data:signup){
    return this.http.post(this.API_URL+`signup`,data)
  }

  getLogin(data:signup){
    // return this.http.get<signup>(this.API_URL+`signup?email=${data.email}&&pasword=${data.password}`)
    this.http.get<signup[]>(this.API_URL+`signup`).subscribe(res=>{
      let User=res.find((a:signup)=>{
        if(a.email===data.email && a.password===data.password)
        {
          this.route.navigate(['/user/welcome'])
        }
        else{
          // return false;
        }
      });
    })
  }
}
