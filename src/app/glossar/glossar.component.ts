import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-glossar',
  templateUrl: './glossar.component.html',
  styleUrls: ['./glossar.component.scss']
})
export class GlossarComponent implements OnInit{
@Input() mobilePortrait = false;
@Input() hero!: Hero;

ngOnInit(): void {
  document.body.scrollTop = 0;
}
}
