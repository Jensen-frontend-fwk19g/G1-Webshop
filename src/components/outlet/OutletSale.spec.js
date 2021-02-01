import {shallowMount} from '@vue/test-utils';
import OutletSale from './OutletSale.vue';

describe('OutletSale.vue', () => {
    it('should display all books that are on sale', () => {
        const wrapper = shallowMount(OutletSale, {
            propsData: {
                book: {
                    "Sale": true,
                }
            }
        })
        
        const allBooks = wrapper.findAll('.books');

    })
})