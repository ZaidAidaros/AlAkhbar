import{w as b}from"./writterController-16dfaea4.js";import{A as V}from"./ArticleComp-4ecca57f.js";import{L as _}from"./LoadingAndErrorSc-c5607a2a.js";import{_ as x,r as f,o as l,g as a,a as n,w as i,F as u,n as h,c,b as v,t as p,d as L}from"./index-013e6b8c.js";import{V as W,a as y,b as C,c as I}from"./VWindowItem-a84b4c7a.js";import{V as k}from"./VVirtualScroll-dfb239f9.js";import"./BookMark-5bca48ef.js";import"./lazy-9c25e5ea.js";const T={components:{ArticleComp:V,LoadingAndErrorSc:_},data(){return{loading:!0,error:!1,msg:null,scrollRef:null,currentWindow:"publishedArticles",currentIndex:0,windows:[{index:0,title:"Published Articles",value:"publishedArticles",count:0,page:0,articles:[],published:!0,loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null},{index:1,title:"UnPublished Articles",value:"unPublishedArticles",count:0,page:0,articles:[],published:!1,loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null}]}},async mounted(){await this.onTab(this.windows[0])},methods:{onTab:async function(e){this.currentWindow=e.value,this.currentIndex=e.index,e.articles.length||await this.loadMyArticles(e)},updateArticle:function(e){this.deleteArticle(e.Id),e.published?this.windows[0].isLoaded&&(this.windows[0].articles.push(e),this.windows[0].count++):this.windows[1].isLoaded&&(this.windows[1].articles.push(e),this.windows[1].count++)},deleteArticle:function(e){const r=this.windows[this.currentIndex].articles.filter(d=>d.Id!==e);this.windows[this.currentIndex].articles=r,this.windows[this.currentIndex].count--},loadMyArticles:async function(e){e.loading=!0,e.error=!1,e.msg=null;const r=await b.loadWritterArticles(e.published,e.page);e.loading=!1,e.error=!r.state,e.msg=r.message,r.state&&(r.articles.length?(e.articles.push(...r.articles),r.count&&(e.count=r.count),e.page++,e.isLoaded=!0):this.msg="There Is No articles")}}};function E(e,r,d,S,s,m){const g=f("LoadingAndErrorSc"),A=f("ArticleComp");return l(),a(u,null,[n(W,{modelValue:s.currentWindow,"onUpdate:modelValue":r[0]||(r[0]=t=>s.currentWindow=t),"fixed-tabs":""},{default:i(()=>[(l(!0),a(u,null,h(s.windows,t=>(l(),c(C,{key:t.value,value:t.value,onClick:o=>m.onTab(t)},{default:i(()=>[v(p(t.title)+" "+p(t.count?t.count:""),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),n(y,{modelValue:s.currentWindow,"onUpdate:modelValue":r[1]||(r[1]=t=>s.currentWindow=t)},{default:i(()=>[(l(!0),a(u,null,h(s.windows,t=>(l(),c(I,{key:t.value,value:t.value},{default:i(()=>[n(g,{isLoading:t.loading,msg:s.msg,error:s.error},null,8,["isLoading","msg","error"]),t.articles.length?(l(),c(k,{key:0,ref_for:!0,ref:t.scrollRef,items:t.articles,height:"500","item-height":"70"},{default:i(({item:o})=>[n(A,{article:o,isEditable:!o.published,onOnArticleDeleted:m.deleteArticle},null,8,["article","isEditable","onOnArticleDeleted"])]),_:2},1032,["items"])):L("",!0)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}const O=x(T,[["render",E]]);export{O as default};