import { Component, ViewChild } from '@angular/core';
import { RegisterPage } from '../register/register.page';
import { ForgetpassPage } from '../forgetpass/forgetpass.page' 
import { AlertController } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {LoadingController} from '@ionic/angular';
import { map } from 'rxjs/operators';
import {} from '../pages/menu/menu.page';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import {Login } from '../login';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  data;
  massage;

  constructor(public router:Router, public alertCtrl: AlertController,
    private http: HttpClientModule, public loading: LoadingController, private fb: FormBuilder, private  loginService: SharedService){

    }

    signUp(){
      this.router.navigateByUrl('/register');
    }

    signIn(){
      this.router.navigateByUrl('/menu');
    }

    forgetPass(){
      this.router.navigateByUrl('/forgetpass');
    }

    logInForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-z0-9]+$')]]
        });

    
      ngOnInit() {
      }
}
