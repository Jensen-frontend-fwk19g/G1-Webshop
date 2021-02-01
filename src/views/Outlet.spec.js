import { shallowMount } from '@vue/test-utils';
import Outlet from './Outlet.vue'

describe('Outlet.vue', () => {
    it('It should display headline when mounted', () => {
        const wrapper = shallowMount(Outlet)
        const expectedHeadline = '..Everything in outlet..'

        const actualHeadline = wrapper.find('h1').text();

        expect(actualHeadline).toBe(expectedHeadline);
    })
})