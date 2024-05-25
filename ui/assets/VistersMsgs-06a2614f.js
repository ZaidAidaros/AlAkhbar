import{L as E}from"./LoadingAndErrorSc-511b65a8.js";import{a as V}from"./adminController-a0b4df7b.js";import{_ as k,R as T,r as _,o as i,c as u,w as t,a as r,V as S,b as o,t as d,l as b,m as A,k as v,d as c,e as x,z as f,i as D,ah as R,f as y,g as h,F as M,n as C}from"./index-05bb36e0.js";import{V as W,a as U,b as N,c as B}from"./VTabs-add0c9c4.js";import{V as O}from"./VVirtualScroll-b6768b0b.js";import"./lazy-92e6129b.js";import"./VSlideGroup-2d0c8011.js";import"./getScrollParent-6bb6c202.js";const F={name:"VisterMsgComp",props:["visterMsg"],emits:["onDeleted","onUpdated"],data(){return{deleteEx:!1,readEx:!1,error:!1,msg:null}},methods:{setMsgReaded:async function(){this.readEx=!0,this.error=!1,this.msg=null;const e=await V.setVisterMsgReaded(this.visterMsg.Id);this.readEx=!1,this.error=!e.state,this.msg=e.message,e.state&&(this.visterMsg.isReaded=!0,this.$emit("onUpdated",this.visterMsg)),setTimeout(()=>{this.msg=null},1e3)},deleteVisterMsg:async function(){this.deleteEx=!0,this.error=!1,this.msg=null;const e=await V.deleteVisterMsg(this.visterMsg.Id);this.deleteEx=!1,this.error=!e.state,this.msg=e.message,e.state&&this.$emit("onDeleted",this.visterMsg.Id),setTimeout(()=>{this.msg=null},1e3)}},components:{ResMsg:T}};function z(e,a,n,I,l,g){const m=_("ResMsg");return i(),u(y,{class:"ma-2 pa-4"},{default:t(()=>[r(m,{msg:l.msg,error:l.error},null,8,["msg","error"]),r(x,null,{default:t(()=>[r(S,null,{default:t(()=>[o("Name: "+d(n.visterMsg.name),1)]),_:1}),r(b),r(A,null,{default:t(()=>[n.visterMsg.isReaded?c("",!0):(i(),u(v,{key:0,onClick:g.setMsgReaded,loading:l.readEx,color:"green-lighten-2",variant:"text","prepend-icon":"mdi-check"},{default:t(()=>[o(" Mark Readed ")]),_:1},8,["onClick","loading"])),n.visterMsg.isReaded?(i(),u(v,{key:1,onClick:g.deleteVisterMsg,loading:l.deleteEx,color:"red-lighten-2",variant:"text","prepend-icon":"mdi-note-remove"},{default:t(()=>[o(" Delete ")]),_:1},8,["onClick","loading"])):c("",!0)]),_:1})]),_:1}),r(f,null,{default:t(()=>[o("Contact: "+d(n.visterMsg.contact),1)]),_:1}),r(D,{class:"grey mx-4 ps-2"},{default:t(()=>[o(" Message: "+d(n.visterMsg.content),1)]),_:1}),r(x,null,{default:t(()=>[r(f,null,{default:t(()=>[o("Sent At: "),R("strong",null,d(new Date(n.visterMsg.createdAt).toLocaleString()),1)]),_:1}),n.visterMsg.isReaded?(i(),u(f,{key:0},{default:t(()=>[o(" Readed At: "),R("strong",null,d(new Date(n.visterMsg.updatedAt).toLocaleString()),1)]),_:1})):c("",!0)]),_:1})]),_:1})}const j=k(F,[["render",z]]),q={components:{LoadingAndErrorSc:E,VisterMsgComp:j},data(){return{currentWindow:"unReadedMessages",currentIndex:0,windows:[{index:0,title:"UnReaded Messages",value:"unReadedMessages",isReaded:!1,count:0,page:0,messages:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null},{index:1,title:"Readed Messages",value:"readedMessages",isReaded:!0,count:0,page:0,messages:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null}]}},async mounted(){await this.onTab(this.windows[0])},methods:{onTab:async function(e){this.currentWindow=e.value,this.currentIndex=e.index,e.messages.length||await this.loadMessages(e)},updateMsg:function(e){const a=this.windows[0].messages.filter(n=>n.Id!==e.Id);this.windows[0].messages=a,this.windows[0].count--,this.windows[1].isLoaded&&(this.windows[1].messages.push(e),this.windows[1].count++)},deleteMsg:function(e){const a=this.windows[this.currentIndex].messages.filter(n=>n.Id!==e);this.windows[this.currentIndex].messages=a,this.windows[this.currentIndex].count--},loadMessages:async function(e){e.loading=!0,e.error=!1,e.msg=null;const a=await V.getVistersMsgs(e.page,e.isReaded);e.loading=!1,a.state?a.messages.length?(e.messages.push(...a.messages),e.page++,e.count=a.count,e.isLoaded=!0):e.msg="There Is No Messages":(e.msg=a.message,e.error=!0)}}};function G(e,a,n,I,l,g){const m=_("LoadingAndErrorSc"),L=_("VisterMsgComp");return i(),h(M,null,[r(W,{modelValue:l.currentWindow,"onUpdate:modelValue":a[0]||(a[0]=s=>l.currentWindow=s),"fixed-tabs":""},{default:t(()=>[(i(!0),h(M,null,C(l.windows,s=>(i(),u(N,{key:s.value,value:s.value,onClick:p=>g.onTab(s)},{default:t(()=>[o(d(s.title)+" "+d(s.count),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),r(U,{modelValue:l.currentWindow,"onUpdate:modelValue":a[1]||(a[1]=s=>l.currentWindow=s)},{default:t(()=>[(i(!0),h(M,null,C(l.windows,s=>(i(),u(B,{key:s.value,value:s.value},{default:t(()=>[r(m,{isLoading:s.loading,msg:s.msg,error:s.error},null,8,["isLoading","msg","error"]),r(y,{flat:""},{default:t(()=>[s.messages.length?(i(),u(O,{key:0,ref_for:!0,ref:s.scrollRef,items:s.messages,height:"700","item-height":"70"},{default:t(({item:p})=>[r(L,{visterMsg:p,onOnDeleted:g.deleteMsg,onOnUpdated:g.updateMsg},null,8,["visterMsg","onOnDeleted","onOnUpdated"])]),_:2},1032,["items"])):c("",!0)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}const w=k(q,[["render",G]]);export{w as default};
