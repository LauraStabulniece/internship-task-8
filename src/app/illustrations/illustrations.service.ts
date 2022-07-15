import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })


@Injectable()

export class IllustrationsService {

  getIllustrations() {
    return [
      {
        name: 'bee',
        author: 'belinda murphy',
        image: '../../assets/bee.jpg',
        amount: 700,
      },
      {
        name: 'lady with the dog',
        author: 'beatrice sautereau',
        image: '../../assets/ladyWithTheDog.jpg',
        amount: 701,
      },
      {
        name: 'swimmer',
        author: 'mark ulriksen',
        image: '../../assets/swimmer.png',
        amount: 702,
      },
      {
        name: 'sonos',
        author: 'anita kunz',
        image: '../../assets/sonos.png',
        amount: 703,
      },
    ];
  }
}

