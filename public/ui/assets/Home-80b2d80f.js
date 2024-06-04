import{_ as p,o,c as n,w as s,a as r,V as w,b as l,T as x,t as g,d as u,e as f,h as L,r as d,f as N,g as I,i as S,j as b,k as E,R as T,l as C,m as y,F as A,n as B,p as H,q as j,s as U}from"./index-5a23c2e4.js";import{V as k}from"./VRow-83b1e687.js";import{A as R}from"./ArticleComp-44d9d1ad.js";import{L as v}from"./LoadingAndErrorSc-bceadbb2.js";import{V as F}from"./VVirtualScroll-2fcca6dd.js";import{V as M,a as P,b as q,c as D}from"./VTabs-846628ff.js";import{V as W}from"./VMenu-ac710f39.js";import"./writterController-bc18d83a.js";import"./ArticleMenuList-a75c0b7b.js";import"./getScrollParent-6bb6c202.js";import"./lazy-60dc50be.js";import"./VSlideGroup-f42bad02.js";import"./VOverlay-e6bbaa2a.js";const z={data(){return{news:"lvdfvej  eujdvsdv afg e et "}},mounted(){setInterval(()=>{this.news=null;let e=Date.now();this.news=e+"GTqtg t"},2e3)}};function G(e,a,h,_,t,c){return o(),n(f,{flat:"",class:"text-red pa-2",height:"50px"},{default:s(()=>[r(k,null,{default:s(()=>[r(w,null,{default:s(()=>[l("Arg:")]),_:1}),t.news?(o(),n(x,{key:0,name:"fade"},{default:s(()=>[r(w,null,{default:s(()=>[l(g(t.news),1)]),_:1})]),_:1})):u("",!0)]),_:1})]),_:1})}const O=p(z,[["render",G]]),J={name:"ArticlesList",props:["categoryId","isEditable"],components:{ArticleComp:R,LoadingAndErrorSc:v},data(){return{isLoading:!0,error:!1,page:0,pageSize:0,pageCount:1,count:0,msg:null,sVal:null,articles:[],fArticles:[]}},async mounted(){await this.loadArticles()},methods:{filterArticles:function(){this.fArticles=this.articles.filter(e=>e.title.includes(this.sVal)||e.shortContent.includes(this.sVal)||e.content.includes(this.sVal))},onSChange:function(e){this.sVal=e,this.msg=null,this.error=!1,this.filterArticles()},onSearch:async function(){if(this.sVal){this.isLoading=!0,this.msg=null,this.error=!1,this.page=0;const e=await L.search(this.sVal,this.page,this.categoryId);this.isLoading=!1,this.error=!e.state,this.msg=e.message,e.state&&(e.articles.length?(this.fArticles=e.articles,e.count&&(this.count=e.count,this.pageCount=e.pageCount)):this.msg="No Articles ...")}},goToArticlePage:function(e){this.$router.push({name:"ArticlePage",props:{article:e,isEditable:!1}})},loadArticles:async function(){if(this.page<this.pageCount){this.isLoading=!0,this.msg=null,this.error=!1;const e=await L.loadCategoryArticles(this.page,this.categoryId);this.isLoading=!1,this.error=!e.state,this.msg=e.message,e.state&&(e.articles.length?(this.articles.push(...e.articles),e.count&&(this.count=e.count,this.pageCount=e.pageCount)):this.msg="No Articles ..."),this.page++}}}};function K(e,a,h,_,t,c){const m=d("ArticleComp"),V=d("LoadingAndErrorSc");return o(),n(E,{flat:"",class:"pa-2"},{default:s(()=>[e.$store.getters.isSearch?(o(),n(k,{key:0,justify:"center",class:"ma-8",align:"center"},{default:s(()=>[r(N,{modelValue:t.sVal,"onUpdate:modelValue":[a[0]||(a[0]=i=>t.sVal=i),c.onSChange],clearable:"",color:"primary",label:"Search",variant:"underlined"},null,8,["modelValue","onUpdate:modelValue"]),r(I,{onClick:c.onSearch,icon:"mdi-magnify",class:"ma-2",color:"primary"},null,8,["onClick"])]),_:1})):u("",!0),!t.isLoading&&!t.msg?(o(),n(F,{key:1,ref:"scrollRef",items:t.sVal?t.fArticles:t.articles,"max-height":"700px"},{default:s(({item:i})=>[r(m,{article:i,isEditable:h.isEditable},null,8,["article","isEditable"])]),_:1},8,["items"])):u("",!0),r(V,{isLoading:t.isLoading,msg:t.msg,error:t.error},null,8,["isLoading","msg","error"]),t.pageCount>1&&t.page!==t.pageCount?(o(),n(S,{key:2,align:"center",justify:"center"},{default:s(()=>[r(b,null,{default:s(()=>[l(g(t.page+"/"+t.pageCount),1)]),_:1}),r(I,{onClick:c.loadArticles,"append-icon":"mdi-v"},{default:s(()=>[l("More")]),_:1},8,["onClick"])]),_:1})):u("",!0)]),_:1})}const Q=p(J,[["render",K]]),X={name:"HomeBody",components:{ArticlesList:Q,ResMsg:T,LoadingAndErrorSc:v},data(){return{currentItem:null,isLoading:!1,error:!1,msg:null,categories:[],items:[],more:[]}},async mounted(){await this.setCategories()},methods:{loadCategories:async function(){this.isLoading=!0,this.msg=null,this.error=!1;const e=await L.loadCategories();this.isLoading=!1,e.state?e.categories.length?(this.categories=e.categories,this.$store.dispatch("setArticleCategories",this.categories)):this.msg="No Categories Until Now ....":(this.error=!0,this.msg=e.message)},addItem:function(e){const a=this.items.splice(0,1);this.items.push(...this.more.splice(this.more.indexOf(e),1)),this.more.push(...a),this.$nextTick(()=>{this.currentItem=e.enName})},setCategories:async function(){this.$store.getters.getArticleCategories.length?this.categories=this.$store.getters.getArticleCategories:await this.loadCategories();const e=this.categories.length;e>3?(this.more=[...this.categories.splice(4,e)],this.items=[...this.categories.splice(0,4)]):this.items=this.categories,this.items.length&&(this.currentItem=this.items[0].enName)}}};function Y(e,a,h,_,t,c){const m=d("ArticlesList"),V=d("LoadingAndErrorSc");return o(),n(f,{flat:"",class:"d-flex flex-column"},{default:s(()=>[r(f,null,{default:s(()=>[r(M,{modelValue:t.currentItem,"onUpdate:modelValue":a[0]||(a[0]=i=>t.currentItem=i),"fixed-tabs":""},{default:s(()=>[t.items.length?(o(!0),C(A,{key:0},y(t.items,i=>(o(),n(q,{key:i.Id,value:i.enName},{default:s(()=>[l(g(i[e.$i18n.locale+"Name"]),1)]),_:2},1032,["value"]))),128)):u("",!0),t.more.length?(o(),n(W,{key:1},{activator:s(({props:i})=>[r(I,B({variant:"plain",rounded:"0",class:"align-self-center me-4",height:"100%"},i),{default:s(()=>[l(g(e.$t("more"))+" ",1),r(H,{end:""},{default:s(()=>[l(" mdi-menu-down ")]),_:1})]),_:2},1040)]),default:s(()=>[r(j,null,{default:s(()=>[(o(!0),C(A,null,y(t.more,i=>(o(),n(U,{key:i.Id,onClick:te=>c.addItem(i)},{default:s(()=>[l(g(i[e.$i18n.locale+"Name"]),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})):u("",!0)]),_:1},8,["modelValue"])]),_:1}),r(P,{modelValue:t.currentItem,"onUpdate:modelValue":a[1]||(a[1]=i=>t.currentItem=i)},{default:s(()=>[(o(!0),C(A,null,y([...t.items,...t.more],i=>(o(),n(D,{key:i.Id,value:i.enName},{default:s(()=>[r(m,{categoryId:i.Id},null,8,["categoryId"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(V,{isLoading:t.isLoading,error:t.error,msg:t.msg},null,8,["isLoading","error","msg"])]),_:1})}const Z=p(X,[["render",Y]]),$={name:"Home",components:{HomeBody:Z,ArgNews:O}};function ee(e,a,h,_,t,c){const m=d("HomeBody");return o(),n(f,{class:"pa-2"},{default:s(()=>[r(m)]),_:1})}const fe=p($,[["render",ee]]);export{fe as default};
