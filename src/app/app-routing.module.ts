import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductByManufacturerComponent} from "./components/product-by-manufacturer/product-by-manufacturer.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trang-chu', component: HomeComponent },
  { path: 'san-pham/nha-san-xuat/:nsx', component: ProductByManufacturerComponent },
  { path: 'san-pham/:id', component: ProductDetailComponent },
  { path: 've-chung-toi', component: AboutComponent },
  { path: 'lien-he', component: ContactComponent },

  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
