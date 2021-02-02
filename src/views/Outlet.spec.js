import { mount, shallowMount } from '@vue/test-utils'
import Outlet from './Outlet.vue'
import OutletSale from './../components/outlet/OutletSale.vue'

describe('Outlet.vue', () => {
    it('It should display headline when mounted', () => {
        const wrapper = shallowMount(Outlet)
        const expectedHeadline = '..Everything in outlet..'

        const actualHeadline = wrapper.find('h1').text();

        expect(actualHeadline).toBe(expectedHeadline);
    })

    it('It should display the component OutletSale', () => {
        const wrapper = mount(OutletSale, {
            propsData: {
                book: {
                    "id": 11,
                    "Title": "Doctor Sleep",
                }
            }
        });

        const checkOutletSaleComponent = wrapper.findComponent({ name: "OutletSale" });
        expect(checkOutletSaleComponent.exists()).toBe(true);
    })

    it('It should only show sale items, with v-show equals to true', () => {
        const wrapper = mount(Outlet);

        let bookSaleShow = wrapper.find('div').element;

        let check = bookSaleShow.style.display !== 'none' ;
    
        expect(check).toBe(true);        
    })
})                                                             