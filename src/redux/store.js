import {createStore} from 'redux';

const initialState={
  name:'',
  category:'',
  authorFirst: '',
  authorLast:'',
  ingredients: [],
  instructions:[],
  recipes: []
};
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST';
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST';
export const INGREDIENTS = 'INGREDIENTS';
export const INSTRUCTIONS = 'INSTRUCTIONS';
export const RECIPES = 'RECIPES';
function reducer(state=initialState, action){
 const {type, payload} = action
  switch(type){
    case UPDATE_NAME:
      return {...state, name: payload}

    case UPDATE_CATEGORY:
      return {...state, category:payload}

    case UPDATE_AUTHOR_FIRST:
      return {...state, authorFirst:payload}

    case UPDATE_AUTHOR_LAST: 
      return {...state, authorLast:payload} 
    case INGREDIENTS:
      const newIngredients =  [...state.ingredients, payload];
      return {...state, ingredients: newIngredients}  
    case INSTRUCTIONS:
      const newInstructions = [...state.instructions , payload];
      return {...state, instructions: newInstructions}  
    case RECIPES:
      const {
        name,
        category,
        authorFirst,
        ingredients,
        instructions
      } = state;
      const recipes = {
        name, 
        category,
        authorFirst,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipes]
      return{...state, recipes: newRecipes}
        default:
            return state;
    }
     

  
}
export default createStore(reducer);