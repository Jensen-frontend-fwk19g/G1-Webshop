<template>
  <div>
    <h1>..Read more about chosen book..</h1>
    <section>
      <img :src="bookInfo.Img" alt="no img avb">
      <article class="infoSection">
        <h2>{{ bookInfo.Title || book.Title }}</h2>
        <h2>{{ bookInfo.Price }} :-</h2>
        <h3>Description:</h3>
        <p>{{ bookInfo.Description }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: {
      books: Array,
      book : {
      default: () => ({
        Title: "ERROR",
        Price: "Price not applcable",
        Description: "No description available",
      }),
      type: Object, 
      }
  },
  computed: {
    bookInfo() {
      let chosenBook = {
        Title : this.infoChosen.Title,
        Price : this.infoChosen.Price,
        Description : this.infoChosen.Description,
        Img : this.infoChosen.Img
      }
      return chosenBook;
    },
    infoChosen(){ 
        return this.books.filter(b => b.id == this.$route.params.id)[0]
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