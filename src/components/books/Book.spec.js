import {shallowMount} from '@vue/test-utils';
import {enableFetchMocks} from 'jest-fetch-mock';
import Book from './Book.vue'

it('should go to individual book when book is clicked')
const wrapper = shallowMount(Book);

enableFetchMocks()
const fakeData = {
    url: 'https://example'
}

fetch.mockResponseOnce(JSON.stringify(fakeData));
const expectedUrl = 'http://localhost:3000/products'

await button.trigger('click');
const numberOfCalls = fetch.mock.calls.length;
const actualUrl = fetch.mock.calls[0][0];