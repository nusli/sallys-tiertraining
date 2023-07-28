import { Subarticle } from "./subarticle.model";

export class Article{
  id!: string;
  pictureUrl!: string;
  title!: string;
  subtitle!: string;
  text!: string;
  mobileText? = "";
  expendable!: boolean;
  expand!: Subarticle[];
}
