//type: para indicar la acción que se va a ejecutar.
//payload: es la información que recibimos y que estamos mandando al reducer.
export const SET_FAVORITE = 'SET_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const GET_VIDEO_SOURCE = 'GET_VIDEO_SOURCE';

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

export const logoutRequest = logoutData => ({
  type: LOGOUT_REQUEST,
  payload: logoutData
});

export const registerRequest = registerData => ({
  type: REGISTER_REQUEST,
  payload: registerData
});

export const getVideoSource = playingData => ({
  type: GET_VIDEO_SOURCE,
  payload: playingData
});