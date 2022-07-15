import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Illustration } from 'src/app/interfaces/Illustration';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css'],
})
export class IllustrationComponent implements OnInit {
  // export class IllustrationComponent implements OnInit, OnDestroy {

  @Input() illustration: Illustration = {} as Illustration;

  // @Output() illustrationEmitter = new EventEmitter<Illustration>();

  // myInterval: any = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  // ngOnInit(): void {
  //   this.myInterval = setInterval(() => {
  //     console.log('Hello')
  //   },1000)
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval);
  //   console.log({onDestroy: "onDestroy"});
  // }

  // addToCart() {
  // this.illustrationEmitter.emit(this.illustration);
  //   }
  // }
  addToCart() {
    this.cartService.add(this.illustration);
  }
}
