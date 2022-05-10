 <template>
<div>
<center><b-card style="max-width: 20rem;" class="mb-2">
<b-card-group>
<b-form>
<b-tabs pills card>
<b-tab v-for="i in tabs" :key="'dyn-tab' + i" :title="'Tab ' + i">
<b-form-input type="text" placeholder="enter product name" v-model="val"></b-form-input><br>
<b-form-input type="text" placeholder="enter price" v-model="val1"></b-form-input><br>
<b-form-input type="text" placeholder="enter productcategory" v-model="val2"></b-form-input><br>
<b-button variant="btn btn-primary btn-sm" @click="fun()">submit</b-button>
<b-button variant="btn btn-danger btn-sm" class="float-right" @click="closeTab(i)">
Close tab
</b-button>
</b-tab>
<template #tabs-end>
<b-nav-item role="presentation" @click.prevent="newTab()" href="#">Add Tab</b-nav-item>
</template>
<template #empty>
<div class="text-center text-muted">
There are no open tabs<br>
Open a new tab using the <b>+</b> button above.
</div>
</template>
</b-tabs>
</b-form>
</b-card-group>
</b-card></center><br>
<b-table striped hover :items="names" :fields="fields"></b-table>
</div>
</template>
<script>
export default {
name:'TAbb',
data() {
return {
tabs: [],
tabCounter: 0,
names:[{productname:"", price:"",productcategory:""}],
fields:["productname","price","productcategory"],
val:"",
val1:"",
val2:"",
}
},
methods: {
closeTab(x) {
for (let i = 0; i < this.tabs.length; i++) {
if (this.tabs[i] == x) {
this.tabs.splice(i, 1)
}
}
},
newTab() {
this.tabs.push(this.tabCounter++)
},
fun(){
this.names.push({
productname:this.val,
price:this.val1,
productcategory:this.val2,

});
this.val = ""
this.val1 = ""
this.val2 = ""
this.val3 = ""
},
}
}
</script>