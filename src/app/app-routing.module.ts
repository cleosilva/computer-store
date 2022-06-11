import { CarrinhoModule } from './carrinho/carrinho.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: '', redirectTo: 'produtos', pathMatch: 'full'},
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
