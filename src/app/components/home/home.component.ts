import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  standalone:false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private router: Router, private scroller: ViewportScroller) {}

  scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } 
  else {
    this.router.navigate(['/' + id]).then(() => {
      setTimeout(() => {
        const elAfterNav = document.getElementById(id);
        if (elAfterNav) {
          elAfterNav.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); 
    });
  }
}
}
