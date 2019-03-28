import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GamingComponent } from './gaming/gaming.component';
import { SpyroComponent } from './gaming/spyro/spyro.component';
import { QuickComponent } from './recipes/quick/quick.component';
import { ChickentacosComponent } from './recipes/quick/chickentacos/chickentacos.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'quick', component: QuickComponent },
  { path: 'chickentacos', component: ChickentacosComponent},
  { path: 'gaming', component: GamingComponent },
  { path: 'spyro', component: SpyroComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

