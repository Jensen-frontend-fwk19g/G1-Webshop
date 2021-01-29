<template>
    <div>
        <div  class="books" >
            <h2 @click="goTo(book.id)">{{book.Title}}</h2>
            <h3>{{book.Price}}</h3>
            

            <img src="/assets/lor.jpg" alt="hp">
            <button @click="addToCart(book.id)" class="add">add to cart</button>
        </div>
    
    </div> 
</template>

<script>


export default {
    props: {
        book: Object,
    },
    methods: {
        goTo(id){
            console.log(this.book)
            this.$router.push(`/BookInfo/${id}`)
        },
        addToCart(book) {
            console.log('hi')
            let cartItem = fetch('../../assets/products.json')
            /*this.$emit('addToCart',book)''*/
            this.cartItem.push(book)        }
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