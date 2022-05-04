<template>
  <div>
    <!-- <p>{{Quote}}</p> -->
    <slot name="title"></slot>
    <hr>
    <div>
      <slot name="content"></slot> 
    </div>
  </div>
</template>
<script>
export default{
  name:"QuotE",
  props:['Quote']
}
</script>

<style scoped>
div{
  border:1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding:30px;
  margin: 30px auto;
  text-align:center;
}
</style>