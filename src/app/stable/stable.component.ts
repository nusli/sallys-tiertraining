import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-stable',
  templateUrl: './stable.component.html',
  styleUrls: ['./stable.component.scss']
})
export class StableComponent implements OnInit {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
  introductionArticles: Article[] = [
    {
      id: "stable-intro1",
      pictureUrl: "../../../assets/gallery/Stall/Anlage.JPG",
      sizeing: "cover",
      title: "Reitanlage in Eimersleben",
      subtitle: "",
      text: `Der Reit- und
            Pensionsstall befindet sich in Eimersleben, nahe Helmstedt. Die Anfahrt zur
            Reitanlage ist zentral gelegen und durch die Anbindungen an die A2 und die B1 schnell
            erreichbar. Pferd und Reiter können sich hier in ruhiger ländlicher Umgebung mit der Natur
            verbunden fühlen und das schöne Ausreitgelände genießen.`,
      expendable: true,
      expand: [
        {
          id: "stable-info1",
          title: "Ausstattung der Anlage",
          text: `Die Reitanlage ist 8 ha groß und umfasst drei Stallungen mit insgesamt 23
            Pensionsboxen. Es gibt zwei Reithallen, einen Außenplatz mit Sand und zukünftig einen
            Roundpen. `,
        },
        {
          id: "stable-info1",
          title: "",
          text: `Wir bieten: Außenreitplatz 20x60 Meter, Kleine Halle 15x40 Meter, Große Halle 20x40 Meter mit
            Reiterstube und bald ein großzügiger Roundpen von 20 Metern`,
        },
      ]
    },
    {
      id: "stable-intro2",
      pictureUrl: "../../../assets/gallery/placeholder-icon.pngG",
      sizeing: "cover",
      title: "Unsere Mitarbeiterinnen",
      subtitle: "",
      text: `Unsere Mitarbeiterinnen sind das Herzstück unseres Stalls. Sie erteilen
            den Reitunterricht für Kinder auf unseren lieben Schulpferden und haben immer ein
            offenes Ohr für eure Anliegen. 
            Sie sind nicht nur erfahren und kompetent im Umgang mit Pferden, sondern auch stets
            freundlich und hilfsbereit. Ihre Leidenschaft für Pferde und Reitsport spiegelt sich in
            ihrer täglichen Arbeit wider. Sie sorgen dafür, dass sich sowohl die Pferde als auch die
            Reiter bei uns wohlfühlen.`,
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
}
