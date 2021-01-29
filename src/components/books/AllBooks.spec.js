import { shallowMount } from '@vue/test-utils';
import AllBooks from './AllBooks.vue'

describe('Books.vue', () => {

    it('should display all books when mounted', async () => {
        const wrapper = shallowMount(AllBooks, {
            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
                }
            }
        });
        const allBooksExists = wrapper.findAll('.books').exists();
        expect(allBooksExists).toBeTruthy();
    })


    it('should display title on all books when mounted', () => {
        const wrapper = shallowMount(AllBooks, {
            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
                }
            }
        });
        const bookNameExist = wrapper.findAll('h2').exists();

        const expectedTitle = 'Harry Potter';
        const actualTitle = wrapper.find('h2').text();

        expect(bookNameExist).toBeTruthy();
        expect(actualTitle).toBe(expectedTitle);
    })

    /*
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

    */
})
