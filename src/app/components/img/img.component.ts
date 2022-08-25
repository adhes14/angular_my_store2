import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/images/default.png';
  counter: number = 0;
  counterFn: number | undefined;

  constructor() {
    // Before render
    // No run async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // bafore render - during changes
    // eval input changes-- n changes on inputs
    console.log('ngOnchanges', 'imgValue =>', this.img);
    console.log('changes: ', changes);
  }

  ngOnInit(): void {
    // Before render
    // Could async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('run counter: ', this.counter)
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // children handler
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('From child');
    this.loaded.emit(this.img);
  }
}
