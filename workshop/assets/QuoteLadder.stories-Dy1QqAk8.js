import{j as o,I as v,m as b}from"./iframe-C_4ax-Jm.js";import{q,b as S}from"./scene-CqiggoaI.js";import{Q as k}from"./QuoteLadder-TIx9b8de.js";import"./preload-helper-PPVm8Dsz.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./format-BBzwDLam.js";import"./flags--SfV1VDA.js";import"./routes-DgN3bgVk.js";const e=q(S("nazar"))[0],f=[{id:"marta",name:"Marta Yarema"},{id:"taras",name:"Taras Melnyk"}],B=a=>f.find(s=>s.id===a)?.name??a,x=async(a,s)=>({outcome:"saved",quote:{...a,status:s}}),P={title:"Apps/NexSales/Quote ladder",component:k,parameters:{ds:"DS-7001",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/quotes"},a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}}},args:{quote:{...e,status:"draft"},transition:async(a,s)=>x(e,s.to),book:async(a,s)=>({outcome:"saved",quote:{...e,status:"booked",handover:{to_id:s.handover_to,task_ref:"nexus://tasks/item/SALES-9",at:"2026-10-13T08:00:00Z"}}}),people:f,personName:B,approverName:"Nazar Holub"},render:a=>o.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[o.jsx("div",{className:"nexus-sales-split-main"}),o.jsx(v,{kind:"Quote",title:`${a.quote.title} · v${a.quote.version}`,onClose:()=>{},testId:"quote-inspector",children:o.jsx(b,{idiom:"rule",title:"Status",children:o.jsx(k,{...a})})})]})},r={name:"Draft · approve or mark sent"},t={name:"Draft · sent asks for the body first",args:{quote:{...e,status:"draft",body_ref:void 0}}},n={name:"Approval open (P-7)",args:{initialPending:!0}},d={args:{quote:{...e,status:"approved"}}},c={name:"Sent · accepted or rejected",args:{quote:{...e,status:"sent"}}},u={name:"Accepted · book",args:{quote:{...e,status:"accepted"}}},i={name:"Booking · hand over to",args:{quote:{...e,status:"accepted"},initialBooking:!0}},m={name:"Booked · handed over",args:{quote:{...e,status:"booked",handover:{to_id:"marta",task_ref:"nexus://tasks/item/SALES-9",at:"2026-10-13T08:00:00Z"}}}},p={name:"Booked · the item was refused",args:{quote:{...e,status:"booked",handover:{to_id:"taras",task_ref:null,at:"2026-10-13T08:00:00Z"}}}},l={args:{quote:{...e,status:"rejected"}}},g={name:"Reader (no doors)",args:{quote:{...e,status:"sent"},transition:void 0,book:void 0}},E=["Draft","DraftNoBody","Pending","Approved","Sent","Accepted","Booking","Booked","BookedNoTask","Rejected","ReadOnly"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Draft · approve or mark sent"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Draft · sent asks for the body first",
  args: {
    quote: {
      ...base,
      status: "draft",
      body_ref: undefined
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Approval open (P-7)",
  args: {
    initialPending: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    quote: {
      ...base,
      status: "approved"
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Sent · accepted or rejected",
  args: {
    quote: {
      ...base,
      status: "sent"
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Accepted · book",
  args: {
    quote: {
      ...base,
      status: "accepted"
    }
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Booking · hand over to",
  args: {
    quote: {
      ...base,
      status: "accepted"
    },
    initialBooking: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Booked · handed over",
  args: {
    quote: {
      ...base,
      status: "booked",
      handover: {
        to_id: "marta",
        task_ref: "nexus://tasks/item/SALES-9",
        at: "2026-10-13T08:00:00Z"
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Booked · the item was refused",
  args: {
    quote: {
      ...base,
      status: "booked",
      handover: {
        to_id: "taras",
        task_ref: null,
        at: "2026-10-13T08:00:00Z"
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    quote: {
      ...base,
      status: "rejected"
    }
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Reader (no doors)",
  args: {
    quote: {
      ...base,
      status: "sent"
    },
    transition: undefined,
    book: undefined
  }
}`,...g.parameters?.docs?.source}}};export{u as Accepted,d as Approved,m as Booked,p as BookedNoTask,i as Booking,r as Draft,t as DraftNoBody,n as Pending,g as ReadOnly,l as Rejected,c as Sent,E as __namedExportsOrder,P as default};
