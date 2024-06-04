import{a as _}from"./adminController-2af355f6.js";import{A as L}from"./ArticleComp-b68d4d46.js";import{L as W}from"./LoadingAndErrorSc-d526a2a3.js";import{_ as v,o as n,c as u,w as s,a as o,B as y,g,b as d,d as h,V as I,e as k,R as x,l as c,F as m,r as p,m as S,t as f,y as R}from"./index-9ba368a2.js";import{V as $}from"./VRow-41e0a699.js";import{V as B,a as E,b as N,c as H}from"./VTabs-3a4bf582.js";import{V as F}from"./VVirtualScroll-d2e4c9be.js";import"./writterController-10efd156.js";import"./ArticleMenuList-2973686f.js";import"./VMenu-ac2a7250.js";import"./VOverlay-cf499a1e.js";import"./getScrollParent-6bb6c202.js";import"./lazy-31b61e80.js";import"./VSlideGroup-bb97b029.js";const M={};function U(e,t){return n(),u(k,{flat:""},{default:s(()=>[o(I,null,{default:s(()=>[o($,null,{default:s(()=>[o(y),e.$route.name!=="Home"?(n(),u(g,{key:0,onClick:t[0]||(t[0]=i=>e.$router.back()),"prepend-icon":"mdi-nrow"},{default:s(()=>[d(" Back ")]),_:1})):h("",!0),e.$route.name!=="Home"?(n(),u(g,{key:1,onClick:t[1]||(t[1]=i=>e.$router.push({name:"Home"})),"prepend-icon":"mdi-home"},{default:s(()=>[d(" Home ")]),_:1})):h("",!0)]),_:1})]),_:1})]),_:1})}const D=v(M,[["render",U]]),j={components:{ArticleComp:L,LoadingAndErrorSc:W,ResMsg:x,AppFastNavBtn:D},data(){return{loading:!0,error:!1,msg:null,scrollRef:null,currentWindow:"allArticles",currentIndex:0,windows:[{index:0,enTitle:"Articles",arTitle:"مقالات",value:"writterArticles",isStoped:!1,count:0,page:0,articles:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null},{index:1,enTitle:"Stoped Articles",arTitle:"مقالات موقوفه",value:"stopedWArticles",isStoped:!0,count:0,page:0,articles:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null}]}},async mounted(){await this.onTab(this.windows[0])},methods:{onTab:async function(e){this.currentWindow=e.value,this.currentIndex=e.index,e.articles.length||await this.loadArticles(e)},stopArticleToggel:async function(e){e.loading=!0,e.error=!1,e.msg=null;const t={Id:e.Id,isStoped:!e.isStoped},i=await _.updateWArticle(t);if(e.loading=!1,e.error=!i.state,e.msg=i.message,i.state){const V=this.windows[this.currentIndex].articles.filter(a=>a.Id!==e.Id);this.windows[this.currentIndex].articles=V,this.windows[this.currentIndex].count--,e.isStoped=!e.isStoped,e.isStoped?this.windows[1].isLoaded&&(this.windows[1].articles.push(e),this.windows[1].count++):this.windows[0].isLoaded&&(this.windows[0].articles.push(e),this.windows[0].count++)}setTimeout(()=>{e.msg=null},2e3)},loadArticles:async function(e){e.loading=!0,e.error=!1,e.msg=null;const t=await _.getWArticles(e.page,e.isStoped,this.$route.params.id);e.loading=!1,t.state?t.articles.length?(e.articles.push(...t.articles),t.count&&(e.count=t.count),e.page++,e.isLoaded=!0):e.msg="There Is No Articles":(e.msg=t.message,e.error=!0)}}};function q(e,t,i,V,a,A){const C=p("LoadingAndErrorSc"),T=p("ResMsg"),b=p("ArticleComp");return n(),c(m,null,[o(B,{modelValue:a.currentWindow,"onUpdate:modelValue":t[0]||(t[0]=r=>a.currentWindow=r),"fixed-tabs":""},{default:s(()=>[(n(!0),c(m,null,S(a.windows,r=>(n(),u(N,{key:r.value,value:r.value,onClick:l=>A.onTab(r)},{default:s(()=>[d(f(r[e.$i18n.locale+"Title"])+" "+f(r.count),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),o(E,{modelValue:a.currentWindow,"onUpdate:modelValue":t[1]||(t[1]=r=>a.currentWindow=r)},{default:s(()=>[(n(!0),c(m,null,S(a.windows,r=>(n(),u(H,{key:r.value,value:r.value},{default:s(()=>[o(C,{isLoading:r.loading,msg:r.msg,error:r.error},null,8,["isLoading","msg","error"]),r.articles.length?(n(),u(F,{key:0,ref_for:!0,ref:r.scrollRef,items:r.articles,height:"500","item-height":"70"},{default:s(({item:l})=>[o(k,null,{default:s(()=>[o(R,null,{default:s(()=>[o(g,{loading:l.loading,color:l.isStoped?"green-lighten-2":"red-lighten-2",onClick:z=>A.stopArticleToggel(l)},{default:s(()=>[d(f(l.isStoped?"UnStop":"Stop"),1)]),_:2},1032,["loading","color","onClick"])]),_:2},1024),o(T,{msg:l.msg,error:l.error},null,8,["msg","error"]),o(b,{article:l,isEditable:!l.published},null,8,["article","isEditable"])]),_:2},1024)]),_:2},1032,["items"])):h("",!0)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}const oe=v(j,[["render",q]]);export{oe as default};