import store from './store'
import {requestDog,requestDogError,requestDogSuccess} from './actions'

describe('store',()=> {

    beforeAll(()=> store.dispatch(requestDog()))
    it('state expect object after action request Dog',() => expect(store.getState()).toEqual({
            url: '',
            loading: true,
            error: false,
        })
    )
})