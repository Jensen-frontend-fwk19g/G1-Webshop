import {shallowMount} from '@vue/test-utils';
import AllBooks from './AllBooks.vue'

describe('Books.vue', () => {
    it('should display all books and a description when mounted', async () => {
        const wrapper = shallowMount(AllBooks);
        
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
