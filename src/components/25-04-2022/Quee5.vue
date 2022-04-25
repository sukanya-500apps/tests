<template>
    <div>
        <title>Question 5</title>
<button @click='func' >update</button>
    </div>
</template>
<script>
export default{
    name:"QuEe5",
methods:{
    func(){
        this.$emit('check',{name:'sukanya',subject:'db'})
    }
}
}
</script>
