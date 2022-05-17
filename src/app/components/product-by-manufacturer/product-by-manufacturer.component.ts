import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../services/product";

@Component({
  selector: 'app-product-by-manufacturer',
  templateUrl: './product-by-manufacturer.component.html',
  styleUrls: ['./product-by-manufacturer.component.css']
})
export class ProductByManufacturerComponent implements OnInit {
  public productList: Product | any;
  public manufacturerList : Array<string> | any;
  param: any;
  constructor(private router : Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) {
    this.param = this.activatedRoute.snapshot.paramMap.get("nsx");
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(data=> {
      this.productList = data;
      this.manufacturerList = [...new Set(this.productList.map((item: any)  => item.manufacturer))];
      this.productList = this.productList.filter((s : any) =>  s.manufacturer.includes(this.param));
    });
  }
}
