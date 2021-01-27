<template>
<div >
    <h1>Här är alla Böcker</h1>
    <div v-for="book in allBooks" :key='book.id' @click="goTo(book.id)" class="books" >
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
</template>

<script>
export default {
    data: () => ({
        allBooks: Array,
    }),
    methods: {
        async fetchBooks() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                this.allBooks = json.products;
                this.$emit('allBooks', this.allBooks)
            }
            catch {
                this.allBooks = 'Could not retrive all books, please try again.'
            }
        },
        goTo(id){
            this.$router.push(`/BookInfo/${id}`)
            console.log(id)
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