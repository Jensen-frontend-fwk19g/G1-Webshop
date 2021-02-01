<template>
    <div class="books" >
        <h2 @click="goTo(book.id)" >{{book.Title}}</h2>
        <h3>{{book.Price}} kr</h3>
        <img :src="'/img/'+ book.Img" alt="bild">
        <button @click="addToCart">add to cart</button>        
    </div>
</template>

<script>

export default {
    props: {
        book: Object
    },
    data() {
        return {
            cart:[
                {
                    "id": 9,
                    "Title": "Gone with the Wind",
                    "Price": 400,
                    "Type": "Hard cover"
                },
                {
                    "id": 1,
                    "Title": "Harry Potter",
                    "Price": 250,
                    "Type": "Pocket"
                },
                {
                    "id": 6,
                    "Title": "Lord of the Rings",
                    "Price": 350,
                    "Type": "Hard cover"
                }
            ],
            cartadd: {
                id: '',
                Title: '',
                Price: '',
                Type: ''
            }
        }
    },
    methods: {
        goTo(id){
            this.$router.push(`/BookInfo/${id}`)
        },
        /*addToCart(item) {
            /*let cartItem = state.cart.find(item => item.id === product.id)
            if(cartItem) {
            cartItem.quantity++;
            }*/
            
            /*let cartItem = this.cart.find( book => book.id === item.id)
            /*let index= this.book.indexOf(item);
            console.log(cartItem,'nnnnn')
            if(cartItem) {
                cartItem.quantity++;
            }*/
        
    }
    
}
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
