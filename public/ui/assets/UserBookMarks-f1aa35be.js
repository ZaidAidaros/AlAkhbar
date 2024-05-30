import{_ as g,v as a,r as i,o as n,c as l,w as r,a as s,e as k,l as f,q as h,b as c,f as _,d as C,t as M,i as V}from"./index-ab7e0d88.js";import{A as L}from"./ArticleComp-361ed9c4.js";import{L as B}from"./LoadingAndErrorSc-a8fbf5d4.js";import{V as A}from"./VContainer-f66e3747.js";import{V as x}from"./VVirtualScroll-4e142029.js";import"./writterController-a780ef0c.js";import"./BookMark-08ed8a37.js";import"./ImageComp-0fbede53.js";import"./getScrollParent-6bb6c202.js";const S={name:"ArticlesList",components:{ArticleComp:L,LoadingAndErrorSc:B},data(){return{isLoading:!0,error:!1,page:0,pageSize:0,pageCount:1,count:0,msg:null,bookMarks:[]}},async mounted(){await this.loadBookMarks()},methods:{deleteBookMark:async function(o){(await a.deleteBookMark(o.Id)).state&&this.bookMarks.pop(o)},loadBookMarks:async function(){this.isLoading=!0,this.msg=null,this.error=!1;const o=await a.getBookMarks(this.page);this.isLoading=!1,this.error=!o.state,this.msg=o.message,o.state&&(o.userBookMarks?(this.bookMarks.push(...o.userBookMarks),o.count&&(this.count=o.count,this.pageCount=o.pageCount),this.page++):this.msg="No Saved Articles ...")}}};function w(o,m,v,y,e,p){const u=i("LoadingAndErrorSc"),d=i("ArticleComp");return n(),l(A,null,{default:r(()=>[s(u,{isLoading:e.isLoading,msg:e.msg,error:e.error},null,8,["isLoading","msg","error"]),!e.isLoading&&!e.msg?(n(),l(x,{key:0,ref:"scrollRef",items:e.bookMarks,"max-height":"700px"},{default:r(({item:t})=>[s(_,{flat:""},{default:r(()=>[s(k,{class:"pa-2"},{default:r(()=>[s(f),s(h,{color:"red",class:"ma-2",onClick:b=>p.deleteBookMark(t)},{default:r(()=>[c("mdi-note-remove")]),_:2},1032,["onClick"])]),_:2},1024),s(d,{article:t.article},null,8,["article"])]),_:2},1024)]),_:1},8,["items"])):C("",!0),s(V,null,{default:r(()=>[c(M(e.page+"/"+e.pageCount),1)]),_:1})]),_:1})}const j=g(S,[["render",w]]);export{j as default};