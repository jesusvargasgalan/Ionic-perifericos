import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'edit', loadChildren: './edit-lista/edit-lista.module#EditlistaPageModule' },
  { path: 'edit/:id', loadChildren: './edit-lista/edit-lista.module#EditlistaPageModule' },
  { path: 'detalles', loadChildren: './detalles/detalles.module#DetallesPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
