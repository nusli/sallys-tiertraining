import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cookiesAccepted = false;
  title = 'sallys-tiertraining';
  mobilePortrait = false;

  constructor(private responsive: BreakpointObserver){

  }
  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Small])
    .subscribe(result => {
      if (result.matches){
        this.mobilePortrait = true;
      }
    })
    this.responsive.observe(Breakpoints.Large)
    .subscribe(result => {
      if (result.matches){
        this.mobilePortrait = false;
      }
    })
  }

  onOutletLoaded(component:any){
    component.mobilePortrait = this.mobilePortrait;
  }
}
