<template>
  <div>
    <h1>..Read more about chosen book..</h1>
    <section>
      <img src="../../assets/hp.jpg" alt="hi" />
      <article>
        <h2>{{ book.Title }}</h2>
        <h2>{{ book.Price }} kr</h2>
        <h3>Description:</h3>
        <p>{{ book.Description }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      default: () => ({
        Title: "pick book",
        Price: 200,
        Description: "vjnenrvnr",
      }),
      type: Object,
    },
  },
  /*computed: {
    book(){ 
        console.log(this.book)
        return this.books.filter( b => b.id == this.$route.params.id )[0]
      }
    }  */
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
  margin: 10rem;
  border: solid 2px #3d2f27;
  padding: 3rem;
}
div {
  color: #3d2f27;
}
</style>