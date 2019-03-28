import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { QuickComponent } from './recipes/quick/quick.component';
import { CrockpotComponent } from './recipes/crockpot/crockpot.component';
import { LeanComponent } from './recipes/lean/lean.component';
import { DessertComponent } from './recipes/dessert/dessert.component';
import { PastaComponent } from './recipes/pasta/pasta.component';
import { ChickentacosComponent } from './recipes/quick/chickentacos/chickentacos.component';
import { GamingComponent } from './gaming/gaming.component';
import { SpyroComponent } from './gaming/spyro/spyro.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HomeComponent,
    QuickComponent,
    CrockpotComponent,
    LeanComponent,
    DessertComponent,
    PastaComponent,
    ChickentacosComponent,
    GamingComponent,
    SpyroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
