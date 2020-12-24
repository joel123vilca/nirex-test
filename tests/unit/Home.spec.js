import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import GoogleMap from '@/components/Map.vue';

describe('Home', () => {
  const build = () => {
    const wrapper = shallowMount(Home)
    return {
      wrapper,
      GoogleMap: () => wrapper.find(GoogleMap)
    }
  }
  
  it('renders the component', () => {
    const wrapper = build()
    expect(wrapper.html()).toMatchSnapshot()
  });

  it('renders the right', () => {
    const { GoogleMap } = build()

    expect(GoogleMap().exists()).toBe(true)
  })
});
