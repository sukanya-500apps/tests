<template>
    <div>
        
         <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>
<script>
export default{
    name:"BformTable",
    data(){
        return{
            items:" ",
            fields:["name","id","mobile"]
        }
    },
    methods:{
        func(){

        }
    }
}
</script>
