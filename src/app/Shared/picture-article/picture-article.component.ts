import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-article',
  templateUrl: './picture-article.component.html',
  styleUrls: ['./picture-article.component.scss']
})
export class PictureArticleComponent {
  @Input() leftPicture = true;
  extendedContentAvailable = true;
  extendedContentOpen = false;
}
