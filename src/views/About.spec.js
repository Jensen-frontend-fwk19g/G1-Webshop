import {shallowMount} from '@vue/test-utils';
import About from './About.vue'

describe('About.vue', () => {
    it('should display the discription when the page mounted', () => {
        const wrapper = shallowMount(About);
        const expectedDescription = 'This is about'

        const descriptionExist = wrapper.find('h1').exists();
        const actualDescription = wrapper.find('h1').text();

        expect(descriptionExist).toBeTruthy();
        expect(actualDescription).toBe(expectedDescription);
    })
})