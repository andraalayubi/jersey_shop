import{j as t,Y as i,c as s,a as e}from"./app-BHSufI5G.js";import{H as o}from"./HomeLayout-D3dDFpaj.js";import{C as l}from"./Container-CLQvhDZq.js";import{P as p}from"./PageTitle-DAH-XYhY.js";import c from"./AddressCard-C0AW4MB6.js";import{b as d}from"./index-WZ4WD1PO.js";import"./iconBase-C-ylmESj.js";import"./index-B29946aL.js";import"./AccordionChevron-Ci1cBE2N.js";import"./Menu-Dia_VYI6.js";import"./use-resolved-styles-api-C-ix6nIl.js";import"./Popover-C9BlbU81.js";import"./DirectionProvider-6MtzQ78E.js";import"./use-disclosure-8GjKLeip.js";import"./Input-Bj5l2KtT.js";import"./Badge-BIRI9re-.js";const S=({auth:m,addresses:r})=>t.jsxs(o,{authenticatedUser:m.user,children:[t.jsx(i,{title:"Alamat Saya"}),t.jsx(p,{children:"Alamat saya"}),t.jsxs(l,{children:[t.jsx(s,{component:e,href:route("address.create"),leftSection:t.jsx(d,{size:14}),className:"mt-2",children:"Alamat Baru"}),r.length>0?t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-4",children:r.map(a=>t.jsx(c,{address:a},a.id))}):t.jsx("p",{className:"mt-6 text-sm text-gray-600 italic",children:"Belum ada alamat."})]})]});export{S as default};
