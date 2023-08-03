import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { Contact, FBContact } from '../Models/contact.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }





  //Send to contact to firebase
  sendContactform(contact: FBContact): boolean{
    firebase.initializeApp(environment.firebase);
    const afs = firebase.firestore();
    const contactRef = afs.collection('contacts');
    contactRef.add({ ...contact });
    return true;
  }




}
