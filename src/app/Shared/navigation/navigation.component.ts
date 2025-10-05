import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() mobilePortrait = false;

  // navbar control
  mobileNavOpen = false;
  //Gruppentraining
  groupEntriesAvailable = true;
  groups_open = false;
  //Einzeltraining
  individualEntriesAvailable = false;
  individual_open = false;
  //Pferdereiten
  horseEntriesAvailable = false;
  horse_open = false;
  //Me
  openedPage = "home";
  stable_open = false;
  personal_open = false;

  windowX = window.innerWidth;
  windowY = window.innerHeight;
  windowRatio = this.windowX/this.windowY;
  resizeObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;

  constructor() { }


  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    })
  }


  // switches view of the navbar
  switchCategories(category:string){

    if(category === "groups_open"){
      this.individual_open = false;
      this.horse_open = false;
      this.groups_open = !this.groups_open;
      this.stable_open = false;
      this.personal_open = false;
    } else if(category === "individual_open"){
      this.groups_open = false;
      this.individual_open = !this.individual_open;
      this.horse_open = false;
      this.stable_open = false;
      this.personal_open = false;
    } else if(category === "horse_open"){
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = !this.horse_open;
      this.stable_open = false;
      this.personal_open = false;
    } else if(category === "stable_open"){
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
      this.stable_open = !this.stable_open;
      this.personal_open = false;
    } else if(category === "personal_open"){
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
      this.stable_open = false;
      this.personal_open = !this.personal_open;
    } else if (category === "open"){
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
      this.stable_open = false;
      this.personal_open = false;
      this.mobileNavOpen = true;
    }else{
      // close all nav dropdowns
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
      this.mobileNavOpen = false;
      this.stable_open = false;
      this.personal_open = false;
    }
  }

  
  ngOnDestroy(): void {
    if(this.resizeSubscription$ != null){
      this.resizeSubscription$.unsubscribe()
    }

  }

}
