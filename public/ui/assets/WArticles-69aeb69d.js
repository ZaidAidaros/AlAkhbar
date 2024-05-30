import{a as A}from"./adminController-35a39c49.js";import{A as W}from"./ArticleComp-361ed9c4.js";import{L as x}from"./LoadingAndErrorSc-a8fbf5d4.js";import{_ as k,o as n,c as u,w as r,a as o,e as I,l as T,k as g,b as d,d as h,V as y,f as v,R,r as c,g as m,F as p,n as S,t as f,m as $}from"./index-ab7e0d88.js";import{V as B,a as E,b as N,c as H}from"./VTabs-7123adac.js";import{V as F}from"./VVirtualScroll-4e142029.js";import"./writterController-a780ef0c.js";import"./BookMark-08ed8a37.js";import"./ImageComp-0fbede53.js";import"./lazy-9c6ed2f5.js";import"./VSlideGroup-4b5075d2.js";import"./getScrollParent-6bb6c202.js";const M={};function U(e,t){return n(),u(v,{flat:""},{default:r(()=>[o(y,null,{default:r(()=>[o(I,null,{default:r(()=>[o(T),e.$route.name!=="Home"?(n(),u(g,{key:0,onClick:t[0]||(t[0]=i=>e.$router.back()),"prepend-icon":"mdi-nrow"},{default:r(()=>[d(" Back ")]),_:1})):h("",!0),e.$route.name!=="Home"?(n(),u(g,{key:1,onClick:t[1]||(t[1]=i=>e.$router.push({name:"Home"})),"prepend-icon":"mdi-home"},{default:r(()=>[d(" Home ")]),_:1})):h("",!0)]),_:1})]),_:1})]),_:1})}const D=k(M,[["render",U]]),j={components:{ArticleComp:W,LoadingAndErrorSc:x,ResMsg:R,AppFastNavBtn:D},data(){return{loading:!0,error:!1,msg:null,scrollRef:null,currentWindow:"allArticles",currentIndex:0,windows:[{index:0,title:"Articles",value:"writterArticles",isStoped:!1,count:0,page:0,articles:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null},{index:1,title:"Stoped Articles",value:"stopedWArticles",isStoped:!0,count:0,page:0,articles:[],loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null}]}},async mounted(){await this.onTab(this.windows[0])},methods:{onTab:async function(e){this.currentWindow=e.value,this.currentIndex=e.index,e.articles.length||await this.loadArticles(e)},stopArticleToggel:async function(e){e.loading=!0,e.error=!1,e.msg=null;const t={Id:e.Id,isStoped:!e.isStoped},i=await A.updateWArticle(t);if(e.loading=!1,e.error=!i.state,e.msg=i.message,i.state){const V=this.windows[this.currentIndex].articles.filter(a=>a.Id!==e.Id);this.windows[this.currentIndex].articles=V,this.windows[this.currentIndex].count--,e.isStoped=!e.isStoped,e.isStoped?this.windows[1].isLoaded&&(this.windows[1].articles.push(e),this.windows[1].count++):this.windows[0].isLoaded&&(this.windows[0].articles.push(e),this.windows[0].count++)}setTimeout(()=>{e.msg=null},2e3)},loadArticles:async function(e){e.loading=!0,e.error=!1,e.msg=null;const t=await A.getWArticles(e.page,e.isStoped,this.$route.params.id);e.loading=!1,t.state?t.articles.length?(e.articles.push(...t.articles),t.count&&(e.count=t.count),e.page++,e.isLoaded=!0):e.msg="There Is No Articles":(e.msg=t.message,e.error=!0)}}};function q(e,t,i,V,a,_){const C=c("LoadingAndErrorSc"),b=c("ResMsg"),L=c("ArticleComp");return n(),m(p,null,[o(B,{modelValue:a.currentWindow,"onUpdate:modelValue":t[0]||(t[0]=s=>a.currentWindow=s),"fixed-tabs":""},{default:r(()=>[(n(!0),m(p,null,S(a.windows,s=>(n(),u(N,{key:s.value,value:s.value,onClick:l=>_.onTab(s)},{default:r(()=>[d(f(s.title)+" "+f(s.count),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),o(E,{modelValue:a.currentWindow,"onUpdate:modelValue":t[1]||(t[1]=s=>a.currentWindow=s)},{default:r(()=>[(n(!0),m(p,null,S(a.windows,s=>(n(),u(H,{key:s.value,value:s.value},{default:r(()=>[o(C,{isLoading:s.loading,msg:s.msg,error:s.error},null,8,["isLoading","msg","error"]),s.articles.length?(n(),u(F,{key:0,ref_for:!0,ref:s.scrollRef,items:s.articles,height:"500","item-height":"70"},{default:r(({item:l})=>[o(v,null,{default:r(()=>[o($,null,{default:r(()=>[o(g,{loading:l.loading,color:l.isStoped?"green-lighten-2":"red-lighten-2",onClick:z=>_.stopArticleToggel(l)},{default:r(()=>[d(f(l.isStoped?"UnStop":"Stop"),1)]),_:2},1032,["loading","color","onClick"])]),_:2},1024),o(b,{msg:l.msg,error:l.error},null,8,["msg","error"]),o(L,{article:l,isEditable:!l.published},null,8,["article","isEditable"])]),_:2},1024)]),_:2},1032,["items"])):h("",!0)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}const se=k(j,[["render",q]]);export{se as default};
