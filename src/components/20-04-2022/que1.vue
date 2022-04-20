<template>
    <div id="class">
        <input v-model="form.name" class="input" type="text" placeholder="Text input">
        <button @click="func()">click</button>
    </div>
</template>
<script>
export default{
    name:"TestS",
methods:{
    func(){
         let arrayobj = ["agile", "crm", "mantra", "technologies", "500apps", "infinity"];
this.substring = this.form.name.arrobj;
this.match = arrayobj.find(element => {
if (element.includes(this.substring)) {
    console.log(arrayobj[0]);
}
});
}
}
}
</script>