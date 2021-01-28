import {shallowMount} from '@vue/test-utils';
//import {enableFetchMocks} from 'jest-fetch-mock';
import AllBooks from './AllBooks.vue'

describe('Books.vue', () => {
    it('should display all books and a description when mounted', async () => {
        const wrapper = shallowMount(AllBooks);
        const expectedDescrition = 'Here is all the books';

        const bookExist = wrapper.findAll('.books').exists();
        const descriptionExist = wrapper.find('h1').exists();
        const actualDescription = wrapper.find('h1').text();

        expect(bookExist).toBeTruthy();
        expect(descriptionExist).toBeTruthy();
        expect(actualDescription).toBe(expectedDescrition);
    })

    
    it('should display name on all books when mounted', () => {
        const wrapper = shallowMount(AllBooks);        
        const bookNameExist = wrapper.findAll('h2').exists();

        expect(bookNameExist).toBeTruthy();
    })

    /*
    it('should send a request to the database when page is loaded', () => {
        
        enableFetchMocks();
        const fakeData = {
            url: 'https://example'
        }

        fetch.mockResponse(JSON.stringify(fakeData));
        const expectedUrl = 'http://localhost:3000/products'

        const numberOfCalls = fetch.mock.calls.length;
        const actualUrl = fetch.mock.calls[0][0];

        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick();

        expect(numberOfCalls).toBe(1);
        expect(actualUrl).toBe(expectedUrl);
    })

    */
    
    /*
    it('Should go to book information when a book is clicked', () => {

    })
    
   it('Should display image of book in the landing page', () => {
    const wrapper = shallowMount(Books);
    let imgExists =wrapper.find('img');
    expect(imgExists.exists()).toBe(true)
    })
    */
})