<template>
  <div id="app">
    <div class="app-container">
      <routerView :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: auto;
}

.app-container {
  width: 75%;
  margin: auto;
}
</style>
