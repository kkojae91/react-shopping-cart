import { getPropertyRemoved } from '../utils';

/* ACTION TYPE */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_SELECTED_PRODUCTS = 'REMOVE_SELECTED_PRODUCTS';

export const TOGGLE_PRODUCT_SELECTION = 'TOGGLE_PRODUCT_SELECTION';
export const TOGGLE_ALL_PRODUCTS_SELECTION = 'TOGGLE_ALL_PRODUCTS_SELECTION';

export const INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY';
export const DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY';
export const INPUT_PRODUCT_QUANTITY = 'INPUT_PRODUCT_QUANTITY';

export const CHECKOUT = 'CHECKOUT';

/* ACTION CREATOR */

export const cartAction = {
  addProduct: (product) => ({ type: ADD_PRODUCT, payload: { product } }),
  removeProduct: (id) => ({ type: REMOVE_PRODUCT, payload: { id } }),
  removeSelectedProducts: () => ({ type: REMOVE_SELECTED_PRODUCTS }),

  toggleProductSelection: (id) => ({ type: TOGGLE_PRODUCT_SELECTION, payload: { id } }),
  toggleAllProductsSelection: (willBeSelected) => ({
    type: TOGGLE_ALL_PRODUCTS_SELECTION,
    payload: { willBeSelected },
  }),

  incrementProductQuantity: (id) => ({ type: INCREMENT_PRODUCT_QUANTITY, payload: { id } }),
  decrementProductQuantity: (id) => ({ type: DECREMENT_PRODUCT_QUANTITY, payload: { id } }),
  inputProductQuantity: (id, quantity) => ({
    type: INPUT_PRODUCT_QUANTITY,
    payload: { id, quantity },
  }),

  checkout: () => ({ type: CHECKOUT }),
};

/* REDUCER */

export const INITIAL_STATE = {};

export const INITIAL_CART_PRODUCT_PROPS = {
  quantity: 1,
  isSelected: true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type = '', payload = '' } = action;

  switch (type) {
    /* payload: { product } */
    case ADD_PRODUCT:
      return {
        ...state,
        [payload.product.id]: { ...payload.product, ...INITIAL_CART_PRODUCT_PROPS },
      };

    /* payload: { id } */
    case REMOVE_PRODUCT:
      return getPropertyRemoved({ ...state }, payload.id);

    case REMOVE_SELECTED_PRODUCTS:
      const notRemovedProducts = Object.entries(state).filter(
        ([_, product]) => !product.isSelected
      );
      return Object.fromEntries(notRemovedProducts);

    /* payload: { id } */
    case TOGGLE_PRODUCT_SELECTION:
      const willBeSelected = !state[payload.id].isSelected;
      return { ...state, [payload.id]: { ...state[payload.id], isSelected: willBeSelected } };

    /* payload: { willBeSelected } */
    case TOGGLE_ALL_PRODUCTS_SELECTION:
      return Object.entries(state).reduce(
        (acc, [id]) => {
          acc[id].isSelected = payload.willBeSelected;
          return acc;
        },
        { ...state }
      );

    /* payload: { id } */
    case INCREMENT_PRODUCT_QUANTITY:
      const incrementedQuantity = state[payload.id].quantity + 1;
      return { ...state, [payload.id]: { ...state[payload.id], quantity: incrementedQuantity } };

    /* payload: { id } */
    case DECREMENT_PRODUCT_QUANTITY:
      const decrementedQuantity = state[payload.id].quantity - 1;
      return { ...state, [payload.id]: { ...state[payload.id], quantity: decrementedQuantity } };

    /* payload: { id, quantity } */
    case INPUT_PRODUCT_QUANTITY:
      return { ...state, [payload.id]: { ...state[payload.id], quantity: payload.quantity } };

    case CHECKOUT:
      const notOrderedProducts = Object.entries(state).filter(
        ([_, product]) => !product.isSelected
      );
      return Object.fromEntries(notOrderedProducts);

    default:
      return state;
  }
};