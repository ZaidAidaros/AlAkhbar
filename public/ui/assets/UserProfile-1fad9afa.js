import{L as w}from"./LoadingAndErrorSc-0235f79a.js";import{_ as y,u as k,l as C,a as e,w as t,k as p,F as V,r as F,o as a,c as u,b as o,t as r,z as g,g as h,i as E,e as f,j as s,d as c,V as N,C as m}from"./index-eea943ce.js";import{V as n}from"./VRow-9d285c74.js";const I={components:{LoadingAndErrorSc:w},data(){return{user:null,writter:null,loading:!1,error:!1,msg:null}},async mounted(){await this.loadProfileData()},methods:{gotoEtidtUserInfoForm:async function(){await this.$store.dispatch("setUser",this.user),this.$router.push({name:"UserInfoForm"})},gotoEtidtWritterInfoForm:async function(){await this.$store.dispatch("setWritter",this.writter),this.$router.push({name:"WritterInfoForm"})},loadProfileData:async function(){this.error=!1,this.msg=null,this.loading=!0;const i=await k.getProfileData();this.msg=i.message,this.error=!i.state,this.user=i.user,this.writter=i.writter,this.loading=!1}}};function D(i,P,U,B,l,d){const _=F("loading-and-error-sc");return a(),C(V,null,[e(_,{isLoading:l.loading,error:l.error,msg:l.msg},null,8,["isLoading","error","msg"]),e(p,null,{default:t(()=>[l.user?(a(),u(f,{key:0,flat:"","min-width":"300px",class:"mx-auto pa-8","justify-center":""},{default:t(()=>[e(n,{class:"ma-2"},{default:t(()=>[o(r(i.$t("uname"))+": "+r(l.user.name)+" ",1),e(g),e(h,{color:"orange-lighten-2","prepend-icon":"mdi-note-edit",onClick:d.gotoEtidtUserInfoForm,size:"small"},{default:t(()=>[o(r(i.$t("edit")),1)]),_:1},8,["onClick"])]),_:1}),e(E,null,{default:t(()=>[e(n,null,{default:t(()=>[o(r(i.$t("inlYourEmail"))+": "+r(l.user.email),1)]),_:1}),e(n,null,{default:t(()=>[o(r(i.$t("inlYourPhone"))+": "+r(l.user.phone),1)]),_:1})]),_:1}),l.user.notification?(a(),u(f,{key:0,color:"red-lighten-2",class:"my-2"},{default:t(()=>[e(s,null,{default:t(()=>[o(" Notification: "+r(l.user.notification),1)]),_:1})]),_:1})):c("",!0)]),_:1})):c("",!0)]),_:1}),e(p,null,{default:t(()=>[l.writter?(a(),u(f,{key:0,flat:"","min-width":"300px",class:"mx-auto pa-8"},{default:t(()=>[e(N,null,{default:t(()=>[e(n,{class:"ma-2"},{default:t(()=>[o(r(i.$t("name"))+":"+r(l.writter.fullName)+" ",1),e(g),e(h,{color:"orange-lighten-2","prepend-icon":"mdi-note-edit",size:"small",onClick:d.gotoEtidtWritterInfoForm},{default:t(()=>[o(r(i.$t("edit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),e(m),l.writter.notification?(a(),u(f,{key:0,color:"red-lighten-2",class:"my-2"},{default:t(()=>[e(s,null,{default:t(()=>[o(r(i.$t("notification"))+": "+r(l.writter.notification),1)]),_:1})]),_:1})):c("",!0),e(n,{class:"my-2"},{default:t(()=>[e(s,null,{default:t(()=>[o(r(i.$t("familynamel").replace("*",""))+": "+r(l.writter.familyName),1)]),_:1}),e(s,null,{default:t(()=>[o(r(i.$t("nicknamel").replace("*",""))+": "+r(l.writter.nickName),1)]),_:1})]),_:1}),e(m),e(n,{class:"my-2"},{default:t(()=>[e(s,null,{default:t(()=>[o(r(i.$t("nicl").replace("*",""))+": "+r(l.writter.nic),1)]),_:1}),e(s,null,{default:t(()=>[o(r(i.$t("addressl").replace("*",""))+": "+r(l.writter.address),1)]),_:1})]),_:1}),e(m),e(s,null,{default:t(()=>[o(r(i.$t("referencesl").replace("*",""))+": "+r(l.writter.references),1)]),_:1}),e(m)]),_:1})):c("",!0)]),_:1})],64)}const S=y(I,[["render",D]]);export{S as default};