import { Component, OnInit } from '@angular/core';
import {Product} from "../../services/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public productList: Product | any;
  public manufacturerList : Array<string> | any;

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data=> {
      this.productList = data;
      this.manufacturerList = [...new Set(this.productList.map((item: any)  => item.manufacturer))];
    });
  }

}
