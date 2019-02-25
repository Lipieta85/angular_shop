import { ShoppingList } from '../shared/shoppingList.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    shoppingListChanged = new Subject<ShoppingList[]>();
    startingEditing = new Subject<number>();

    shoppingList: ShoppingList[] = [];

    setShoppingList(shoppingList: ShoppingList[]) {
        this.shoppingList = shoppingList;
        this.shoppingListChanged.next(this.shoppingList.slice())
    }

    getShoppingList() {
        return this.shoppingList.slice();
    }

    getShoppingItem(index: number) {
        return this.shoppingList[index]
    }

    addProducts(product) {
        this.shoppingList.push(product)
        this.shoppingListChanged.next(this.shoppingList.slice())
    }

    deleteProduct(index: number) {
        this.shoppingList.splice(index, 1);
        this.shoppingListChanged.next(this.shoppingList.slice())
    }

    updateShoppingList(index: number, newShoppingList: ShoppingList) {
        this.shoppingList[index] = newShoppingList;
        this.shoppingListChanged.next(this.shoppingList.slice())
    }
}