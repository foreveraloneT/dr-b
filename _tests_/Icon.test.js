import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Icon } from '../app/js/components/common'

Enzyme.configure({ adapter: new Adapter() })
describe('Component Icon', () => {
  it('can show class name icon', () => {
    const wrapper = shallow(<Icon iconClassName='test' />)
    expect(wrapper.find('.bo-icon-class').length).toEqual(1)
    expect(wrapper.find('.test').length).toEqual(1)
  })

  it('can show class name image', () => {
    const wrapper = shallow(<Icon iconImage='/test.png' />)
    expect(wrapper.find('.bo-icon-img').length).toEqual(1)
    expect(wrapper.find('.bo-icon-img').props().style['--hover-img'])
      .toEqual("url('/test.png')")
  })

  it('can show hover image in icon image', () => {
    const icon = '/test1.png'
    const hoverIcon = '/test2.png'
    const wrapper = shallow(
      <Icon
        iconImage={icon}
        hoverImage={hoverIcon}
      />
    )
    expect(wrapper.find('.bo-icon-img').length).toEqual(1)
    expect(wrapper.find('.bo-icon-img').props().style['--hover-img'])
      .toEqual(`url('${hoverIcon}')`)
  })
})
