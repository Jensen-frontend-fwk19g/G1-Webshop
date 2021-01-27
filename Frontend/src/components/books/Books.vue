<template>
<section>
    <div v-for="book in allBooks" :key='book.id' class="books">
        <h4>{{book.Title}}</h4>
        <h5>{{book.Price}}:-</h5>
        <h6>{{book.Description}}</h6>
    </div>
</section>
  
</template>

<script>
export default {
    data: () => ({
        allBooks: Array
    }),
    methods: {
        async fetchBooks() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                this.allBooks = json.products;
            }
            catch {
                this.allBooks = 'Could not retrive all books, please try again.'
            }
        }
    },
    beforeMount() {
        this.fetchBooks()
    }

}
</script>

<style>
.books {
    background: white;
    width: 10em;
    height: 6em;
}

</style>