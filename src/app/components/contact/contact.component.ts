import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('800ms ease-in', style({ opacity: 1 }))
    ])
  ])
]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  sendMessage() {
    alert(`Message sent by ${this.name}`);
    this.name = this.email = this.message = '';
  }
}
