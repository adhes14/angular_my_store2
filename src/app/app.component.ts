import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';
  showImg: boolean = true;

  onLoaded(img: string) {
    console.log('From parent ', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
