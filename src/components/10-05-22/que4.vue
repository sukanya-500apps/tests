<template>
  <div>
      <h1>comparing two strings</h1>
      <p>string1:Life</p>
      <p>string2:File</p>
      <button @click="fun()">click</button>
<p id="demo"></p>
<p id="demo1"></p>
      <!-- {{output}} -->
  </div>
</template>

<script>
export default {
  name: "QuE4",
  data() {
    return {
        // output:" "
    };
  },
  methods: {
    fun() {
      var string1 = "Life";
      var string2 = "File";
    //   this.output =
        if(string1.length === string2.length &&
        string1.split(string1).sort().join() == string2.split(string2).sort().join()){
            document.getElementById("demo").innerHTML="strings are equal"
            console.log("true")
        }
        else{
            document.getElementById("demo1").innerHTML="strings are not equal"
            console.log("false")
        }
    },
  },
};
</script>

<style>
</style>