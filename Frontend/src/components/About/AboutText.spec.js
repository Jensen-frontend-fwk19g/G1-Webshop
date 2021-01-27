import { shallowMount } from '@vue/test-utils';
import AboutText from './AboutText.vue'

describe('AboutText.vue', () => {
    it('should display h1 on mount', () => {
        const wrapper = shallowMount(AboutText);
        const heading1 = wrapper.find('h1');
        expect(heading1.exists()).toBe(true)
    })

    it('should display 2 paragraphs on mount', () => {
        const wrapper = shallowMount(AboutText);
        const paragraphs = wrapper.findAll('p');

        const expectedNumber = 3;
        const actualNumber = paragraphs.length
        expect(actualNumber).toBe(expectedNumber)
    })

})