import{d as h,J as G,C as m,A as g,m as i,I as x,f as E,u as j,e as C,K as P,B as q}from"./app-DmqRxiIu.js";import{a as I}from"./get-sorted-breakpoints-DIK6QMLZ.js";import{g as p}from"./get-base-value-JqT_q0U7.js";function V({spacing:a,verticalSpacing:n,cols:t,selector:c}){var u;const l=h(),o=n===void 0?a:n,d=G({"--sg-spacing-x":m(p(a)),"--sg-spacing-y":m(p(o)),"--sg-cols":(u=p(t))==null?void 0:u.toString()}),r=g(l.breakpoints).reduce((e,s)=>(e[s]||(e[s]={}),typeof a=="object"&&a[s]!==void 0&&(e[s]["--sg-spacing-x"]=m(a[s])),typeof o=="object"&&o[s]!==void 0&&(e[s]["--sg-spacing-y"]=m(o[s])),typeof t=="object"&&t[s]!==void 0&&(e[s]["--sg-cols"]=t[s]),e),{}),f=I(g(r),l).filter(e=>g(r[e.value]).length>0).map(e=>({query:`(min-width: ${l.breakpoints[e.value]})`,styles:r[e.value]}));return i.createElement(x,{styles:d,media:f,selector:c})}var v={root:"m_2415a157"};const _={cols:1,spacing:"md"},B=E((a,n)=>{const t=j("SimpleGrid",_,a),{classNames:c,className:l,style:o,styles:d,unstyled:r,vars:y,cols:f,verticalSpacing:u,spacing:e,...s}=t,N=C({name:"SimpleGrid",classes:v,props:t,className:l,style:o,classNames:c,styles:d,unstyled:r,vars:y}),S=P();return i.createElement(i.Fragment,null,i.createElement(V,{...t,selector:`.${S}`}),i.createElement(q,{ref:n,...N("root",{className:S}),...s}))});B.classes=v;B.displayName="@mantine/core/SimpleGrid";export{B as S};