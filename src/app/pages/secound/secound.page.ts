import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';




export interface Config{
  technologies: string;
}

@Component({
  selector: 'app-secound',
  templateUrl: './secound.page.html',
  styleUrls: ['./secound.page.scss'],
})

export class SecoundPage implements OnInit {


  // object to access json file
  public config: Config;

  // object for storing column
  public columns: any;

  // object for storing returned data
  public rows: any;

  constructor(public navCtrl: NavController, private _HTTP: HttpClient) {
    this.columns = [
      {prop: 'id', width: 2},
      {name: 'Stage', width: 45},
      {name: 'Role', width: 30}
    ]
   }

   ionViewDidLoad(): void {
     this. _HTTP.get('../assets/data/technologies.json').subscribe((res:Config[])=> {
       this.rows = res['technologies'];
       console.log(this.rows);
       return this.rows;
       
     });
   }


  ngOnInit() {
    this.ionViewDidLoad();
  }

}

