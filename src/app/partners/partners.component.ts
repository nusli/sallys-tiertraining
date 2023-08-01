import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, AfterViewInit {


  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  @Input() article = "";

  introductionArticles: Article[] = [
    {
      id: "partner-klein-wanzleben",
      pictureUrl: "../../../assets/icons/hundesportvereinKleinWanzleben.jpg",
      sizeing: "60%",
      title: "Hundesportverein Klein Wanzleben",
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
      id: "partner-pauvi",
      pictureUrl: "../../../assets/icons/pauvi.png",
      sizeing: "60%",
      title: "PauVi DiscDogs",
      subtitle: "",
      text: `Hundefrisbee in und um Magedburg`,
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
      id: "partner-schlubeck",
      pictureUrl: "../../../assets/icons/schlubeck.png",
      sizeing: "60%",
      title: "Reiterhof Schlubeck in Bülstringen",
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
        case "hsvkw": {
          document.body.scrollTop = 500;
          break;
        }
        case "pauvi": {
          document.body.scrollTop = 800;
          break;
        }
        case "schlubeck": {
          document.body.scrollTop = 1200;
          break;
        }
      }
    }else{
      switch(this.article){
        case "hsvkw": {
          document.body.scrollTop = 200;
          break;
        }
        case "pauvi": {
          document.body.scrollTop = 500;
          break;
        }
        case "schlubeck": {
          document.body.scrollTop = 800;
          break;
        }
      }
    }
  }
}
