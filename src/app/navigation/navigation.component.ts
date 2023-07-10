import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  groups_open = false;
  individual_open = false;
  horse_open = false;

  constructor() { }

  ngOnInit(): void {

  }
  switchCategories(category:string){

    if(category === "groups_open"){
      this.individual_open = false;
      this.horse_open = false;
      this.groups_open = !this.groups_open;
    } else if(category === "individual_open"){
      this.groups_open = false;
      this.individual_open = !this.individual_open;
      this.horse_open = false;
    } else if(category === "horse_open"){
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = !this.horse_open;
    } else{
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
    }
  }

}
