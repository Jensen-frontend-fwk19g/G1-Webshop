import { shallowMount } from '@vue/test-utils';

import Cart from './Cart.vue'

describe('Cart.vue', () => {
    it('should display h2 when the page monuted', () => {
        const wrapper = shallowMount(Cart);
        const text = wrapper.find('h2');
        expect(text.exists()).toBe(true)
    })
})