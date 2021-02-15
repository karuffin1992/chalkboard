import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Home from '../../../../src/views/Home.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const factory = () => shallowMount(Home, {
  localVue
})

describe('TopNavbar.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = factory()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('ui', () => {
    it('has a hero section', () => {
      expect(wrapper.find('section').classes()).toContain('hero')
    })
  })
})
