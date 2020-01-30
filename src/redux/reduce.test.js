import {reducer, initialState} from './reducer'
import {requestDog,requestDogError,requestDogSuccess} from './actions'

describe("dog Reducer", () => {

 
    it("requestDog dispatch", () => {
        expect(reducer(initialState,requestDog())).toEqual({
            url: '',
            loading: true,
            error: false,
        })
    })

    it("requestDogSucceded dispatch", () => {
        const data = {
            message: 'Url'
        }
        expect(reducer(initialState,requestDogSuccess(data))).toEqual({
            url: data.message,
            loading: false,
            error: false,
        } )
    })

    it("requestDogFailed dispatch", () => {
       
        expect(reducer(initialState,requestDogError())).toEqual({
            url: '',
            loading: false,
            error: true,
        })
    })
 
})

 