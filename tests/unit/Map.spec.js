import { mount } from '@vue/test-utils'
import GoogleMap from '@/components/Map'

describe('GoogleMap', () => {

  const build = () => {
    const wrapper = mount(GoogleMap)
    return {
      wrapper
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

})