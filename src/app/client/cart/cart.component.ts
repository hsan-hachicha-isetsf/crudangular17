import { Component, effect, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../classes/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  pageTitle = 'Cart';

  
  cartService = inject(CartService);

  // Expose the values from the service
  cartItems = this.cartService.cartItems;
  subTotal = this.cartService.subTotal;
  deliveryFee = this.cartService.deliveryFee;
  tax = this.cartService.tax;
  totalPrice = this.cartService.totalPrice;

  // Example of an effect
  x = effect(() => console.log("Cart Items:", this.cartItems()));

  onQuantitySelectedPlus(item: Cart, qty: number) { 
    qty++

    this.cartService.updateInCart(item, qty);
  }

  onQuantitySelectedMinus(item: Cart, qty: number) {
     qty--
     if(qty>0)
         this.cartService.updateInCart(item, qty);
  
       
  }

  removeFromCart(item: Cart) {
    this.cartService.removeFromCart(item);
  }

  ClearCart(){
    this.cartService.clearAllCart()
  }

}
