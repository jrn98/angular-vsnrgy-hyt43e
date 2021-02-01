import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details-component",
  templateUrl: "./product-details-component.component.html",
  styleUrls: ["./product-details-component.component.css"]
})
export class ProductDetailsComponentComponent implements OnInit {
  product;
  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
     const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
