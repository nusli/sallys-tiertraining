export class Contact
 {
  lastName? = "";
  firstName? = "";
  email? = "";
  phone? = "";
  interests = new Interests;
  usermessage? = "";
  answer = new Answer;
 }

export class Interests
{
  ridingHorse? = false;
  horseInfo? = false;
  individual1? = false;
  individual2? = false;
  funagility? = false;
  locagility? = false;
  mantrailing? = false;
  tricks? = false;
  puppies? = false;
}

export class Answer
{
  perPhone? = false;
  perMail? = false;
}
