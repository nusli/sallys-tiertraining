import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sallys-tiertraining';
  mobilePortrait = false;

  constructor(private responsive: BreakpointObserver){

  }
  ngOnInit(): void {
    this.responsive.observe(Breakpoints.XSmall)
    .subscribe(result => {
      if (result.matches){
        this.mobilePortrait = true;
        console.log('responsive for XSmall: ' + window.innerWidth + ' x ' + window.innerHeight);
      }
    })
  }

  onOutletLoaded(component:any){
    component.mobilePortrait = this.mobilePortrait;
  }
}
