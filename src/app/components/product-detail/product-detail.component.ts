import { Component, OnInit } from '@angular/core';
import {Product} from "../../services/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId = 0;
  productDetails: Product | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService) { }

    c1 = 'c1';

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productId = data["id"];
    });

    this.productsService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    });
  }

}
