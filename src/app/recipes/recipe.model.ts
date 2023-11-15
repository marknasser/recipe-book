import { Ingrediant } from '../shared/ingrediant.model';

export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrediants: Ingrediant[];

  constructor(
    id: string,
    name: string,
    desc: string,
    path: string,
    ingrediants: Ingrediant[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingrediants = ingrediants;
  }
}
