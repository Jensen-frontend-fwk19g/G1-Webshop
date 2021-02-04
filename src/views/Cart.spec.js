import { shallowMount, mount } from '@vue/test-utils';

import Cart from './Cart.vue'
import AllBooks from '../components/books/AllBooks.vue'

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

        const wrapper = shallowMount(Cart, {
            propsData: {
                book: {
                    "id": 9,
                    "Price": 400
                }
            }
        })
        const expected = "400";

        const actual = wrapper.find('.bookPrice')
        const actualText = actual.text()

        expect(actualText).toContain(expected)

    })

    it('it should display the img of book', () => {

        const wrapper = shallowMount(Cart, {
            propsData: {
                "id": 9,
                Title: "Gone with the Wind"
            }
        })

        const actualImg = wrapper.find('img').exists()

        expect(actualImg).toBe(true)
    })

    it('it should display a book´s type', () => {

        const wrapper = shallowMount(Cart, {
            propsData: {
                book: {
                    "id": 9,
                    "type": "Hard cover"
                }
            }
        })
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
    
    it('correct total sum when we have books in basket', async () => {
        
        const expected = 1300

        const wrapper = shallowMount(Cart)
        wrapper.setData({ cart: [
        {
            "id": 9,
            "Title": "Gone with the Wind",
            "Description": "A romance story during the American civil war Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto fuga qui quod sit rerum quisquam illum, iure accusantium expedita. Ducimus nobis voluptatem delectus distinctio facere? Quam, vero dignissimos",
            "Price": 400,
            "Type": "Hard cover",
            "Img": "https://images.unsplash.com/photo-1512375933474-40154fbce81f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
            "sale": false
        },
        {
            "id": 1,
            "Title": "Harry Potter",
            "Description": "11 year old wizard Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto fuga qui quod sit rerum quisquam illum, iure accusantium expedita. Ducimus nobis voluptatem delectus distinctio facere? Quam, vero dignissimos",
            "Price": 250,
            "Type": "Pocket",
            "Img": "https://images.unsplash.com/photo-1515816052601-210d5501d471?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
            "sale": false
        },
        {
            "id": 6,
            "Title": "Lord of the Rings",
            "Description": "Story of a fellowship who going to destroy the ring in the mountain of fire.",
            "Price": 350,
            "Type": "Hard cover",
            "Img": "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
            "sale": false
        },
        {
            "id": 18,
            "Title": "Wuthering height",
            "Description": "An orphan kid who is living with Earnshaws Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto fuga qui quod sit rerum quisquam illum, iure accusantium expedita. Ducimus nobis voluptatem delectus distinctio facere? Quam, vero dignissimos",
            "Price": 300,
            "Type": "Hard cover",
            "Img": "https://images.unsplash.com/photo-1603049197613-366c045f11b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
            "sale": false
        }],
        totalCost : 1300 })

        const actual = wrapper.vm.totalPrice

        expect(actual).toBe(expected)
    })

        
    it("should display the numbers of items bought in the cardCounter", async () => {
        const wrapper = shallowMount(Cart, {
            propsData: {
                itemArray: fakeData(),
            },
        });
    
        const arrayLength = fakeData().length;
    
        const actualItems = wrapper.find(".cart-lenght").text();
        
        expect(parseInt(actualItems)).toBe(arrayLength);
    });
        

})

function fakeData() {
    return [
        {
            id: 9,
            Title: "Gone with the Wind",
            Price: 400,
            Type: "Hard cover"
        },
    ];
}

