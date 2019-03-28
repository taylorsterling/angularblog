import { Component, OnInit } from '@angular/core';

// import { Recipe } from '../recipes/quick/recipe'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  
})

export class RecipesComponent implements OnInit {

  // recipe: Recipe = {
  //   id: 1,
  //   name: 'Chicken Tacos',
  //   intro1: 'Intro 1',
  //   intro2: 'Intro 2',
  //   need: 'Heres what youll need',
  //   prep: 'Prep',
  //   yield: 'Yield',
  //   ingredients: 'Ingredients',
  //   how: 'How',
  //   instructions: 'Instructions'
  // };

  constructor() { }

  ngOnInit() {
  }

}
