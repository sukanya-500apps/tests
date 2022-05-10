<template>
  <div class="hello">
    {{ msg }}
    {{msg1}}
    {{msg2}}
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
        msg2: 'One'
    }
  },
  mounted() {
      this.msg1 = 'Two';

      this.$nextTick(() => {
          this.msg = 'Three';
      });
      setTimeout(() => {
    this.msg1 ;
}, 2000);
  }
}
</script>