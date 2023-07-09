import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() newsAvailable = true;
  lastNews = 4;
  actualNews = {
    index: 1,
    title: "Aktuell findet nix Spannendes statt",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
  };

  dosbOpen = false;
  zeugnisOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
