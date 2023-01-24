import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { signup } from './signup';
import { SignUpService } from 'src/app/Services/SignUp/sign-up.service';

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
      userName: [''],
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  signUp(data: signup) {
    this.api.post(data).subscribe(res=>{
      
    })
  }

}
