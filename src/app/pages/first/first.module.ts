import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { IonicModule } from '@ionic/angular';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Ng2GoogleChartsModule
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
