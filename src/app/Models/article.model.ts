import { Subarticle } from "./subarticle.model";

export class Article{
  id!: string;
  pictureUrl!: string;
  title!: string;
  subtitle!: string;
  text!: string;
  expendable!: boolean;
  expand!: Subarticle[];
}
