<template>
<div>
    <h1>Här är alla Böcker</h1>
    <div v-for="book in allBooks" :key='book.id'  class="books" >
        <img src="./../../assets/add.png" alt="add" class="add" @click="addToCart(book)" />
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
        <img :src="imgUrl" alt="book.Img" />
        <img src="/assets/lor.jpg" alt="hp">
    </div>
</div> 
</template>

<script>

export default {

    data: () => ({
        allBooks: Array,
        cart: Array
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
        /*goTo(id){
            this.$router.push(`/BookInfo/${id}`);
        },*/
        addToCart(book) {
            console.log(book);
            this.$emit('addToCart',book)
            
            /*let cartItem = this.cart.find(item => item.id == book.id);
            console.log(cartItem)
            if (cartItem) {
                cartItem.quantity++
            } 
            else{
                //else add to cart with quantity 1
                //product.quantity = 1;
                this.cart.push({
                id: book.id,
                price: book.Price,
                title: book.Title,
                quantity: 1
                });
                console.log(this.cart)
            }*/
        }
    },
    beforeMount() {
        this.fetchBooks()
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