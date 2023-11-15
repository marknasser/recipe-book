import { Component, OnInit, DoCheck } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoopingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoopingList implements OnInit, DoCheck {
  constructor(private shoopingService: ShoopingService) {}
  ingrediants: Ingrediant[] = [];
  private igChangSub: Subscription;

  ngOnInit(): void {
    //add the point of time this component is initialized
    this.ingrediants = this.shoopingService.getIngrediants();
    this.igChangSub = this.shoopingService.ingrediantsChanged.subscribe(
      (ingrediants: Ingrediant[]) => {
        this.ingrediants = ingrediants;
      }
    );
  }
  ngDoCheck(): void {
    // this.ingrediants = this.shoopingService.getIngrediants();
    //this also works beacuse when ever the click of add has done DoChec will get called and the "getIngrediants()" will recall and re evaluate
  }

  onEditItem(id: number) {
    this.shoopingService.startedEditing.next(id);
  }
}
