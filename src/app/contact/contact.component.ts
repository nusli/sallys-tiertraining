import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() mobilePortrait = false;
  @Output() ctaOn = false;

  contact = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    interests: {
      ridingHorse: false,
      horseInfo: false,
      individual1: false,
      individual2: false,
      funagility: false,
      locagility: false,
      mantrailing: false,
      tricks: false,
      puppies: false,
    },
    usermessage: '',
    answer: {
      perPhone: false,
      perMail: false,
    },
  }

  sendCredentials(form: NgForm){
    //Wird zunächst als Objekt gespeichert
    //Später: Weiterleitung als E-Mail(firebase)
    this.contact.lastName = form.form.value.lastName;
    this.contact.firstName = form.form.value.firstName;
    this.contact.email = form.form.value.usermail;
    this.contact.phone = form.form.value.userphone;
    this.contact.interests.ridingHorse = form.form.value.ridingLessons;
    this.contact.interests.horseInfo = form.form.value.horseInfo;
    this.contact.interests.individual1 = form.form.value.individual1
    this.contact.interests.individual2 = form.form.value.individual2
    this.contact.interests.funagility = form.form.value.funagility;
    this.contact.interests.locagility = form.form.value.locagility;
    this.contact.interests.mantrailing = form.form.value.mantrailing;
    this.contact.interests.tricks = form.form.value.tricks;
    this.contact.interests.puppies = form.form.value.puppies;
    this.contact.answer.perMail = form.form.value.perMail;
    this.contact.answer.perPhone = form.form.value.perPhone;
    this.contact.usermessage = form.form.value.usermessage;
    console.log(this.contact)
    form.reset();
  }
}
