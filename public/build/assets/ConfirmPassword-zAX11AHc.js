import{W as d,r as p,j as s,Y as l}from"./app-CKkwK5Co.js";import{G as c}from"./GuestLayout-BdddCb8b.js";import{T as u,I as f}from"./TextInput-Bx3XTVWb.js";import{I as x}from"./InputLabel-Db57OJRD.js";import{P as w}from"./PrimaryButton-C2Jj3dAe.js";import"./ApplicationLogo-Gv_x3zE5.js";function P(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{P as default};
