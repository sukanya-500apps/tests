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
import getPosts from "../practice/get-posts";
export default{
  name:"LiStcomponent",
components:{
    PostComponent
},
data(){
      
},
methods:{
    
    setup () {
  	const posts = ref(getPosts(10))// eslint-disable-line no-mixed-spaces-and-tabs
  	const scrollComponent = ref(null)// eslint-disable-line no-mixed-spaces-and-tabs
       return {
  		posts,// eslint-disable-line no-mixed-spaces-and-tabs
  		scrollComponent// eslint-disable-line no-mixed-spaces-and-tabs
    } 
    },
    },
    mounted(){
    onMounted(() =>{
  		window.addEventListener("scroll", handleScroll)// eslint-disable-line no-mixed-spaces-and-tabs
         })

  	onUnmounted(() => {// eslint-disable-line no-mixed-spaces-and-tabs
  		window.removeEventListener("scroll", handleScroll)// eslint-disable-line no-mixed-spaces-and-tabs
  	})// eslint-disable-line no-mixed-spaces-and-tabs
     	// eslint-disable-line no-mixed-spaces-and-tabs
  	const handleScroll = (e) => {// eslint-disable-line no-mixed-spaces-and-tabs
  let element = e.scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    this.loadMorePosts();
  }
  	}// eslint-disable-line no-mixed-spaces-and-tabs
}
}
</script>
