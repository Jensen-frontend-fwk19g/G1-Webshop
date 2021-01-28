<template>
<div>
     <div class ="wrapper">
        <h1>Här är alla Böcker</h1>
        <div class="search-wrapper">
        <input id='search' type="text" v-model="search" placeholder="Sök här med Title.." @input="filter()"/>
        </div>
     </div>
    <div v-if = "!filteredList || !filteredList.length">
    <h2 style="color:red" > Inga böcker tillgängliga </h2>
    
    </div>
    <div v-else>
       <div v-for="book in filteredList" :key='book.id' @click="goTo(book.id)" class="books" >
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
        <img :src="imgUrl" alt="book.Img" />
        <img src="/assets/lor.jpg" alt="hp">
    </div>
    </div>
</div> 
</template>

<script>
export default {
    data: () => ({
        allBooks: Array,
        search: '',
        filteredList: Array,
    }),
    methods: {
        async fetchBooks() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                this.allBooks = json.products;
                this.filteredList = this.allBooks;
                this.$emit('allBooks', this.allBooks)
            }
            catch {
                this.allBooks = 'Could not retrive all books, please try again.'
            }
        },
        goTo(id){
            this.$router.push(`/BookInfo/${id}`);
        },
        filter() {
         this.filteredList = this.allBooks.filter(book => {
        return book.Title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    },
    beforeMount() {
        this.fetchBooks()
    }
}
</script>

<style scoped>
.books {
    margin: 15px;
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: white;
    box-shadow: 0 0 16px gray;
    float: left;
    width: 240px;
}

img {
    width: 10px;
    height: 10px;
}
  
  
.books img {
    width: 200px;
    height: 160px;
  }
.wrapper {
    display: flex;
	padding: 5px; 
    flex-direction: row;
}

.wrapper h1 {
     position: relative;
     margin-left: 30%;
     width: 60%;
}
.wrapper .search-wrapper {
    position: relative;
     width: 40%;
}
 
 .wrapper .search-wrapper input {
	padding: 4px 12px;
	color: rgba(0, 0, 0, .70);
	border: 1px solid rgba(0, 0, 0, .12);
	transition: 0.15s all ease-in-out;
	background: white;
}

</style>