import { Component, OnInit } from '@angular/core';
import { Illustration } from '../interfaces/Illustration';
import { IllustrationsService } from './illustrations.service';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css'],
})
export class IllustrationsComponent implements OnInit {
  // constructor(private illustrationsService: IllustrationsService) {
  //   this.illustrations = this.illustrationsService.getIllustrations();
  // }

  // constructor(private illustrationsService: IllustrationsService) {

  //   this.illustrations = this.illustrationsService.getIllustrations();
  // }

  illustrations: Illustration[] = [];

  constructor(private illustrationsService: IllustrationsService) {}
  // cart: Illustration[] = [];

  isShowing: boolean = true;

  // cart: Illustration[] = [];
  // name: string = 'Bee';
  // author: string = 'Belinda Murphy';
  // src: string =
  //   'https://i.pinimg.com/originals/bd/86/67/bd8667b2ac2d9fee2aab13645d6fe3a9.jpg';

  // name2: string = 'Lady with the dog';
  // author2: string = 'Beatrice Sautereau';
  // src2: string =
  //   'http://1.bp.blogspot.com/-o-AKrWfiZrM/UFi2tGDC_7I/AAAAAAAAL0I/EBvaNwlQUKI/s1600/image-id21-128.jpg';

  // isShowing: boolean = true;
  // isDisabled: boolean = false;
  // constructor() {
  //   console.log({constructor: "constructor"});
  // }

  ngOnInit(): void {
    // console.log({onInIt: "OnInIt"});
    this.illustrations = this.illustrationsService.getIllustrations();
  }
}
// addToCart(illustration: Illustration) {
// console.log(illustration);
// }
// toggleIllustrations() {
//   this.isShowing = !this.isShowing;
// }

// handleClick() {
//   this.isDisabled = true;
// }

// myName: string = '';
// handleInput(event: any) {
//   this.myName = event.target.value;
// }
