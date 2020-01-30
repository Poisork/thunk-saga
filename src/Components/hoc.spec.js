import { mount } from 'enzyme'
import Expandable from './HOC'
import React from 'react'
    describe("Expandable Higher-Order Component", () => {
    let props,
    wrapper,
    ComposedComponent,
    MockComponent = ({collapsed, expandCollapse = () => {}}) =>
        <div onClick={expandCollapse}>
        {(collapsed) ? 'collapsed' : 'expanded'}
        </div>

    describe("Rendering UI", () => {

        beforeAll(() => {
            ComposedComponent = Expandable(MockComponent)
            wrapper = mount(<ComposedComponent foo="foo" gnar="gnar"/>)
            console.dir(wrapper.find(MockComponent).props())
            props = wrapper.find(MockComponent).props()
        })

        it("starts off collapsed", () => expect(props.collapsed).toBe(true))

        it("passes the expandCollapse function to composed component", () =>
            expect(typeof props.expandCollapse)
                .toBe("function")
        )

        it("passes additional foo prop to composed component", () =>
            expect(props.foo)
                .toBe("foo")
        )
        
        it("passes additional gnar prop to composed component", () =>
            expect(props.gnar)
                .toBe("gnar")
        )
    })
    describe("Expand Collapse Functionality", () => {
        let instanceHOC
        beforeAll(() => {
            ComposedComponent = Expandable(MockComponent)
            wrapper = mount(<ComposedComponent collapsed={false}/>)
            instanceHOC = wrapper.instance() 
        })
        it("renders the MockComponent as the root element", () => {
            expect(wrapper.first().is(MockComponent))
        })
        it("starts off expanded", () => {
            expect(instanceHOC.state.collapsed).toBe(false)
        })
        it("toggles the collapsed state", () => {
            instanceHOC.expandCollapse()
            expect(instanceHOC.state.collapsed).toBe(true)
        })
    })
})