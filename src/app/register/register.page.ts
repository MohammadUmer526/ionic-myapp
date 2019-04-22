import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router:Router, private fb: FormBuilder) { }

  Register(){
    this.router.navigateByUrl('/home')
  }


  registrationForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    mobile_num: ['', Validators.required],
    password: ['', Validators.required ]
  });

  logIn(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }

}
