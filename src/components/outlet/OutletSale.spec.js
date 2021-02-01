import {createLocalVue, shallowMount} from '@vue/test-utils';
import OutletSale from './OutletSale.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
describe('OutletSale.vue', () => {
    let store;
    let actions;
    beforeEach(() => {
        actions = {
            addToCart: jest.fn()
          };
        store = new Vuex.Store({
            state: {
                cartItems: [],
              },
              actions
        });
      });
    it('should display all books that are on sale', () => {
        const wrapper = shallowMount(OutletSale);
    })

    it('should call add method on button click', () => {
        const add= jest.spyOn(OutletSale.methods, 'add');
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
        },
            localVue,
            store
      });
        const addButton = wrapper.find('button');
        addButton.trigger('click');
        expect(add).toHaveBeenCalled;
    })
})