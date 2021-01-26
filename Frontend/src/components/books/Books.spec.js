import {shallowMount} from '@vue/test-utils';
import {enableFetchMocks} from 'jest-fetch-mock';
import Books from './Books.vue'

describe('Books.vue', () => {
    it('should display all books when mounted', () => {
        const wrapper = shallowMount(Books);
        
        enableFetchMocks()
        const fakeData = {
            id: 'https://example'
        }

        fetch.mockResponceOnce(JSON.stringify(fakeData));
        const expectedUrl = 'http://localhost:3000/products'

        const numberOfCalls = fetch.mock.calls.length;
        const actualUrl = fetch.mock.calls[0][0];

        expect(numberOfCalls).toBe(1);
        expect(actualUrl).toBe(expectedUrl);
    })
})