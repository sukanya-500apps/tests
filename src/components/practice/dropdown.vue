
  
<template>
  <div>
    <h2>Vue Js Dropdown</h2>
    <select name="users" @change="onChange($event)" class="form-select form-control">
        <option>status</option>
        <option value="open">open</option>
        {{opendata}}
        <option  value="closed">closed</option>
        {{closeddata}}
        <option  value="pending">pending</option>
        {{pendingdata1}}<br>{{pendingdata2}}
        <p>{{result}}</p>
</select>
  </div>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
 users:[
{email: "Eliseo@gardner.biz",id: 1,name: "id labore ex et quamlaborum",status:"open"},
 {email: "Jayne_Kuhic@sydney.com",id: 2,name: "quovero reiciendis velit similiqueearum",status:"pending"},
  {email: "Nikita@garfield.biz",id: 3,name:"odioadipisci rerum autanimi",status:"closed"}, 
  {email: "Lew@alysha.tv",id: 4,name: "alias odio sit",status:"pending"}
],
result:"",
opendata:"",
closeddata:"",
pendingdata1:"",
pendingdata2:"",
          }
    },
    
        methods: {
        onChange: function(evt){
     var users=" ";
            var val = evt.target.value;
            if (val == 'status') {
                var susers = users;
            } else{ 
                susers = this.users.filter(function (e)
                {
                   return e.status == val;
                   });
                   console.log(this.users);
    }
    this.$emit("tableData",susers)
        }
}
}
</script>