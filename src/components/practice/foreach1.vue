<template>
    <div>
<h1>foreach</h1>
<button @click="func()">click for for each</button>
<b-table striped hover :items="studentsnames" :fields="fields" @Onclick="func2()"></b-table>
<button @click="func2()" target="_blank">click for filter</button> 
<button @click="func3()">click for map</button>
<button @click="func4()">click for find</button>
<button @click="funcc()">click for mapp</button>
<button @click="func5()">click for mapppp</button>
<button @click="func6()">click for</button>
{{hi}}
<p>{{items}}</p>
<p>{{Search.name}}</p>
<p>{{new_arr}}</p>
{{studentsnames}}
{{resutt}}
{{studentnames}}
    </div>
</template>
<script>
export default{
    name:"ForEach1",
    data(){
        return{
            hi:"",
            studentnames:[],
            studentsnames:[ ],
            new_arr:" ",
            resutt:[ ],
            Search:" ",
           items:[ ],
           students: [
        { name: "sukanya", age: 22 },
        { name: "radha", age: 22 },
        { name: "anusha", age: 20 },
        { name: "Navya", age: 25 },
        { name: "sruthi", age: 21 },],
        }
    },
    methods:{
        func(){
            let items=[5,6,8,2,1,4]
            items.forEach(row=>{
           row+20
           console.log(row+20)
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
this.new_arr = arr.fi(num=>{
return num/2
})
console.log(this.new_arr)
    },
    funcc(){
this.studentt=this.students.map(student=>student.name!="sukanya");
console.log(this.studentt)
    },
    func4(){
this.Search= this.students.find( element => { return element.age=='22'});
console.log(this.Search)
},
func5(){
    this.resutt=this.students.map(student=>{
        if(student.name=="sukanya")
   {
        return this.students.name=="kk"
    
        }
console.log(this.resutt);
})
},
func6(){
     this.studentnames=this.students.filter(student=>(student.name=="sukanya")
   ).map(student=>({name:student.name,age:student.age='21'}));
console.log(this.studentnames)
}
}
}
</script>
