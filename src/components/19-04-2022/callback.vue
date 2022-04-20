<template>
    <div>
<h2>callback2</h2>
<p>{{mydisplayer()}}</p>
    </div>
    
</template>
<script>
export default{
    name:"CallBack",
    data(){
        return{
        result:this.mycalculator(2,2,this.mydisplayer()),
        }
    },
    methods:{
        mydisplayer:(something)=>{
          
            document.write(something)
        },
        mycalculator :(arg1,arg2,arg3)=> {
        let sum=arg1+arg2
    arg3(sum)

        },
        }
        }
</script>

