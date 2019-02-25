import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from '../shopping-list.service';
import { ShoppingList } from '../../shared/shoppingList.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: ShoppingList;

  constructor(private slService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.slService.startingEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editedItem = this.slService.getShoppingItem(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            availableAmount: this.editedItem.availableAmount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newShoppingList = new ShoppingList(value.name, value.availableAmount);
    this.slService.updateShoppingList(this.editedItemIndex, newShoppingList)
    form.reset();
  }

  onDelete() {
    this.slService.deleteProduct(this.editedItemIndex);
    this.slForm.reset()
  }

  onSaveList() {
    this.dataStorageService.addProductsToShoppingList()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchList() {
    this.dataStorageService.getShoppingListArray();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
