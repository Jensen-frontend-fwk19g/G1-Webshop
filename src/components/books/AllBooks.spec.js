import { shallowMount } from '@vue/test-utils';
import AllBooks from './AllBooks.vue'

describe('AllBooks.vue', () => {
    it('should display all books when mounted', () => {
        const wrapper = shallowMount(AllBooks);
        const allBooksExists = wrapper.findAll('div').exists();
        expect(allBooksExists).toBeTruthy();
    })

    /*
    it('should display name on all books when mounted', () => {
        const wrapper = shallowMount(AllBooks);        
        const bookNameExist = wrapper.findAll('h2').exists();

        expect(bookNameExist).toBeTruthy();
    })



    it('Should go to book information when a book is clicked', () => {

    })
    
   it('Should display image of book in the landing page', () => {
    const wrapper = shallowMount(Books);
    let imgExists =wrapper.find('img');
    expect(imgExists.exists()).toBe(true)
    })
    */

})
