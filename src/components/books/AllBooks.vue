<template>
<div>
    <div @click="goTo(book.id)" class="books" >
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
        <img :src="book.Img" alt="bild">
        <img src="../../assets/hp.jpg" alt="hej">

    </div>
</div> 
</template>

<script>
export default {
    props: {
        book: Object
    },
    methods: {
        goTo(id){
            console.log(this.book)
            this.$router.push(`/BookInfo/${id}`)
        }
    },
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
}
  
  
.books img {
    width: 200px;
    height: 160px;
  }

</style>