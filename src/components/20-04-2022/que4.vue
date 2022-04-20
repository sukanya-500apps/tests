<template>
    <div id="class">
        <h1>fetching data</h1>
        <table align="center" id="mytable" class="table" border="5px"></table>
        <thead>
        <tr>
            <th> name</th>
            <th>email</th>
        </tr>
        </thead>
        <tbody></tbody>
    </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default{
    name:"QuE4",
    mounted(){
        this.getusers();
    },
    methods:{
        getusers(){
            axios.get("https://json-generator.com/api/json/get/bSldINskRK").then (response=>{
                $("mytable").Datatable({
                    data:response.data,
                    coloumns:[
                        {data:"name"},
                        {data:"email"},
                    ],
                });
            })
            
    },
}
}
</script>
