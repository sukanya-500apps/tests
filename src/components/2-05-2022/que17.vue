<template>
    <div>
        <button @click="func()">click</button>
    </div>
</template>
<script>
export default{
    name:"QuE3",
    data(){
        return{
            numbers:[1,1,2,2,2,3,4,3,2]
        }
    },
    methods:{
        func(){
            console.log(...new Set(this.numbers))
        }
    }
}
</script>