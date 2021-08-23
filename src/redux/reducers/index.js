import {
  FETCH_BOOKS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_BOOKS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  bookList: [],
  cartList: [],
};

function booksReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_BOOKS:
      return { ...state, bookList: payload };
    case FETCH_BOOKS_ERROR:
      return { ...state, bookList: payload };
    case ADD_TO_CART:
      return { ...state, cartList: [...state.cartList, payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter(item => item.id !== payload.id),
      };
    default:
      return state;
  }
}

export default booksReducer;

