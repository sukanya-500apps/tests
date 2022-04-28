<template>
    <div class='scrolling-component' ref='scrollComponent'>
        <post-component 
        v-for='(post,index) in posts'
        :post="post"
        :key="index"></post-component>

    </div>
</template>
<script>
import PostComponent from "./Post.vue";
import { ref, onMounted, onUnmounted } from "vue";
import getPosts from "../scripts/post-loader";
export default{
components:{
    PostComponent
},
data(){
      
},
methods:{
    
    setup () {
  	const posts = ref(getPosts(10))
  	const scrollComponent = ref(null)
       return {
  		posts,
  		scrollComponent
    } 
    },
    },
    // onMounted(() =>{
  	// 	window.addEventListener("scroll", handleScroll)
    //      })

  	// onUnmounted(() => {
  	// 	window.removeEventListener("scroll", handleScroll)
  	// })
     	
//   	const handleScroll = (e) => {
//   let element = scrollComponent.value;
//   if (element.getBoundingClientRect().bottom < window.innerHeight) {
//     loadMorePosts();
//   }
//   	}
// }
// }


}
</script>
