//type: para indicar la acción que se va a ejecutar.
//payload: es la información que recibimos y que estamos mandando al reducer.
export const SET_FAVORITE = 'SET_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const setFavorite = carouselItem => ({
    type: SET_FAVORITE,
    payload: carouselItem
});

export const deleteFavorite = carouselItem => ({
  type: DELETE_FAVORITE,
  payload: carouselItem
});

export const loginRequest = formData => ({
  type: LOGIN_REQUEST,
  payload: formData
});