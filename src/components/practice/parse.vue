<template>
  <div>
    <h1>parse</h1>
    <p>{{ res }}</p>
    <button @click="fun()">Try it</button>
  </div>
</template>
<script>
export default {
  name: "AbhI",
  data() {
    return {
      text: ["Ford", "BMW", "Audi", "Fiat"],
      res:" ",
    };
  },
  methods: {
    fun() {
      this.res = JSON.stringify(this.text.filter((row)=>{
       row=="BMW"
       }));
      console.log(this.res);
      
    },
  },
};
</script>
<style>
</style>



