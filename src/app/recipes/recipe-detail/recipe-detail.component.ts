import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipes/recipe';

import { RECIPES } from '../../recipes/recipes';
import { RecipesComponent } from '../recipes.component';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipes = RECIPES;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    let recipe_id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipes.find(x => x.id == recipe_id)
  }

}
