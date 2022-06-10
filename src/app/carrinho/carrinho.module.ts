import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { NgModule } from '@angular/core';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    FormsModule
  ]
})
export class CarrinhoModule { }
