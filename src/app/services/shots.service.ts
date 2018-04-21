import { Shot } from './../interfaces/shot.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShotsService {
  shots: Shot[] = SHOTS;
  constructor() { }

  getShots() {
    const observable = Observable.create(observer => {
      setTimeout(() => {
        this.shots = SHOTS;
        observer.next(this.shots);
        observer.complete();
      }, 2000);
    });

    return observable;
  }
}

const SHOTS: Shot[] = [
  {
    title: 'Health App Mobile',
    description: 'Some new screens from my upcoming Health app project.',
    published: 'May 25, 2018',
    author: 'Guilherme Santos',
    avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg?1427634383',
    image: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_1x.png',
  },
  {
    title: 'Health App Mobile',
    description: 'Some new screens from my upcoming Health app project.',
    published: 'May 25, 2018',
    author: 'Guilherme Santos',
    avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg?1427634383',
    image: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_1x.png',
  },
  {
    title: 'Health App Mobile',
    description: 'Some new screens from my upcoming Health app project.',
    published: 'May 25, 2018',
    author: 'Guilherme Santos',
    avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg?1427634383',
    image: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_1x.png',
  },
  {
    title: 'Health App Mobile',
    description: 'Some new screens from my upcoming Health app project.',
    published: 'May 25, 2018',
    author: 'Guilherme Santos',
    avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg?1427634383',
    image: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_1x.png',
  },
  {
    title: 'Health App Mobile',
    description: 'Some new screens from my upcoming Health app project.',
    published: 'May 25, 2018',
    author: 'Guilherme Santos',
    avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg?1427634383',
    image: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_1x.png',
  },
  {
    title: 'Health App Mobile',
    description: 'Some new screens from my upcoming Health app project.',
    published: 'May 25, 2018',
    author: 'Guilherme Santos',
    avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg?1427634383',
    image: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_1x.png',
  }
];
