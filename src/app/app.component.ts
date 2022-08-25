import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';
  products: Product[] = [
    {
      id: '1',
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Almost new bike',
      price: 852,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Album collection',
      price: 565,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'My books',
      price: 654,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Glasses to improve your vision',
      price: 951,
      image: './assets/images/glasses.jpg'
    },
    {
      id: '6',
      name: 'The house of your dreams',
      price: 258,
      image: './assets/images/house.jpg'
    }
  ];

  onLoaded(img: string) {
    console.log('From parent ', img);
  }
}
