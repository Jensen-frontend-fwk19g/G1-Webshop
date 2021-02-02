import {shallowMount} from '@vue/test-utils';
import BookInfo from './BookInfo.vue'

/*describe('BookInfo.vue', () => {
    it('Should show name of chosen book', async () =>  {
        const wrapper = shallowMount(BookInfo, {
        propsData: {
            book: {
                "Title": "Harry Potter",
            }
        }
    });
        const information = await wrapper.find('h2').text();
        const expected = 'Harry Potter'
        expect(information).toMatch(expected);
    }) 

    it('Should display the bookcover-image of chosen book', () => {
        const wrapper = shallowMount(BookInfo);
        const image = wrapper.findAll('img');

        const expectedImages = 1;
        const actualImages = image.length;
        expect(actualImages).toBe(expectedImages);

    }) 
    it('Should show info square about chosen book', () =>  {
        const wrapper = shallowMount(BookInfo)
        
        const infoSquare = wrapper.find('.infoSection')
        expect(infoSquare).toBe(true);
    }) 
}) */