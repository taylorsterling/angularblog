import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GamingComponent } from './gaming/gaming.component';
import { PetsComponent } from './pets/pets.component';
import { SpyroComponent } from './gaming/spyro/spyro.component';
import { QuickComponent } from './recipes/quick/quick.component';
import { PastaComponent } from './recipes/pasta/pasta.component';
import { DessertComponent } from './recipes/dessert/dessert.component';
import { FoodtastingComponent } from './pets/foodtasting/foodtasting.component';
import { BearrescueComponent } from './pets/bearrescue/bearrescue.component';
import { FiggystoryComponent } from './pets/figgystory/figgystory.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'quick', component: QuickComponent },
  { path: 'pasta', component: PastaComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'spyro', component: SpyroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'foodtasting', component: FoodtastingComponent },
  { path: 'bearrescue', component: BearrescueComponent },
  { path: 'figgystory', component: FiggystoryComponent },

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

