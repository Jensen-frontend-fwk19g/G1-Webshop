<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">BookStore</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/outlet">Outlet</router-link> |
        <router-link to="/cart">Cart</router-link>
      </div>
    </header>

    <router-view :books="books" />
  </div>
</template>

<script>
import books from '@/assets/products.json'

export default {
  computed: {
    books() {
      return books.products
    }
  }
  /*
  data: () => ({
    allBooks: Array,
  }),
  methods: {
    async fetchBooks() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const json = await response.json();
        this.allBooks = json.products;
      } catch {
        this.allBooks = "Could not retrive all books, please try again.";
      }
    }
  },
  created() {
    this.fetchBooks();
  }
  */
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  background-image: url(./assets/books-background.jpg);
  background-size: cover;
  height: 28vw;
  text-align: center;
  background-position: calc(100% - 1px) calc(50% - 1px);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #85756d;
}
</style>
