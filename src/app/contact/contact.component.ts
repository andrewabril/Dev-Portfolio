import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f', { static: false }) contactForm: NgForm;
  contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const contactInfo = new Contact(
      this.contactForm.value.userData.name,
      this.contactForm.value.userData.email,
      this.contactForm.value.userData.subject,
      this.contactForm.value.userData.body);

    const antiSpam = this.contactForm.value.userData.url;
    if (antiSpam === '') {
      this.contactService.sendEmail(contactInfo);
    }
  }
}
