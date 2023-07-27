import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Article } from 'src/app/Models/article.model';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent{
  @Input() mobilePortrait = false;
  @Input() articleOpen = false;
  @Input() contentOpen = false;
  @Input() article!: Article;
  borderOn = false;
  
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
