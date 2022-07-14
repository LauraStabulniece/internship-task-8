import { Component, OnInit } from '@angular/core';
interface Illustration {
  name: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css'],
})
export class IllustrationsComponent implements OnInit {
  illustrations: Illustration[] = [
    {
      name: 'Bee',
      author: 'Belinda Murphy',
      image: '../../assets/bee.jpg',
    },
    {
      name: 'Lady with the dog',
      author: 'Beatrice Sautereau',
      image: '../../assets/ladyWithTheDog.jpg',
    },
  ];
  // name: string = 'Bee';
  // author: string = 'Belinda Murphy';
  // src: string =
  //   'https://i.pinimg.com/originals/bd/86/67/bd8667b2ac2d9fee2aab13645d6fe3a9.jpg';

  // name2: string = 'Lady with the dog';
  // author2: string = 'Beatrice Sautereau';
  // src2: string =
  //   'http://1.bp.blogspot.com/-o-AKrWfiZrM/UFi2tGDC_7I/AAAAAAAAL0I/EBvaNwlQUKI/s1600/image-id21-128.jpg';

  isShowing: boolean = true;
  // isDisabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
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
}
