import{r as o,j as a,c as n,a as m}from"./app-CKkwK5Co.js";import{u as l,M as p}from"./index.esm-D3U-F2c-.js";import"./DirectionProvider-BUZmjoiZ.js";import"./Table-DljhJZab.js";import"./ScrollArea-CqmgX8WX.js";import"./Text-JeYcd5H1.js";import"./IconX-9eULtHiM.js";import"./Popover-rEglhCYY.js";import"./use-resolved-styles-api-ByeDsg21.js";import"./Menu-CH4tnAeZ.js";import"./createReactComponent-MnOPAykb.js";import"./index-Bl6FJy4H.js";import"./Select-CRLVpe8w.js";import"./Input-BWyoMzcD.js";import"./CheckIcon-DKzDbIVI.js";import"./InputBase-DTWufboZ.js";import"./TextInput-jsx4PwhC.js";import"./LoadingOverlay-Bs-ij38-.js";import"./ActionIcon-DDTDl-Z0.js";import"./Checkbox-dfhpyxlt.js";import"./Badge-D-7OGORF.js";import"./Stack-Bn-HsvvR.js";import"./AccordionChevron-CkS-w_9N.js";import"./clamp-DTmYCdls.js";import"./RangeSlider-BVfqhfLi.js";import"./use-move-_WCV3XN7.js";const E=({data:r})=>{const s=o.useMemo(()=>[{accessorKey:"id",header:"Aksi",Cell:({cell:e})=>a.jsx(n,{component:m,href:route("order.show",e.getValue()),variant:"outline",children:"Lihat"}),size:80},{accessorKey:"products",header:"Produk",Cell:({cell:e})=>a.jsx("div",{children:e.getValue().map(t=>a.jsxs("p",{children:[t.name," (",t.size,") x",t.quantity]},t.id))})},{accessorKey:"user",header:"Pemesan",Cell:({cell:e})=>a.jsxs("div",{children:[a.jsx("p",{children:e.getValue().name}),a.jsx("p",{children:e.getValue().email})]})},{accessorKey:"address",header:"Alamat Pengiriman",Cell:({cell:e})=>a.jsxs("div",{children:[a.jsx("p",{children:e.getValue().recipient_name}),a.jsx("p",{children:e.getValue().address_name}),a.jsxs("p",{children:[e.getValue().city,", ",e.getValue().state,","," ",e.getValue().country," ",e.getValue().postal_code]})]}),size:300},{accessorKey:"total_price",header:"Total Harga",Cell:({cell:e})=>a.jsxs("span",{className:"text-primary",children:["Rp",e.getValue().toLocaleString()]}),size:100},{accessorKey:"shipping_price",header:"Biaya Pengiriman",Cell:({cell:e})=>a.jsxs("span",{className:"text-primary",children:["Rp",e.getValue().toLocaleString()]})},{accessorKey:"is_paid",header:"Status Pembayaran",Cell:({cell:e})=>a.jsx("span",{className:`${e.getValue()?"text-green-500":"text-red-500"} font-semibold`,children:e.getValue()?"Lunas":"Belum Lunas"})},{accessorKey:"created_at",header:"Waktu Pemesanan",Cell:({cell:e})=>a.jsx("span",{children:e.getValue()})}],[]),i=l({columns:s,data:r});return a.jsx(p,{table:i})};export{E as default};
