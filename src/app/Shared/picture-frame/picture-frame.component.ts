import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent{
  @Input() articleOpen = false;
  @Input() contentOpen = false;

  borderOn = false;
  @Input() frame: any = {
    title: 'Fun Agility',
    claim: 'Was ist eigentlich Fun Agility?',
    text: 'elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }
  @Output() contentOpenChange = new EventEmitter<boolean>();
  @Output() articleOpenChange = new EventEmitter<boolean>();

  getContent():void
  {
    this.contentOpen = true;
    this.contentOpenChange.emit(this.contentOpen);
  }
  openArticle(){
    this.articleOpen = !this.articleOpen;
    this.articleOpenChange.emit(this.articleOpen);
  }
}
