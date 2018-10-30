import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increasyQty = new EventEmitter<CartItem>();
  @Output() decreasyQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() {
  }

  ngOnInit() {
  }

  emitIncreasyQty(item: CartItem) {
    this.increasyQty.emit(item)
  }

  emitDescreaeQty(item: CartItem) {
    this.decreasyQty.emit(item)
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }
}
