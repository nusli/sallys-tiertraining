import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, AfterViewInit{


  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  @Input() openArticles = [false, false, false, false];

  frameArticles: Article[] = [
    {
      id: "frame-funagility",
      pictureUrl: "../../../assets/pictures/frame_funagility.jpg",
      title: "Funagility",
      subtitle: "Spaß und Auslastung",
      text: "Gemeinsam mit eurem vierbeinigen Freund meistert ihr hierbei einen Hindernisparcours, mit den unterschiedlichsten Geräten. Neben der körperlichen Auslastung steht bei mir der Spaß im Vordergrund.",
      mobileText: "Ein Hindernisparcours für Spaß und körperliche Auslastung",
      expendable: true,
      expand: [
        {
          id: "frame-funagility1",
          title: "Was ist Funagility?",
          text: `Beim ursprünglich aus England stammenden Agility, geht es um die fehlerfreie Bewältigung eines Parcours in kürzester Zeit. Beim Funagility steht jedoch nicht die Bestzeit, sondern der Spaß mit dem besten Freund im Vordergrund.
          Dazu werden die Hindernisse individuell dem Hund, seiner Größe, der Konstitution und dem Alter angepasst.
          Euer Hund überwindet ohne Leine unter anderem Hürden, durchquert Tunnel, bewältigt die A-Wand und muss die Wippe meistern. Wichtig ist hierfür eine gesunde Hund-Mensch-Beziehung, um den Hund nur mittels Hörzeichen und Körpersprache durch den Parcours zu lenken.
          `,
        },
        {
          id: "frame-funagility2",
          title: "Welche Voraussetzungen sollten erfüllt werden?",
          text: `Damit Frauchen/Herrchen und natürlich auch der Vierbeiner dabei Spaß haben, ist ein gewisser Grundgehorsam erforderlich.
          Auch junge Hunde können an diesem Kurs teilnehmen und können so von Beginn an lernen, ihren Körper richtig einzusetzen und gemeinsam mit ihrem Besitzer neue Aufgaben zu lösen.
          Natürlich wird darauf geachtet, dass sie keine Sprünge ausüben und die Geräte an das Alter angepasst sind.
          `,
        },
        {
          id: "frame-funagility2",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Fun-Agility geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen.
          `,
          price: "20 Euro",
          price10: "185 Euro",
        },
      ]
    },
    {
      id: "frame-locagility",
      pictureUrl: "../../../assets/pictures/card_locagility.jpg",
      title: "Locagility",
      subtitle: "Auslastung für alle",
      text: "Locagility ist eine Mischung aus Longieren, Cavaletti-Trainung und Agility zur kognitiven und körperlichen Auslastung von Hunden aller Altersklassen.",
      mobileText: "Eine Mischung verschiedener Trainings zur kognitiven und körperlichen Auslastung",
      expendable: true,
      expand: [
        {
          id: "frame-locagility1",
          title: "Was ist Locagility?",
          text: ` Locagility ist eine Sportart, die kognitiven Anspruch stellt, die Spaß macht und in die man Hunde aller Altersklassen integrieren kann.
          Vor allen Dingen für Hunde, welche aus dem physiotherapeutischen, bzw. medizinischen Bereich kommen und sich z.B. nach einer OP in einer Rekonvaleszenszeit befinden, ist diese Sportart sehr gut geeignet.
          Durch Teamwork und Vertrauen bei der Arbeit mit Hindernissen. wird an der Lösung von Problemen gearbeitet. So werden Konflikte gemeinsam gelöst.
          Verschiedene Schwierigkeitslevel und Varianten sorgen dafür, dass der Hund ein erhöhtes Konfliktlösungspotential erreicht. Seine Selbstsicherheit wird gestärkt und es stellt sich ein neues Gleichgewicht ein.
          `,
        },
        {
          id: "frame-locagility2",
          title: "Welche Schwierigkeitsstufen gibt es?",
          text: `Im Hindernisbereich gibt es 5 Schwierigkeitsgrade.
          `,
        },
        {
          id: "",
          title: "",
          text: ` Bodenebene Hindernisse: Matten - Koordinationsleitern - Stangen`,
        },
        {
          id: "",
          title: "",
          text: `Bodennahe Hindernisse: Markierungsteller oder Pylonen mit Stangen`,
        },
        {
          id: "",
          title: "",
          text: `Begehbare Hindernisse: Kisten - Podeste - Brettleitern - Brücken`,
        },
        {
          id: "",
          title: "",
          text: `Begrenzende Hindernisse: Ringe - Engpässe - Tunnel - Zaungänge`,
        },
        {
          id: "",
          title: "",
          text: `Balance Hindernisse: Luftkissen - Wackelebene - Hängematte`,
        },
        {
          id: "frame-locagility3",
          title: "Wie läuft ein Training ab und wer kann mitmachen?",
          text: `Die Hindernisse werden alle nach Schwierigkeitsgrad in Einzelübungen außerhalb des Longierkreises erarbeitet.
          Danach werden verschiedene Einzelübungen zusammengeführt, bis hin zum zusammenhängenden Parcours.
          Es gibt 1 bis 3 Laufbahnen, durch die der Hund läuft. Hierbei geht es nicht um das Tempo.
          Jede Person und jeder Hund kann mitmachen, so auch Hunde mit HD, Spondylose und anderen Erkrankungen des Bewegungsapparates.
          `,
        },
        {
          id: "frame-locagility4",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Locagility geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen.
          `,
          price: "20 Euro",
          price10: "185 Euro",
        },
      ]
    },
    {
      id: "frame-mantrailing",
      pictureUrl: "../../../assets/pictures/card_mantrailing.JPG",
      title: "Mantrailing",
      subtitle: "Artgerechtes Auslasten",
      text: "Eine Möglichkeit, wie man Hunde artgerecht auslasten kann, ist das Mantrailing - die Suche nach einem Menschen anhand seines Individual-Geruchs.",
      mobileText: "Die Suche nach einem Menschen anhand seines Individual-Geruchs",
      expendable: true,
      expand: [
        {
          id: "frame-mantrailing1",
          title: "Was ist Mantrailing?",
          text: ` Immer mehr Hundehalter entdecken das Mantrailing für sich und ihren vierbeinigen Partner als Hobby und ideale Auslastung.
          Gemeinsam als Team geht es auf Vermisstensuche.
          Der Hund bekommt hierfür einen Geruchsartikel wie z. B eine getragene Socke der zu suchenden Person und los geht es.
          `,
        },
        {
          id: "frame-mantrailing2",
          title: "Wie funktioniert das Training?",
          text: `Natürlich bedeutet dies kleinschrittige Arbeit, bis euer Hund später lange und anspruchsvolle Trails ausarbeiten kann und ihr gemeinsam ans Ziel kommt.
          Ausgerüstet mit einem gut sitzenden Geschirr und einer Schleppleine lernt euer Hund dieser einen Spur nachzugehen und sich nicht von anderen Gerüchen ablenken und irritieren zu lassen.
          `,
        },
        {
          id: "frame-mantrailing3",
          title: "Worauf basiert Mantrailing?",
          text: `Der Hund gehört zu den sogenannten Makrosmatikern, d.h. zu den Lebewesen, bei denen der Geruchssinn sehr gut entwickelt ist und in ihrem Leben eine besonders große Rolle spielt.
          Der Hund hat ca. 250 Mio. Riechzellen, wobei Menschen im Vergleich nur ca. 5 Mio. dieser Zellen besitzen.
          Das Riechhirn, wo alle Geruchsinformationen verarbeitet und weitergeleitet werden, macht beim Hund 10 % des Gehirns aus - bei uns Menschen lediglich 1 %.
          Daher ist Mantrailing einer der artgerechtesten Beschäftigung für den Hund und die meisten Hunde sind mit Feuereifer dabei.
          `,
        },
        {
          id: "frame-mantrailing4",
          title: "Worauf kommt es an?",
          text: `Unerlässlich ist der Spaß an der gemeinsamen Arbeit.
          Der Anspruch liegt nicht auf einer Ausbildung zum geprüften Rettungshund, sondern in der ganzheitlichen Auslastung eurer Vierbeiner.
          Mit dem Mantrailing kann bereits im Welpenalter spielerisch begonnen werden. Auch ältere Hunde haben noch viel Spaß an der Nasenarbeit und können jederzeit beim Trailen einsteigen.
          `,
        },
        {
          id: "frame-mantraling5",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Mantrailing geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen.
          `,

          price: "20 Euro",
          price6: "115 Euro",
          price10: "185 Euro",
        },
      ]
    },
    {
      id: "frame-tricks",
      pictureUrl: "../../../assets/pictures/card_tricks.jpg",
      title: "Tricks & Parcours",
      subtitle: `Mehr als "Sitz" & "Platz"`,
      text: "Dein Hund soll mehr als Sitz, Platz und Co. können? In meinem Trickdogging- und Parcours-Kurs lernt dein Vierbeiner lustige und nützliche Dinge. Beim Parcours geht es um Geschicklichkeit, Vertrauen und Mut, um ganz neue Hindernisse und Untergründe zu bewältigen. ",
      mobileText: "Mit dem Trickdoggin- und Parcorskurs zu mehr Geschicklichkeit, Vertrauen und Mut",
      expendable: true,
      expand: [
        {
          id: "frame-tricks1",
          title: "Was ist Trickdogging?",
          text: ` Du suchst nach einer geistigen Auslastung für deinen Hund? Dann bist du beim Trickdogging genau richtig.
          Ich erkläre dir die Grundlagen der Arbeit mit dem Clicker und wir erarbeiten gemeinsam und individuell die unterschiedlichsten Tricks.
          Das Repertoire reicht von einfachen Tricks wie Pfote geben und Rolle, bis hin zu komplexen Handlungsketten wie beispielsweise Müll einsortieren.
          `,
        },
        {
          id: "frame-tricks2",
          title: "Was ist Parcours?",
          text: `Als Ergänzung  zum Tricksen habt ihr hier die Möglichkeit die neue Beschäftigungsart Parcours kennenzulernen.
          Euer Hund muss hier verschieden Untergründe, Stege und Geschicklichkeits- und Balancehindernisse, die speziell dafür angefertigt wurden, überwinden.
          `,
        },
        {
          id: "frame-tricks3",
          title: "Was bringen Trick- und Parcourskurse?",
          text: `Diese gemeinsame Beschäftigung stärkt die Bindung zwischen deinem Vierbeiner und dir enorm.
          Gerade für ängstliche und scheue Hunde bietet mein Kurs sehr viel Potenzial aus sich herauszukommen, Neues kennenzulernen und stärkt das Selbstbewusstsein und Vertrauen auf spielerische Art und Weise.
          Auch ungeduldige und sehr aktive Hunde lernen gerade beim Parcours sich zu konzentrieren und ruhig mit Ihrem Besitzer gemeinsam zu arbeiten.
          Und noch einen Nebeneffekt gibt es. Menschen, die Angst vor Hunden haben, werden sich in der Gegenwart Ihres Hundes wohler fühlen, wenn sie sehen, dass der Hund Ihnen Pfötchen gibt oder eine Rolle macht.
          Der Hund wirkt auf sie dann nicht mehr gefährlich, sie fühlen sich dadurch sicherer.
          `,
        },
        {
          id: "frame-tricks4",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Trick- und Parcours-Kurs geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen.
          `,

          price: "20 Euro",
          price10: "185 Euro",
        },
      ]
    },
  ]

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }

  ngAfterViewInit(): void {
    if((this.openArticles[0]||this.openArticles[1])&&!this.mobilePortrait){
      document.body.scrollTop = 500;
    }
    if((this.openArticles[2]||this.openArticles[3])&&!this.mobilePortrait){
      document.body.scrollTop = 1000;
    }
    if(this.mobilePortrait){
      if(this.openArticles[0]){
        document.body.scrollTop = 200;
      }
      if(this.openArticles[1]){
        document.body.scrollTop = 400;
      }
      if(this.openArticles[2]){
        document.body.scrollTop = 600;
      }
      if(this.openArticles[3]){
        document.body.scrollTop = 800;
      }
    }
  }
}
