import {shallow,mount} from 'enzyme'
import {Star} from './Default'
import React from 'react'
import toJSON from 'enzyme-to-json'
import {compose} from 'redux'
import App from '../App'
import {Provider} from 'react-redux'
import store from '../redux/store'

describe('Shallows',() =>{
    const shallowExpect = compose(expect,toJSON,shallow)
    const mountExpect = compose(expect,toJSON,mount)
 

    it('Render correct properties <Star />',() =>{
        shallowExpect(<Star selected={true} />).toMatchSnapshot()
    })
    it('Render correct properties <App />',() =>{
        mountExpect(  
            <Provider store={store}>
                <App/>
            </Provider>
        ).toMatchSnapshot()
    })
})