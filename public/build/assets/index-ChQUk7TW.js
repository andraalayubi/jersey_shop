import{r as Z,f as F,u as x,e as B,m as r,B as p,l as R,C as T,F as U,S as O,s as Y,U as W,g as ee}from"./app-DmqRxiIu.js";import{A as te}from"./AccordionChevron-NDiPJtmq.js";import{C as re}from"./Menu-KItRysSi.js";import{a as ae}from"./use-resolved-styles-api-BlrRsMyN.js";import{G as g}from"./iconBase-DizHYFA0.js";const j=Z.createContext(null),oe=j.Provider;function ne(){return{withinGroup:!!Z.useContext(j)}}var k={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};const se={},le=R((e,{spacing:a})=>({group:{"--ag-spacing":T(a)}})),$=F((e,a)=>{const t=x("AvatarGroup",se,e),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:m,spacing:d,...v}=t,f=B({name:"AvatarGroup",classes:k,props:t,className:s,style:n,classNames:o,styles:i,unstyled:l,vars:m,varsResolver:le,rootSelector:"group"});return r.createElement(oe,{value:!0},r.createElement(p,{ref:a,...f("group"),...v}))});$.classes=k;$.displayName="@mantine/core/AvatarGroup";function ce(e){return r.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}const ie={},de=R((e,{size:a,radius:t,variant:o,gradient:s,color:n,autoContrast:i})=>{const l=e.variantColorResolver({color:n||"gray",theme:e,gradient:s,variant:o||"light",autoContrast:i});return{root:{"--avatar-size":O(a,"avatar-size"),"--avatar-radius":t===void 0?void 0:Y(t),"--avatar-bg":n||o?l.background:void 0,"--avatar-color":n||o?l.color:void 0,"--avatar-bd":n||o?l.border:void 0}}}),P=U((e,a)=>{const t=x("Avatar",ie,e),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:m,src:d,alt:v,radius:f,color:b,gradient:h,imageProps:c,children:w,autoContrast:N,mod:H,...S}=t,L=ne(),[_,E]=Z.useState(!d),M=B({name:"Avatar",props:t,classes:k,className:s,style:n,classNames:o,styles:i,unstyled:l,vars:m,varsResolver:de});return Z.useEffect(()=>E(!d),[d]),r.createElement(p,{...M("root"),mod:[{"within-group":L.withinGroup},H],ref:a,...S},_?r.createElement("span",{...M("placeholder"),title:v},w||r.createElement(ce,null)):r.createElement("img",{...c,...M("image"),src:d,alt:v,onError:V=>{var G;E(!0),(G=c==null?void 0:c.onError)==null||G.call(c,V)}}))});P.classes=k;P.displayName="@mantine/core/Avatar";P.Group=$;var D={root:"m_fea6bf1a",burger:"m_d4fb9cad"};const ue={},ve=R((e,{color:a,size:t,transitionDuration:o,transitionTimingFunction:s})=>({root:{"--burger-color":a?ee(a,e):void 0,"--burger-size":O(t,"burger-size"),"--burger-transition-duration":o===void 0?void 0:`${o}ms`,"--burger-transition-timing-function":s}})),I=F((e,a)=>{const t=x("Burger",ue,e),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:m,opened:d,children:v,transitionDuration:f,transitionTimingFunction:b,...h}=t,c=B({name:"Burger",classes:D,props:t,className:s,style:n,classNames:o,styles:i,unstyled:l,vars:m,varsResolver:ve});return r.createElement(W,{...c("root"),ref:a,...h},r.createElement(p,{mod:["reduce-motion",{opened:d}],...c("burger")}),v)});I.classes=D;I.displayName="@mantine/core/Burger";var q={root:"m_f0824112",description:"m_57492dcc",section:"m_690090b5",label:"m_1f6ac4c4",body:"m_f07af9d2",children:"m_e17b862f",chevron:"m_1fd8a00b"};const pe={},me=R((e,{variant:a,color:t,childrenOffset:o,autoContrast:s})=>{const n=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:a||"light",autoContrast:s});return{root:{"--nl-bg":t||a?n.background:void 0,"--nl-hover":t||a?n.hover:void 0,"--nl-color":t||a?n.color:void 0},children:{"--nl-offset":T(o)}}}),J=U((e,a)=>{const t=x("NavLink",pe,e),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:m,opened:d,defaultOpened:v,onChange:f,children:b,onClick:h,active:c,disabled:w,leftSection:N,rightSection:H,label:S,description:L,disableRightSectionRotation:_,noWrap:E,childrenOffset:M,onKeyDown:V,autoContrast:G,mod:K,...Q}=t,u=B({name:"NavLink",props:t,classes:q,className:s,style:n,classNames:o,styles:i,unstyled:l,vars:m,varsResolver:me}),[y,z]=ae({value:d,defaultValue:v,finalValue:!1,onChange:f}),A=!!b,X=C=>{h==null||h(C),A&&(C.preventDefault(),z(!y))};return r.createElement(r.Fragment,null,r.createElement(W,{...u("root"),component:"a",ref:a,onClick:X,onKeyDown:C=>{V==null||V(C),C.nativeEvent.code==="Space"&&A&&(C.preventDefault(),z(!y))},unstyled:l,mod:[{disabled:w,active:c,expanded:y},K],...Q},N&&r.createElement(p,{component:"span",...u("section"),mod:{position:"left"}},N),r.createElement(p,{...u("body"),mod:{"no-wrap":E}},r.createElement(p,{component:"span",...u("label")},S),r.createElement(p,{component:"span",mod:{active:c},...u("description")},L)),(A||H)&&r.createElement(p,{...u("section"),component:"span",mod:{rotate:y&&!_,position:"right"}},A?H||r.createElement(te,{...u("chevron")}):H)),r.createElement(re,{in:y,...u("collapse")},r.createElement("div",{...u("children")},b)))});J.classes=q;J.displayName="@mantine/core/NavLink";function Ve(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM8 9V11H16V9H8ZM8 13V15H16V13H8Z"},child:[]}]})(e)}function ye(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"},child:[]}]})(e)}function be(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"},child:[]}]})(e)}function Ee(e){return g({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,20H64A20,20,0,0,0,44,40V60H32a12,12,0,0,0,0,24H44v32H32a12,12,0,0,0,0,24H44v32H32a12,12,0,0,0,0,24H44v20a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V40A20,20,0,0,0,208,20Zm-4,192H68V44H204ZM100.8,171.37a48,48,0,0,1,70.4,0,12,12,0,0,0,17.6-16.32,72,72,0,0,0-19.21-14.68,44,44,0,1,0-67.19,0,72.12,72.12,0,0,0-19.2,14.68,12,12,0,0,0,17.6,16.32ZM116,112a20,20,0,1,1,20,20A20,20,0,0,1,116,112Z"},child:[]}]})(e)}function Me(e){return g({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z"},child:[]}]})(e)}function Ae(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"},child:[]},{tag:"path",attr:{d:"M15 12h-12l3 -3"},child:[]},{tag:"path",attr:{d:"M6 15l-3 -3"},child:[]}]})(e)}function Ze(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}export{P as A,I as B,Ze as L,J as N,Me as P,Ve as R,Ae as T,ye as a,Ee as b,be as c};