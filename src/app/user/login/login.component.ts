import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/Services/SignUp/sign-up.service';
import { signup } from '../signup/signup';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidation, PassValidator } from 'src/app/Valdiation/customValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any
  constructor(private api: SignUpService, private fobj: FormBuilder, private route: Router,private router:ActivatedRoute) {
    this.loginForm = fobj.group({
      email: ['', [Validators.required, EmailValidation.isValid]],
      password: ['', [Validators.required, PassValidator.isValid]]
    })
  }
  hide = true;
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params){
        console.warn(params['Access_Token']);
        
      }
    })
  }

  LoginData: signup | undefined;
  login(data: signup) {
    if(this.loginForm.status=='INVALID'){
      this.loginForm.markAllAsTouched()
    }
    else {
      // this.api.getLogin(data).subscribe(res => {
      //   this.LoginData = res
      //   if (this.LoginData) {
      //     this.route.navigate(['/user/welcome'])
      //   }
      //   console.warn("----------", this.LoginData);
      // })
      let islogin=this.api.getLogin(data)
      console.warn("---------------====",islogin);
      
    }

  }

  get Email() {
    return this.loginForm.get('email')
  }

  get Pass() {
    return this.loginForm.get('password')
  }

}
