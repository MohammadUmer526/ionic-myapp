import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {

  constructor(public router:Router, private fb:FormBuilder) { }

  resetPass(){
    this.router.navigateByUrl('/home')
  }

  forgetpassForm = this.fb.group({
    forgetPass: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],

  })
  ngOnInit() {
  }

}
