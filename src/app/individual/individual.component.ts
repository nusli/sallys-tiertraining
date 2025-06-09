import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit{
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  introductionArticles: Article[] = [
    {
      id: "individual-intro1",
      pictureUrl: "./assets/pictures/individual1.JPG",
      sizeing: "cover",
      title: "Was bedeutet Einzeltraining?",
      subtitle: "",
      text: `Seit vielen Jahren schule und unterstütze ich Menschen langfristig und nachhaltig im fachgerechten Umgang mit Hunden. Das Ziel meiner Arbeit ist eine bessere Erziehung, denn diese führt zu einer tieferen Bindung und mehr Entspanntheit im Zusammenleben von Mensch und Hund. `,
      expendable: true,
      expand: [
        {
          id: "individual-intro1-1",
          title: "",
          text: `Ich möchte mit meinem Wissen Menschen und Hunden helfen, genau das zu erreichen, was sie sich wünschen. Mein Schwerpunkt liegt demzufolge in der Vermittlung von Wissen im Hinblick auf das Verhalten und die Lernvorgänge bei Hunden sowie der praktischen Anwendung dieses Wissens. Während meiner Arbeit mit Hunden und deren Begleitern habe ich dies festgestellt: Vieles in der Hund-Kommunikation läuft unbewusst. Hier möchte ich unterstützen und anleiten. Gemeinsam finden wir einen Weg, um mehr Bewusstsein für die Körpersprache und Stimme zu erlangen. In meinen Kursen werden alltagstaugliche, moderne und lösungsorientierte Trainings angeboten.
          `,
        },
      ]
    },
    {
      id: "individual-intro2",
      pictureUrl: "./assets/pictures/individual2.JPG",
      sizeing: "cover",
      title: "Mein Einzeltraining",
      subtitle: "",
      text: "Haben Sie Fragen, Sorgen, Probleme im Umgang mit Ihrem Hund oder suchen Sie eine neue Beschäftigungsmethode? Oder brauchen Sie einen Hundeführerschein mit Zertifikat sowie Vorbereitung für den Wesenstest? Sprechen Sie mich gern an, zusammen finden wir eine Lösung!",
      expendable: true,
      expand: [
        {
          id: "individual-intro2-1",
          title: "",
          text: `Mein Einzeltraining ist grundsätzlich immer bedürfnisorientiert und individuell auf Sie und Ihren 4-Beiner zugeschnitten und angepasst.
          Es findet entweder bei Ihnen zu Hause oder auf meinem Trainingsgelände statt und ich nehme mir die Zeit, um Methoden und Trainingsschritte/ziele mit Ihnen gemeinsam zu entwickeln und umzusetzen.
          Warum Einzeltraining? Weil ein Hund mit Verhaltensauffälligkeiten sich stark von seinem Umfeld ablenken lässt und in einer Gruppe, gerade bei Leinenaggression, sehr schnell überfordert wäre.
          In einem kontinuierlich hohen Stresslevel ist es sehr schwer dem Hund zu vermitteln, was wir von ihm erwarten und ihm Souveränität und Sicherheit zu vermitteln.
          Hier ist ein Einzeltraining absolut sinnvoll. Wir erstellen einen individuell auf Ihre häusliche Situation abgestimmten Trainingsplan, der alle Bedürfnisse Ihres Hundes berücksichtigt.
          Vor Ort im häuslichen Bereich steigern wir dann beständig durch strukturierte Übungen das Trainingslevel und verbessern somit die Situation Schritt für Schritt. Sie werden sehen: Es wird einfacher mit Ihrem Hund zusammenzuleben.
          `,
          price: "70 Euro",
          price6: "400 Euro",
          price10: "630 Euro",
        },
      ]
    },
    {
      id: "individual-intro3",
      pictureUrl: "./assets/pictures/individual3.JPG",
      sizeing: "cover",
      title: "Wichtiger Hinweis für Tierheime und ähnliche Einrichtungen",
      subtitle: "",
      text: "Wenn Sie in Ihrer Einrichtung einen oder mehrere Hunde haben, die sehr schwer zu vermitteln sind, bei denen Sie nicht weiterkommen oder die mit dem sogenannten Zwingerkoller beginnen, kann ich Ihnen mit meinem besten Wissen und meinen Ideen helfen, diese Hunde wieder zurück ins Leben zu bringen.",
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
}
