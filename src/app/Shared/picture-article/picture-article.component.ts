import { style, transition, trigger, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article.model';
import { Subarticle } from 'src/app/Models/subarticle.model';

@Component({
  selector: 'app-picture-article',
  templateUrl: './picture-article.component.html',
  styleUrls: ['./picture-article.component.scss'],

})
export class PictureArticleComponent implements OnInit {

  @Input() mobilePortrait = false;
  @Input() leftPicture = true;
  @Input() article!:Article;

  extendedContentAvailable = true;
  extendedContentOpen = false;

  extend: Subarticle[] = [
    {
      id: "",
      title: "",
      text: "",
    },
  ]

  ngOnInit(): void {
    this.extendedContentAvailable = this.article.expendable;
    this.extend = this.article.expand;
  }

}
