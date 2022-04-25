import Vue from 'vue'
import Router from 'vue-router'
import callback from '../components/19-04-2022/callback'
import callback2 from '../components/19-04-2022/callback2'
import axios from '../components/19-04-2022/axios'
import foreach from '../components/19-04-2022/foreach'

import que1 from '../components/20-04-2022/que1'
import que3 from '../components/20-04-2022/que3'
//import que4 from '../components/20-04-2022/que4'
import que5 from '../components/20-04-2022/que5'
import que6 from '../components/20-04-2022/que6'
import que7 from '../components/20-04-2022/que7'
import que8 from '../components/20-04-2022/que8'
import que9 from '../components/20-04-2022/que9'
import que10 from '../components/20-04-2022/que10'
import spliceslice from '../components/practice/spliceslice'
import foreach1 from '../components/practice/foreach1'
import axios1 from '../components/practice/axios1'
import dropdown from '../components/practice/dropdown'

import Quee1 from '../components/25-04-2022/Quee1'
import Quee2 from '../components/25-04-2022/Quee2'
import Quee6 from '../components/25-04-2022/Quee6'
import Quee7 from '../components/25-04-2022/Quee7'
import Quee8 from '../components/25-04-2022/Quee8'
import Quee9 from '../components/25-04-2022/Quee9'
import Quee10 from '../components/25-04-2022/Quee10'
import emitparent from '../components/practice/emitparent'
Vue.use(Router)

const routes=[
{path:'/callback',name:"callback",component:callback},
{path:'/callback2',name:"callback2",component:callback2},
{path:'/axios',name:"axios",component:axios,},
{path:'/que1',name:"que1",component:que1,},
 
{path:'/que3',name:"que3",component:que3,}, 
{path:'/foreach',name:"foreach",component:foreach,}, 
{path:'/que5',name:"que5",component:que5,}, 
{path:'/que6',name:"que6",component:que6,}, 
{path:'/que7',name:"que7",component:que7,}, 
{path:'/que8',name:"que8",component:que8,}, 
{path:'/que9',name:"que9",component:que9,}, 
{path:'/que10',name:"que10",component:que10,},
{path:'/foreach1',name:"foreach1",component:foreach1,},
{path:'/spliceslice',name:"spliceslice",component:spliceslice,},
{path:'/axios1',name:"axios1",component:axios1,},
{path:'/dropdown',name:"dropdown",component:dropdown,},

{path:'/Quee1',name:"Quee1",component:Quee1,},
{path:'/Quee2',name:"Quee2",component:Quee2,},
{path:'/Quee6',name:"Quee6",component:Quee6,},
{path:'/Quee7',name:"Quee7",component:Quee7,},
{path:'/Quee8',name:"Quee8",component:Quee8,},
{path:'/Quee9',name:"Quee9",component:Quee9,},
{path:'/Quee10',name:"Quee10",component:Quee10,},
{path:'/emitparent',name:"emitparent",component:emitparent,},
]
let router=new Router({routes})
export default router
