import * as actionTypes from '../actions/actionTypes';

const initialState = {
  // Temporari initial state. Then should be initialized from DB.
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 2,
  cheese: 1.5,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // Special ES6 syntax to overwrite a property in a given object.
          // [NAME_U_WANT_TO_USE_AS_PROPERTY] : NEW_VALUE
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
        totalPrice: initialState['totalPrice']
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
