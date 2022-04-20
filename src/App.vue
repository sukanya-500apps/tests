<template>
  <div>
    <h2>child to parent using refs</h2>
    <que6  ref="test" />
    <button @click="parent()">click here</button>
  </div>
</template>
<script>
import que6 from "./components/20-04-2022/que6.vue";
export default {
  name: "QuE6",
  components: {
    que6,
  },
  methods: {
    parent() {
      this.$refs.test.child();
    },
  },
};
</script>