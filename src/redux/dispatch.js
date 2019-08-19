import {requestDog,requestDogError,requestDogSuccess} from './actions'

export const fetchDog = () => dispatch => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        data => dispatch(requestDogSuccess(data)),
        err => dispatch(requestDogError())
      );
  };