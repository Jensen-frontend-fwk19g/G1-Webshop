import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
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

    it('should display the type on all the books when mounted', () => {
        const wrapper = shallowMount(AllBooks, {
            propsData: {
                book: {
                    "Type": "E-book",
                }
            }
        })
        const expectedType = 'E-book';

        const actualType = wrapper.find('h4').text();
        actualType.includes(expectedType)

        expect(actualType).toBeTruthy();
    })


    it('should display the price on all books when mounted', () => {
        const wrapper = shallowMount(AllBooks, {
            propsData: {
                book: {
                    "Price": 250,
                }
            }
        })
        const expectedPrice = 250

        const actualPrice = wrapper.find('h3').text()
        actualPrice.includes(expectedPrice)

        expect(actualPrice).toBeTruthy();
    })


    it('should go to individual book when book is clicked', async () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()
        const wrapper = shallowMount(AllBooks, {

            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
                }
            },
            localVue,
            router
        })

        await wrapper.find('div').trigger('click')
        expect(wrapper.vm.$route.path).toBe('/BookInfo/1')
      })

    it('Should display image of book in the landing page', () => {
        const wrapper = shallowMount(AllBooks, {
            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
                }
            }
        })
        const imgExists = wrapper.find('img');
        expect(imgExists.exists()).toBe(true)
    })
})