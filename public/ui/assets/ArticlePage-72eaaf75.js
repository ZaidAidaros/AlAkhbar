import{I as T}from"./ImageComp-8c71b5ba.js";import{L as x,B as M}from"./BookMark-552bf4fc.js";import{_ as p,R as A,u as L,r as l,o as a,l as w,a as t,w as n,j as g,v as O,x as N,f as R,y as b,g as C,b as r,e as S,F as E,c as d,t as c,z as U,d as h,A as y,h as B,k as V,V as $,B as q}from"./index-655d32d5.js";import{V as v}from"./VRow-bb3aae33.js";import{L as D}from"./LoadingAndErrorSc-1037c2f5.js";import{V as z}from"./VVirtualScroll-048716d4.js";import"./getScrollParent-6bb6c202.js";const P={components:{ResMsg:A},props:["articleId","comment"],emits:["onSubmit"],data(){return{loading:!1,error:!1,msg:null,commentContent:null}},updated(){this.comment&&(this.commentContent=this.comment.comment)},methods:{required:e=>!!e||"Required.",onSubmit:async function(){const e=this.$store.getters.isAuth;if(this.commentContent&&e){this.error=!1,this.msg=null,this.loading=!0;let s=null;this.comment?(this.comment.comment=this.commentContent,s=await L.updateArticleComment(this.comment),s.state&&(s.comment=this.comment)):(s=await L.sendArticleComment({articleId:this.articleId,comment:this.commentContent}),s.state&&(s.comment.user=this.$store.getters.getUser)),this.loading=!1,s.state&&(this.$emit("onSubmit",s.comment),this.commentContent=null),this.error=!s.state,this.msg=s.message,setTimeout(()=>{this.error=!1,this.msg=null},2e3)}else this.error=!0,this.msg="Can Not Send Empty Comment",setTimeout(()=>{this.msg=null,this.error=!1},2e3)}}};function j(e,s,m,_,o,i){const u=l("res-msg");return a(),w(E,null,[t(S,{flat:"",class:"d-flex flex","max-height":"100px"},{default:n(()=>[t(g,null,{default:n(()=>[t(O,{onSubmit:N(i.onSubmit,["prevent"])},{default:n(()=>[t(R,{modelValue:o.commentContent,"onUpdate:modelValue":s[0]||(s[0]=f=>o.commentContent=f),color:"primary",label:"Comment",variant:"underlined"},null,8,["modelValue"])]),_:1},8,["onSubmit"])]),_:1}),t(b,{end:""},{default:n(()=>[t(C,{loading:o.loading,color:"primary",class:"ma-4","append-icon":"mdi-send",type:"submit",end:"",onClick:i.onSubmit},{default:n(()=>[r(" Send ")]),_:1},8,["loading","onClick"])]),_:1})]),_:1}),t(u,{msg:o.msg,error:o.error},null,8,["msg","error"])],64)}const W=p(P,[["render",j]]),G={props:["comment","userId"],emits:["onDeleted","onEdit"],components:{ResMsg:A},data:()=>({isLoading:!1,error:!1,msg:null}),methods:{deleteComment:async function(){if(this.userId===this.comment.userId){this.isLoading=!0,this.error=!1,this.msg=null;const e=await L.deleteArticleComment(this.comment.Id);this.isLoading=!1,e.state&&this.$emit("onDeleted",this.comment),this.error=!e.state,this.msg=e.message,setTimeout(()=>{this.msg=null,this.error=!1},2e3)}},onEditComment:function(){this.$emit("onEdit",this.comment)}}};function H(e,s,m,_,o,i){const u=l("res-msg");return a(),d(S,{class:"ma-2 pa-2"},{default:n(()=>[t(v,null,{default:n(()=>[t(g,null,{default:n(()=>[r(c(m.comment.user.name),1)]),_:1}),t(U),m.comment.userId===m.userId?(a(),d(b,{key:0},{default:n(()=>[t(C,{color:"primary",variant:"text","prepend-icon":"mdi-note-edit",onClick:i.onEditComment},{default:n(()=>[r(" Edit ")]),_:1},8,["onClick"]),t(C,{color:"red",onClick:i.deleteComment,loading:e.isLoading,variant:"text","prepend-icon":"mdi-note-remove"},{default:n(()=>[r(" Delete ")]),_:1},8,["onClick","loading"])]),_:1})):h("",!0)]),_:1}),t(u,{msg:e.msg,error:e.error},null,8,["msg","error"]),t(g,{class:"grey mx-4 ps-2"},{default:n(()=>[r(c(m.comment.comment),1)]),_:1}),t(y,null,{default:n(()=>[r(c(m.comment.updatedAt),1)]),_:1})]),_:1})}const J=p(G,[["render",H]]),K={name:"CommentsList",props:["articleId"],components:{CommentForm:W,CommentComp:J,LoadingAndErrorSc:D},data(){return{isLoading:!0,error:!1,page:0,msg:null,myId:null,coment:null,articleComments:[]}},async mounted(){this.$store.getters.isAuth&&(this.myId=this.$store.getters.getUser.Id),await this.loadArticleComments()},methods:{onCommentDeleted:function(e){const s=this.articleComments.filter(m=>m.Id!==e.Id);this.articleComments=s},onEditComment:function(e){this.coment=e},onCommentSubmit:function(e){if(this.coment){const s=this.articleComments.filter(m=>m.Id!==e.Id);this.articleComments=s,this.articleComments.push(e),this.coment=null}else this.articleComments.push(e)},loadArticleComments:async function(){this.isLoading=!0,this.msg=null,this.error=!1;const e=await B.loadArticleComments(this.page,this.articleId);this.isLoading=!1,e.state&&e.comments?this.articleComments.push(...e.comments):(this.error=!0,this.msg=e.message)}}};function Q(e,s,m,_,o,i){const u=l("CommentComp"),f=l("LoadingAndErrorSc"),k=l("CommentForm");return a(),d(V,{class:"mb-4",align:"center"},{default:n(()=>[t(V,null,{default:n(()=>[o.articleComments.length?(a(),d(z,{key:0,items:o.articleComments,"max-height":"400px"},{default:n(({item:I})=>[t(u,{comment:I,userId:o.myId,onOnDeleted:i.onCommentDeleted,onOnEdit:i.onEditComment},null,8,["comment","userId","onOnDeleted","onOnEdit"])]),_:1},8,["items"])):h("",!0)]),_:1}),t(f,{isLoading:o.isLoading,msg:o.msg,error:o.error},null,8,["isLoading","msg","error"]),o.myId?(a(),d(k,{key:0,articleId:m.articleId,comment:o.coment,onOnSubmit:i.onCommentSubmit},null,8,["articleId","comment","onOnSubmit"])):h("",!0)]),_:1})}const X=p(K,[["render",Q]]),Y={name:"ArticlePage",components:{LikeComp:x,CommentsList:X,ImageComp:T,LoadingAndErrorSc:D,BookMark:M},data:()=>({isLoading:!1,error:!1,msg:null,showComments:!1,article:null}),async mounted(){const e=this.$store.getters.getArticle;if(e)this.article=e;else{this.isLoading=!0,this.error=!1,this.msg=null;const s=await B.loadArticle(this.$route.params.id);this.isLoading=!1,s.state?this.article=s.article:(this.error=!0,this.msg=s.message)}},computed:{likes(){return this.article.articleLikes?this.article.articleLikes:[]},comments(){return this.article.articleComments?this.article.articleComments:[]},commentsCount(){return this.comments.length}},methods:{onShowComments:function(){this.showComments=!this.showComments}}};function Z(e,s,m,_,o,i){const u=l("LoadingAndErrorSc"),f=l("ImageComp"),k=l("BookMark"),I=l("like-comp"),F=l("CommentsList");return a(),w(E,null,[t(u,{isLoading:e.isLoading,msg:e.msg,error:e.error},null,8,["isLoading","msg","error"]),!e.isLoading&&!e.error&&e.article?(a(),d(S,{key:0,flat:"",class:"pa-2"},{default:n(()=>[t($,null,{default:n(()=>[r(c(e.article.title),1)]),_:1}),e.article.writter?(a(),d(y,{key:0},{default:n(()=>[r(" Writter: "+c(e.article.writter.name),1)]),_:1})):h("",!0),t(y,null,{default:n(()=>[r(c(e.article.updatedAt),1)]),_:1}),t(g,null,{default:n(()=>[r(c(e.article.shortContent),1)]),_:1}),t(f,{src:e.article.image,alt:e.article.title,mx_h:"300px",mx_w:"300px"},null,8,["src","alt"]),t(g,null,{default:n(()=>[r(c(e.article.content),1)]),_:1}),t(v,{class:"my-2"},{default:n(()=>[t(C,{"append-icon":this.showComments?"mdi-comment-text":"mdi-comment-text-multiple",size:"small",onClick:i.onShowComments,class:"mx-4",flat:"",variant:"text",color:"secondary"},{default:n(()=>[r("Show Comments")]),_:1},8,["append-icon","onClick"]),t(k,{"user-book-marks":e.article.userBookMarks,"article-id":e.article.Id},null,8,["user-book-marks","article-id"]),t(I,{"article-likes":i.likes,"article-id":e.article.Id},null,8,["article-likes","article-id"])]),_:1}),t(q),e.showComments?(a(),d(F,{key:1,articleId:e.article.Id},null,8,["articleId"])):h("",!0)]),_:1})):h("",!0)],64)}const re=p(Y,[["render",Z]]);export{re as default};
