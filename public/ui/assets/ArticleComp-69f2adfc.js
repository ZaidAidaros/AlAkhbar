import{w as C}from"./writterController-1234480f.js";import{L as k,A as w}from"./ArticleMenuList-bf9c2e34.js";import{_ as b,R as P,r as n,o as s,c,w as t,a,g as u,n as S,q as y,l as M,m as V,F as B,b as o,t as l,e as h,i as f,j as L,A as m,B as x,d as F,s as T}from"./index-4a2340db.js";import{I as D,V as N}from"./VMenu-04606ccc.js";import{V as A}from"./VRow-adaff103.js";const R={name:"ArticleComp",props:["article","isEditable"],components:{LikeComp:k,ResMsg:P,ImageComp:D,ArticleMenuList:w},data:()=>({isLoading:!1,isAuth:!1,error:!1,msg:null,show:!1,comm:!1,like:!1,newComment:null,menuItemsM:[{title:"Edit",icon:"mdi-note-edit",color:"orange"},{title:"Delete",icon:"mdi-note-remove",color:"red"}]}),mounted(){this.article.comments=[],this.isAuth=this.$store.getters.isAuth},computed:{comments(){return this.article.comments?this.article.comments:[]}},methods:{onClickMenuItem:function(e){e.title==="Edit"?this.goToEditArticleForm():e.title==="Delete"?this.deleteArticle():e.title==="Share"&&this.shareArticle()},shareArticle:function(){navigator.share?navigator.share({title:this.article.title,text:this.article.shortContent,url:"https://alakhbar.onrender.com/articlePage/"+this.article.Id}).then(()=>console.log("Shared successfully","/articlePage/"+this.article.Id)).catch(e=>console.error("Error sharing:",e)):console.log("Web Share API not supported")},deleteArticle:async function(){this.isLoading=!0,this.error=!1,this.msg=null;const e=await C.deleteArticle(this.article.Id);this.isLoading=!1,this.error=!e.state,this.msg=e.message,setTimeout(()=>{this.msg=null,this.error=!1},2e3),e.state&&this.$emit("onArticleDeleted",this.article.Id)},goToEditArticleForm:async function(){await this.$store.dispatch("setArticle",this.article),this.$router.push({name:"ArticleForm",query:{isEdit:!0}})},goToArticlePage:async function(){await this.$store.dispatch("setArticle",this.article),this.$router.push({name:"ArticlePage",params:{id:this.article.Id,isE:!0},query:{}})}}};function v(e,O,i,U,q,d){const p=n("ArticleMenuList"),_=n("res-msg"),g=n("image-comp"),I=n("like-comp");return s(),c(h,{class:"ma-2 pa-2"},{default:t(()=>[a(h,{flat:"",class:"mb-4 text-primary"},{default:t(()=>[a(N,null,{activator:t(({props:r})=>[a(u,S({icon:"mdi-dots-vertical"},r,{flat:""}),null,16)]),default:t(()=>[i.isEditable?(s(),c(y,{key:0},{default:t(()=>[(s(!0),M(B,null,V(e.menuItemsM,(r,E)=>(s(),c(T,{key:E,title:r.title,"append-icon":r.icon,color:r.color,onClick:()=>{d.onClickMenuItem(r)}},null,8,["title","append-icon","color","onClick"]))),128))]),_:1})):(s(),c(p,{key:1,article:i.article},null,8,["article"]))]),_:1}),o(" "+l(i.article.title),1)]),_:1}),a(_,{msg:e.msg,error:e.error},null,8,["msg","error"]),a(A,null,{default:t(()=>[a(f,null,{default:t(()=>[a(L,null,{default:t(()=>[o(l(i.article.shortContent),1)]),_:1})]),_:1}),a(f,null,{default:t(()=>[a(g,{src:i.article.image,alt:i.article.title,mx_h:"300px",mx_w:"300px",mi_w:"200px"},null,8,["src","alt"])]),_:1})]),_:1}),i.article.writter?(s(),c(m,{key:0},{default:t(()=>[o(l(e.$t("writer"))+": ",1),x("strong",null,l(i.article.writter.name.toUpperCase()),1)]),_:1})):F("",!0),a(m,null,{default:t(()=>[o(l(String(i.article.updatedAt).split("T")[0]),1)]),_:1}),a(m,null,{default:t(()=>[o(l(String(i.article.updatedAt).split("T")[1].slice(0,5)),1)]),_:1}),a(A,{class:"my-4 mx-2"},{default:t(()=>[a(I,{class:"mx-2 my-2","article-likes":i.article.articleLikes,"article-id":i.article.Id},null,8,["article-likes","article-id"]),a(u,{variant:"text",size:"small",color:"secondary",class:"mx-4 my-2","append-icon":e.show?"mdi-chevron-up":"mdi-gesture-tap",onClick:d.goToArticlePage},{default:t(()=>[o(l(e.$t("explore")),1)]),_:1},8,["append-icon","onClick"])]),_:1})]),_:1})}const H=b(R,[["render",v]]);export{H as A};
