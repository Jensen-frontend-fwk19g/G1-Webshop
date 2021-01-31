import {shallowMount} from '@vue/test-utils';
import BookInfo from './BookInfo.vue'

describe('BookInfo.vue', () => {
    it('should show "information about" and name of book', () =>  {
        const wrapper = shallowMount(BookInfo, {
        propsData: {
            book: {
                "Title": "Harry Potter",
            }
        }
    });
        const information = wrapper.find('h2').text();
        const expected = 'Harry Potter'
        expect(information).toMatch(expected);
    })
/*
    it('should display the bookcover-image', () => {
        const wrapper = shallowMount(BookInfo);
        const image = wrapper.findAll('img');

        const expectedImage = 1;
        const actualImage = image.length;
        expect(actualImage).toBe(expectedImage);

    }) */
})