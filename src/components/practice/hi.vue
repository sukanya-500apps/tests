<template>
  <div style="text-align: center " >
       <b-tabs content-class="mt-3">
    <b-tab title="First" active>

        <center><b-card style="max-width: 20rem;" class="mb-2">
<b-card-group>
<b-form>

<b-form-input type="text" placeholder="enter product name" v-model="val"></b-form-input><br>
<b-form-input type="text" placeholder="enter price" v-model="val1"></b-form-input><br>
<b-form-input type="text" placeholder="enter productcategory" v-model="val2"></b-form-input><br>
<b-button variant="btn btn-primary btn-sm" @click="fun()">submit</b-button>



</b-form>
</b-card-group>
</b-card></center><br>

            </b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
    <b-button v-b-toggle.sidebar-no-header align="centre">save</b-button>

    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow >
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Custom product sidebar</h4>
          <h5>
            Hi here is your product information
          </h5>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
              <b-table striped hover :items="names" :fields="fields"></b-table>
    <label for="tags-basic">Type a new tag and press enter</label>
    <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
    <p class="mt-2">Value: {{ value }}</p>
  
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default{
    name:"HiI",
    data(){
        return{
            names:[{productname:"", price:"",category:""}],
fields:["productname","price","category"],
            value:" ",
             form: {
          val: '',
          val1: '',
          val2: ' '
             }
        }
    },
    methods: {
fun(){
this.names.push({
productname:this.val,
price:this.val1,
category:this.val2,

});
this.val = ""
this.val1 = ""
this.val2 = ""
this.val3 = ""
},
}
}
</script>
<style scoped>



</style>
