import {shallowMount} from '@vue/test-utils';
import BookStore from './BookStore.vue';

describe('BookStore.vue', () => {
    it('calls filter when input is changed', () => {
        const filter= jest.spyOn(BookStore.methods, 'filter');
        const allBooks = [
                {
                    "id": 1,
                    "Title": "Harry Potter",
                    "Description": "11 year old wizard Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto fuga qui quod sit rerum quisquam illum, iure accusantium expedita. Ducimus nobis voluptatem delectus distinctio facere? Quam, vero dignissimos",
                    "Price": 250,
                    "Type": "Pocket",
                    "Img": "./assets/hp.jpg",
                    "sale": false
                },
                {
                    "id": 2,
                    "Title": "Lord of the Rings",
                    "Description": "Story of a fellowship who going to destroy the ring in the mountain of fire. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque architecto fuga qui quod sit rerum quisquam illum, iure accusantium expedita. Ducimus nobis voluptatem delectus distinctio facere? Quam, vero dignissimos",
                    "Price": 350,
                    "Type": "Pocket",
                    "Img": "lor.jpg",
                    "sale": false
                }
            ];

        const wrapper = shallowMount(BookStore, {
            propsData: {
              books: allBooks
            }
          });
        const searchBox = wrapper.find( '#search' );
        searchBox.setValue('Har');
        searchBox.trigger('input');
        expect(filter).toHaveBeenCalled;
        expect(wrapper.vm.$data.filteredList.length).toBe(1);
    })
})