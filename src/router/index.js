import Vue from 'vue'
import Router from 'vue-router'
import callback from '../components/19-04-2022/callback'
import callback2 from '../components/19-04-2022/callback2'
import axios from '../components/19-04-2022/axios'
import foreach from '../components/19-04-2022/foreach'
import callbacK from '../components/practice/callbacK'
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
import parse from '../components/practice/parse'
import fetchh from '../components/practice/fetchh'
import Quee1 from '../components/25-04-2022/Quee1'
import Quee2 from '../components/25-04-2022/Quee2'
import Quee6 from '../components/25-04-2022/Quee6'
import Quee7 from '../components/25-04-2022/Quee7'
import Quee8 from '../components/25-04-2022/Quee8'
import Quee9 from '../components/25-04-2022/Quee9'
import Quee10 from '../components/25-04-2022/Quee10'
import emitparent from '../components/practice/emitparent'
import emitparent1 from '../components/practice/emitparent1'
import Question1 from '../components/26-04-2022/Question1'
import Question2 from '../components/26-04-2022/Question2'
 import Question3 from '../components/26-04-2022/Question3'
import Question4 from '../components/26-04-2022/Question4'
import callback1 from '../components/19-04-2022/callback1'
 import Question5 from '../components/26-04-2022/Question5'
import Question6 from '../components/26-04-2022/Question6'
 import Question7 from '../components/26-04-2022/Question7'
 import Question3table from '../components/27-04-2022/Question3table'
 import ques1 from '../components/28-04-2022/ques1'
 import quest1 from '../components/10-05-22/que1'
 import ques2 from '../components/28-04-2022/ques2'
 import quest2 from '../components/10-05-22/que2'
 //import Listcomponent from '../components/practice/Listcomponent'
 //import pagination from '../components/practice/pagination'
 import ques3 from '../components/28-04-2022/ques3'
 import nexttick from '../components/practice/nexttick'
 //import networkgraph from '../components/28-04-2022/networkgraph'
 import que11 from '../components/2-05-2022/que11'
 import que12 from '../components/2-05-2022/que12'
 import que13 from '../components/2-05-2022/que13'
 import que17 from '../components/2-05-2022/que17'
 import que18 from '../components/2-05-2022/que18'
 import que19 from '../components/2-05-2022/que19'
 import crud from '../components/4-5-2022/crud'
 import slot from '../components/practice/slot'
 import file from '../components/practice/file'
 //import comp from '../components/practice/comp'
 import scrollspy from '../components/practice/scrollspy'
 //import toggle from '../components/practice/toggle'
 import new1 from '../components/practice/new'
 import tab from '../components/practice/tab'
 import structure from '../components/practice/structure'
 import tab1 from '../components/practice/tab1'
 import collapse from '../components/practice/collapse'
 import newfile from '../components/practice/newfile'
 import filecomp from '../components/practice/filecomp'
 import fetchpage from '../components/practice/fetchpage'
 import propparent from '../components/practice/propparent'
Vue.use(Router)
const routes=[
{path:'/callback',name:"callback",component:callback},
{path:'/callback2',name:"callback2",component:callback2},
{path:'/axios',name:"axios",component:axios,},
{path:'/que1',name:"que1",component:que1,},
{path:'/callbacK',name:"callbacK",component:callbacK},
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
{path:'/parse',name:"parse",component:parse,},
{path:'/Quee1',name:"Quee1",component:Quee1,},
{path:'/Quee2',name:"Quee2",component:Quee2,},
{path:'/Quee6',name:"Quee6",component:Quee6,},
{path:'/Quee7',name:"Quee7",component:Quee7,},
{path:'/Quee8',name:"Quee8",component:Quee8,},
{path:'/Quee9',name:"Quee9",component:Quee9,},
{path:'/Quee10',name:"Quee10",component:Quee10,},
{path:'/emitparent',name:"emitparent",component:emitparent,},
{path:'/Question1',name:"Question1",component:Question1},
{path:'/Question2',name:"Question2",component:Question2},
 {path:'/Question3',name:"Question3",component:Question3},
 {path:'/Question4',name:"Question4",component:Question4},
{path:'/Question5',name:"Question5",component:Question5},
{path:'/Question6',name:"Question6",component:Question6},
{path:'/Question7',name:"Question7",component:Question7},
{path:'/callback1',name:"callback1",component:callback1},
{path:'/Question3table',name:"Question3table",component:Question3table},
{path:'/ques1',name:"ques1",component:ques1},
{path:'/fetchh',name:"fetch",component:fetchh},
{path:'/fetchpage',name:"fetchpage",component:fetchpage},
 {path:'/ques2',name:"ques2",component:ques2},
 {path:'/quest2',name:"quest2",component:quest2},
 //{path:'/Listcomponent',name:"Listcomponent",component:Listcomponent},
  {path:'/ques3',name:"que3",component:ques3},
  {path:'/que11',name:"que11",component:que11},
  {path:'/quest1',name:"quest1",component:quest1},
  {path:'/que12',name:"que12",component:que12},
  {path:'/que13',name:"que13",component:que13},
  {path:'/que17',name:"que17",component:que17},
  {path:'/que18',name:"que18",component:que18},
  {path:'/que19',name:"que19",component:que19},
  {path:'/crud',name:"crud",component:crud},
  {path:'/slot',name:"slot",component:slot},
  {path:'/nexttick',name:"nexttick",component:nexttick},
  //{path:'/comp',name:"comp",component:comp},
  //{path:'/toggle',name:"toggle",component:toggle},
  {path:'/scrollspy',name:"scrollspy",component:scrollspy},
  {path:'/new',name:"new",component:new1},
//{path:'/pagination',name:"pagination",component:pagination},
//{path:'/networkgraph',name:"networkgraph",component:networkgraph}, 
{path:'/tab',name:"tab",component:tab},
{path:'/file',name:"file",component:file},
{path:'/tab1',name:"tab1",component:tab1},
{path:'/collapse',name:"collapse",component:collapse},
{path:'/structure',name:"structure",component:structure},
{path:'/newfile',name:"newfile",component:newfile},
{path:'/filecomp',name:"file",component:filecomp},
{path:'/propparent',name:"propparent",component:propparent},
{path:'/emitparent1',name:"emitparent1",component:emitparent1,},
]
let router=new Router({routes})
export default router
