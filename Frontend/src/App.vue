<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">BookStore</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/outlet">Outlet</router-link> |
      <router-link to="/cart">Cart</router-link> 
    </div>
    <router-view/>
  </div>
</template>

=======
    <header>
      <div id="nav">
        <router-link to="/">BookStore</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/outlet">Outlet</router-link> |
        <router-link to="/cart">Cart</router-link> 
      </div>
    </header>
    <router-view 
    @allBooks="booksAll" 
    :AllBooks="AllBooks" 
    />
  </div>
</template>

<script>
export default {
  data:() => ({
    AllBooks: Array
  }),
  methods: {
    booksAll(books) {
      this.AllBooks = books
      console.log(this.AllBooks)
    }
  }
  
}
</script>

>>>>>>> dev
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(./assets/books-background.jpg);
  background-size: cover;
  height: 100vw;
  }

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
