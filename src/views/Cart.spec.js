import { shallowMount } from '@vue/test-utils';

import Cart from './Cart.vue'

describe('Cart.vue', () => {
    it('should display h2 when the page monuted', () => {
        const wrapper = shallowMount(Cart);
        const text = wrapper.find('h2');
        expect(text.exists()).toBe(true)
    })

    it('should display item/items in the cartItem with description when mounted', async () => {
        const wrapper = shallowMount(Cart);
        const cartItemExist = await wrapper.find('.items').exists();
        expect(cartItemExist).toBeTruthy();
    })

    /***'
     *  propsData: {
            book: {
                    "id": 1,
                    "Title": "Harry Potter",
                    "Price": 250,
                    "Type": "Pocket"
                }
        }
     */

    it('every item should have the delete button', () => {
        const wrapper = shallowMount(Cart);
        /******
         * const wrapper = shallowMount(Cart, { propsData: {book: { id: 1}}}); 
         */
        const actual = wrapper.find('.dltBtn');
        expect(actual).toBeTruthy();
    });

    it('it should display a book´s title', () => {

        const wrapper = shallowMount(Cart)
        const expected = "Gone with the Wind";

        const actual = wrapper.find('.bookTitle')
        const actualText = actual.text()

        expect(actualText).toMatch(expected)

    })

    it('it should display a book´s price', () => {

        const wrapper = shallowMount(Cart)
        const expected = "400";

        const actual = wrapper.find('.bookPrice')
        const actualText = actual.text()

        expect(actualText).toBe(expected)

    })

    it('it should display a book´s type', () => {

        const wrapper = shallowMount(Cart)
        const expected = "Hard cover";

        const actual = wrapper.find('.bookType')
        const actualText = actual.text()

        expect(actualText).toMatch(expected)

    })

    it('when click delete btn, the book should remove from cart', async () => {

        const wrapper = shallowMount(Cart)

        const removeBtn = wrapper.find('.dltBtn')
        await removeBtn.trigger('click')

        const actual = removeBtn.element.value
        expect(actual).toBe('');

    })
})
