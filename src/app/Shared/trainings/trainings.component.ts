import { Component, Input } from '@angular/core';
import { Article } from 'src/app/Models/article.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {
  @Input() framesAvailable = true;
  @Input() mobilePortrait = false;
  @Input() introductionArticles: Article[] = [{
    id: "dummy",
    pictureUrl: "",
    title: "",
    subtitle: "",
    text: "",
    expendable: false,
    expand: [
      {
        id: "",
        title: "",
        text: ``,
      },
    ]
  },]

  @Input() frameArticles!: Article[];

  @Input() articlesOpen = [false, false, false, false];
  @Input() contentsOpen = [false, false, false, false];


  descriptionOpen = false;
  chosenContent = [
    {
      title: "Was ist eigentlich Fun Agility?",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      title: "Warum Fun Agility?",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      title: "Was muss ich beachten?",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ]

  closeOthers(openFrame: number, open: boolean){
    console.log(openFrame, open);
    for (let i = 0; i<this.contentsOpen.length; i++){
      this.contentsOpen[i] = false;
    }
    if(open){
      for (let i = 0; i<this.articlesOpen.length; i++){
        this.articlesOpen[i] = false;
      }
      this.articlesOpen[openFrame] = true;
      this.chosenContent = this.frameArticles[openFrame].expand;
    }
  }
  closeContents(frameOne: number, frameTwo: number){
    this.contentsOpen[frameOne] = false;
    this.contentsOpen[frameTwo] = false;
  }
}
