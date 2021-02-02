import {shallowMount} from '@vue/test-utils';
import Outlet from './Outlet.vue'

describe('Outlet.vue', () => {
    it('It should show books', () =>  {
        const wrapper = shallowMount(Outlet)

    })

    it('should show OutletSales length', () => {
        const wrapper = shallowMount(Outlet, {
            stubs: ['OutletSale']
        })

        let outletSale = wrapper.findAll('.outletSale')
        let item = outletSale.length
        console.log(item)
    })
})