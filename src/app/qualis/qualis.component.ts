import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-qualis',
  templateUrl: './qualis.component.html',
  styleUrls: ['./qualis.component.scss']
})
export class QualisComponent implements OnInit, AfterViewInit{


  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  @Input() article = "";

  introductionArticles: Article[] = [
    {
      id: "qualis-zeugnis",
      pictureUrl: "../../../assets/qualis/zeugnis.jpg",
      sizeing: "60%",
      title: "Abschlusszeugnis zur Pferdewirtin",
      subtitle: "",
      text: ``,
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "qualis-dosb",
      pictureUrl: "../../../assets/qualis/dosb.jpg",
      sizeing: "60%",
      title: "DOSB-Reitsportlizenz",
      subtitle: "",
      text: ``,
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "qualis-ziemer",
      pictureUrl: "../../../assets/icons/ziemer.png",
      sizeing: "60%",
      title: "Ausbildung Hundetrainerin",
      subtitle: "",
      text: ``,
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "qualis-wegberg",
      pictureUrl: "../../../assets/qualis/wegberg.jpg",
      sizeing: "contain",
      title: "Fortbildung Locagility",
      subtitle: "",
      text: ``,
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "qualis-baumann",
      pictureUrl: "../../../assets/qualis/baumann.jpg",
      sizeing: "contain",
      title: "Praktikum Problemhunde",
      subtitle: "",
      text: ``,
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "qualis-baumann",
      pictureUrl: "../../../assets/qualis/baumann2.jpg",
      sizeing: "contain",
      title: "Workshop aggressive Hunde",
      subtitle: "",
      text: ``,
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
  ]
  ngOnInit(): void {
    document.body.scrollTop = 0;

  }
  ngAfterViewInit(): void {
    if(!this.mobilePortrait){
      switch(this.article){
        case "zeugnis": {
          document.body.scrollTop = 500;
          break;
        }
        case "dosb": {
          document.body.scrollTop = 800;
          break;
        }
        case "ziemer": {
          document.body.scrollTop = 1200;
          break;
        }
      }
    }else{
      switch(this.article){
        case "zeugnis": {
          document.body.scrollTop = 200;
          break;
        }
        case "dosb": {
          document.body.scrollTop = 500;
          break;
        }
        case "ziemer": {
          document.body.scrollTop = 800;
          break;
        }
      }
    }
  }

}
