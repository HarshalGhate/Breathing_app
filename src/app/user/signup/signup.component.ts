import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { signup } from './signup';
import { SignUpService } from 'src/app/Services/SignUp/sign-up.service';
import { EmailValidation, PassValidator } from 'src/app/Valdiation/customValidation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm: any;
  constructor(private fobj: FormBuilder,private api:SignUpService) {
    this.signupForm = fobj.group({
      userName: ['',[Validators.required]],
      email: ['',[Validators.required,EmailValidation.isValid]],
      password: ['',[Validators.required,PassValidator.isValid]]
    })
  }

  ngOnInit(): void {
  }

  signUp(data: signup) {
    if(this.signupForm.status=='INVALID'){
      this.signupForm.markAllAsTouched()
    }
    else{
      this.api.post(data).subscribe(res=>{
      
      })
    }
   
  }

  get Uname(){
    return this.signupForm.get('userName')
  }

  get Email(){
    return this.signupForm.get('email')
  }

  get pass(){
    return this.signupForm.get('password')
  }

}
