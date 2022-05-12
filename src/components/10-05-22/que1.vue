 <template>
<div>
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
<b-table striped hover :items="names" :fields="fields"></b-table>
</div>
</template>
<script>
export default {
name:'TAbb',
data() {
return {
names:[ ],
fields:["productname","price","productcategory"],
val:"",
val1:"",
val2:"",
}
},
methods: {
fun(){
this.names.push({
productname:this.val,
price:this.val1,
productcategory:this.val2,
});
},
}
}
</script>