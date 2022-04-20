import Vue from 'vue'
import Router from 'vue-router'
import callback from '../components/19-04-2022/callback'
import callback2 from '../components/19-04-2022/callback2'
import axios from '../components/19-04-2022/axios'
import que1 from '../components/20-04-2022/que1'
import que3 from '../components/20-04-2022/que3'
//import que4 from '../components/20-04-2022/que4'
import que5 from '../components/20-04-2022/que5'
import que6 from '../components/20-04-2022/que6'
import que7 from '../components/20-04-2022/que7'
import que8 from '../components/20-04-2022/que8'
import que9 from '../components/20-04-2022/que9'
import que10 from '../components/20-04-2022/que10'

Vue.use(Router)

const routes=[
{path:'/callback',name:"callback",component:callback},
{path:'/callback2',name:"callback2",component:callback2},
{path:'/axios',name:"axios",component:axios,},
{path:'/que1',name:"que1",component:que1,},
 
{path:'/que3',name:"que1",component:que3,}, 
//{path:'/que4',name:"que1",component:que4,}, 
{path:'/que5',name:"que1",component:que5,}, 
{path:'/que6',name:"que6",component:que6,}, 
{path:'/que7',name:"que7",component:que7,}, 
{path:'/que8',name:"que8",component:que8,}, 
{path:'/que9',name:"que9",component:que9,}, 
{path:'/que10',name:"que10",component:que10,}, 


]
let router=new Router({routes})
export default router
