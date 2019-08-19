import {requestDog,requestDogError,requestDogSuccess} from './actions'

export const fetchDog = () => dispatchFromMiddleware => {
  dispatchFromMiddleware(requestDog());
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        data => dispatchFromMiddleware(requestDogSuccess(data)),
        err => dispatchFromMiddleware(requestDogError())
      );
  };