<template>
    <div class="books" >
        <h2 @click="goTo(book.id)" >{{book.Title}}</h2>
        <h3>{{book.Price}} kr</h3>
        <img :src="book.Img" alt="bild">
        <button @click="addToCart(book.id)">add to cart</button>        
    </div>
</template>

<script>

export default {
    props: {
        book: Object
    },
    data() {
        return {
            cart:[]
        }
    },
    methods: {
        goTo(id){
            this.$router.push(`/BookInfo/${id}`)
        },
        addToCart(item) {

            /*this.cartadd.id = item.id
            this.cartadd.Title = item.Title
            this.cartadd.Price = item.Price
            this.cartadd.Type = item.Type
            this.cart.push(this.cartadd)
            this.cartadd = {}
            console.log(item)
            let cartItem = this.cart.forEach(book => book.id == item.id);
            console.log(cartItem,'kkkkkk')

            if (cartItem) {
                cartItem.quantity++
            } 
            else
            {
                //else add to cart with quantity 1
                //product.quantity = 1;
                this.cart.push({
                id: item.id,
                price: item.Price,
                title: item.Title,
                quantity: 1
                });
            }*/
            this.cart.push(item);
            console.log(this.card,'ooo')
            
        }
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
