import {shallowMount} from '@vue/test-utils';
import BookInfo from './BookInfo.vue'

describe('Book.vue', () => {
    it('should show "information about" and name of book', () =>  {
        const wrapper = shallowMount(BookInfo);
        const information = wrapper.text()

        expect(information).toMatch(Information)
    })
    it('should display the bookcover-image', () => {
        const wrapper = shallowMount(BookInfo);
        const image = wrapper.findAll('img');

        const expectedImage = 1;
        const actualImage = image.length;
        expect(actualImage).toBe(expectedImage);

    })
})