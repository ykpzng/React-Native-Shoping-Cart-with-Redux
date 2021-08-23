import axios from 'axios';
import {
  FETCH_BOOKS,
  FETCH_BOOKS_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../actions/actionTypes';

function fetchBooks() {
  return dispatch => {
    axios
      .get('https://example-data.draftbit.com/books?_limit=10')
      .then(result => result.data)
      .then(data =>
        dispatch({
          type: FETCH_BOOKS,
          payload: data,
        }),
      )
      .catch(err =>
        dispatch({
          type: FETCH_BOOKS_ERROR,
          payload: err,
        }),
      );
  };
}

const addCart = payload => dispatch => dispatch({ type: ADD_TO_CART, payload });

const removeCart = payload => dispatch =>
  dispatch({ type: REMOVE_FROM_CART, payload });

export { fetchBooks, addCart, removeCart };
