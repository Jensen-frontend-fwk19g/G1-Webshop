<template>
    <div class="items">
        <p>{{ book.id }}</p>
        <p class="bookTitle">{{ book.Title }}</p>
        <p class="bookPrice">{{ book.Price }}</p>
        <p class="bookType">{{ book.Type }}</p>
        <div style="display: flex; margin-left: 70px">
           <h3>Quantity: </h3> <h3>{{book.quantity}}</h3>
        </div>
        <button @click="removeItem(book)" :id="book.id" class="dltBtn">X</button>
    </div>
</template>

<script>
export default {
    name: 'CartItems',
    props: {
        book: Object
    },
 computed: {
    cartItems() {
      return this.$store.state.cartItems;
    }
}
}
</script>

<style scoped>
.items {
    margin: 15px;
    padding: 1rem;
    border: 1px solid rgba(15, 15, 15, 0.329);
    background-color: #c9c9c750;
    box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
    float: left;
    width: 240px;
    color: #3d2f27;
}

</style>