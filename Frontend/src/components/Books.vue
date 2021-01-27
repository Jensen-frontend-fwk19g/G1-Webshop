<template>
<section>
    <div v-for="book in products" :key='book.id' class="books">
        <img src="./../assets/add.png" alt="add" class="add" @click="addToCart(book.id)" />
        <h4>{{ book.Title }}</h4>
        <h5>{{ book.Price }}:-</h5>
        <h6>{{ book.Description }}</h6>
    </div>
</section>

</template>

<script>
export default {
    data: () => ({
        products: Array,
        cart: []
    }),
    methods: {
        async fetchBooks() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                this.products = json.products;
            }
            catch {
                this.products = 'Could not retrive all books, please try again.'
            }
        },
        addToCart(book) {
            console.log(book);
            this.cart.push(book);
            console.log(this.cart);/*
            let cartItem = this.cart.find(item => item.id == book.id);
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

<style>
.books {
    background: white;
    width: 10em;
    height: 6em;
}

</style>