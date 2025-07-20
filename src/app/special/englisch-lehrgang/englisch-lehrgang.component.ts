import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';

@Component({
  selector: 'app-englisch-lehrgang',
  templateUrl: './englisch-lehrgang.component.html',
  styleUrls: ['./englisch-lehrgang.component.scss']
})
export class EnglischLehrgangComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  ngAfterViewInit(): void {
    document.body.scrollTop = 0;
  }
}
