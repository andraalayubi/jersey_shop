import{r as t,j as a,x as d,y as u,n as i}from"./app-DmqRxiIu.js";import{u as h,M as g}from"./index.esm-Q94ht3uP.js";import{a as f}from"./index-CmvrDTUL.js";import{A as x}from"./ActionIcon-ChSDut15.js";import{T as j}from"./Text-Dfu3fWJ2.js";import"./DirectionProvider-r1f_A9N0.js";import"./Table-BjXZU7BZ.js";import"./ScrollArea-BRioxJZT.js";import"./IconX-cbccF7EB.js";import"./Popover-BliU6b8N.js";import"./use-resolved-styles-api-BlrRsMyN.js";import"./Menu-KItRysSi.js";import"./createReactComponent-2jTeNtNB.js";import"./index-BURL4FG3.js";import"./Select-Db4dMEDr.js";import"./Input-klpkudea.js";import"./CheckIcon-DX_7BVpD.js";import"./InputBase-hC2F_Sl6.js";import"./TextInput-CGbfz0VU.js";import"./LoadingOverlay-BIIiT7r6.js";import"./Checkbox-DkngAIMX.js";import"./Badge-CPY-NrtQ.js";import"./Stack-CtVlWBhE.js";import"./AccordionChevron-NDiPJtmq.js";import"./clamp-DTmYCdls.js";import"./RangeSlider-DVEk38FS.js";import"./use-move-Aq8pIR0U.js";import"./iconBase-DizHYFA0.js";const D=({data:s,setSelectedCartId:n})=>{const c=t.useMemo(()=>[{accessorKey:"product_name",header:"Nama Produk"},{accessorKey:"product_price",header:"Harga",Cell:({cell:e})=>a.jsxs("span",{className:"text-primary",children:["Rp",e.getValue().toLocaleString()]}),size:100},{accessorKey:"product_size",header:"Ukuran",size:50},{accessorKey:"quantity",header:"Jumlah",size:50},{accessorKey:"total_price",header:"Total",Cell:({cell:e})=>a.jsxs("span",{className:"text-primary",children:["Rp",e.getValue().toLocaleString()]}),size:100},{accessorKey:"id",header:"Aksi",Cell:({cell:e})=>a.jsx(x,{variant:"filled",color:"red","aria-label":"Batalkan",onClick:()=>{d.openConfirmModal({title:"Hapus Keranjang",centered:!0,children:a.jsx(j,{size:"sm",children:"Apakah anda yakin ingin menghapus keranjang ini? Setelah mengonfirmasi maka keranjang ini akan terhapus."}),labels:{confirm:"Hapus Pesanan",cancel:"Batal"},confirmProps:{color:"red"},onCancel:()=>console.log("Cancel"),onConfirm:()=>{u.visit(`/carts/${e.getValue()}`,{method:"delete",onSuccess:()=>{close(),i.show({color:"green",title:"Success notification",message:"Berhasil menghapus keranjang!"})},onError:r=>{close(),r.remainingBalance&&i.show({color:"red",title:"Error notification",message:r.remainingBalance})}})}})},className:"ml-1",children:a.jsx(f,{})})}],[]),[o,l]=t.useState({}),m=Object.keys(o);t.useEffect(()=>{n(m)},[o]);const p=h({columns:c,data:s,enableRowSelection:!0,getRowId:e=>e.id,onRowSelectionChange:l,state:{rowSelection:o}});return a.jsx(g,{table:p})};export{D as default};