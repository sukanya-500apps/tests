<template>
    <div>
        <!-- <b-table :items="items" :fields="fields">
        </b-table> -->
        <table align="center">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.firstname}}</td>
          <td>{{item.lastname }}</td>
          <button @click="add()">add</button>
          
        <button @click="deleete()">delete</button>
          <button @click="edit()">edit</button>
        </tr>
      </tbody>
    </table>
        Firstname:<b-form-input type="text" id="fn" placeholder="Enter first name" v-model="finame" required>
        </b-form-input>
        Lastname:<b-form-input type="text" id="ln" placeholder="Enter last name" v-model="sename" required></b-form-input>
         <span id="error" ></span>
        <button @click="update()">update</button>
    </div>
</template>
<script>
export default{
    name:"QuEstion3",
    data(){
        return{
           items:[{firstname:"sukanya",
            lastname:"gumparthi"}],
            fields:[ "firstname","lastname"]
        }
    },
    methods:{
        add(){
            this.error = document.getElementById('error'),
       this.error.innerHTML = (!this.firstname || !this.lastname) ? 'firstname & lastname both values are required.' : ''
this.items.push({

    firstname:document.getElementById("fn").value,
    lastname:document.getElementById("ln").value,
     
})
        },
        deleete(){
            this.items.pop("fn","ln")
        },
        edit(items,index){
this.finame=items.firstname
this.sename=items.lastname
this.edittxt=index
        },
        update(){
            this.items[this.edit.finame].firstname=this.fn
             this.items[this.edit.sename].lastname=this.ln
this.index=='0'
    }}
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
