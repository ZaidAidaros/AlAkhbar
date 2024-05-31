import{D as x,aq as $,am as z,a1 as j,as as Z,a7 as p,J as A,N as S,b4 as w,P as o,b5 as ee,b6 as le,S as ae,aa as s,X as D,a as d,aw as te,aP as _,Q as ne,Y as q,m as g,ah as oe,aC as ue,F as ce,n as ie,b7 as re,b8 as se,ay as de,aI as U,b9 as ve,a9 as fe,aY as me,W as be,aR as E,aH as Ve,M as ye,aK as M}from"./index-41c6c65a.js";const H=Symbol.for("vuetify:selection-control-group"),L=x({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:$,trueIcon:$,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:z},...j(),...Z(),...p()},"SelectionControlGroup"),Ce=x({...L({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");A()({name:"VSelectionControlGroup",props:Ce(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:r}=u;const l=S(e,"modelValue"),a=w(),v=o(()=>e.id||`v-selection-control-group-${a}`),i=o(()=>e.name||v.value),t=new Set;return ee(H,{modelValue:l,forceUpdate:()=>{t.forEach(n=>n())},onForceUpdate:n=>{t.add(n),le(()=>{t.delete(n)})}}),ae({[e.defaultsTarget]:{color:s(e,"color"),disabled:s(e,"disabled"),density:s(e,"density"),error:s(e,"error"),inline:s(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:i,falseIcon:s(e,"falseIcon"),trueIcon:s(e,"trueIcon"),readonly:s(e,"readonly"),ripple:s(e,"ripple"),type:s(e,"type"),valueComparator:s(e,"valueComparator")}}),D(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=r.default)==null?void 0:n.call(r)])}),{}}});const Y=x({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...j(),...L()},"VSelectionControl");function ke(e){const u=se(H,void 0),{densityClasses:r}=de(e),l=S(e,"modelValue"),a=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),i=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=o({get(){const f=u?u.modelValue.value:l.value;return i.value?U(f).some(c=>e.valueComparator(c,a.value)):e.valueComparator(f,a.value)},set(f){if(e.readonly)return;const c=f?a.value:v.value;let m=c;i.value&&(m=f?[...U(l.value),c]:U(l.value).filter(V=>!e.valueComparator(V,a.value))),u?u.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:b}=ve(o(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:C,backgroundColorStyles:k}=fe(o(()=>t.value&&!e.error&&!e.disabled?e.color:e.baseColor)),I=o(()=>t.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:r,trueValue:a,falseValue:v,model:t,textColorClasses:n,textColorStyles:b,backgroundColorClasses:C,backgroundColorStyles:k,icon:I}}const N=A()({name:"VSelectionControl",directives:{Ripple:te},inheritAttrs:!1,props:Y(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:r,slots:l}=u;const{group:a,densityClasses:v,icon:i,model:t,textColorClasses:n,textColorStyles:b,backgroundColorClasses:C,backgroundColorStyles:k,trueValue:I}=ke(e),f=w(),c=_(!1),m=_(!1),V=ne(),h=o(()=>e.id||`input-${f}`),P=o(()=>!e.disabled&&!e.readonly);a==null||a.onForceUpdate(()=>{V.value&&(V.value.checked=t.value)});function B(y){P.value&&(c.value=!0,me(y.target,":focus-visible")!==!1&&(m.value=!0))}function F(){c.value=!1,m.value=!1}function K(y){y.stopPropagation()}function Q(y){P.value&&(e.readonly&&a&&be(()=>a.forceUpdate()),t.value=y.target.checked)}return D(()=>{var R,T;const y=l.label?l.label({label:e.label,props:{for:h.value}}):e.label,[W,X]=q(r),G=d("input",g({ref:V,checked:t.value,disabled:!!e.disabled,id:h.value,onBlur:F,onFocus:B,onInput:Q,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:I.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},X),null);return d("div",g({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":c.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},v.value,e.class]},W,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(R=l.default)==null?void 0:R.call(l,{backgroundColorClasses:C,backgroundColorStyles:k}),oe(d("div",{class:["v-selection-control__input"]},[((T=l.input)==null?void 0:T.call(l,{model:t,textColorClasses:n,textColorStyles:b,backgroundColorClasses:C,backgroundColorStyles:k,inputNode:G,icon:i.value,props:{onFocus:B,onBlur:F,id:h.value}}))??d(ce,null,[i.value&&d(ie,{key:"icon",icon:i.value},null),G])]),[[ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&d(re,{for:h.value,onClick:K},{default:()=>[y]})])}),{isFocused:c,input:V}}}),J=x({indeterminate:Boolean,indeterminateIcon:{type:$,default:"$checkboxIndeterminate"},...Y({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),O=A()({name:"VCheckboxBtn",props:J(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:r}=u;const l=S(e,"indeterminate"),a=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const i=o(()=>l.value?e.indeterminateIcon:e.falseIcon),t=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return D(()=>{const n=E(N.filterProps(e),["modelValue"]);return d(N,g(n,{modelValue:a.value,"onUpdate:modelValue":[b=>a.value=b,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:t.value,"aria-checked":l.value?"mixed":void 0}),r)}),{}}}),he=x({...Ve(),...E(J(),["inline"])},"VCheckbox"),Se=A()({name:"VCheckbox",inheritAttrs:!1,props:he(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,u){let{attrs:r,slots:l}=u;const a=S(e,"modelValue"),{isFocused:v,focus:i,blur:t}=ye(e),n=w(),b=o(()=>e.id||`checkbox-${n}`);return D(()=>{const[C,k]=q(r),I=M.filterProps(e),f=O.filterProps(e);return d(M,g({class:["v-checkbox",e.class]},C,I,{modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,id:b.value,focused:v.value,style:e.style}),{...l,default:c=>{let{id:m,messagesId:V,isDisabled:h,isReadonly:P,isValid:B}=c;return d(O,g(f,{id:m.value,"aria-describedby":V.value,disabled:h.value,readonly:P.value},k,{error:B.value===!1,modelValue:a.value,"onUpdate:modelValue":F=>a.value=F,onFocus:i,onBlur:t}),l)}})}),{}}});export{Se as V,O as a};