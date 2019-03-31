import { Recipe } from '../recipes/recipe';

export const RECIPES: Recipe[] = [
    {
        id: 1,
        name: 'Chicken Tacos',
        intro1_title: 'An Easy Take on an All- Time Favorite',
        intro1_body: 'My husband, who grew up in Mexico, always knows how to make the best tacos- delicious tacos with marinated meats, fresh produce, and homemade tortillas. Said tacos usually take hours or more to prepare, leaving us too drained to partake in our beloved Taco Tuesdays.\n Thankfully, he found a way to incorporate some fresh Mexican flavors into a 20- minute chicken taco so we can enjoy our favorite tortilla- wrapped cuisine any night of the week!',
        intro1_image: 'assets/media/tacochicken.jpg',
        intro2_title: 'The Breakthrough',
        intro2_body: 'Inspired by our attempts to get healthier, one night he substituted our typical taco beef with some pan- seared chicken. The first time around, caught up in our time- crunched, health- conscious minds, they weren\'t as exciting as the usual meaty tacos we\'re accustomed to.\nI had the idea to, "Dress up," the tacos in some fabulous (and healthy) toppings. One Taco Tuesday later and we were in business! Fresh pico de gallo, creamy avocado, salsa verde, and yep- even a bit of cheese made these almost- diet tacos worthy of our pallets.',
        intro2_image: 'assets/media/tacos.jpg',
        prep_time: "20 minutes",
        yield: '4 tacos',
        ingredients: [
          '4 boneless skinless chicken breast tenders',
          'Salt and pepper to taste',
          '2 TBSP vegetable oil (separated in half)',
          '1 TBSP creole seasoning (Our favorite is Tony\'s)',
          '4 White corn tortillas (Our go to: Guerrero\'s)'
        ],
        optional_ingredients: [
          '1 Sliced avocado',
          '4oz Pico de gallo',
          '1 pinch Cojita cheese (per taco)',
          'Drizzle of salsa verde (per taco) Check out our fave: Herdez',
          'Fresh- squeezed lime juice (to taste)'
        ],
        instructions: [
          'Grab a good size non- stick pan, drizzle with one portion of oil, and put it on the stove over med-low heat.',
          'My husband has cooked the chicken two different ways. You can either cut the chicken into bite- sized pieces, or using a knife you can carefully slice each tender vertically down the middle, about halfway through the breast, and cook them whole. Prepare your chicken accordingly.',
          'Sprinkle the chicken with the creole seasoning and place in the pan',
          'If you broke up the chicken, cook while stirring occasionally. If you cook the tenders whole, flip them once or twice until they have a golden- brown color, and keep the pan covered.',
          'Just before the chicken is done, heat up a comal (or another large pan), and drizzle with the remaining oil and set over medium heat.',
          'While the chicken finishes cooking, place the tortillas in the comal/pan and cook on both sides until they obtain a slightly golden color.',
          'Place fried tortillas on a plate- just watch out as they\'ll be hot!',
          'Spread around chicken evenly if cooked in pieces, or place 1 tender in the center of each taco.',
          'Prepare your toppings and add as much as you like!'
        ]
      }

]
