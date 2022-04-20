<template>
  <div>
    
    <Que4/>
    <!-- <h2>child to parent using refs</h2>
    <que6  ref="test" />
    <button @click="parent()">click here</button> -->
  </div>
</template>
<script>
import Que4 from "./components/20-04-2022/que4.vue";
// import que6 from "./components/20-04-2022/que6.vue";
export default {
  name: "QuE4",
  components: {
    Que4,
  },
//   methods: {
//     parent() {
//       this.$refs.test.child();
    }
  //}
// };
 </script>