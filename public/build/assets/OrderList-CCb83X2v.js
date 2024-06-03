import{r as m,j as a,a as c,x as p,y as d,n as t}from"./app-CKkwK5Co.js";import{u,M as h}from"./index.esm-D3U-F2c-.js";import{F as g,a as x}from"./index-D7tRz-9N.js";import{u as f}from"./use-disclosure-Cs1eQ_rJ.js";import{A as n}from"./ActionIcon-DDTDl-Z0.js";import{T as j}from"./Text-JeYcd5H1.js";import"./DirectionProvider-BUZmjoiZ.js";import"./Table-DljhJZab.js";import"./ScrollArea-CqmgX8WX.js";import"./IconX-9eULtHiM.js";import"./Popover-rEglhCYY.js";import"./use-resolved-styles-api-ByeDsg21.js";import"./Menu-CH4tnAeZ.js";import"./createReactComponent-MnOPAykb.js";import"./index-Bl6FJy4H.js";import"./Select-CRLVpe8w.js";import"./Input-BWyoMzcD.js";import"./CheckIcon-DKzDbIVI.js";import"./InputBase-DTWufboZ.js";import"./TextInput-jsx4PwhC.js";import"./LoadingOverlay-Bs-ij38-.js";import"./Checkbox-dfhpyxlt.js";import"./Badge-D-7OGORF.js";import"./Stack-Bn-HsvvR.js";import"./AccordionChevron-CkS-w_9N.js";import"./clamp-DTmYCdls.js";import"./RangeSlider-BVfqhfLi.js";import"./use-move-_WCV3XN7.js";import"./iconBase-CxhyBNXO.js";const U=({data:s})=>{const[y,{open:V,close:i}]=f(!1),o=m.useMemo(()=>[{accessorKey:"id",header:"Aksi",Cell:({cell:e})=>a.jsxs("div",{children:[a.jsx(n,{variant:"filled",color:"blue","aria-label":"Lihat",component:c,href:route("order.show",e.getValue()),children:a.jsx(g,{})}),s.find(r=>r.id===e.getValue()).is_paid?null:a.jsx(a.Fragment,{children:a.jsx(n,{variant:"filled",color:"red","aria-label":"Batalkan",onClick:()=>{p.openConfirmModal({title:"Pembatalan Pesanan",centered:!0,children:a.jsx(j,{size:"sm",children:"Apakah anda yakin ingin membatalkan pesanan ini? Setelah mengonfirmasi maka pesanan Anda akan terhapus."}),labels:{confirm:"Hapus Pesanan",cancel:"Batal"},confirmProps:{color:"red"},onCancel:()=>console.log("Cancel"),onConfirm:()=>{d.visit(`/orders/${e.getValue()}`,{method:"delete",onSuccess:()=>{i(),t.show({color:"green",title:"Success notification",message:"Berhasil membatalkan pesanan!"})},onError:r=>{i(),r.remainingBalance&&t.show({color:"red",title:"Error notification",message:r.remainingBalance})}})}})},className:"ml-1",children:a.jsx(x,{})})})]}),size:80},{accessorKey:"products",header:"Produk",Cell:({cell:e})=>a.jsx("div",{children:e.getValue().map(r=>a.jsxs("p",{children:[r.name," (",r.size,") x",r.quantity]},r.id))})},{accessorKey:"address",header:"Alamat Pengiriman",Cell:({cell:e})=>a.jsxs("div",{children:[a.jsx("p",{children:e.getValue().recipient_name}),a.jsx("p",{children:e.getValue().address_name}),a.jsxs("p",{children:[e.getValue().city,", ",e.getValue().state,","," ",e.getValue().country," ",e.getValue().postal_code]})]}),size:300},{accessorKey:"total_price",header:"Total Harga",Cell:({cell:e})=>a.jsxs("span",{className:"text-primary",children:["Rp",e.getValue().toLocaleString()]}),size:100},{accessorKey:"shipping_price",header:"Biaya Pengiriman",Cell:({cell:e})=>a.jsxs("span",{className:"text-primary",children:["Rp",e.getValue().toLocaleString()]})},{accessorKey:"is_paid",header:"Status Pembayaran",Cell:({cell:e})=>a.jsx("span",{className:`${e.getValue()?"text-green-500":"text-red-500"} font-semibold`,children:e.getValue()?"Lunas":"Belum Lunas"})},{accessorKey:"created_at",header:"Waktu Pemesanan",Cell:({cell:e})=>a.jsx("span",{children:e.getValue()})}],[]),l=u({columns:o,data:s});return a.jsx(a.Fragment,{children:a.jsx(h,{table:l})})};export{U as default};
