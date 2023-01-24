import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/Services/SignUp/sign-up.service';
import { signup } from '../signup/signup';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any
  constructor(private api:SignUpService,private fobj:FormBuilder,private route:Router) { 
    this.loginForm=fobj.group({
      email:[''],
      password:['']
    })
  }
  hide = true;
  ngOnInit(): void {
  }

  LoginData:signup|undefined;
  login(data:signup){
    this.api.getLogin(data).subscribe(res=>{
      this.LoginData=res
      if(this.LoginData)
      {
        this.route.navigate(['/user/welcome'])
      }
      console.warn("----------",this.LoginData);
    })
  }

}
