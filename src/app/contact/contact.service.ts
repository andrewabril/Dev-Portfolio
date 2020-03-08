import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // tslint:disable-next-line: max-line-length
  private contactEndPoint = 'https://andrewcontactform.azurewebsites.net/api/SendContactForm?code=p9GCPztVeuMlyDEbkJoEZQcaTa7lw/ZcAOazxB/CTf/kFtIzS9nh0Q==';

  constructor(private http: HttpClient) { }

  sendEmail(contactForm: Contact) {
    this.http.post<Contact>(this.contactEndPoint, contactForm)
      .subscribe(
        response => {
        },
        error => {
          let message = '';
          if (error.status === 200) {
            message = 'Message has been sent!';
          } else if (error.error instanceof ErrorEvent) {
            message = `Error sending email: ${error.error.message}`;
          }

          alert(message);
        });
  }
}
