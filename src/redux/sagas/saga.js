import { put, takeEvery,call, all } from 'redux-saga/effects'
import {requestDog,requestDogError,requestDogSuccess} from '../../redux/actions'

function* helloSaga() {
    yield console.log('Hello Sagas!')
}

function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}
  
function* fetchDogAsync() {
    try {
        yield put(requestDog());
        const data = yield call(() => 
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        );
        yield put(requestDogSuccess(data));
    } catch (error) {
        yield put(requestDogError());
    }
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchFetchDog()
    ])
  }