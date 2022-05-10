<template>
  <div>
    string1 : <input type="text" v-model="string1" ><br/>
    string2 : <input type="text" v-model="string2" >
  </div>
</template>
<script>
export default {
  name: "MahI",
  data() {
    return {
      string1: "",
      string2: "",
    };
  },
  watch: {
    string1: function (row) {
      this.string1 = row;
      this.string2= this.string1.toUpperCase();
    },
  },
};
</script>