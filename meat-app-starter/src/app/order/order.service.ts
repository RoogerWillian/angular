import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MEAT_API} from '../app.api';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient) {
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increasyQty(item);
  }

  descreaseQty(item: CartItem) {
    this.cartService.descreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  clear(): void {
    this.cartService.clear();
  }

  checkOrdem(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .map(order => order.id);
  }
}
