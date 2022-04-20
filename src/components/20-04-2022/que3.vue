<template>
  <div>
    <h1> Now The Time is </h1>
      <h1>{{ timestamp }}</h1>
      <h2>{{ timestamp1 }}</h2>
   <button @click="func()">click for settimeout</button>
   <button @click="func2()">click for setinterval</button>
  </div>
</template>
<script>
export default {
  name: "USERTIME",
  data() {
    return {
      timestamp: "",
      timestamp1:" "
    };
  },
  methods: {
    func() {
      var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setTimeout(() => {
        this.timestamp = time;
        console.log("time is", this.timestamp);
      }, 5000);
    },
      func2(){
var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setInterval(() => {
        this.timestamp1 = time;
        document.write("time is", this.timestamp1);
      }, 1000);
      }
    
  },
};
</script>




