<template>
  <section>
    <div class="wrapper">
<<<<<<< HEAD
      <h1>Here is all the books</h1>
      <div class="search-wrapper">
=======
      <div class="search-wrapper">
        <h1>..All books in our libary..</h1>
>>>>>>> dev
        <input
          id="search"
          type="text"
          v-model="search"
          placeholder="Sök här med Title.."
          @input="filter()"
        />
      </div>
    </div>
    <div v-if="!filteredList || !filteredList.length">
<<<<<<< HEAD
      <h2 style="color: red">No books available</h2>
=======
      <h2 style="color: red">Inga böcker tillgängliga</h2>
>>>>>>> dev
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
<<<<<<< HEAD
}

.wrapper h1 {
  position: relative;
  margin-left: 30%;
=======
  justify-content: center;
  color: #3d2f27;
}

.wrapper h1 {
  margin-left: 20%;
>>>>>>> dev
  width: 60%;
}
.wrapper .search-wrapper {
  position: relative;
  width: 40%;
<<<<<<< HEAD
}

.wrapper .search-wrapper input {
  padding: 4px 12px;
=======
}
.search-wrapper {
  display: flex;
  flex-direction: column;
}

.wrapper .search-wrapper input {
  padding: 1rem;
>>>>>>> dev
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
<<<<<<< HEAD
=======
  display: flex;
  border-radius: 5px;
>>>>>>> dev
}
</style>