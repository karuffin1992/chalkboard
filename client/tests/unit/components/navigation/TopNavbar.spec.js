import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import TopNavbar from '../../../../src/components/navigation/TopNavbar.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const factory = () => shallowMount(TopNavbar, {
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
    it('has a navbar', () => {
      expect(wrapper.find('nav')).toBeTruthy()
    })
  })
})
