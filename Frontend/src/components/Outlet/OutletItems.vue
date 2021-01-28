<template>
  <div>
      <h1>Books on sale!</h1>
      <div v-for="book in outletBooks" :key="book.id" class = "books">
          <h2>Title: {{ book.Title }}</h2>
          <h3>Price: {{ book.Price }}</h3>
          <h4>Type: {{ book.Type }}</h4>
          <a href="#" class="btn" @click.prevent="addToCart">Add to Cart</a>
      </div>
  </div>
</template>

<script>
export default {
 data: () => ({
     outletBooks: Array,
 }),
 methods: {
     async fetchOutletBooks() {
         console.log("inside");
         try {
             const response = await fetch('http://localhost:3000/outlet');
             const json = await response.json();
             this.outletBooks = json.outlet;
             console.log(this.outletBooks);
             this.$emit('outletBooks', this.allBooks)
         }
         catch {
             this.outletBooks = 'Could not retrieve outlet items'
         }
     },
     addToCart() {
         
     }
 },
 created() {
     this.fetchOutletBooks();
 }
}
</script>

<style scoped>
.books {
    margin: 15px;
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: white;
    box-shadow: 0 0 16px gray;
    float: left;
    width: 240px;
}

img {
    width: 10px;
    height: 10px;
}
  
  
.books img {
    width: 200px;
    height: 160px;
  }

</style>