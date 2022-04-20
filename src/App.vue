<template>
        <div id="app">
          <que6 ref="name" name="sukanya">{{name}}</que6>
        </div>
      </template>
      <script>
      import que6 from './components/20-04-2022/que6.vue'
      export default {
        name: 'QuE6',
        components: {
          que6
        },
        mounted:function() {
      this.$refs.que6.name
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
  margin-top: 60px;
}
</style>
