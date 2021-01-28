import {shallowMount} from '@vue/test-utils';
//import {enableFetchMocks} from 'jest-fetch-mock';
import AllBooks from './AllBooks.vue'

describe('Books.vue', () => {
    it('should display all books when mounted', async () => {
        const wrapper = shallowMount(AllBooks);
        expect(wrapper.vm.AllBooks).toHaveBeenCalled();
        /*
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
        */
    })
    it('calls filter when input is changed', () => {
        const filter= jest.spyOn(AllBooks.methods, 'filter')

        const wrapper = shallowMount(AllBooks);
        const searchBox = wrapper.find( '#search' );
        searchBox.setValue('Har');
        searchBox.trigger('input');
        expect(filter).toHaveBeenCalled;
    })
    
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