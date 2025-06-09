import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-pension',
  templateUrl: './pension.component.html',
  styleUrls: ['./pension.component.scss']
})
export class PensionComponent implements OnInit {
  pricesOpen = false;
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }

  introductionArticles: Article[] = [
    {
      id: "pension-intro1",
      pictureUrl: "./assets/gallery/Pension/Box.JPG",
      sizeing: "cover",
      title: "Die Boxen",
      subtitle: "",
      text: `Unsere drei Stallungen sind groß, hell und freundlich und mit hohen Decken
        ausgestattet. Die Stallgebäude bieten zu jeder Jahreszeit ein angenehmes Klima. Die
        Pferdeboxen sind überwiegend mit einem Außenfenster. Jeder Einsteller hat einen Spind
        und einen Platz in der Sattelkammer. `,
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
      id: "pension-intro2",
      pictureUrl: "./assets/gallery/placeholder-icon.png",
      sizeing: "cover",
      title: "Fütterung und Stallpflege",
      subtitle: "",
      text: `Die Pensionsboxen werden werktags gemistet. Unsere Pferde stehen auf Stroh. Für
        Allergiepferde bieten wir Strohpellets an. Es wird morgens und abends bedarfsgerecht
        Kraftfutter gefüttert, sowie drei Mal täglich ausreichend Heu. Wir legen großen Wert auf
        eine bedarfsgerechte Fütterung und bieten hochwertiges Heu und abgestimmtes
        Kraftfutter an. Unser geschultes Personal sorgt täglich für die Pflege und Kontrolle der
        Pferde, um sicherzustellen, dass jedes Tier die bestmögliche Betreuung erhält.`,
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
      id: "pension-intro3",
      pictureUrl: "./assets/gallery/Pension/Weide.JPG",
      sizeing: "cover",
      title: "Auslauf und Weide",
      subtitle: "",
      text: `Die Pferde genießen täglichen Weidegang auch am Wochenende und and Feiertagen inklusive
      Wasserversorgung von mindestens 5 Stunden auf Koppeln, die regelmäßig gepflegt werden. 
      Die Pferde stehen in Kleingruppen oder bei Bedarf auch in
      Einzelhaltung. Sie werden geführt raus- und reingebracht. Auch im Winter gibt es die
      Möglichkeit auf Freigang: Hierfür werden demnächst moderne Winterpaddocks ohne
      Matsch errichtet. Um die Sicherheit der Pferde zu gewährleisten, gehen wir immer
      nachts noch eine Runde durch den Stall.`,
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
      id: "pension-intro4",
      pictureUrl: "./assets/gallery/placeholder-icon.png",
      sizeing: "cover",
      title: "Gemeinschaft",
      subtitle: "",
      text: `Gemeinschaft ist uns sehr wichtig, wir freuen uns daher darauf, schöne
        Nachmittage mit gemeinsamem Cappuccino und entspannte Abende mit euch allen zu genießen; zum Beispiel mit
        leckerer Bratwurst, regelmäßigen Veranstaltungen und gemeinsamen Treffen.`,
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
      id: "pension-intro5",
      pictureUrl: "./assets/gallery/placeholder-icon.png",
      sizeing: "cover",
      title: "Preiswert",
      subtitle: "",
      text: `Die Kostenpauschale für eine Box beträgt 500 Euro im Monat - Inbegriffen Kraftfutter und
        Einstreu. Service ist ebenso die Tierarztbestellung für gemeinschaftliche Impfungen
        und Wurmkuren, und bei Bedarf selbstverständlich eine individuelle Medikamentengabe.
        Außerdem organisieren wir nach Wunsch die Bestellung unseres Hufschmiedes.`,
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
