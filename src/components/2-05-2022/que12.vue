<template>
    <div >
<button @click="func()">click</button>
    </div>
</template>
<script>
export default{
    name:"QuE2",
    data(){
        return{
            arraynumbers:[1,2,5,4,7],
        }
    },
    methods:{
func(){
       this.arraynumbers.reduce((accumulator,currentValue, index, array) => {
      console.log(accumulator,currentValue);
      array[index] = array[index]*2;
    },0);
}
    }
    }
</script>