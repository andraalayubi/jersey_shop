import{r as o,j as e,y as l}from"./app-CKkwK5Co.js";import{H as F}from"./HomeLayout-Bkgb7dUf.js";import{P as L}from"./PageTitle-BPMBtD5A.js";import{C as T}from"./Container-DTDRl9A1.js";import{P as z}from"./ProductCard-BymKmS9s.js";import{R as J}from"./RangeSlider-BVfqhfLi.js";import{S as j}from"./Select-CRLVpe8w.js";import{C as p}from"./Checkbox-dfhpyxlt.js";import"./iconBase-CxhyBNXO.js";import"./index-E01RJ2m2.js";import"./AccordionChevron-CkS-w_9N.js";import"./Menu-CH4tnAeZ.js";import"./use-resolved-styles-api-ByeDsg21.js";import"./Popover-rEglhCYY.js";import"./DirectionProvider-BUZmjoiZ.js";import"./use-disclosure-Cs1eQ_rJ.js";import"./Input-BWyoMzcD.js";import"./Card-BQvIUUy-.js";import"./Image-Dc6qOTQ4.js";import"./Text-JeYcd5H1.js";import"./use-move-_WCV3XN7.js";import"./clamp-DTmYCdls.js";import"./CheckIcon-DKzDbIVI.js";import"./ScrollArea-CqmgX8WX.js";import"./InputBase-DTWufboZ.js";const U=[{value:"priceAsc",label:"Harga terendah"},{value:"priceDesc",label:"Harga tertinggi"},{value:"soldDesc",label:"Paling banyak terjual"},{value:"soldAsc",label:"Paling sedikit terjual"}],pe=({auth:v,products:x,categoriesData:k,maxPrice:n,minPrice:u,orderBy:h,selectedMinPrice:g,selectedMaxPrice:K,selectedCategory:y,homeKit:b,awayKit:S,thirdKit:f})=>{const[C,w]=o.useState(""),[c,N]=o.useState(h),[V,H]=o.useState([u,n]),[a,R]=o.useState([g,K]),B=[{value:u,label:P(u)},{value:n,label:P(n)}],[m,I]=o.useState(y),[r,E]=o.useState(b),[i,A]=o.useState(S),[s,D]=o.useState(f);function P(t){return t>=1e3?Math.round(t/1e3)+"k":t}return console.log("homekit",r),console.log("awaykit",i),console.log("thirdkit",s),e.jsxs(F,{authenticatedUser:v.user,children:[e.jsx(L,{children:"List Produk"}),e.jsx(T,{children:e.jsxs("div",{className:"flex flex-col-reverse lg:flex-row gap-10 py-4",children:[e.jsx("aside",{className:"basis-1/4",children:e.jsxs("div",{className:"py-4 px-6 border rounded-md",children:[e.jsx("p",{children:"Filter Harga"}),e.jsx(J,{defaultValue:[g,K],onChange:H,onChangeEnd:t=>{R(t),l.visit(route("product.homeProductIndex",{orderBy:c,minPrice:t[0],maxPrice:t[1],category:m,homeKit:r,awayKit:i,thirdKit:s}))},min:u,max:n,marks:B,step:1e4,className:"mt-4"}),e.jsx("p",{className:"mt-10 mb-2",children:"Filter Klub"}),e.jsx(j,{size:"md",placeholder:"Pilih klub",data:k,value:y,onChange:(t,d)=>{I(d.value),l.visit(route("product.homeProductIndex",{orderBy:c,minPrice:a[0],maxPrice:a[1],category:d.value,homeKit:r,awayKit:i,thirdKit:s}))}}),e.jsx("p",{className:"mt-5 mb-2",children:"Filter Jenis Jersey"}),e.jsx(p,{checked:r,onChange:t=>{E(!r),l.visit(route("product.homeProductIndex",{orderBy:c,minPrice:a[0],maxPrice:a[1],category:m,homeKit:t.target.checked,awayKit:i,thirdKit:s}))},label:"Home Kit"}),e.jsx(p,{checked:i,onChange:t=>{A(!i),l.visit(route("product.homeProductIndex",{orderBy:c,minPrice:a[0],maxPrice:a[1],category:m,homeKit:r,awayKit:t.target.checked,thirdKit:s}))},label:"Away Kit",className:"mt-2"}),e.jsx(p,{checked:s,onChange:t=>{D(!s),l.visit(route("product.homeProductIndex",{orderBy:c,minPrice:a[0],maxPrice:a[1],category:m,homeKit:r,awayKit:i,thirdKit:t.target.checked}))},label:"Third Kit",className:"mt-2"})]})}),e.jsxs("div",{className:"basis-3/4",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(j,{size:"md",placeholder:"Urutkan berdasarkan...",data:U,value:h||C,onChange:(t,d)=>{w(d),N(d.value),l.visit(route("product.homeProductIndex",{orderBy:d.value,minPrice:a[0],maxPrice:a[1],category:m,homeKit:r,awayKit:i,thirdKit:s}))}})}),e.jsx("div",{className:"mt-10 grid grid-cols-2 md:grid-cols-3 gap-6",children:x.length===0?e.jsx("p",{children:"Produk tidak ada."}):x.map(t=>e.jsx(z,{product:t},t.id))})]})]})})]})};export{pe as default};
