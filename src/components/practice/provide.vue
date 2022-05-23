<template>
    <div class="parent">
    <inject/>
    </div>
</template>
<script>

import inject from '../practice/inject.vue'
export default {
    name:"proviDE",
            provide(){
              return{  mymsg:"hii"}
            },
            components:{
                inject
            }
        }
</script>
