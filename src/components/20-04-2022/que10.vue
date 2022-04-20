<template>
  <div>
    <button @click="handle()">click</button>
  </div>
</template>
<script>
export default {
  name: "QuE10",
  data() {
    return {
      count: " ",
    };
  },
  methods: {
    handle() {
      try {
        this.count = this.count * 5;
        console.log("printing count", this.count);
      } catch {
        console.log("error");
      }
    },
  },
};
</script>
