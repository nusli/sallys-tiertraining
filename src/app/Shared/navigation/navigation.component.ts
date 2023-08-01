import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() mobilePortrait = false;
  navBackgroundHeight = 18.28;
  navBackgroundMaxHeight = 165;

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

  windowX = window.innerWidth;
  windowY = window.innerHeight;
  windowRatio = this.windowX/this.windowY;
  resizeObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;

  constructor() { }


  ngOnInit(): void {
    this.changeNavBackgroundHeight()
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.changeNavBackgroundHeight();
    })
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
    } else if (category === "open"){
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
      this.mobileNavOpen = true;
    }else{
      this.groups_open = false;
      this.individual_open = false;
      this.horse_open = false;
      this.mobileNavOpen = false;
    }
    this.changeNavBackgroundHeight();
  }

  changeNavBackgroundHeight(): void
  {
    if(!this.mobilePortrait){
      this.navBackgroundHeight = 9.2;
      this.navBackgroundMaxHeight = 165;
      if(this.windowRatio >= 1.2){
        this.navBackgroundHeight = 11;
      }
      if(this.windowRatio >= 1.4){
        this.navBackgroundHeight = 12;
      }
      if(this.windowRatio >= 1.6){
        this.navBackgroundHeight = 15;
      }
      if(this.windowRatio >= 2){
        this.navBackgroundHeight = 22;
        this.navBackgroundMaxHeight = 230;
      }
      if(this.windowRatio >= 2.6){
        this.navBackgroundHeight = 29;
        this.navBackgroundMaxHeight = 230;
      }
      if(this.windowRatio >= 3.6){
        this.navBackgroundHeight = 40;
        this.navBackgroundMaxHeight = 230;
      }
    }else{
      this.navBackgroundHeight = 18.28;
      if(this.windowRatio <= 0.5){
       this.navBackgroundHeight = 15.5;
      }
      if(this.windowRatio <= 0.43){
        this.navBackgroundHeight = 14.5;
       }
      if(this.mobileNavOpen){
        this.navBackgroundHeight = 29;
        this.navBackgroundMaxHeight = 230;
        if(this.groups_open || this.individual_open || this.horse_open){
          this.navBackgroundHeight = 44;
          this.navBackgroundMaxHeight = 340;
        }
      }

    }
  }
  ngOnDestroy(): void {
    if(this.resizeSubscription$ != null){
      this.resizeSubscription$.unsubscribe()
    }

  }

}
