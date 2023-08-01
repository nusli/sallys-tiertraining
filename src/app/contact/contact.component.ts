import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../Models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  @Output() ctaOn = false;

  contact = new Contact;
  constructor(private http: HttpClient){

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

    this.http.post('https://sallys-tiertraining-default-rtdb.europe-west1.firebasedatabase.app/contacts.json', this.contact)
    .subscribe(responseData =>{
      console.log(responseData);
    })
  }

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}
