import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/images/default.png';

  constructor() {
    // Before render
    // No run async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    // bafore render - during changes
    // eval input changes-- n changes on inputs
    console.log('ngOnchanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // Before render
    // Could async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    // after render
    // children handler
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('From child');
    this.loaded.emit(this.img);
  }
}
