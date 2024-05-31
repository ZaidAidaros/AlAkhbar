import{_ as h,R as w,L as c,C as y,r as n,o as b,c as U,w as l,f as C,a as s,V as v,b as o,t as k,y as T,e as I,s as N,v as S,g as t,B as u,i as d,j as F,n as Y}from"./index-41c6c65a.js";import{b as $}from"./authController-580a71bc.js";import{V as z}from"./VCheckbox-2ef15ebd.js";import{V as L}from"./VContainer-c38a5940.js";const R={name:"SignUp",components:{ResMsg:w,LogoComp:c,VueTelInput:y},data:()=>({pageTitle:"Sign Up",passwordVisible:!1,error:!1,msg:null,loading:!1,userName:null,email:null,phone:null,password:null,terms:!1,rules:{name:e=>(e==null?void 0:e.length)<=10?!0:"Name must be less than 10 characters.",required:e=>!!e||"Required.",password:e=>e.length>=6&&e.length<=20||"Max 20 characters , Min 6",email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||e!==""||"Invalid e-mail."}}),methods:{signUP:async function(){const e=await this.$refs.signUpForm.validate();if(!this.terms){this.msg="You must accept our terms",this.error=!0;return}if(!(this.email||this.phone)){this.msg="You must enter email or phone",this.error=!0;return}if(e.valid&&this.terms){this.loading=!0,this.msg=null,this.error=!1;const{state:r,message:i}=await $({userName:this.userName,phone:this.phone,email:this.email,password:this.password});this.loading=!1,this.msg=i,r?(this.msg+=`
 Wait Will Redirect You To Log In .. `,setTimeout(()=>{this.$router.push({name:"LogIn"})},1e3)):this.error=!0}else this.msg="You must Fill All Fields Correctly",this.error=!0}}};function q(e,r,i,B,E,m){const p=n("router-link"),g=n("logo-comp"),f=n("vue-tel-input"),V=n("res-msg");return b(),U(C,{class:"mx-auto py-4 px-8",elevation:"8","max-width":"448",rounded:"lg",align:"center"},{default:l(()=>[s(I,null,{default:l(()=>[s(v,null,{default:l(()=>[o(k(e.pageTitle),1)]),_:1}),s(T),s(p,{to:{name:"Home"}},{default:l(()=>[o("Home")]),_:1})]),_:1}),s(g,{size:"150"}),s(L,null,{default:l(()=>[s(N,{ref:"signUpForm",onSubmit:S(m.signUP,["prevent"])},{default:l(()=>[s(t,{modelValue:e.userName,"onUpdate:modelValue":r[0]||(r[0]=a=>e.userName=a),color:"primary",label:"User name",variant:"underlined",rules:[e.rules.required,e.rules.name]},null,8,["modelValue","rules"]),s(t,{modelValue:e.email,"onUpdate:modelValue":r[1]||(r[1]=a=>e.email=a),rules:[e.rules.email],color:"primary",label:"Email",placeholder:"Enter Your Email",variant:"underlined"},null,8,["modelValue","rules"]),s(f,{modelValue:e.phone,"onUpdate:modelValue":r[2]||(r[2]=a=>e.phone=a),mode:"international",defaultCountry:"Ye",autoFormat:""},null,8,["modelValue"]),s(t,{modelValue:e.password,"onUpdate:modelValue":r[3]||(r[3]=a=>e.password=a),rules:[e.rules.required,e.rules.password],"append-inner-icon":e.passwordVisible?"mdi-eye-off":"mdi-eye",type:e.passwordVisible?"text":"password","onClick:appendInner":r[4]||(r[4]=a=>e.passwordVisible=!e.passwordVisible),class:"mt-4",color:"primary",label:"Password",placeholder:"Enter your password",variant:"underlined"},null,8,["modelValue","rules","append-inner-icon","type"]),s(z,{modelValue:e.terms,"onUpdate:modelValue":r[5]||(r[5]=a=>e.terms=a),color:"primary",label:"I agree to site terms and conditions"},null,8,["modelValue"])]),_:1},8,["onSubmit"]),s(u,{class:"my-2"}),s(V,{msg:e.msg,error:e.error},null,8,["msg","error"]),s(u,{class:"my-2"}),s(d,{loading:e.loading,disabled:e.loading,block:"",color:"primary",size:"large",type:"submit",variant:"elevated",onClick:m.signUP},{default:l(()=>[o(" Sign Up ")]),_:1},8,["loading","disabled","onClick"]),s(F,null,{default:l(()=>[o("Do You have an account "),s(d,{end:"",flat:"",class:"text-decoration-none text-secondary",to:{name:"LogIn"}},{default:l(()=>[o(" login "),s(Y,{icon:"mdi-chevron-right"})]),_:1})]),_:1})]),_:1})]),_:1})}const H=h(R,[["render",q]]);export{H as default};