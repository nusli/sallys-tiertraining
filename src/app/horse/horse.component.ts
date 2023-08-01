import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent implements OnInit{
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  frameArticles: Article[] = [
    {
      id: "frame-dressur",
      pictureUrl: "../../../assets/backgrounds/frame-pictures/13.jpg",
      title: "Dressur",
      subtitle: "Anfänger und Fortgeschrittene",
      text: "Die Dressur, die feine gefühlvolle Kommunikation zwischen Reiter und Pferd, ist die Basis jeglicher Arbeit in allen Bereichen. Ich vermittle Ihnen die Grundlagen der Bahnfiguren von den Anfängen bis hin zu schwierigeren Lektionen.",
      expendable: true,
      expand: [
        {
          id: "frame-dressur1",
          title: "Wie ist mein Training aufgebaut?",
          text: `Die wichtigsten Bestandteile meines Dressurtrainings sind die korrekte Ausbildung der Pferde anhand der Ausbildungsskala,
          die Gymnastizierung und das ganzheitlich gesunderhaltende Training unserer Pferde. So wie die Schulung des losgelassenen Sitzes,
          der Koordinations- und Reaktionsfähigkeit des Reiters und des positiven Reitgefühls.
          `,
        },
        {
          id: "frame-dressur2",
          title: "Was ich anbiete und was ich erwarte",
          text: `Komm zu mir und erlebe selbst, wie mein individuell angepasstes Training deine Fähigkeiten als Reiter verbessert und unsere Beziehung vertieft.
          Ich freue mich darauf, dich auf diesem spannenden Weg zu begleiten und gemeinsam Erfolge zu feiern!
          Ich lege großen Wert auf die vermeintlichen Kleinigkeiten, denn genau diese sind enorm wichtig und sollten beachtet werden.
          Kaufberatung, sowie Begleitung zu Turnieren auf Anfrage.
          `,
        },
        {
          id: "frame-dressur3",
          title: "Reiten und dabei Englisch lernen",
          text: `Wer Interesse hat für die Schule zu lernen, ohne dabei ins Ausland zu müssen: Ich biete Reitunterricht auch in meiner Muttersprache Englisch an.
          `,
        },
        {
          id: "frame-dressur4",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Dressur-Unterricht geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen. Bei mehreren Anmeldungen können wir eine Gruppe bilden.
          `,
          price: "50 Euro",
          horse4: "40 Euro"
        },
      ]
    },
    {
      id: "frame-freizeit",
      pictureUrl: "../../../assets/backgrounds/frame-pictures/DSC02721.JPG",
      title: "Freizeit",
      subtitle: "Genießt gemeinsame Zeit",
      text: "Du hast keine Turnierambitionen, möchtest dein Pferd aber trotzdem korrekt reiten, um seine Gesundheit zu erhalten? Und du wünscht dir eine harmonische Beziehung mit deinem Freizeitpartner, um die gemeinsame Zeit genießen zu können? Ich bin stolz darauf, individuell angepasstes Training anzubieten.",
      expendable: true,
      expand: [
        {
          id: "frame-freizeit1",
          title: "Geht es dir um artgerechte Haltung deines Tieres?",
          text: ` Du möchtest dein Pferd artgerecht und gesund erhaltend bewegen? Gerne baue ich gemeinsam mit dir die Grundmuskulatur und die Balance deines Pferdes auf.
          Mein Hauptaugenmarkliegt dabei auf Verbesserung deiner Sicherheit, deines Sitzes und der Muskulatur deines Pferdes.
          Reiten über Cavalettis und Stangen zum Beispiel ist gymnastisch besonders wertvoll für dein Pferd.
          Es ist nicht nur eine Arbeit sondern eine schöne Abwechslung und bereitet den meisten Pferden und Reitern viel Spaß. Die meisten Pferde freuen sich über diese Aufgaben und beginnen freudiger und konzentrierter mitzuarbeiten.

          `,
        },
        {
          id: "frame-freizeit2",
          title: "Was ich außerdem anbiete",
          text: `Du möchtest viel Ausreiten und dich dabei sicherer fühlen um entspannte Ausritte genießen zu können? Gerne arbeite ich mit dir an einem ausbalancierten und losgelassenen Sitz, der dir ein sicheres Gefühl vermittelt. Nicht vergessen der Spaßfaktor spielt in meinem Training eine große Rolle.
          Darüber hinaus biete ich auch Longiertraining an, um dir die Möglichkeit zu gebe, deine Fähigkeiten im Umgang mit dem Pferd zu erweitern. Das Longieren ist eine wertvolle Ergänzung zum Reiten und fördert das Verständnis für unsere Kommunikation.
          Bei allen Wünschen, Fragen und Problemen können Sie mich sehr gerne kontaktieren.
          Ich lege großen Wert auf die vermeintlichen Kleinigkeiten, denn genau diese sind enorm wichtig und sollten beachtet werden.
          Kaufberatung auf Anfrage.

          `,
        },
        {
          id: "frame-freizeit3",
          title: "Reiten und dabei Englisch lernen",
          text: `Wer Interesse hat für die Schule zu lernen, ohne dabei ins Ausland zu müssen: Ich biete Reitunterricht auch in meiner Muttersprache Englisch an.
          `,
        },
        {
          id: "frame-freizeit4",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Freizeitreiten geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen. Bei mehreren Anmeldungen können wir eine Gruppe bilden.
          `,
          price: "50 Euro",
          horse4: "40 Euro"
        },
      ]
    },
    {
      id: "frame-springen",
      pictureUrl: "../../../assets/backgrounds/frame-pictures/10a.jpg",
      title: "Springen",
      subtitle: "Artgerechtes Auslasten",
      text: `Für mich ist Spring-Unterricht nicht einfach nur springen. Für mich gehört ebenso Gymnastik- und Basisarbeit dazu.
      Ein Reiter, der mit verkürzten (nicht zu kurz) Bügeln in allen drei Grundgangarten über Stangen und Hindernisse reiten kann, sitzt ausbalancierter,
      losgelassener und vor allen Dingen sicherer im Sattel. Der Spring -Parcours wird für jedes Reiter - Pferd Paar individuell angepasst. Jeder wird auf seinem Niveau gefördert.`,
      expendable: true,
      expand: [
        {
          id: "frame-springen1",
          title: "Worum geht es beim Spring-Unterricht?",
          text: ` Für den Reiter ist Balance und Gymnastik wichtig. Hände, Arme, Schultern und eine lockere Hüfte sind ebenso Voraussetzung, wie das Mitgehen mit der Bewegung des Pferdes.
          Es ist unerlässlich, am Gleichgewicht und einem losgelassenen leichten Sitz des Reiters dran zu arbeiten.
          Genauso wichtig ist die Losgelassenheit auch für das Pferd. Es gilt eine gleichmäßige Galoppade zu trainieren, so dass das Pferd die Sprünge in Maßen anzieht und immer konzentriert
          auf die Sprünge und die Hilfen seines Reiters ist. Hierfür baue ich häufig Gymnastikreihen und Stangenarbeit in meinen Unterrichtseinheiten mit ein.
          `,
        },
        {
          id: "frame-springen2",
          title: "Was ich anbiete und was ich erwarte",
          text: `Mein Training ist steht artgereicht ausgerichtet. Mir ist es besonders wichtig, die Gesunderhaltung deines Pferdes zu gewährleiten. Daher verwende ich sanfte, aber effektive Übungen, um die Muskulatur deines Pferdes aufzubauen und zu verbessern.  Mein Ziel ist es, ein harmonisches Zusammenspiel zwischen uns zu erreichen, bei dem wir beide unsere volle Leistungsfähigkeit entfalten können. Ich glaube fest daran, dass Freude und Motivation der Schlüssel zum Erfolg sind.
          Ich lege großen Wert auf die vermeintlichen Kleinigkeiten, denn genau diese sind enorm wichtig und sollten beachtet werden.
          Für die Bewältigung eines Parcours ist ein gutes gleichmäßiges Galopptempo sehr wichtig. Aber das Tempo muss auch auf den Punkt geändert werden können, z.B. kürzere oder längere Galoppsprünge. Und das enge Wendungen geritten werden können.
          Kaufberatung, sowie Begleitung zu Turnieren auf Anfrage.
          `,
        },
        {
          id: "frame-springen3",
          title: "Reiten und dabei Englisch lernen",
          text: `Wer Interesse hat für die Schule zu lernen, ohne dabei ins Ausland zu müssen: Ich biete Reitunterricht auch in meiner Muttersprache Englisch an.
          `,
        },
        {
          id: "frame-springen4",
          title: "Melde dich jetzt an!",
          text: `Falls euer Interesse am Spring-Unterricht geweckt ist, meldet euch gerne bei mir und wir vereinbaren ein persönliches Kennenlernen. Bei mehreren Anmeldungen können wir eine Gruppe bilden.
          `,
          price: "50 Euro",
          horse4: "40 Euro"
        },
      ]
    },
  ]
  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}
