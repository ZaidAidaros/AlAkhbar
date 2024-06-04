import{w as C}from"./writterController-79aebcfb.js";import{L as k,A as w}from"./ArticleMenuList-d3e17ec4.js";import{_ as b,R as y,r as n,o as l,c as o,w as t,a,g as d,n as P,q as S,l as M,m as V,F as x,b as c,t as s,e as u,i as h,j as D,z as f,A as L,d as B,s as F}from"./index-94f5182d.js";import{I as N,V as R}from"./VMenu-1e9d216b.js";import{V as p}from"./VRow-faee6db4.js";const T={name:"ArticleComp",props:["article","isEditable"],components:{LikeComp:k,ResMsg:y,ImageComp:N,ArticleMenuList:w},data:()=>({isLoading:!1,isAuth:!1,error:!1,msg:null,show:!1,comm:!1,like:!1,newComment:null,menuItemsM:[{title:"Edit",icon:"mdi-note-edit",color:"orange"},{title:"Delete",icon:"mdi-note-remove",color:"red"}]}),mounted(){this.article.comments=[],this.isAuth=this.$store.getters.isAuth},computed:{comments(){return this.article.comments?this.article.comments:[]}},methods:{onClickMenuItem:function(e){e.title==="Edit"?this.goToEditArticleForm():e.title==="Delete"?this.deleteArticle():e.title==="Share"&&this.shareArticle()},shareArticle:function(){navigator.share?navigator.share({title:this.article.title,text:this.article.shortContent,url:"https://alakhbar.onrender.com/articlePage/"+this.article.Id}).then(()=>console.log("Shared successfully","/articlePage/"+this.article.Id)).catch(e=>console.error("Error sharing:",e)):console.log("Web Share API not supported")},deleteArticle:async function(){this.isLoading=!0,this.error=!1,this.msg=null;const e=await C.deleteArticle(this.article.Id);this.isLoading=!1,this.error=!e.state,this.msg=e.message,setTimeout(()=>{this.msg=null,this.error=!1},2e3),e.state&&this.$emit("onArticleDeleted",this.article.Id)},goToEditArticleForm:async function(){await this.$store.dispatch("setArticle",this.article),this.$router.push({name:"ArticleForm",query:{isEdit:!0}})},goToArticlePage:async function(){await this.$store.dispatch("setArticle",this.article),this.$router.push({name:"ArticlePage",params:{id:this.article.Id},query:{}})}}};function v(e,O,i,U,q,m){const A=n("ArticleMenuList"),_=n("res-msg"),g=n("image-comp"),I=n("like-comp");return l(),o(u,{class:"ma-2 pa-2"},{default:t(()=>[a(u,{flat:"",class:"mb-4 text-primary"},{default:t(()=>[a(R,null,{activator:t(({props:r})=>[a(d,P({icon:"mdi-dots-vertical"},r,{flat:""}),null,16)]),default:t(()=>[i.isEditable?(l(),o(S,{key:0},{default:t(()=>[(l(!0),M(x,null,V(e.menuItemsM,(r,E)=>(l(),o(F,{key:E,title:r.title,"append-icon":r.icon,color:r.color,onClick:()=>{m.onClickMenuItem(r)}},null,8,["title","append-icon","color","onClick"]))),128))]),_:1})):(l(),o(A,{key:1,article:i.article},null,8,["article"]))]),_:1}),c(" "+s(i.article.title),1)]),_:1}),a(_,{msg:e.msg,error:e.error},null,8,["msg","error"]),a(p,{class:"my-2"},{default:t(()=>[a(h,null,{default:t(()=>[a(g,{src:i.article.image,alt:i.article.title,mx_h:"300px",mx_w:"600px",mi_h:"250px",mi_w:"250px"},null,8,["src","alt"])]),_:1}),a(h,null,{default:t(()=>[a(D,null,{default:t(()=>[c(s(i.article.shortContent),1)]),_:1})]),_:1})]),_:1}),i.article.writter?(l(),o(f,{key:0,class:"my-2"},{default:t(()=>[c(s(e.$t("writer"))+": ",1),L("strong",null,s(i.article.writter.name.toUpperCase()),1)]),_:1})):B("",!0),a(f,null,{default:t(()=>[c(s(new Date(i.article.updatedAt).toDateString()),1)]),_:1}),a(p,{class:"my-4 mx-2"},{default:t(()=>[a(I,{class:"mx-2 my-2","article-likes":i.article.articleLikes,"article-id":i.article.Id},null,8,["article-likes","article-id"]),a(d,{variant:"text",size:"small",color:"secondary",class:"mx-4 my-2","append-icon":e.show?"mdi-chevron-up":"mdi-gesture-tap",onClick:m.goToArticlePage},{default:t(()=>[c(s(e.$t("explore")),1)]),_:1},8,["append-icon","onClick"])]),_:1})]),_:1})}const H=b(T,[["render",v]]);export{H as A};