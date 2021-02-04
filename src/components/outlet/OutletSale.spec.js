import { shallowMount } from '@vue/test-utils';
import OutletSale from './OutletSale.vue';

describe('OutletSale.vue', () => {


    it('should call add method on button click', () => {
        const add = jest.spyOn(OutletSale.methods, 'add');
        const bookItem =
        {
            "id": 1,
            "Title": "Harry Potter",
            "Description": "11 year old wizard Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto fuga qui quod sit rerum quisquam illum, iure accusantium expedita. Ducimus nobis voluptatem delectus distinctio facere? Quam, vero dignissimos",
            "Price": 250,
            "Type": "Pocket",
            "Img": "./assets/hp.jpg",
            "sale": true
        };

        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: bookItem
            }
        });
        const addButton = wrapper.find('button');
        addButton.trigger('click');
        expect(add).toHaveBeenCalled;
    })

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

    it('it should contain a div named books', async () => {
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

        expect(bookElementsLength).toBe(imagesNumber);
    })

    it('it should display the price of the book', async () => {
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

    // it('it should allow clicking on a book', () => {    
    //     const wrapper = shallowMount(OutletSale, {
    //         propsData: {
    //             book: {
    //                 "id": 11,
    //                 "Title": "Doctor Sleep",
    //             }
    //         }
    //     });

    //     const addButton = wrapper.find('button');
    //     addButton.trigger('click');
    //     expect(addButton).toHaveBeenCalled;

    // })

})