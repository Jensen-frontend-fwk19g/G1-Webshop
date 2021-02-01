import { shallowMount } from '@vue/test-utils';
import OutletSale from './OutletSale.vue';

describe('OutletSale.vue', () => {

    it('it should have the vue component OutletSale', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
                }
            }
        });
        expect(wrapper.is(OutletSale)).toBe(true);
    })

    it('it should conatin a div named books', async () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
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
                    "id": 1,
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
                    "id": 1,
                    "Title": "Harry Potter",
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
                    "id": 1,
                    "Title": "Harry Potter",
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
                    "id": 1,
                    "Title": "Harry Potter",
                }
            }
        });
        const bookPrice = wrapper.findAll('h3').exists();
        expect(bookPrice).toBe(true); 
    })

    // it('it should allow clicking and selecting the book', async () => {
    //     const wrapper = shallowMount(OutletSale, {
    //         propsData: {
    //             book: {
    //                 "id": 1,
    //                 "Title": "Harry Potter",
    //             }
    //         }
    //     });
    // })

    // it('it should send the book to the cart', async () => {
    //     const wrapper = shallowMount(OutletSale, {
    //         propsData: {
    //             book: {
    //                 "id": 1,
    //                 "Title": "Harry Potter",
    //             }
    //         }
    //     });
    // })


    // it('should ', () => {
    //     const wrapper = shallowMount(OutletSale);
    // })
})