import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MbscModule } from '@mobiscroll/angular-lite';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { first } from 'rxjs/operators';
import { SecoundPage } from '../secound/secound.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../first/first.module#FirstPageModule'
      },
      {
        path: 'secound',
        loadChildren: '../secound/secound.module#SecoundPageModule'
         }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/first'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MbscModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
