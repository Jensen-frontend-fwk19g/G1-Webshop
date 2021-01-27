import {shallowMount} from '@vue/test-utils';
import {enableFetchMocks} from 'jest-fetch-mock';
import Books from './Books.vue'

describe('Books.vue', () => {
    it('should display all books when mounted', async () => {
        const wrapper = shallowMount(Books);
        
        enableFetchMocks()
        const fakeData = {
            url: 'https://example'
        }

        fetch.mockResponseOnce(JSON.stringify(fakeData));
        const expectedUrl = 'http://localhost:3000/products'

        const numberOfCalls = fetch.mock.calls.length;
        const actualUrl = fetch.mock.calls[0][0];

        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick();

        expect(numberOfCalls).toBe(1);
        expect(actualUrl).toBe(expectedUrl);
    })
})