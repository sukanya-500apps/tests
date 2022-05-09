<template>
  <div>
<p>message:{{message}}</p>
  </div>
</template>

<script>
export default {
name:"PropsChild",
props:{
  message:{
    default:"kiran" ,Type:String,
  }
}
}
</script>

