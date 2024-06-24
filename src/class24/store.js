import {createstore} from 'redux';

function cartreducers(state = [], action) {
    const product = action.payload;
    if(state.items[product.id]){
        return{
            ...state,
            items: {
                ...state.items,
                [product.id]: {
                    ...product,
                    quantity: state.items[product.id].quantity + 1
                }
            }
        }
    }
    switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}
const store = createstore(cartreducers);

export default store;