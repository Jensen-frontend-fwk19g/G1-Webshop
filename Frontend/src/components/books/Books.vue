<template>
<div >
    <h1>Här är alla Böcker</h1>
    <button @click="fetchBooks"> Click me </button>
    <div v-for="book in allBooks" :key='book.id' >
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
        <h3>{{book.Description}}</h3>
    </div>
</div>
  
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
    }

}
</script>

<style>

</style>