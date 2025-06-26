import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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

  sendMessage(): void {
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    const serviceId = environment.emailServiceID;
    const templateId = environment.emailTemplateID;
    const publicKey = environment.emailPublicKey;

    if (!serviceId || !templateId || !publicKey) {
      alert('❌ Email configuration missing. Please try again later.');
      return;
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response: EmailJSResponseStatus) => {
        alert('✅ Message sent successfully!');
        this.name = '';
        this.email = '';
        this.message = '';
      },
      (error) => {
        console.error('❌ Email send error:', error);
        alert('Failed to send message. Please try again later.');
      }
    );
  }
}
