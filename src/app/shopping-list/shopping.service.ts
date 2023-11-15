import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingrediant } from '../shared/ingrediant.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoopingService {
  // ingrediantsChanged = new EventEmitter<Ingrediant[]>();
  ingrediantsChanged = new Subject<Ingrediant[]>();
  startedEditing = new Subject<number>();

  private ingrediants: Ingrediant[] = [
    new Ingrediant(+Date.now().toString() + 10, 'apples', 5),
    new Ingrediant(+Date.now().toString() + 2, 'tomato', 9),
  ];

  addIngrediant(newIngerdiant: Ingrediant) {
    this.ingrediants.push(newIngerdiant);
    // this.ingrediantsChanged.emit(this.ingrediants.slice());
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  addIngrediants(newIngerdiant: Ingrediant[]) {
    this.ingrediants.push(...newIngerdiant);
    // this.ingrediantsChanged.emit(this.ingrediants.slice());
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  getIngrediants() {
    console.log('getIngridiant');
    return this.ingrediants.slice();
  }

  getIngrediant(id: number): Ingrediant {
    // return this.ingrediants.find((el) => el.id === id);
    const currentIndex = this.ingrediants.findIndex((res) => res.id === id);
    // if (!currentIndex && currentIndex !== 0) return;

    return this.ingrediants[currentIndex];
  }
  updateOne(id: number, newData: Ingrediant) {
    const currentIndex = this.ingrediants.findIndex((res) => res.id === id);
    this.ingrediants[currentIndex] = newData;
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }
  deleteOne(id: number) {
    this.ingrediants = this.ingrediants.filter((el) => el.id !== id);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }
}
