<template>
  <section>
    <div class="wrapper">
      <div class="search-wrapper">
        <h1>..All books in our libary..</h1>
        <input
          id="search"
          type="text"
          v-model="search"
          placeholder="Search for a title.."
          @input="filter()"
        />
      </div>
    </div>
    <div v-if="!filteredList || !filteredList.length">
      <h2 style="color: red">No books available</h2>
    </div>
    <div v-else>
      <AllBooks v-for="book in filteredList" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import AllBooks from "./../components/books/AllBooks";

export default {
  props: {
    books: Array,
  },
  data: () => ({
    search: "",
    filteredList: Array,
  }),
  components: {
    AllBooks,
  },
  methods: {
    filter() {
      if (
        this.search == "undefined" ||
        this.search == null ||
        this.search == ""
      ) {
        this.filteredList = this.books;
      } else {
        this.filteredList = this.books.filter((book) => {
          return book.Title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
  },
  beforeMount() {
    this.filter();
  },
};
</script>

<style>
.wrapper {
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  color: #3d2f27;
}

.wrapper h1 {
  margin-left: 20%;
  width: 60%;
}
.wrapper .search-wrapper {
  position: relative;
  width: 40%;
}
.search-wrapper {
  display: flex;
  flex-direction: column;
}

.wrapper .search-wrapper input {
  padding: 1rem;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  display: flex;
  border-radius: 5px;
}
</style>