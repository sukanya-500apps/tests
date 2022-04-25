<template>
    <div>
        <h1>hi</h1>
         <button @click="func()">click</button>
         <p>{{table_data}}</p>
        <table align="centre">
            <tbody>
            <tr v-for="name in table_data" :key="name.id"></tr>
            <tr v-for="description in table_data" :key="description.id"> </tr>
<tr v-for="yearsofexperience in table_data" :key="yearsofexperience"></tr>
<tr v-for="Location in table_data" :key="Location"></tr>
<td>{{table_data.name}}</td>
<td>{{table_data.description}}</td>
<td>{{table_data.yearsofexperience}}</td>
<td>{{table_data.Location}}</td>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    name:"QuEe2",
    data(){
        return{
 table_data : [{ "name" :" Agile CRM" , "description" :" A company of excellence"},
         {"name":"mantra technologies", "description":"500apps" },
         {"name":"500apps Python", "description":"Backend built using python" },
         {"name":"500apps infinity", "description":"Builtusing vue JS" }],
        
        }
    },
    methods:{
        func(){
        const table_data=[table_data]
         return this.table_data
    //console.log(this.table_data)
        }
    }

}
</script>
