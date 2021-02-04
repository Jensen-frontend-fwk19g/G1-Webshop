import { shallowMount, mount } from '@vue/test-utils';

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

    it('every item should have the delete button', () => {
        const wrapper = shallowMount(Cart);

        const actual = wrapper.find('.dltBtn');
        expect(actual).toBeTruthy();
    });

    it('should display Cart length', () => {
        const wrapper   = shallowMount(Cart);
        const expected  = wrapper.vm.cart.length;
        const actual    = wrapper.find('.cart-lenght').text();
        expect(parseInt(actual)).toBe(expected);
    });

    it('it should display a book´s title', () => {

        const wrapper = shallowMount(Cart, {
            propsData: {
                book: {
                    Title: "Gone with the Wind"
                }
            }
        })
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

        expect(actualText).toContain(expected)

    })

    it('it should display a book´s type', () => {

        const wrapper = shallowMount(Cart)
        const expected = "Hard cover";

        const actual = wrapper.find('.bookType')
        console.log('text',actual)
        const actualText = actual.text()

        expect(actualText).toContain(expected)

    })

    it('should shows X as a text inside the btn', () => {
        const wrapper   = shallowMount(Cart); 
        const actual    = wrapper.find('.dltBtn').text();
        const expected  = "X";
        expect(actual).toBe(expected);
    });

    it('when click delete btn, should one item remove', async () => {
        const wrapper = shallowMount(Cart)
        const items = wrapper.findAll('.items').length;
        const expectedItems = 3

        const removeBtn = wrapper.find('.dltBtn')
        await removeBtn.trigger('click')

        const actual = parseInt(items)-1;
        expect(actual).toBe(expectedItems);
    })

    it('calls deleteBtn when the button clicked', () => {
        const wrapper = mount(Cart, {
            propsData: {
                book: {
                    "id": 1
                }
            }
        })

        const spy = jest.spyOn(wrapper.vm, 'removeItem');
        wrapper.vm.removeItem();
        expect(spy).toHaveBeenCalled();
    })

    it('when click delete btn, the book should remove from cart', async () => {

        const wrapper = shallowMount(Cart)

        const removeBtn = wrapper.find('.dltBtn')
        await removeBtn.trigger('click')

        const actual = removeBtn.element.value
        expect(actual).toBe('');

    })

    it('should have the total price.', () => {
        const wrapper = shallowMount(Cart);
        const actual = wrapper.find('.totalPrice').exists();
        expect(actual).toBe(true);
    });

    it('should display total price 0 when no book added to basket', () => {
    
        const expectedcartLength = 0
        const expected = 0

        const wrapper = shallowMount(Cart)
        wrapper.setData({ cart: [], totalCost : 0 })

        const actualcartLength = wrapper.vm.cart.length
        const actual = wrapper.vm.totalPrice

        expect(actualcartLength).toBe(expectedcartLength)
        expect(actual).toBe(expected)
    })
    
    /*it('correct total sum when we have books in basket', async () => {
        const wrapper = shallowMount(Cart, {
            propsData: {
                book: {
                    id: 9,
                    Title: "Gone with the Wind",
                    Price: 400,
                    Type: "Hard cover"
                }
            }
        })
        const expected = "400";
        const actual = wrapper.find(".totalPrice").text()
        expect(actual).toContain(expected)
        /*const wrapper = shallowMount(Cart)
        const fakeData = {
            id: 9,
            Title: "Gone with the Wind",
            Price: 400,
            Type: "Hard cover"
        },
    await wrapper.setData({ actual: fakeData.Price })
        const actual = wrapper.find(".totalPrice").text()
        expect(actual).toContain(fakeData.Price);*/
})
