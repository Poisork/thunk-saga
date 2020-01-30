import {requestDog, requestDogSuccess} from './actions'
 
describe("dog action", () => {
    it("AREQUESTED_DOG action success", () => {
        expect(requestDog()).toEqual(  { type: 'REQUESTED_DOG' })
    })

    it("requestDogSuccess", () => {
        const state = {}
        const data = {
            message: 'Url'
        }
        const action = { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
        expect(requestDogSuccess(data)).toEqual(action)
    })
 
})

 