import{a as h}from"./adminController-293e652e.js";import{L as w}from"./LoadingAndErrorSc-d867c5ba.js";import{W}from"./WritterComp-bcc32ce3.js";import{_ as b,R as D,r as S,o as u,c as f,w as t,a as r,b as a,t as i,V as R,B as c,A as x,g as _,y as I,ai as A,aj as E,C as B,j as U,d as C,f as k,bj as j,e as T,l as V,F as p,m as L}from"./index-bfaec451.js";import{V as y}from"./VRow-3bade43b.js";import{V as M,a as O,b as F,c as P}from"./VTabs-9f5d64f3.js";import{V as q}from"./VVirtualScroll-aef96305.js";import"./lazy-ba292744.js";import"./VSlideGroup-1df76e3e.js";import"./getScrollParent-6bb6c202.js";const z={name:"UserComp",components:{ResMsg:D},props:["user"],emits:["onDelete","onStop"],data(){return{show:!1,loading:!1,error:!1,msg:null,uNotification:null}},methods:{userIsStopedToggel:async function(){this.loading=!0,this.error=!1,this.msg=null;const e={Id:this.user.Id,isStoped:!this.user.isStoped};this.uNotification&&(e.notification=this.uNotification);const s=await h.updateUser(e);this.loading=!1,this.error=!s.state,this.msg=s.message,s.state&&(this.user.isStoped=!this.user.isStoped,this.$emit("onStop",this.user)),setTimeout(()=>{this.msg=null},1e3)},deleteUser:async function(){this.loading=!0,this.error=!1,this.msg=null;const e=await h.deleteUser(this.user.Id);this.loading=!1,this.error=!e.state,this.msg=e.message,e.state&&this.$emit("onDelete",this.user.Id),setTimeout(()=>{this.msg=null},1e3)}}},G=c("strong",null,"Email: ",-1),H=c("strong",null,"Phone: ",-1);function J(e,s,o,N,l,d){const g=S("ResMsg");return u(),f(T,{class:"ma-2 pa-4"},{default:t(()=>[r(g,{msg:l.msg,error:l.error},null,8,["msg","error"]),r(R,null,{default:t(()=>[a(i(o.user.name),1)]),_:1}),r(x,null,{default:t(()=>[a(" Registered At: "),c("strong",null,i(new Date(o.user.createdAt).toLocaleString()),1)]),_:1}),r(x,null,{default:t(()=>[a(" Last Update At: "),c("strong",null,i(new Date(o.user.createdAt).toLocaleString()),1)]),_:1}),r(I,null,{default:t(()=>[r(_,{onClick:s[0]||(s[0]=m=>l.show=!l.show),color:"green"},{default:t(()=>[a(" Show Detials ")]),_:1})]),_:1}),r(j,null,{default:t(()=>[A(c("div",null,[r(B),r(y,null,{default:t(()=>[o.user.email?(u(),f(U,{key:0},{default:t(()=>[G,a(" "+i(o.user.email)+" ",1),c("strong",null," - "+i(o.user.isEmailVerified?"Verified":"Not Verified"),1)]),_:1})):C("",!0),o.user.phone?(u(),f(U,{key:1},{default:t(()=>[H,a(" "+i(o.user.phone)+" ",1),c("strong",null," - "+i(o.user.isPVerified?"Verified":"Not Verified"),1)]),_:1})):C("",!0)]),_:1}),r(I,null,{default:t(()=>[r(k,{modelValue:l.uNotification,"onUpdate:modelValue":s[1]||(s[1]=m=>l.uNotification=m),color:"primary",label:"Send Notification",variant:"underlined"},null,8,["modelValue"]),r(_,{onClick:d.userIsStopedToggel,color:"red"},{default:t(()=>[a(i(o.user.isStoped?"UnStop User":"Stop User"),1)]),_:1},8,["onClick"])]),_:1})],512),[[E,l.show]])]),_:1})]),_:1})}const K=b(z,[["render",J]]),Q={components:{LoadingAndErrorSc:w,WritterComp:W,UserComp:K},data(){return{currentWindow:"newWrittersRequests",currentIndex:0,sVal:null,windows:[{index:0,enTitle:"Users",arTitle:"المستخدمين",value:"users",isStoped:!1,count:0,page:0,users:[],fUsers:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null},{index:1,enTitle:"Stoped Users",arTitle:"مستخدمين موقوفين",value:"stopedUsers",isStoped:!0,count:0,page:0,users:[],fUsers:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null}]}},async mounted(){await this.onTab(this.windows[0])},methods:{onTab:async function(e){this.currentWindow=e.value,this.currentIndex=e.index,e.users.length||await this.loadUsers(e)},contains:function(e,s){return e?e.includes(s):!1},onSChange:function(){this.sVal&&(this.windows[this.currentIndex].msg=null,this.windows[this.currentIndex].fUsers=this.windows[this.currentIndex].users.filter(e=>this.sVal.includes("@")?this.contains(e.email,this.sVal):this.contains(e.name.toLowerCase(),this.sVal.toLowerCase())||this.contains(e.phone,this.sVal)))},onSearch:async function(){if(this.sVal){const e=this.windows[this.currentIndex];e.loading=!0,e.error=!1,e.msg=null,e.page=0;const s=await h.usersSearch(this.sVal,e.page,e.isStoped);e.loading=!1,console.log(s),s.state?s.count?(e.fUsers=s.users,e.count=s.count,e.isLoaded=!0):e.msg="There Is No Users":(e.msg=s.message,e.error=!0)}},updateUser:function(e){this.deleteUser(e.Id),e.isStoped?this.windows[1].isLoaded&&(this.windows[1].users.push(e),this.windows[1].count++):this.windows[0].isLoaded&&(this.windows[0].users.push(e),this.windows[0].count++)},deleteUser:function(e){const s=this.windows[this.currentIndex].users.filter(o=>o.Id!==e);this.windows[this.currentIndex].users=s,this.windows[this.currentIndex].count--},loadUsers:async function(e){e.loading=!0,e.error=!1,e.msg=null;const s=await h.getUsers(e.page,e.isStoped);e.loading=!1,s.state?s.count?(e.users.push(...s.users),e.count=s.count,e.page++,e.isLoaded=!0):e.msg="There Is No Users":(e.msg=s.message,e.error=!0)}}};function X(e,s,o,N,l,d){const g=S("LoadingAndErrorSc"),m=S("UserComp");return u(),V(p,null,[r(M,{modelValue:l.currentWindow,"onUpdate:modelValue":s[0]||(s[0]=n=>l.currentWindow=n),"fixed-tabs":""},{default:t(()=>[(u(!0),V(p,null,L(l.windows,n=>(u(),f(F,{key:n.value,value:n.value,onClick:v=>d.onTab(n)},{default:t(()=>[a(i(n[e.$i18n.locale+"Title"])+" "+i(n.count),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),e.$store.getters.isSearch?(u(),f(T,{key:0,class:"ma-2 pa-2"},{default:t(()=>[r(U,null,{default:t(()=>[r(y,{justify:"center"},{default:t(()=>[r(k,{modelValue:l.sVal,"onUpdate:modelValue":[s[1]||(s[1]=n=>l.sVal=n),d.onSChange],color:"blue",label:"Search",variant:"underlined",clearable:!0},null,8,["modelValue","onUpdate:modelValue"]),r(_,{onClick:d.onSearch,color:"blue",class:"ma-3"},{default:t(()=>[a("Search")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})):C("",!0),r(O,{modelValue:l.currentWindow,"onUpdate:modelValue":s[2]||(s[2]=n=>l.currentWindow=n)},{default:t(()=>[(u(!0),V(p,null,L(l.windows,n=>(u(),f(P,{key:n.value,value:n.value},{default:t(()=>[r(g,{isLoading:n.loading,msg:n.msg,error:n.error},null,8,["isLoading","msg","error"]),r(T,{flat:""},{default:t(()=>[r(q,{ref_for:!0,ref:n.scrollRef,items:l.sVal?n.fUsers:n.users,height:"700","item-height":"70"},{default:t(({item:v})=>[r(m,{user:v,onOnStop:d.updateUser,onOnDelete:d.deleteUser},null,8,["user","onOnStop","onOnDelete"])]),_:2},1032,["items"])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}const ie=b(Q,[["render",X]]);export{ie as default};
