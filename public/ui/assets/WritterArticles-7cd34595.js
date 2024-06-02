import{w as b}from"./VMenu-c6c19cc5.js";import{A as V}from"./ArticleComp-8e75c06c.js";import{L as _}from"./LoadingAndErrorSc-1037c2f5.js";import{_ as x,l as a,a as o,w as i,F as u,r as f,o as s,m as p,c,b as v,t as h,d as L}from"./index-655d32d5.js";import{V as W,a as y,b as C,c as I}from"./VTabs-161bdbaf.js";import{V as k}from"./VVirtualScroll-048716d4.js";import"./VOverlay-f5f8265d.js";import"./getScrollParent-6bb6c202.js";import"./lazy-e509edc8.js";import"./BookMark-552bf4fc.js";import"./ImageComp-8c71b5ba.js";import"./VRow-bb3aae33.js";import"./VSlideGroup-6c49afe9.js";const T={components:{ArticleComp:V,LoadingAndErrorSc:_},data(){return{loading:!0,error:!1,msg:null,scrollRef:null,currentWindow:"publishedArticles",currentIndex:0,windows:[{index:0,title:"Published Articles",value:"publishedArticles",count:0,page:0,articles:[],published:!0,loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null},{index:1,title:"UnPublished Articles",value:"unPublishedArticles",count:0,page:0,articles:[],published:!1,loading:!0,isLoaded:!1,error:!1,msg:null,scrollRef:null}]}},async mounted(){await this.onTab(this.windows[0])},methods:{onTab:async function(e){this.currentWindow=e.value,this.currentIndex=e.index,e.articles.length||await this.loadMyArticles(e)},updateArticle:function(e){this.deleteArticle(e.Id),e.published?this.windows[0].isLoaded&&(this.windows[0].articles.push(e),this.windows[0].count++):this.windows[1].isLoaded&&(this.windows[1].articles.push(e),this.windows[1].count++)},deleteArticle:function(e){const r=this.windows[this.currentIndex].articles.filter(d=>d.Id!==e);this.windows[this.currentIndex].articles=r,this.windows[this.currentIndex].count--},loadMyArticles:async function(e){e.loading=!0,e.error=!1,e.msg=null;const r=await b.loadWritterArticles(e.published,e.page);e.loading=!1,e.error=!r.state,e.msg=r.message,r.state&&(r.articles.length?(e.articles.push(...r.articles),r.count&&(e.count=r.count),e.page++,e.isLoaded=!0):this.msg="There Is No articles")}}};function E(e,r,d,S,l,m){const g=f("LoadingAndErrorSc"),A=f("ArticleComp");return s(),a(u,null,[o(W,{modelValue:l.currentWindow,"onUpdate:modelValue":r[0]||(r[0]=t=>l.currentWindow=t),"fixed-tabs":""},{default:i(()=>[(s(!0),a(u,null,p(l.windows,t=>(s(),c(C,{key:t.value,value:t.value,onClick:n=>m.onTab(t)},{default:i(()=>[v(h(t.title)+" "+h(t.count?t.count:""),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),o(y,{modelValue:l.currentWindow,"onUpdate:modelValue":r[1]||(r[1]=t=>l.currentWindow=t)},{default:i(()=>[(s(!0),a(u,null,p(l.windows,t=>(s(),c(I,{key:t.value,value:t.value},{default:i(()=>[o(g,{isLoading:t.loading,msg:l.msg,error:l.error},null,8,["isLoading","msg","error"]),t.articles.length?(s(),c(k,{key:0,ref_for:!0,ref:t.scrollRef,items:t.articles,height:"500","item-height":"70"},{default:i(({item:n})=>[o(A,{article:n,isEditable:!n.published,onOnArticleDeleted:m.deleteArticle},null,8,["article","isEditable","onOnArticleDeleted"])]),_:2},1032,["items"])):L("",!0)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}const H=x(T,[["render",E]]);export{H as default};
