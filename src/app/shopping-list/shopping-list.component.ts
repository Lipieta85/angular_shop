import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingList } from '../shared/shoppingList.model'
import { ShoppingListService } from './shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingList: ShoppingList[];
  private subscription: Subscription;

  constructor(private slServices: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.shoppingList = this.slServices.getShoppingList();
    //this.dataStorageService.getShoppingListArray();
    this.subscription = this.slServices.shoppingListChanged
      .subscribe(
        (shoppingList: ShoppingList[]) => {
          this.shoppingList = shoppingList;
        }
      );
  }

  onEditItem(index: number) {
    this.slServices.startingEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
