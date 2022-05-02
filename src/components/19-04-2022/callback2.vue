<template>
    <div>
<h2>callbacks</h2>
<p>{{result}}</p>
    </div>
</template>
<script>
export default{
    name:"BI",
    data(){
        return{
        result :this.mycalculator(5,5,this.mydisplayer())
        }
    },
    methods:{
        func(){
       this.mydisplayer=(some)=>{
            return some;
        },
       this.mycalculator=(arg1,arg2)=>{
            let sum=arg1+arg2;
            //console.log(arg3)
           return sum;
        }
        }
    }
}
</script>
