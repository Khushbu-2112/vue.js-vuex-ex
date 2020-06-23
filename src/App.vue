<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/home">CAFE<b style="color:var(--g-color)">MS</b></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">Add Item</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/footer';
  export default{
    components: {
      Footer
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --g-color: #42b983;
  --d-color:#2c3e50;
  /* background: #e6faf1; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-nav a {
  float: left;
}
</style>
