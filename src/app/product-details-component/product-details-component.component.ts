import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-details-component",
  templateUrl: "./product-details-component.component.html",
  styleUrls: ["./product-details-component.component.css"]
})
export class ProductDetailsComponentComponent implements OnInit {
  product;

   addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private route:ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
     const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
