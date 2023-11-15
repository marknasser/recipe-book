import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoopingService } from 'src/app/shopping-list/shopping.service';
@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
})
export class ShoopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription!: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingrediant;

  constructor(private shoopingService: ShoopingService) {}

  ngOnInit() {
    this.subscription = this.shoopingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoopingService.getIngrediant(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(itemForm: NgForm) {
    const newIngridiant = {
      id: +Date.now().toString(),
      name: itemForm.value.name,
      amount: itemForm.value.amount,
    };

    if (this.editMode) {
      this.shoopingService.updateOne(this.editItemIndex, newIngridiant);
    } else {
      this.shoopingService.addIngrediant(newIngridiant);
    }
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoopingService.deleteOne(this.editItemIndex);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
