import { Component, OnInit, ViewChild, Renderer, Input } from '@angular/core';
import { ThirdService } from './third.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  cart = [];
  items = [];


  sliderConfig=  {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private thirdService: ThirdService) { }

  ngOnInit() {
  

    this.items = this.thirdService.getProducts();
    this.cart =  this.thirdService.getThirdPage();

  }
  addToCart(product){

    this.thirdService.addProducts(product);

  }

  openCart() {
    this.router.navigate(['cart']);
  }
 

}
