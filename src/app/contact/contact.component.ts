import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../Models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Contact, FBContact } from '../Models/contact.model';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  @Output() ctaOn = false;
  success = false;

  contact = new FBContact;
  constructor(private http: HttpClient, private contactservice: ContactService){

  }

  sendCredentials(form: NgForm){
    //Wird zunächst als Objekt gespeichert
    //Später: Weiterleitung als E-Mail(firebase)
    this.contact.lastName = form.form.value.lastName;
    this.contact.firstName = form.form.value.firstName;
    this.contact.email = form.form.value.usermail;
    this.contact.phone = form.form.value.userphone;
    let interests = "Interessen: "
    if(form.form.value.funagility==true){
      interests += "Funagility, "
    }
    if(form.form.value.locagility==true){
      interests += "Locagility, "
    }
    if(form.form.value.mantrailing==true){
      interests += "Mantrailing, "
    }
    if(form.form.value.tricks==true){
      interests += "Tricks & Parcours, "
    }
    if(form.form.value.puppies==true){
      interests += "Welpen, "
    }
    if(form.form.value.ridingLessons==true){
      interests += "Pferdereiten, "
    }
    if(form.form.value.horseInfo==true){
      interests += "allgemeine Infos zu Pferden"
    }
    this.contact.interests = interests;
    let answer = "Antwort bitte per: "
    if(form.form.value.perMail==true){answer+="Mail, "}
    if(form.form.value.perPhone==true){answer+="Telefon "}

    this.contact.answer = answer;
    this.contact.usermessage = form.form.value.usermessage;
    form.reset();

    // this.http.post('https://sallys-tiertraining-default-rtdb.europe-west1.firebasedatabase.app/contacts.json', this.contact)
    // .subscribe(responseData =>{
    //   console.log(responseData);
    // })
    this.success = this.contactservice.sendContactform(this.contact);
  }

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}
