import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { QuickComponent } from './recipes/quick/quick.component';
import { ChickentacosComponent } from './recipes/quick/chickentacos/chickentacos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'quick', component: QuickComponent },
  { path: 'chickentacos', component: ChickentacosComponent}

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

