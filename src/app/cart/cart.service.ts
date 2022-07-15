import { Injectable } from '@angular/core';
import { Illustration } from '../interfaces/Illustration';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Illustration[] = [];
  getCart: any;

  constructor() {}

  add(illustration: Illustration) {
    console.log(illustration);
    this.cart.push(illustration);
  }

  get() {
    return this.cart;
  }
}
