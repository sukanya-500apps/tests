<template>
    <div>
        <h1>Spread operator</h1>
        <p>The spread operator is used to add value or item into an array or lists</p>
        <button @click="func()">Spread operator</button>
        <p>The new array after using spread operator:{{array1}}</p>
    </div>
</template>
<script>
export default{
    name:"QuEe9",
    data(){
        return{
            array:[0,1,5,6,2,8,3,5],
            array1:" "
        }
    },
    methods:{
        func(){
        this.array1=[8,...this.array]
return this.array1
        }
    }
}
</script>
