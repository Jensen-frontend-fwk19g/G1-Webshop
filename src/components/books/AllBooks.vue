<template>
    <div class="books" >
        <h2 @click="goTo(book.id)">{{book.Title}}</h2>
        <h4>Type: {{book.Type}}</h4>
        <h3>{{book.Price}} :-</h3>
        <img :src="book.Img" alt="bild">
        <button @click="addToCard(book)">Add to cart</button>        
    </div>
</template>

<script>
import json from "../../assets/products.json"
export default {
    props: {
        book: Object
    },
    data() {
        return {
            cart: json.cart 
        }
    },
    methods: {
        goTo(id) {
            this.$router.push(`/BookInfo/${id}`);
        },
        addToCard(book) {
            this.cart.push({
                id: book.id,
                Title: book.Title,
                Price: book.Price,
                Type: book.Type
            })
            console.log('cart',this.cart)
        }
    }
};
</script>

<style scoped>
.books {
    margin: 15px;
    padding: 1rem;
    border: 1px solid rgba(15, 15, 15, 0.329);
    background-color: #c9c9c750;
    box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
    float: left;
    width: 240px;
    color: #3d2f27;
    }
    .books img {
        width: 200px;
        height: 160px;
    }
</style>