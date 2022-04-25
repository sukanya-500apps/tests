<template>
  <div>
   <table align="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(table_data, index) in table_data" :key="index">
          <td>{{ table_data.name }}</td>
          <td>{{ index }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
name: "QuestioN1",
data() {
return {

table_data: [
{ name: " Agile CRM", description: " A company of excellence" },
{ name: "mantra technologies", description: "500apps" },
{ name: "500apps Python", description: "Backend built using python" },
{ name: "500apps infinity", description: "Builtusing vue JS" },
],
fields:['name','description','index']
}
},
methods:{
  func(i){
   this.table_data= this.table_data[i]
  return this.table_data
  }
}
}
</script>
<style scoped>
table {
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
border-collapse: collapse;
width: 50%;
background-color: white;
}
td,
th {
border: 5px solid #dddddd;
text-align: left;
padding: 8px;
}
</style>
