import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, AfterViewInit {


  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  // -1: no article open
  @Input() openArticles = -1;

  frameArticles: Article[] = [
    // agility
    {
      id: "frame-funagility",
      pictureUrl: "./assets/pictures/frame_funagility.jpg",
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
    // Silvester
    /*
    {
      id: "frame-silvester",
      pictureUrl: "./assets/pictures/silvester.jpg",
      title: "Silvester",
      subtitle: "Silvester ohne Stress für deinen Hund",
      text: `Silvester ist für viele Hunde eine stressige Zeit. Die lauten
Geräusche und das ungewohnte Licht können Angst und Unruhe auslösen. In
unserem speziellen Silvester-Training lernen Sie, wie Sie Ihren Hund optimal auf

diese Herausforderung vorbereiten können.`,
      mobileText: "Lernen Sie, wie Sie Ihren Hund optimal auf die stressige Zeit vorbereiten.",
      expendable: true,
      expand: [
        {
          id: "frame-silvester1",
          title: "Kursinhalte",
          text: `

1. Verstehen der Geräuschangst: Wir erklären, warum Hunde auf laute
Geräusche wie Feuerwerk reagieren und wie sich diese Angst äußert.`,
        },
        {
          id: "frame-silvester2",
          title: "",
          text: `
2. Desensibilisierung: Schritt-für-Schritt-Anleitung zur Desensibilisierung Ihres
Hundes gegenüber lauten Geräuschen.
`,
        },
        {
          id: "frame-silvester3",
          title: "",
          text: `

3. Entspannungstechniken: Einführung in Techniken wie Tellington Touch und
Aromaöltherapie, um Ihrem Hund zu helfen, sich zu entspannen.`,
        },
        {
          id: "frame-silvester4",
          title: "",
          text: `
4. Sicherheitsmaßnahmen: Tipps und Tricks, um Ihren Hund während der

Silvesternacht sicher und ruhig zu halten.`,
        },
        {
          id: "frame-silvester5",
          title: "",
          text: `
5. Praktische Übungen: Live-Trainings und Übungen, die Sie zu Hause
durchführen können, um Ihren Hund auf Silvester vorzubereiten.`,
        },
        {
          id: "frame-silvester6",
          title: "Ziele des Kurses:",
          text: `Reduzierung der Angst und des Stresses Ihres Hundes während Silvester.
          `,
        },

        {
          id: "frame-silvester7",
          title: "",
          text: `Aufbau eines sicheren und beruhigenden Umfelds für Ihren Hund.
          `,
        },

        {
          id: "frame-silvester8",
          title: "",
          text: `Vermittlung von Techniken, die auch bei anderen lauten Ereignissen wie Gewittern angewendet werden können.
          `,
        },
        {
          id: "frame-silvester9",
          title: "Termine",
          text: `13.10-17 Uhr Theorie, 3.11- 18 Uhr Praxis, 10.11- 18 Uhr Praxis, 8.12-17 Uhr

Theorie, 12.12- 19 Uhr Praxis. Dauer: 5 Einheiten`,
          price: "150 Euro",
        },
        {
          id: "frame-silvester10",
          title: "Anmeldung",
          text: `Melden Sie sich jetzt an und sorgen Sie dafür, dass Ihr Hund Silvester entspannt und
stressfrei erlebt. Für weitere Informationen und zur Anmeldung besuchen Sie meine
Webseite oder kontaktieren Sie mich telefonisch unter 0174 978 9210.
Ich hoffe, dieser Text hilft Ihnen weiter! Wenn Sie noch Anpassungen oder
zusätzliche Informationen benötigen, lassen Sie es mich wissen.
          `,
        },
      ]
    },
    */
    // Locagility
    /*
    {
      id: "frame-locagility",
      pictureUrl: "./assets/pictures/card_locagility.jpg",
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
    */
    //Rowdy
    /*
    {
      id: "frame-rowdy",
      pictureUrl: "./assets/pictures/rowdy.jpg",
      title: "Rowdy-Gruppe",
      subtitle: "Bereit für den Alltag",
      text: "Wir arbeiten gemeinsam an eurem harmonischen Alltag. Hier steht vor allem eine gute Kommunikation mit eurem Vierbeiner im Vordergrund.",
      mobileText: "Wir arbeiten gemeinsam an eurem harmonischen Alltag.",
      expendable: true,
      expand: [
        {
          id: "frame-rowdy1",
          title: "Rowdy-Gruppe",
          text: `Du möchtest gerne zusammen mit deinem Hund in einer kleinen Gruppe etwas unternehmen und an der Alltagstauglichkeit arbeiten?

                  Dann bist du hier genau richtig. In dieser Gruppe sind alle Hunde willkommen, egal
                  ob klein oder groß, jung oder alt und auch mit Schwierigkeiten im Alltag.
                  Ich arbeite mit euch zusammen an der Kommunikation und Beziehung zwischen
                  euch und eurem Hund, für ein harmonischeres zusammenleben. Dieser Kurs biete
                  außerdem viel Abwechselung und besteht aus 2 aufeinander aufbauenden Kursen.
                  Die Teilnehmerzahl ist begrenzt. Achtung: Bitte für sehr aggressive Hunde oder

                  solche, die ihr nicht halten könnt vorab eine Ansicht buchen. 
          
          `,
        },
        {
          id: "frame-rowdy2",
          title: "Kurs 1 (Sechs Stunden)",
          text: `Der erste Kurs umfasst sechs Stunden, in denen folgende Punkte bearbeitet werden:
          Mensch-Hund/Hund-Hund Kommunikation, Lerntheorie, Aufmerksamkeit, Leinführigkeit und Spielen. 
          Die sechs Stunden finden an folgenden Terminen statt:
          13.10. 18.30 Uhr, 
          20.10. 12.00 Uhr, 
          31.10. 19.00 Uhr, 
          7.11.   19.00 Uhr,
          14.11. 19.00 Uhr und
          28.11. 19.00 Uhr.
          `,

        },
        {
          id: "frame-rowdy3",
          title: "Kurs 2 (Fünf Stunden)",
          text: `Der zweite Kurs umfasst sechs Stunden, in denen folgende Punkte bearbeitet werden: 
          Orientierung, Leinführigkeit Next Level, Schleppleine Arbeit, Beschäftigung, Spazierengehen Next Level, kognitive Auslastung, Beschäftigung unterwegs und ein individuelles Abschlussgespräch mit allen. 
          Die sechs Stunden finden an folgenden Terminen statt:
          8.12. 11.00 Uhr,
          9.1. 19.00 Uhr,
          16.1. 19.00 Uhr,
          24.1. 19.00 Uhr und
          26.1. 12.0 Uhr.
          `,
        },
        {
          id: "special",
          title: "",
          text: ``,
          price: "360 Euro",
        },
      ]
    },
    */
    //Mantrailing
    /* {
      id: "frame-mantrailing",
      pictureUrl: "./assets/pictures/card_mantrailing.JPG",
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
    }, */
    {
      id: "frame-tricks",
      pictureUrl: "./assets/pictures/card_tricks.jpg",
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
    // Hallentraining
    {
      id: "frame-indoor-training",
      pictureUrl: "./assets/pictures/hunde_mit_pferd.jpg",
      title: "Indoor Reithallentraining",
      subtitle: `Ganzjähriges Hundetraining bei jeder Witterung`,
      text: `Unser Indoor-Reithallen-Training bietet ganzjährig zuverlässige und wetterunabhängige
          Trainingsbedingungen für Hunde aller Altersklassen. In der großzügigen, geschützten
          Reithalle können sowohl grundlegende Übungen als auch weiterführende
          Trainingsinhalte in ruhiger Atmosphäre durchgeführt werden.
          Das Training findet in kleinen Gruppen unter Anleitung erfahrener Hundetrainerinnen
          und wird individuell an den Ausbildungsstand von Hund und Halter angepasst.`,
      mobileText: `ganzjährig zuverlässige und wetterunabhängige
          Trainingsbedingungen für Hunde aller Altersklassen`,
      expendable: true,
      expand: [
        {
          id: "frame-indoor-training1",
          title: "Trainingsschwerpunkte:",
          text: `Das Training eignet sich sowohl für Anfänger als auch für Fortgeschrittene und ist durch
                  die Indoor-Umgebung ganzjährig planbar - unabhängig von Wetter oder Jahreszeit.
          `,
          bulletPoints: [
            "Grundgehorsam (Sitz, Platz, Rückruf, Leinenführigkeit)",
            "Orientierung am Menschen und Alltagstauglichkeit",
            "Soziales Verhalten im Umgang mit Artgenossen",
            "Beschäftigung und Auslastung (z. B. Longieren, Apportieren, kleine Parcours, Tricks)",
            "Förderung von Aufmerksamkeit und Impulskontrolle",
            "Umweltreize und sicheres Verhalten in neuen Situationen",
          ]
        },
        {
          id: "frame-indoor-training2",
          title: "Hinweise zur Teilnahme:",
          text: ``,
          bulletPoints: [
            "Teilnahme nur mit vorheriger Anmeldung",
            "Gültiger Impfschutz des Hundes erforderlich",
            "Eigene Leine, Belohnungen und wettergerechte Kleidung bitte mitbringen.",
          ]
        },
        {
          id: "frame-indoor-training3",
          title: "Jeden Freitag 17 Uhr",
          text: `Eimersleben 39343, Magdeburger Str.79.
          `,

          price: "20 Euro",
          price10: "185 Euro",
        },
      ]
    },
    // Rally Obedience
    {
      id: "frame-rally-obedience",
      pictureUrl: "./assets/backgrounds/heroes/quali_desk.JPG",
      title: "Rally Obedience",
      subtitle: `Präzision trifft Teamarbeit`,
      text: `Rally Obedience ist eine abwechslungsreiche Hundesportart, bei der Präzision,
          Kommunikation und Freude an gemeinsamer Arbeit im Mittelpunkt stehen. Einmal
          wöchentlich bieten wir diesen Kurs für Teams an, die Spaß am strukturierten Training
          und an der Weiterentwicklung ihrer Bindung haben.`,
      mobileText: `Eine abwechslungsreiche Hundesportart, bei der Präzision,
          Kommunikation und Freude an gemeinsamer Arbeit im Mittelpunkt stehen.`,
      expendable: true,
      expand: [
        {
          id: "frame-rally-obedience1",
          title: "Trainingsschwerpunkte:",
          text: `In einem Parcours aus verschiedenen Schilderstationen werden Gehorsamsübungen
                wie Sitz, Platz, Bleib, Wendungen oder Tempowechsel miteinander kombiniert. Der
                Mensch führt den Hund überwiegend in der Fußarbeit durch die Stationen - mit
                Sichtzeichen, Körpersprache und motivierendem Lob.
          `,
        },
        {
          id: "frame-rally-obedience2",
          title: "Trainingsinhalte",
          text: `Rally Obedience ist für Hunde jeder Rasse und jeden Alters geeignet, sofern ein
              grundlegender Gehorsam vorhanden ist. Der Sport stärkt die Bindung, fördert die
              geistige Auslastung und ist auch für ältere Hunde oder körperlich eingeschränkte Halter
              gut umsetzbar.`,
          bulletPoints: [
            "Aufbau und Training der einzelnen Schilderübungen",
            "Fußarbeit mit Blickkontakt und präzisem Timing",
            "Koordination und Kommunikation im Team",
            "Arbeit mit Distanzsignalen, Tempowechseln und Richtungsänderungen",
            "Konzentration trotz Ablenkung",
            "Vorbereitung auf Turniere (optional)"
          ]
        },
        {
          id: "frame-rally-obedience3",
          title: "Organisatorisches",
          text: `Jeden Freitag 15 Uhr
          `,
          bulletPoints: [
            "Voraussetzung: Grundgehorsam und gute soziale Verträglichkeit",
            "Trainingsort: je nach Wetterlage Indoor oder Outdoor"
          ],
          price: "20 Euro",
          price10: "185 Euro",
        },
      ]
    },
    // Unterordnung
    {
      id: "frame-unterordnung",
      pictureUrl: "./assets/backgrounds/heroes/hundegruppe.jpg",
      title: "Unterordnung",
      subtitle: `Struktur & Präzision im Mensch-Hund-Team`,
      text: `Stärkung des Teams Mensch-Hund durch kontrollierte Arbeit und anspruchsvolle Übungen.`,
      mobileText: `Stärkung des Teams Mensch-Hund durch kontrollierte Arbeit und anspruchsvolle Übungen.`,
      expendable: true,
      expand: [
        {
          id: "frame-rally-unterordnung1",
          title: "Kursbeschreibung:",
          text: `Im Kurs „Unterordnung“ liegt der Fokus auf einer präzisen, freudigen und harmonischen
            Zusammenarbeit zwischen Mensch und Hund. Ziel ist es, das Hund-Mensch-Team in
            kontrollierter Arbeitsweise zu stärken und die bereits gelernten Grundsignale unter
            höherer Ablenkung und in anspruchsvolleren Übungen zu festigen und auszubauen.
                    
            Geeignet ist dieser Kurs für ambitionierte Freizeit-Teams sowie für alle, die an
            weiterführenden Hundesportarten interessiert sind (z. B. Begleithundeprüfung,
            Obedience, Rally Obedience)..
          `,
        },
        {
          id: "frame-rally-obedience2",
          title: "Trainingsinhalte",
          text: `Rally Obedience ist für Hunde jeder Rasse und jeden Alters geeignet, sofern ein
              grundlegender Gehorsam vorhanden ist. Der Sport stärkt die Bindung, fördert die
              geistige Auslastung und ist auch für ältere Hunde oder körperlich eingeschränkte Halter
              gut umsetzbar.`,
          bulletPoints: [
            "Aufbau und Training der einzelnen Schilderübungen",
            "Fußarbeit mit Blickkontakt und präzisem Timing",
            "Koordination und Kommunikation im Team",
            "Arbeit mit Distanzsignalen, Tempowechseln und Richtungsänderungen",
            "Konzentration trotz Ablenkung",
            "Vorbereitung auf Turniere (optional)"
          ]
        },
        {
          id: "frame-rally-obedience3",
          title: "Organisatorisches",
          text: `Jeden Freitag 15 Uhr
          `,
          bulletPoints: [
            "Voraussetzung: Grundgehorsam und gute soziale Verträglichkeit",
            "Trainingsort: je nach Wetterlage Indoor oder Outdoor"
          ],
          price: "20 Euro",
          price10: "185 Euro",
        },
      ]
    },
    // Social Walk
    {
      id: "frame-social-walk",
      pictureUrl: "./assets/pictures/frame_dogs.JPG",
      title: "Social Walk",
      subtitle: `Kontrollierte Begegnungen mit anderen Hunden`,
      text: `In unserem Social Walk bieten wir eine geführte Spaziergangsgruppe an, in der Hunde
            unter kontrollierten Bedingungen in Kontakt mit Artgenossen und Umweltreizen
            kommen. Ziel ist nicht das freie Spielen, sondern das soziale Lernen in der Bewegung -
            mit dem Menschen als sicherem Begleiter.`,
      mobileText: `Eine geführte Spaziergangsgruppe an, in der Hunde
            unter kontrollierten Bedingungen in Kontakt mit Artgenossen und Umweltreizen
            kommen.`,
      expendable: true,
      expand: [
        {
          id: "frame-social-walk1",
          title: "Ziele des Social Walks:",
          text: `
          Entspannung statt Eskalation
          `,
          bulletPoints: [
            "Aufbau von gelassener Leinenführigkeit in Anwesenheit anderer Hunde",
            "Verbesserung der sozialen Kommunikation zwischen Hunden",
            "Förderung von Impulskontrolle und Orientierung am Menschen",
            "Alltagsnahe Übung von Hundebegegnungen ohne Stress"
          ]
        },
        {
          id: "frame-social-walk2",
          title: "Für wen ist der Social Walk geeignet?",
          text: ``,
          bulletPoints: [
            
            "Sie wollen Ihren Hund unterwegs beschäftigen, wissen aber nicht Wie und Was?",
            "Für Hunde, die unsicher oder schnell aufgeregt auf andere Hunde reagieren",
            "Für Hunde, die bisher wenig soziale Erfahrung gesammelt haben",
            "Für Halter: innen, die mehr Sicherheit im Umgang mit Hundebegegnungen gewinnen möchten",
            "Nicht(!) geeignet für stark unverträgliche Hunde ohne vorheriges Einzeltraining",
          ]
        },
        {
          id: "frame-social-walk3",
          title: "Ablauf",
          text: `
          Der Social Walk bietet Raum zum Lernen, ohne Überforderung. Hund und Mensch
          sammeln wertvolle Erfahrungen, die sich direkt in den Alltag übertragen lassen.
          `,
          bulletPoints: [
            "Wöchentliche Termine, Dauer ca. 60 Minuten",
            "Treffpunkt an wechselnden, reizarmen Orten",
            "Kleine Gruppen (4-8 Mensch-Hund-Teams)",
            "Abstand wird individuell angepasst",
            "Übungen in Bewegung, kleine Impulse zur Aufmerksamkeit & Entspannung",
            "Begleitet von einer erfahrenen Trainerin"
          ],
        },
        {
          id: "frame-social-walk4",
          title: "Teilnahmevoraussetzungen",
          text: `
          `,
          bulletPoints: [
            "Mindestalter: ca. 6 Monate",
            "Sicheres Tragen von Halsband Und Brustgeschirr",
            "Sozialverträglichkeit des Hundes auf Basis eines kurzen Vorgesprächs einschätzbar",
            "Kein Freilauf, kein Spielkontakt - Fokus liegt auf Ruhe und Orientierung",
          ],
        },
        {
          id: "frame-social-walk6",
          title: "Termine & Anmeldung",
          text: `
          `,
          bulletPoints: [
            "Mindestalter: ca. 6 Monate",
            "Sicheres Tragen von Halsband Und Brustgeschirr",
            "Sozialverträglichkeit des Hundes auf Basis eines kurzen Vorgesprächs einschätzbar",
            "Kein Freilauf, kein Spielkontakt - Fokus liegt auf Ruhe und Orientierung",
          ],
          price: "15 Euro",
          price10: "140 Euro",
        },
      ]
    },
  ]

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }

  ngAfterViewInit(): void {
    const openArticleNumber = Number(this.openArticles);
    if (!this.mobilePortrait) {
      if (openArticleNumber !== -1) {
        const chosenPictureFrame = document.getElementById("app-picture-frame" + openArticleNumber)
        chosenPictureFrame?.scrollIntoView(false)
      }
    }
    else if (this.mobilePortrait) {
      if (openArticleNumber !== -1) {
        document.body.scrollTop = openArticleNumber * 200;
      }
    }
  }
}
