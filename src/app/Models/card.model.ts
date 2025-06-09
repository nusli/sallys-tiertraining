// if link == "", there is no button on the card
// text 2 only displays if no link is given (for space and layout constraints)
export class Card{
  id!: string;
  pictureUrl!: string;
  pictureUrlDesk!: string;
  title!: string;
  text!: string;
  text2!: string;
  link!: string;
  fragment!: string;
  query!: object;
}
