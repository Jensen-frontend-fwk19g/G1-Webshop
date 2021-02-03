<template>
  <div>
    <h1>..Read more about chosen book..</h1>
    <section>
      <img :src="bookInfo.Img" alt="no img avb">
      <article class="infoSection">
        <h2>{{ bookInfo.Title || book.Title }}</h2>
        <h2>{{ bookInfo.Price }} kr</h2>
        <h3>Description:</h3>
        <p>{{ bookInfo.Description }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: {
      books: Array
  },
  computed: {
    bookInfo() {
      let chosenBook = {
        Title : this.infoChosen ? this.infoChosen.Title : 'Error',
        Price : this.infoChosen ? this.infoChosen.Price : 'Price not applcable',
        Description : this.infoChosen ? this.infoChosen.Description : 'No description available',
        Img : this.infoChosen ? this.infoChosen.Img : 'No img available'
      }
      return chosenBook;
    },
    infoChosen(){ 
        console.log(this.books + 'hej jag är books');
        if ( this.$route !== undefined ) {
          return this.books.find(b => b.id == this.$route.params.id)
        } else {
          return null
        }
      }
    }
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10%;
}
article {
  margin: 5rem;
  border: solid 2px #3d2f27;
  padding: 3rem;
}
div {
  color: #3d2f27;
}
img {
  margin-top: 0;
  max-width: 50%;
  max-height: 50%;
}
</style>