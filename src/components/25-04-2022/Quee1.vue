<template>
  <div>
   <table align="center" border=1px>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
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
};
},
};
</script>

