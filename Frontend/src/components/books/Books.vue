<template>
<div >
    <h1>Här är alla Böcker</h1>
    <button @click="fetchBooks"> Click me </button>
    <div v-for="book in allBooks" :key='book.id' @click="goTo(book.id)" >
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
    </div>
</div>
  
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
    }

}
</script>

<style>

</style>