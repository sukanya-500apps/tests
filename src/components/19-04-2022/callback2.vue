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
        mydisplayer:(some)=>{
            return some;
        },
        mycalculator:(arg1,arg2,sum)=>{
            let sum=arg1+arg2;
            console.log(arg3)
           return sum;
        },
        }
}
</script>
