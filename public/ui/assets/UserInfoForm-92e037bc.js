import{_ as h,R as f,u as w,c as g,w as o,e as V,r as i,o as U,a as r,z as P,g as n,b as d,y as c,f as a,x as v,v as b,B as u}from"./index-9f1c4f25.js";import{z as y}from"./vue-tel-input-8d1bebc8.js";const C={name:"UserInfoForm",components:{ResMsg:f,VueTelInput:y},data:()=>({error:!1,msg:null,loading:!1,user:{email:null,phone:null,newPassword:null,oldPassword:null},oldUser:null,rules:{required:e=>!!e||"Required.",password:e=>!e||e.length>=6&&e.length<=20||"Max 20 characters , Min 6",email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Invalid e-mail."}}),mounted(){this.oldUser=this.$store.getters.getUser,this.oldUser&&(this.user.email=this.oldUser.email,this.user.phone=this.oldUser.phone)},methods:{getUser:function(){let e={isEdited:!1};return this.oldUser.email!==this.user.email&&(e.email=this.user.email,e.isEdited=!0),this.oldUser.phone!==this.user.phone&&(e.phone=this.user.phone,e.isEdited=!0),this.user.newPassword&&(e.newPassword=this.user.newPassword,e.isEdited=!0),e.isEdited?(e.oldPassword=this.user.oldPassword,delete e.isEdited,e):null},onSubmit:async function(){if((await this.$refs.userInfoForm.validate()).valid&&this.getUser()){this.loading=!0,this.error=!1,this.msg=null;const s=await w.updateUserInfo(this.getUser());this.loading=!1,this.msg=s.message,this.error=!s.state,s.state&&setTimeout(()=>{this.msg=null,this.$router.push({name:"UserProfile"})},2e3)}else this.msg="You must Fill Fields Correctly",this.error=!0}}};function E(e,s,F,k,I,t){const m=i("vue-tel-input"),p=i("res-msg");return U(),g(V,{class:"mx-auto py-4 px-8",elevation:"8","max-width":"448",rounded:"lg"},{default:o(()=>[r(c,null,{default:o(()=>[r(P),r(n,{color:"black-lighten-2","prepend-icon":"mdi-account",to:{name:"UserProfile"}},{default:o(()=>[d(" Back ")]),_:1})]),_:1}),r(b,{ref:"userInfoForm",onSubmit:v(t.onSubmit,["prevent"])},{default:o(()=>[r(a,{modelValue:e.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>e.user.email=l),color:"primary",label:"Email",variant:"underlined",rules:[e.rules.email]},null,8,["modelValue","rules"]),r(m,{modelValue:e.user.phone,"onUpdate:modelValue":s[1]||(s[1]=l=>e.user.phone=l),mode:"international",defaultCountry:"Ye",autoFormat:""},null,8,["modelValue"]),r(a,{modelValue:e.user.newPassword,"onUpdate:modelValue":s[2]||(s[2]=l=>e.user.newPassword=l),color:"primary",label:"New Password",placeholder:"Enter your New Password",variant:"underlined",rules:[e.rules.password]},null,8,["modelValue","rules"]),r(a,{modelValue:e.user.oldPassword,"onUpdate:modelValue":s[3]||(s[3]=l=>e.user.oldPassword=l),color:"primary",label:"Old Password",placeholder:"Enter your Old Password",variant:"underlined",rules:[e.rules.required,e.rules.password]},null,8,["modelValue","rules"])]),_:1},8,["onSubmit"]),r(u),r(p,{msg:e.msg,error:e.error},null,8,["msg","error"]),r(u),r(n,{loading:e.loading,block:"",color:"green",size:"large",type:"submit",variant:"elevated",onClick:t.onSubmit},{default:o(()=>[d(" Save ")]),_:1},8,["loading","onClick"])]),_:1})}const $=h(C,[["render",E]]);export{$ as default};