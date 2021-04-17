// import { shallowMount } from '@vue/test-utils'
// import Home from '@/components/Home.vue'

// describe('Home.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(Home, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
import { createLocalVue, mount } from '@vue/test-utils'
import Orders from '../../src/components/User/Orders.vue'
import Vuetify from 'vuetify'




describe('Orders', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders a div', () => {
    const wrapper = mount(Orders)
    expect(wrapper.contains('v-container')).toBe(true)
  })
})

