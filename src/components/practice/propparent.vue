<template>
  <div>
      <propschild :message="message"></propschild>
  </div>
</template>

<script>
import propschild from './propschild.vue'
export default {
  components: {
       propschild 
       },
name:"PropParent",
data(){
    return{
message:" sukanya"
    }
}
}
</script>

<style>

</style>