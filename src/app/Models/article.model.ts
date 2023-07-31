import { Subarticle } from "./subarticle.model";

export class Article{
  id!: string;
  pictureUrl!: string;
  sizeing?: string = "cover";
  title!: string;
  subtitle!: string;
  text!: string;
  mobileText? = "";
  expendable!: boolean;
  expand!: Subarticle[];
}
