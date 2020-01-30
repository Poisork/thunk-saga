import React from 'react'
import {shallow} from 'enzyme'
import {Star} from './Default' 
describe('<Star />', () => {
    it('render default star',() => 
        expect(shallow(<Star/>)
            .find('div')
            .text()
        ).toBe('star')        
    )
    it("invokes onClick", () => {
        const _click = jest.fn()
        shallow(<Star onClick={_click} />)
        .find('div')
        .simulate('click')
        expect(_click).toBeCalled()
        })
})