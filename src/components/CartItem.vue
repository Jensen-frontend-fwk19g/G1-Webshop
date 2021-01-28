<template>
    <div id="cart">
        <h2>Your Order</h2>
        <article v-for="(book,index) in cartItem" :key="index">
            <h3 class="book-title">{{ book.Title }}</h3>
            <button @click.prevent="removeItemFromCart(book)"> delete </button>
            <h6 class="item-price">{{ book.Price }}:-</h6>

        </article>
    </div>
</template>

<script>
export default {
    methods: {
        async getCartItem(){
            try {
                const response = await fetch('http://localhost:3000/cart');
                const json = await response.json();
                this.cartItem = json.cart;
                this.$emit('cartItem', this.cartItem)
            }
            catch {
                this.cartItem = 'Could not retrive all books, please try again.'
            }
        }
    },
    create() {
        this.getCartItem()
    }
}
</script>

<style>

</style>