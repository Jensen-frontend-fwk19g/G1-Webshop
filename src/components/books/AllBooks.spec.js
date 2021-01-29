import { shallowMount } from '@vue/test-utils';
import AllBooks from './AllBooks.vue'

describe('Books.vue', () => {
    /*
    it('should display all books and a description when mounted', async () => {
        const wrapper = shallowMount(AllBooks);
        const allBooksExists = wrapper.findAll('div').exists();
        expect(allBooksExists).toBeTruthy();
    })

    /*
    it('should display name on all books when mounted', () => {
        const wrapper = shallowMount(AllBooks);        
        const bookNameExist = wrapper.findAll('h2').exists();

        expect(bookNameExist).toBeTruthy();
    })  */
    
   it('Should display image of book in the landing page', () => {
    const wrapper = shallowMount(AllBooks);
    const imgExists = wrapper.find('img');
    expect(imgExists.exists()).toBe(true)
    }) 
    

    it('should go to individual book when book is clicked', async () =>  {
        const wrapper = shallowMount(AllBooks);
        //let bookFind = wrapper.findAll('div')
        //await bookFind.trigger('click');

        //expect(bookFind).toBe(true);
    })
})
