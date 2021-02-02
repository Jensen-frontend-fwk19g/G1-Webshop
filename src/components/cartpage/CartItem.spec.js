import { shallowMount } from '@vue/test-utils';
import CartItem from './CartItem.vue';

describe('CartItem.vue', () => {
    it('should display item/items in the cartItem with description when mounted', async () => {
        const wrapper = shallowMount(CartItem, {
            propsData: {
                book: {
                    "id": 1,
                    "Title": "Harry Potter",
                    "Price": 250,
                    "Type": "Pocket"
                }
            }
        });
        const cartItemExist = await wrapper.findAll('div').exists();
        expect(cartItemExist).toBeTruthy();
    })


    it('every item should have the delete button', async () => {
        const wrapper = shallowMount(CartItem, {
            propsData: {
                book: { id: 1 }
            }
        });
        const actual = await wrapper.find('.dltBtn');
        expect(actual).toBeTruthy();
    });


    it('it should display a book´s title', async () => {

        const wrapper = await shallowMount(CartItem, {
            propsData: {
                book: {
                    Title: "Harry Potter"
                }
            }
        })
        const expected = "Harry Potter";

        const actual = await wrapper.find('.bookTitle')
        const actualText = await actual.text()

        expect(actualText).toMatch(expected)

    })

/*
    it('it should display a book´s price', async () => {

        const wrapper = await shallowMount(CartItem, {
            propsData: {
                book: {
                    Price: 250
                }
            }
        })
        const expected = "250";

        const actual = await wrapper.find('.bookPrice')
        const actualText = await actual.text()

        expect(actualText).toBe(expected)

    })
    */


    it('it should display a book´s type', async () => {

        const wrapper = await shallowMount(CartItem, {
            propsData: {
                book: {
                    Type: "Pocket"
                }
            }
        })
        const expected = "Pocket";

        const actual = await wrapper.find('.bookType')
        const actualText = await actual.text()

        expect(actualText).toMatch(expected)

    })
})