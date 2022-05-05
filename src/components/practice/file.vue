<template>
    <div>

    </div>
</template>
<script>
export default{
    name:"FiLe",
    data(){
        return{
            age:20,
    a:0,
b:0 
        }
    },
    computed:{
        AddToA:function(){
        console.log('AddToA')
return this.a+this.age
    },
    AddToB(){
        console.log('AddToB')
return this.b+this.age
    }
    }
}
</script>

