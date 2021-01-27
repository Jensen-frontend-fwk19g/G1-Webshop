<template>
  <section>
    <h1>The BookLand</h1>
    <p class="bold">
      <b>
        “Books are the quietest and most constant of friends; they are the most
        accessible and wisest of counselors, and the most patient of teachers.”
        – Charles W. Eliot
      </b>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.
      Veritatis, perspiciatis blanditiis reiciendis impedit asperiores illum
      soluta quod cupiditate doloremque deserunt, distinctio numquam quas
      obcaecati hic reprehenderit quae iusto.
    </p>
    <footer>
        <img src="../../assets/Strict-librarian.jpg" alt="">
      <h3 class="name">Jon Doe</h3>
      <p class="role">Manager</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "AboutText",
}
</script>

<style scoped>
.bold {
  -webkit-text-stroke: medium;
}

p {
  text-align: justify;
}
/*aligning footer in th middle*/
footer {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100px;

  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

h3 {
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
}
.role {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
}
</style>