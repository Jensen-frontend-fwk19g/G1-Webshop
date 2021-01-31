import {shallowMount} from '@vue/test-utils';
import BookStore from './BookStore.vue'

describe('BookStore.vue', () => {
    it('calls filter when input is changed', () => {
        const filter= jest.spyOn(BookStore.methods, 'filter')

        const wrapper = shallowMount(BookStore);
        const searchBox = wrapper.find( '#search' );
        searchBox.setValue('Har');
        searchBox.trigger('input');
        expect(filter).toHaveBeenCalled;
    })
})