import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit{
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  introductionArticles: Article[] = [
    {
      id: "me-intro1",
      pictureUrl: "../../../assets/pictures/me1.jpg",
      sizeing: "cover",
      title: "Das bin ich",
      subtitle: "",
      text: `Hallo, mein Name ist Sally Davidson. Ich wurde 1989 geboren. Aufgewachsen bin ich in der Nähe von Edinburgh.`,
      expendable: true,
      expand: [
        {
          id: "me-intro1-1",
          title: "Wie ich zu Pferden kam",
          text: `Bereits mit 9 Jahren entdeckte ich meine Liebe zu den Rennpferden einer befreundeten Familie.
          Ich hatte plötzlich ein komplett anderes Gefühl in meinem Körper, dass ich mir bis heute nicht erklären kann. Es hat mich einfach komplett überwältigt.
          Ab diesem Tag bin ich immer wieder dort hingelaufen, um die Pferde auf der Koppel zu streicheln oder sie einfach zu beobachten. Ich war glücklich da draußen und habe auch die Stille sehr genossen.
          `,
        },
        {
          id: "me-intro1-2",
          title: "Und dann kam Billy",
          text: `Eines Tages, als ich wieder dort zu Besuch war, wartete dort eine Überraschung auf mich.
          Im Stall stand ein Pferd mit Trense und Sattel und sie hat mich gefragt, ob ich reiten wollen würde. Meine Antwort kam wie aus der Pistole geschossen: Jaaaaaaa!!!
          Nun saß ich also auf dem Pferd mit Namen Billy - was für ein Gefühl! Dann wurde die Longe gelöst und ich bin einfach auf dem Hof hin und her geritten.
          Und dann die große Überraschung: Nach einigen Wochen durfte ich Billy mein Eigen nennen. Ich konnte es nicht glauben.
          Ein Stallplatz war schnell gefunden und ich lernte mittels Learning by doing Billy zu reiten und zu traben. Meine Mutter sagte mir nur, dass ich auch aufstehen müsse, im Trab hoch und runter.
          `,
        },
        {
          id: "me-intro1-3",
          title: "Immer schnell wieder aufsteigen!",
          text: `Ein paar Wochen später habe ich meinen ersten Reitunterricht besucht, in einer Gruppe - das werde ich nie vergessen. Ich bin schon in der ersten halben Stunde 7mal runtergefallen. Ooops! Irgendwie bin ich aber immer wieder aufgestiegen und habe weiter gemacht. Seit damals bin ich pferdeverrückt, könnte man sagen. Einige Zeit später, als ich 12 war, hatte ich dann meine ersten Beritt-Ponys. So hat die Reiterei bei mir angefangen. Vom Lernen durch Schauen und Helfen, wo immer ich konnte, bis hin zu Bemühungen in Richtung Turnieren, bei denen ich dann auch erfolgreiche Ponys hatte.
          `,
        },
      ]
    },
    {
      id: "me-intro2",
      pictureUrl: "../../../assets/backgrounds/heroes/landing.jpg",
      sizeing: "cover",
      title: "Und so kam ich auf den Hund",
      subtitle: "",
      text: `Mit Hunden bin ich zwar nicht aufgewachsen, habe aber dafür viel Zeit mit dem Hund der Nachbarn verbracht. Ich habe oft auf ihn aufgepasst und bin mit ihm spazieren gegangen.
      Ohne Vorwissen und spezielle Hundeerfahrung, ich war schließlich erst 12 Jahre, bin ich einfach losgegangen.  Oft sprachen die Leute meine Mutter an, dass sie diesen Hund noch nie so ruhig oder so vorsichtig erlebt haben.`,
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
      id: "me-intro3",
      pictureUrl: "../../../assets/pictures/me2.jpg",
      sizeing: "cover",
      title: "Start in Deutschland",
      subtitle: "",
      text: `2010 kam ich als Bereiterin und Stallmanagerin nach Deutschland und arbeitete unter anderem für deutschlandweit bekannte und erfolgreiche Ställe,
      wie Paul Schockemöhle (4x Gold bei Europameisterschaften, 6x Gold bei Deutschen Meisterschaften), Lars Nieberg (Gold, Olympische Mannschaft, Gold bei Mannschaftsweltmeisterschaften und Gold bei
        Deutschen Meisterschaften) und Jens Wawrauschek (Global-Tour-Sieger, Gewinner der Youngster-Tour, Teilnehmer „CSI-4*“) sowie in einigen anderen Ställen.`,
      expendable: true,
      expand: [
        {
          id: "me-intro3-1",
          title: "Internationale Erfahrungen",
          text: `Auch in Dänemark, Schottland und England war ich beruflich tätig und sammelte viele Erfahrungen bei international renommierten Reitern. In den Ställen war ich unter anderem auch für die Ausbildung der Pferde zuständig und nahm mit ihnen erfolgreich an Turnieren teil.`,
        },
        {
          id: "me-intro3-2",
          title: "Maya und ich",
          text: `Inzwischen konnte ich meinen Traum vom eigenen Hund verwirklichen. 2017 zog Maya, eine wundervolle schwarz-weiße Border Collie Hündin bei mir ein.
          Sie begleitet mich seither auf Schritt und Tritt überall hin und gemeinsam haben wir schon sehr viel erreicht.
          Sie ist meine Seele geworden, und auch Sie werden sie bei unserem gemeinsamen Training kennen lernen. `,
        },
        {
          id: "me-intro3-3",
          title: "Der Unfall",
          text: `Leider erlitt ich 2019 eine schwere Knieverletzung während des Trainings und kann seit diesem Zeitpunkt nicht mehr selber aktiv reiten.
          So musste ich aufgrund dieser Verletzung und daraus resultierenden Operationen die schwerste Entscheidung treffen und meinen Beruf als Bereiterin aufgeben.
          `,
        },
      ]
    },
    {
      id: "me-intro4",
      pictureUrl: "../../../assets/pictures/me4.jpg",
      sizeing: "cover",
      title: "Nach dem Unfall habe ich mich neu erfunden",
      subtitle: "",
      text: `So kam ich auf die Idee anderen Menschen zu helfen, damit sie entspannt und ohne Komplikation mit ihren Hunden im Alltag leben können.
      Das hat mir viel Kraft und Mut gegeben und ich entschloss mich, eine Ausbildung zum Hundetrainer zu machen, die ich 2021 erfolgreich absolvierte.`,
      expendable: true,
      expand: [
        {
          id: "me-intro4-1",
          title: "Meine Arbeit",
          text: `Seit vielen Jahren schule und unterstütze ich Menschen nun langfristig und nachhaltig im fachgerechten Umgang mit ihren Tieren und biete auch Reitunterricht an.
          Das Ziel meiner Arbeit ist eine bessere Erziehung, denn diese führt zu tieferer Bindung und mehr Entspanntheit im Zusammenleben von Mensch und Tier.
          Ich möchte mit meinem Wissen Menschen und Tieren helfen, genau das zu erreichen. Mein Schwerpunkt liegt demzufolge in der Vermittlung von Wissen im Hinblick auf das Verhalten und die Lernvorgänge bei Tieren sowie der praktischen Anwendung dieses Wissens.
          `,
        },
        {
          id: "me-intro4-2",
          title: "Schlüssel zum Erfolg",
          text: `Während meiner Arbeit mit Tieren und deren Begleitern habe ich festgestellt: Vieles in der Tier- Kommunikation läuft unbewusst.
          Hier möchte ich unterstützen und anleiten. Gemeinsam finden wir zu mehr Bewusstheit.
          Selbstverständlich werden Tiere in meinen Kursen artgerecht und bedürfnisorientiert trainiert. `,
        },
        {
          id: "me-intro4-3",
          title: "Meine Qualifikationen",
          text: `BHS 1 + 2 + 3 Qualifikation (gültig in Schottland)
          `,
        },
        {
          id: "",
          title: "",
          text: `2018 Prüfung zur Pferdewirtin
          `,
        },
        {
          id: "",
          title: "",
          text: `2018 Trainer Lizenz A
          `,
        },
        {
          id: "",
          title: "",
          text: `2020 Ausbildung mit Ziemer und Falke zur Hundetrainerin
          `,
        },
        {
          id: "",
          title: "",
          text: `seit 2021 Zertifizierte Hundetrainerin §11, Abs. 1, Nr. 8 des Tierschutzgesetzes
          `,
        },
        {
          id: "",
          title: "",
          text: `2022 Prüfung Locagility-Trainerin
          `,
        },
        {
          id: "",
          title: "",
          text: `seit 2021 ehrenamtliches Vereinstraining beim Hundesportverein Klein Wanzleben
          `,
        },
        {
          id: "",
          title: "",
          text: `weitere Fortbildungen und Praktika
          `,
        },
      ]
    },
  ]
  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}
