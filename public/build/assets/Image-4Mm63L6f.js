import{F as N,u as R,r as i,e as h,m as p,B as u,l as k,s as B}from"./app-D8dwamtV.js";var g={root:"m_9e117634"};const F={},P=k((o,{radius:e,fit:s})=>({root:{"--image-radius":e===void 0?void 0:B(e),"--image-object-fit":s}})),d=N((o,e)=>{const s=R("Image",F,o),{classNames:f,className:y,style:v,styles:E,unstyled:I,vars:S,onError:t,src:a,radius:_,fit:j,fallbackSrc:r,mod:c,...m}=s,[b,l]=i.useState(!a);i.useEffect(()=>l(!a),[a]);const n=h({name:"Image",classes:g,props:s,className:y,style:v,classNames:f,styles:E,unstyled:I,vars:S,varsResolver:P});return b&&r?p.createElement(u,{component:"img",ref:e,src:r,...n("root"),onError:t,mod:["fallback",c],...m}):p.createElement(u,{component:"img",ref:e,...n("root"),src:a,onError:x=>{t==null||t(x),l(!0)},mod:c,...m})});d.classes=g;d.displayName="@mantine/core/Image";export{d as I};