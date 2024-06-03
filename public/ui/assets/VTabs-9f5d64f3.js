import{E as I,b0 as z,bU as se,K as W,bi as le,S as _,Q as b,Y as $,g as X,a as f,F as O,n as B,aZ as ie,bk as ue,bm as ce,bV as j,a3 as F,a8 as D,a9 as re,aa as de,bP as ve,P as fe,aC as he,ao as Y,W as me,be,ai as U,as as ge,bh as q,O as K,aG as ye,aN as Ve,bW as we,aj as xe,bS as Te,bb as R,X as Se,aF as Ce,aL as ke,ab as Pe,ac as C,bs as Be,U as Ie,bX as We}from"./index-bfaec451.js";import{m as $e,u as Ee}from"./lazy-ba292744.js";import{m as _e,V as G}from"./VSlideGroup-1df76e3e.js";const H=Symbol.for("vuetify:v-tabs"),Xe=I({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...z(se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ye=W()({name:"VTab",props:Xe(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:s,textColorStyles:l}=le(e,"sliderColor"),a=_(),d=_(),c=b(()=>e.direction==="horizontal"),m=b(()=>{var g,i;return((i=(g=a.value)==null?void 0:g.group)==null?void 0:i.isSelected.value)??!1});function x(g){var v,u;let{value:i}=g;if(i){const y=(u=(v=a.value)==null?void 0:v.$el.parentElement)==null?void 0:u.querySelector(".v-tab--selected .v-tab__slider"),k=d.value;if(!y||!k)return;const E=getComputedStyle(y).color,T=y.getBoundingClientRect(),S=k.getBoundingClientRect(),r=c.value?"x":"y",h=c.value?"X":"Y",V=c.value?"right":"bottom",w=c.value?"width":"height",ee=T[r],te=S[r],P=ee>te?T[V]-S[V]:T[r]-S[r],ne=Math.sign(P)>0?c.value?"right":"bottom":Math.sign(P)<0?c.value?"left":"top":"center",oe=(Math.abs(P)+(Math.sign(P)<0?T[w]:S[w]))/Math.max(T[w],S[w])||0,ae=T[w]/S[w]||0,M=1.5;ue(k,{backgroundColor:[E,"currentcolor"],transform:[`translate${h}(${P}px) scale${h}(${ae})`,`translate${h}(${P/M}px) scale${h}(${(oe-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ne)},{duration:225,easing:ce})}}return $(()=>{const g=X.filterProps(e);return f(X,B({symbol:H,ref:a,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},g,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...n,default:()=>{var i;return f(O,null,[((i=n.default)==null?void 0:i.call(n))??e.text,!e.hideSlider&&f("div",{ref:d,class:["v-tab__slider",s.value],style:l.value},null)])}})}),ie({},a)}});const Re=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:s}=e,l=.5,a=16;e.offsetX=n-o,e.offsetY=s-t,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<t-a&&e.up(e),e.down&&s>t+a&&e.down(e))};function He(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function Me(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),Re(o)}function Ge(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function Le(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>He(n,o),touchend:n=>Me(n,o),touchmove:n=>Ge(n,o)}}function Ae(e,o){var d;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,s=(n==null?void 0:n.options)??{passive:!0},l=(d=o.instance)==null?void 0:d.$.uid;if(!t||!l)return;const a=Le(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[l]=a,j(a).forEach(c=>{t.addEventListener(c,a[c],s)})}function ze(e,o){var l,a;const n=(l=o.value)!=null&&l.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const s=n._touchHandlers[t];j(s).forEach(d=>{n.removeEventListener(d,s[d])}),delete n._touchHandlers[t]}const N={mounted:Ae,unmounted:ze},Q=Symbol.for("vuetify:v-window"),Z=Symbol.for("vuetify:v-window-group"),J=I({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...F(),...D(),...re()},"VWindow"),L=W()({name:"VWindow",directives:{Touch:N},props:J(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=de(e),{isRtl:s}=ve(),{t:l}=fe(),a=he(e,Z),d=_(),c=b(()=>s.value?!e.reverse:e.reverse),m=Y(!1),x=b(()=>{const r=e.direction==="vertical"?"y":"x",V=(c.value?!m.value:m.value)?"-reverse":"";return`v-window-${r}${V}-transition`}),g=Y(0),i=_(void 0),v=b(()=>a.items.value.findIndex(r=>a.selected.value.includes(r.id)));me(v,(r,h)=>{const V=a.items.value.length,w=V-1;V<=2?m.value=r<h:r===w&&h===0?m.value=!0:r===0&&h===w?m.value=!1:m.value=r<h}),be(Q,{transition:x,isReversed:m,transitionCount:g,transitionHeight:i,rootRef:d});const u=b(()=>e.continuous||v.value!==0),y=b(()=>e.continuous||v.value!==a.items.value.length-1);function k(){u.value&&a.prev()}function E(){y.value&&a.next()}const T=b(()=>{const r=[],h={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,"aria-label":l("$vuetify.carousel.prev")};r.push(u.value?n.prev?n.prev({props:h}):f(X,h,null):f("div",null,null));const V={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,"aria-label":l("$vuetify.carousel.next")};return r.push(y.value?n.next?n.next({props:V}):f(X,V,null):f("div",null,null)),r}),S=b(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?k():E()},right:()=>{c.value?E():k()},start:h=>{let{originalEvent:V}=h;V.stopPropagation()}},...e.touch===!0?{}:e.touch});return $(()=>U(f(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var r,h;return[f("div",{class:"v-window__container",style:{height:i.value}},[(r=n.default)==null?void 0:r.call(n,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[T.value])]),(h=n.additional)==null?void 0:h.call(n,{group:a})]}}),[[ge("touch"),S.value]])),{group:a}}}),Oe=I({...z(J(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),je=W()({name:"VTabsWindow",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=q(H,null),s=K(e,"modelValue"),l=b({get(){var a;return s.value!=null||!t?s.value:(a=t.items.value.find(d=>t.selected.value.includes(d.id)))==null?void 0:a.value},set(a){s.value=a}});return $(()=>{const a=L.filterProps(e);return f(L,B({_as:"VTabsWindow"},a,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),p=I({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...F(),...ye(),...$e()},"VWindowItem"),A=W()({name:"VWindowItem",directives:{Touch:N},props:p(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=q(Q),s=Ve(e,Z),{isBooted:l}=we();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=Y(!1),d=b(()=>l.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var u;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=R((u=t.rootRef.value)==null?void 0:u.clientHeight)),t.transitionCount.value+=1)}function x(){c()}function g(u){a.value&&Se(()=>{!d.value||!a.value||!t||(t.transitionHeight.value=R(u.clientHeight))})}const i=b(()=>{const u=t.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof u!="string"?t.transition.value:u,onBeforeEnter:m,onAfterEnter:c,onEnterCancelled:x,onBeforeLeave:m,onAfterLeave:c,onLeaveCancelled:x,onEnter:g}:!1}),{hasContent:v}=Ee(e,s.isSelected);return $(()=>f(Te,{transition:i.value,disabled:!l.value},{default:()=>{var u;return[U(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[v.value&&((u=n.default)==null?void 0:u.call(n))]),[[xe,s.isSelected.value]])]}})),{groupItem:s}}}),Fe=I({...p()},"VTabsWindowItem"),De=W()({name:"VTabsWindowItem",props:Fe(),setup(e,o){let{slots:n}=o;return $(()=>{const t=A.filterProps(e);return f(A,B({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function Ue(e){return e?e.map(o=>We(o)?o:{text:o,value:o}):[]}const qe=I({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,..._e({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Ce(),...D()},"VTabs"),Je=W()({name:"VTabs",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const s=K(e,"modelValue"),l=b(()=>Ue(e.items)),{densityClasses:a}=ke(e),{backgroundColorClasses:d,backgroundColorStyles:c}=Pe(C(e,"bgColor")),{scopeId:m}=Be();return Ie({VTab:{color:C(e,"color"),direction:C(e,"direction"),stacked:C(e,"stacked"),fixed:C(e,"fixedTabs"),sliderColor:C(e,"sliderColor"),hideSlider:C(e,"hideSlider")}}),$(()=>{const x=G.filterProps(e),g=!!(t.window||e.items.length>0);return f(O,null,[f(G,B(x,{modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,d.value,e.class],style:[{"--v-tabs-height":R(e.height)},c.value,e.style],role:"tablist",symbol:H},m,n),{default:()=>{var i;return[((i=t.default)==null?void 0:i.call(t))??l.value.map(v=>{var u;return((u=t.tab)==null?void 0:u.call(t,{item:v}))??f(Ye,B(v,{key:v.text,value:v.value}),{default:()=>{var y;return(y=t[`tab.${v.value}`])==null?void 0:y.call(t,{item:v})}})})]}}),g&&f(je,B({modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,key:"tabs-window"},m),{default:()=>{var i;return[l.value.map(v=>{var u;return((u=t.item)==null?void 0:u.call(t,{item:v}))??f(De,{value:v.value},{default:()=>{var y;return(y=t[`item.${v.value}`])==null?void 0:y.call(t,{item:v})}})}),(i=t.window)==null?void 0:i.call(t)]}})])}),{}}});export{Je as V,L as a,Ye as b,A as c};
