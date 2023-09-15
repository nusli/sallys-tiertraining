import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit, AfterViewInit{

  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  @Input() article = "";
  impressumTexts = [
    {
      subtitle: 'Name und Kontaktdaten des für die Verarbeitung Verantwortlichen',
      text: 'Diese Datenschutz-Information gilt für die Datenverarbeitung durch:',
    },
    {
      subtitle: 'Verantwortlicher:',
      text: 'Sally Davidson',
    },
    {
      subtitle: '',
      text: 'Dr.-Hübner-Str. 28',
    },
    {
      subtitle: '',
      text: '39164 Wanzleben OT Bottmersdorf',
    },
    {
      subtitle: '',
      text: 'Tel.: 0174 / 9789210',
    },
    {
      subtitle: '',
      text: 'E-Mail: info@sallys-tiertraining.de',
    }
  ]

  agbTexts = [
    {
      subtitle: 'Beim Besuch der Webseite',
      text: `Beim Aufrufen unserer Website www.sallys-tiertraining.de werden durch den auf Ihrem Endgerät
      zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website
      gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende
      Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
      gespeichert:`,
    },
    {
      subtitle: '',
      text: 'IP-Adresse des anfragenden Rechners,',
    },
    {
      subtitle: '',
      text: 'Datum und Uhrzeit des Zugriffs,',
    },
    {
      subtitle: '',
      text: 'Name und URL der abgerufenen Datei,',
    },
    {
      subtitle: '',
      text: 'Website, von der aus der Zugriff erfolgt (Referrer-URL),',
    },
    {
      subtitle: '',
      text: `verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres
      Access-Providers.`,
    },
    {
      subtitle: '',
      text: 'Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:',
    },
    {
      subtitle: '',
      text: 'Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,',
    },
    {
      subtitle: '',
      text: 'Gewährleistung einer komfortablen Nutzung unserer Website,',
    },
    {
      subtitle: '',
      text: 'Auswertung der Systemsicherheit und -stabilität sowie',
    },
    {
      subtitle: '',
      text: `zu weiteren administrativen Zwecken.`,
    },
    {
      subtitle: '',
      text: `Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes
      Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die
      erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.` +
      `Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein.`+
      `Nähere Erläuterungen dazu erhalten Sie unter den Ziff. 3 und 4 dieser Datenschutzerklärung.`,
    },
    {
      subtitle: 'Bei Nutzung des Kontaktformulars',
      text: `Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über unsere E-Mail-Adresse Kontakt
      aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von
      wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig
      getätigt werden. Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art.
      6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung. Die für die Benutzung
      des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der
      von Ihnen gestellten Anfrage automatisch gelöscht.`,
    },
    {
      subtitle: 'Weitergabe von Daten',
      text: `Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten
      Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:`,
    },
    {
      subtitle: '',
      text: `Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,`,
    },
    {
      subtitle: '',
      text: `die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder
      Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht,
      dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten
      haben,`,
    },
    {
      subtitle: '',
      text: `für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche
      Verpflichtung besteht, sowie`,
    },
    {
      subtitle: '',
      text: `dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von
      Vertragsverhältnissen mit Ihnen erforderlich ist.`,
    },
    {
      subtitle: 'Cookies',
      text: `Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser
      automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert
      werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an,
      enthalten keine Viren, Trojaner oder sonstige Schadsoftware. In dem Cookie werden Informationen
      abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies

      bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten. Der
      Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu
      gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten
      unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch
      gelöscht. Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre
      Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert
      werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird
      automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie
      getätigt haben, um diese nicht noch einmal eingeben zu müssen. Diese Cookies werden nach einer
      jeweils definierten Zeit automatisch gelöscht. Die durch Cookies verarbeiteten Daten sind für die
      genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1
      S. 1 lit. f DSGVO erforderlich. Die meisten Browser akzeptieren Cookies automatisch. Sie können
      Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden
      oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige
      Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website
      nutzen können.`,
    },
    {
      subtitle: 'Google Web Fonts',
      text: `Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von
      Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
      ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von
      Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt
      Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung
      von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung
      unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
      dar. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer
      genutzt. Weitere Informationen zu Google Web Fonts finden Sie
      unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von
      Google: https://www.google.com/policies/privacy/. Font Awesome Diese Seite nutzt zur
      einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Fonticons, Inc.
      bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
      Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen
      verwendete Browser Verbindung zu den Servern von Fonticons, Inc. aufnehmen. Hierdurch erlangt
      Fonticons, Inc. Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die
      Nutzung von Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung
      unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
      dar. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer
      genutzt. Weitere Informationen zu Font Awesome finden Sie
      unter https://fontawesome.com/help und in der Datenschutzerklärung von Fonticons,
      Inc.: https://fontawesome.com/privacy.`,
    },
    {
      subtitle: 'Betroffenenrechte',
      text: `Sie haben das Recht:`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
      zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die

      Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen
      Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines
      Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das
      Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns
      erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung
      einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten
      verlangen;`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer
      bei uns gespeicherten personenbezogenen Daten zu verlangen;`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten
      zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie
      Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus
      Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung
      von Rechtsansprüchen erforderlich ist;`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
      zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung
      unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
      benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von
      Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die
      Verarbeitung eingelegt haben;`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in
      einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die
      Übermittlung an einen anderen Verantwortlichen zu verlangen;`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu
      widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung
      beruhte, für die Zukunft nicht mehr fortführen dürfen und`,
    },
    {
      subtitle: '',
      text: `gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können
      Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes
      oder unseres Kanzleisitzes wenden.`,
    },
    {
      subtitle: 'Widerrufsrecht',
      text: `Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs.
      1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch
      gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen,
      die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung
      richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer
      besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder
      Widerspruchsrecht Gebrauch machen, genügt eine E-Mail info@sallys-tiertraining.de.`,
    },
    {
      subtitle: 'Datensicherheit',
      text: `Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
      in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt

      wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-
      Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine
      einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der
      geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren
      Statusleiste Ihres Browsers. Wir bedienen uns im Übrigen geeigneter technischer und
      organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche
      Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten
      Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der
      technologischen Entwicklung fortlaufend verbessert.`,
    },
    {
      subtitle: 'Aktualität und Änderung dieser Datenschutzerklärung',
      text: `Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 02.07.2022. Durch die
      Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher
      beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
      ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website
      unter https://www.sallys-tiertraining.de/Impressum/ von Ihnen abgerufen und ausgedruckt
      werden.`,
    },
  ]

  privacyTexts = [
    {
      subtitle: 'Haftung für Inhalte',
      text: `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
      verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
      Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
      hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
      konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
      werden wir diese Inhalte umgehend entfernen.`,
    },
    {
      subtitle: 'Haftung für Links',
      text: `Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
      haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
      Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
      inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
      Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
      Links umgehend entfernen.`,
    },
    {
      subtitle: 'Urheberrecht',
      text: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
      deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung

      außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
      kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
      wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
      gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
      wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
      derartige Inhalte umgehend entfernen.`,
    },
    {
      subtitle: 'Bildnachweise',
      text: `Die Bilder, die hier auf dieser Website Verwendung finden, wurden von uns ausschließlich selbst
      (Sally Davidson) oder in unserem Auftrag fotografiert und stellen weder Werbung für die
      abgebildeten Objekte dar, noch sind Kooperationen oder Leistungen/Gegenleitungen Dritter mit der
      Abbildung der Objekte verbunden.`,
    }
  ]
  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
  ngAfterViewInit(): void {
    if(!this.mobilePortrait){
      switch(this.article){
        case "cookies": {
          document.body.scrollTop = 3000;
          break;
        }
      }
    }else{
      switch(this.article){
        case "cookies": {
          document.body.scrollTop = 3100;
          break;
        }
      }
    }
  }
}
