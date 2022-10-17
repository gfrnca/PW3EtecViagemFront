import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listagem', component: ListagemViagemComponent },
  { path: 'detalhes/:id', component: DetalhesViagemComponent },
  { path: 'excluir/:id', component: ExclusaoViagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
