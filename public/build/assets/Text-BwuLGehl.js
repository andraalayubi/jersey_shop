import{F as S,u as F,e as N,m as _,B as z,l as B,$ as P,a1 as R,a2 as C,g as E}from"./app-D8dwamtV.js";var o={root:"m_b6d8b162"};function G(e){if(e==="start")return"start";if(e==="end"||e)return"end"}const H={inherit:!1},L=B((e,{variant:r,lineClamp:t,gradient:n,size:a,color:s})=>({root:{"--text-fz":P(a),"--text-lh":R(a),"--text-gradient":r==="gradient"?C(n,e):void 0,"--text-line-clamp":typeof t=="number"?t.toString():void 0,"--text-color":s?E(s,e):void 0}})),i=S((e,r)=>{const t=F("Text",H,e),{lineClamp:n,truncate:a,inline:s,inherit:l,gradient:V,span:c,__staticSelector:d,vars:m,className:p,style:u,classNames:g,styles:x,unstyled:f,variant:v,mod:y,size:T,...h}=t,b=N({name:["Text",d],props:t,classes:o,className:p,style:u,classNames:g,styles:x,unstyled:f,vars:m,varsResolver:L});return _.createElement(z,{...b("root",{focusable:!0}),ref:r,component:c?"span":"p",variant:v,mod:[{"data-truncate":G(a),"data-line-clamp":typeof n=="number","data-inline":s,"data-inherit":l},y],size:T,...h})});i.classes=o;i.displayName="@mantine/core/Text";export{i as T};