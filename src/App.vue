<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <nav>
      <li v-for="tab in tabs">
        <router-link :to="tab.link"  v-on:click="change(tab)">{{ tab.name }}</router-link>
      </li>
    </nav>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue',
      tabs: [
        {
          name: 'list',
          link: '/list',
          isActive: false
        },
        {
          name: 'add',
          link: '/add',
          isActive: false
        },
        {
          name: 'edit',
          link: '/edit',
          isActive: false
        },
      ],
      items: []
    }
  },
  methods : {
    change: function(s) {
      this.tab.forEach(function(v) {
        v.isActive = false
      })
      s.isActive = true
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-weight: normal;
}

ul {
  padding: 0;
  list-style:none;
  width:100%;
  overflow:hidden;
  border-bottom:1px solid #ececec;
}

li > div {
  padding: 5px 10px;
  border: 1px solid #ececec;
  text-align: left;
  font-size: 12px;
  border-bottom:0px;
}
li:nth-child(odd) > div {
}


a {
  color: #42b983;
}


nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}
nav li {
  float:left;
}
nav li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
nav li a.router-link-active {
  color: white;
  background-color: #008CBA;
}

.router-view {
  margin-top:20px;
}


</style>
