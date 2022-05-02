<template>
  <div class="post">
    <h2>{{ post.author }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>
<script>
  export default {
    name:"PoSt",
  	props: {// eslint-disable-line no-mixed-spaces-and-tabs

  		post: Object// eslint-disable-line no-mixed-spaces-and-tabs
  	}// eslint-disable-line no-mixed-spaces-and-tabs
  }
</script>
