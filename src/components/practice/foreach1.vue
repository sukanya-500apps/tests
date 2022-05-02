<template>
    <div>
<h1>foreach</h1>
<button @click="func()">click for for each</button>
<b-table striped hover :items="studentsnames" :fields="fields" @Onclick="func2()"></b-table>
<button @click="func2()">click for filter</button> 
<button @click="func3()">click for map</button>
<button @click="func4()">click for find</button>
<p>{{copy}}</p>
<p>{{Search.name}}</p>
<p>{{new_arr}}</p>
{{studentsnames}}
    </div>
</template>
<script>
export default{
    name:"ForEach1",
    data(){
        return{
            studentsnames:[ ],
            new_arr:" ",
            Search:" ",
           copy:[ ],
           students: [
        { name: "sukanya", age: 22 },
        { name: "radha", age: 22 },
        { name: "anusha", age: 20 },
        { name: "Navya", age: 25 },
        { name: "sruthi", age: 21 },
      ],
        }
    },
    methods:{
        func(){
            let items=[5,6,8,2,1,4]
            items.forEach(row=>{
             this.copy.push(row+2)
           console.log(row+2)
           //document.write( row+2 +"</br>")
            })
        },
        func2(){
      this.studentsnames=this.students.filter(student=> student.name!="sukanya");
      //return this.studentsnames.name
console.log(this.studentsnames)
  },

    func3(){
        let arr = [10,20,30,40,50,60,70,80]
this.new_arr = arr.map(num=>{
return num/2
})
console.log(this.new_arr)
    },
    func4(){
this.Search= this.students.find( element => { return element.age=='22'});
console.log(this.Search)
}
}
}
</script>
