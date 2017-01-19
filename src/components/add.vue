<template>
  <form action="/add" method="post">
    <div class="form">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><input type="text" name="sub_title" placeholder="sub_title"></p>
      <p><input type="text" name="cost" placeholder="cost"></p>
      <p><input type="text" name="price" placeholder="pirce"></p>
      <p><input type="text" name="quantity" placeholder="quantity"></p>
      <p><input type="submit"></p>
    </div>
  </form>
</template>


<script>
export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
