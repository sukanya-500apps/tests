<template>
<div id="app">	
	<p>{{myStr}}</p>

	<button @click="myFunction()">Click Me</button>
</div>
</template>
<script>
export default{
    name:"FiLe",
data(){
return{
 myStr:"Hello World!",
// myStr2:""
}
  },

   methods:{
    myFunction: function () {	
		this.myStr = this.myStr.toUpperCase();
    }
   }

}
</script> 