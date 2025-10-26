import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {

  @Input() images!: {url: string, alt: string}[];

  constructor() {
    
  }
}
