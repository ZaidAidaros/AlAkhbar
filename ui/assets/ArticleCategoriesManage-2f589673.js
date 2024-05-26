import{a as C}from"./adminController-676a632d.js";import{_,R as L,r as g,o as d,c as m,w as t,a as e,V as S,b as n,t as l,l as p,m as y,k as u,e as k,ah as f,z as h,i as D,f as A,d as R}from"./index-53016639.js";import{L as E}from"./LoadingAndErrorSc-0b5c7d18.js";import{V as N}from"./VVirtualScroll-20ea7eb7.js";import"./getScrollParent-6bb6c202.js";const v={name:"CategoryComp",components:{ResMsg:L},props:["category"],emits:["onDelete"],data(){return{loading:!1,error:!1,msg:null}},methods:{gotoEtitCategory:async function(){await this.$store.dispatch("setCategory",this.category),this.$router.push({name:"ArticleCategoryForm"})},deleteCategory:async function(){this.loading=!0,this.error=!1,this.msg=null;const o=await C.deleteArticleCategory(this.category.Id);this.loading=!1,this.error=!o.state,this.msg=o.message,o.state&&this.$emit("onDelete",this.category.Id),setTimeout(()=>{this.msg=null},1e3)}}};function B(o,a,s,V,r,i){const c=g("ResMsg");return d(),m(A,{class:"ma-2 pa-4"},{default:t(()=>[e(c,{msg:r.msg,error:r.error},null,8,["msg","error"]),e(k,null,{default:t(()=>[e(S,null,{default:t(()=>[n(l(s.category.name),1)]),_:1}),e(p),e(y,null,{default:t(()=>[e(u,{onClick:i.gotoEtitCategory,variant:"text","prepend-icon":"mdi-note-edit"},{default:t(()=>[n(" Edit ")]),_:1},8,["onClick"]),e(u,{onClick:i.deleteCategory,loading:r.loading,variant:"text","prepend-icon":"mdi-note-remove"},{default:t(()=>[n(" Delete ")]),_:1},8,["onClick","loading"])]),_:1})]),_:1}),e(h,null,{default:t(()=>[n(" Last Update At: "),f("strong",null,l(new Date(s.category.updatedAt).toLocaleString()),1)]),_:1}),e(h,null,{default:t(()=>[n(" Added At: "),f("strong",null,l(new Date(s.category.createdAt).toLocaleString()),1)]),_:1}),e(D,null,{default:t(()=>[n(l(s.category.description),1)]),_:1})]),_:1})}const M=_(v,[["render",B]]),T={components:{CategoryComp:M,LoadingAndErrorSc:E},data(){return{loading:!0,error:!1,msg:null,scrollRef:null,categories:[]}},async mounted(){await this.loadCategories()},methods:{deleteCategory:function(o){const a=this.categories.filter(s=>s.Id!==o);this.categories=a},loadCategories:async function(){const o=await this.$store.getters.getArticleCategories;if(o.length)this.categories=o;else{this.loading=!0,this.error=!1,this.msg=null;const a=await C.getArticlesCategories();this.loading=!1,this.error=!a.state,this.msg=a.message,a.state&&(a.categories.length?this.categories=a.categories:this.msg="No Categories...")}}}};function I(o,a,s,V,r,i){const c=g("LoadingAndErrorSc"),w=g("CategoryComp");return d(),m(A,{flat:""},{default:t(()=>[e(y,null,{default:t(()=>[e(p),e(u,{color:"green-lighten-2","prepend-icon":"mdi-shape-plus",to:{name:"ArticleCategoryForm"}},{default:t(()=>[n(" Add Category ")]),_:1})]),_:1}),e(c,{isLoading:r.loading,msg:r.msg,error:r.error},null,8,["isLoading","msg","error"]),r.categories.length?(d(),m(N,{key:0,ref:r.scrollRef,items:r.categories,"item-height":"70"},{default:t(({item:x})=>[e(w,{category:x,onOnDelete:i.deleteCategory},null,8,["category","onOnDelete"])]),_:1},8,["items"])):R("",!0)]),_:1})}const j=_(T,[["render",I]]);export{j as default};
