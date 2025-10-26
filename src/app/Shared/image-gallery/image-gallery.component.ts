import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {

  @Input() images!: {url: string, alt: string}[];

  showBigImage = false;
  selectedImage = 0;

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    // User can always close the big image view by pressing escape
    this.closeBigImageView()
  }

  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private swipeStartTime: number = 0;
  private swipeEndTime: number = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.swipeStartTime = new Date().getTime();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.swipeEndTime = new Date().getTime();
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50; // minimum distance for a swipe
    const swipeDurationThreshold = 1000;
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold && this.swipeEndTime - this.swipeStartTime < swipeDurationThreshold ) {
      if (swipeDistance > 0) {
        this.onSwipeRight();
      } else {
        this.onSwipeLeft();
      }
    }
  }

  onSwipeLeft() {
    this.showNextImage()
    // Your function here
  }

  onSwipeRight() {
    this.showPreviousImage()
    // Your function here
  }

  openBigImageView(index: number) {
    this.showBigImage = true;
    this.selectedImage = index;
  }

  closeBigImageView() {
    this.showBigImage = false;
  }

  showPreviousImage(event?: Event) {
    if (this.selectedImage == 0) this.selectedImage = this.images.length-1
    else this.selectedImage--;
    // parent element closes the view on click
    // so we prevent the propagation of the click to that element
    if (event) {
      event.stopPropagation();
    }
    
  }

  showNextImage(event?: Event) {
    if (this.selectedImage == this.images.length-1) this.selectedImage = 0
    else this.selectedImage++;
    // parent element closes the view on click
    // so we prevent the propagation of the click to that element
    if (event) {
      event.stopPropagation();
    }
  }

  constructor() {
    
  }
}
