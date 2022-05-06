<template>
      <div id = "databinding">
         <h3>TEXTBOX</h3>
         <input  v-model = "name" placeholder = "Enter Name" />
         <h3>Name entered is :{{name}}</h3>
         <hr/>
         <h3>Textarea</h3>
         <textarea v-model = "textmessage" placeholder = "Add Details"></textarea>
         <h1><p>{{textmessage}}</p></h1>
         <hr/>
         <h3>Checkbox</h3>
         <input type = "checkbox" id = "checkbox" v-model = "checked"> {{checked}}
      </div>
      </template>
      <script src>
        export default{
           name:"NEw",
            data(){
                return{
                    name:'',
               textmessage:'',
               checked : false  
                }
            }
        }
           
      </script>
   