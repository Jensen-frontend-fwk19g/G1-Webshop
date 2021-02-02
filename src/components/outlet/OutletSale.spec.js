import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import OutletSale from './OutletSale.vue';

describe('OutletSale.vue', () => {

    it('it should have the vue component OutletSale', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });
        expect(wrapper.is(OutletSale)).toBe(true);
    })


    it('it should conatin a div named books', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });

        const expectedBookClass = wrapper.findAll('.books').exists();
        expect(expectedBookClass).toBeTruthy();
    })


    it('it should display title of the book correctly', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });

        const expectedBookTitle = "Doctor Sleep";
        const actualBookTitle = wrapper.find('h2').text();
        console.log(expectedBookTitle);
        console.log(actualBookTitle);

        expect(expectedBookTitle).toBe(actualBookTitle);    
    })


    it('it should display all the books', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });

        const allOutletBooks = wrapper.findAll('h2').exists();
        expect(allOutletBooks).toBe(true); 
    })


    it('its should display images for the books', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });
        
        const bookImages = wrapper.findAll('img');
        const bookElements = wrapper.findAll('h2');

        const bookElementsLength = bookElements.length;
        const imagesNumber = bookImages.length;
        
        console.log('bookElementLength' + bookElementsLength);
        console.log('imagesNumber' + imagesNumber);
        expect(bookElementsLength).toBe(imagesNumber);
    })
    
    
    it('its should display the price of the book', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });
        const bookPrice = wrapper.findAll('h3').exists();
        expect(bookPrice).toBe(true); 
    })

    it('it should allow clicking on a book', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });

        await wrapper.find('div').trigger('click');
    })

    it('it should send the book to the cart', async () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)

        // await wrapper.find('div').trigger('click');
        
        const $route = {
            path: '/Cart/11'
            // `/Cart/${id}`
        }

        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            },
            mocks: {
                $route
            }
        });
        wrapper.vm.$route.path
    })


    // it('it should send the book to the cart', async () => {
    //     const localVue = createLocalVue()
    //     localVue.use(VueRouter)
    //     const router = new VueRouter()
       
    //     const wrapper = shallowMount(OutletSale, {
    //         propsData: {
    //             book: {
    //                 "id": 11, 
    //                 "Title": "Doctor Sleep",
    //             }
    //         },
    //         localVue,
    //         router
    //     })

    //     await wrapper.find('div').trigger('click')
    //     expect(wrapper.vm.$route.path).toBe( '/Cart/11')
        
    // })
})