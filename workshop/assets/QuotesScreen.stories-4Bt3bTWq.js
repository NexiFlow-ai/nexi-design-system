import{r as a,q as n,b as t,a as D,l as o}from"./scene-CqiggoaI.js";import{Q as N}from"./QuotesScreen-By4ibhqT.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";import"./format-BBzwDLam.js";import"./flags--SfV1VDA.js";import"./routes-DgN3bgVk.js";import"./NewQuoteForm-Cso4OZbM.js";import"./QuoteLadder-TIx9b8de.js";const G={title:"Apps/NexSales/Quotes",component:N,parameters:{ds:"DS-7010",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/quotes"},docs:{description:{component:"Quotes (composes DS-7010 · DS-3031 · DS-7002): the quote headers — added here (), prepared by NexChat's Flow or raised by a request; the Inspector shows versions and the door to the body."}}}},_=D(t("nazar")).map(e=>({id:e.id,name:e.name})),C=async e=>({id:"q_new",account_id:e.account_id,title:e.title,version:1,status:e.status??"draft",amount:e.amount,currency:e.currency,valid_until:e.valid_until,source:{kind:"native"}}),l={args:{view:a(n(t("oksana")))}},m={name:"Populated · native (New quote)",args:{view:a(n(t("nazar"))),canCreate:!0,accounts:_,create:C}},p={name:"New quote · the form (account is a choice)",args:{view:a(n(t("nazar"))),canCreate:!0,accounts:_,create:C,initialCreating:!0}},g={name:"Row selected · Inspector",args:{view:a(n(t("oksana"))),initialSelected:"q_1"}},E=[{id:"marta",name:"Marta Yarema"},{id:"taras",name:"Taras Melnyk"}],P=e=>E.find(r=>r.id===e)?.name??e,A=()=>n(t("nazar")),z=async(e,r)=>({outcome:"saved",quote:{...A().find(s=>s.id===e),status:r.to}}),R=async(e,r)=>({outcome:"saved",quote:{...A().find(s=>s.id===e),status:"booked",handover:{to_id:r.handover_to,task_ref:"nexus://tasks/item/SALES-9",at:"2026-10-13T08:00:00Z"}}}),d={canCreate:!0,accounts:_,create:C,transition:z,book:R,people:E,personName:P,approverName:"Nazar Holub"},i=(e,r={})=>A().map((s,I)=>I===0?{...s,status:e,...r}:s),c=()=>A()[0]?.id??null,v={name:"Ladder · draft (approve · mark sent)",args:{...d,view:a(i("draft")),initialSelected:c()}},w={name:"Ladder · approval open (P-7)",args:{...d,view:a(i("draft")),initialSelected:c(),initialPending:!0}},S={name:"Ladder · sent (accepted · rejected)",args:{...d,view:a(i("sent")),initialSelected:c()}},h={name:"Ladder · accepted (book)",args:{...d,view:a(i("accepted")),initialSelected:c()}},f={name:"Ladder · booking (hand over to)",args:{...d,view:a(i("accepted")),initialSelected:c(),initialBooking:!0}},y={name:"Ladder · booked (handed over)",args:{...d,view:a(i("booked",{handover:{to_id:"marta",task_ref:"nexus://tasks/item/SALES-9",at:"2026-10-13T08:00:00Z"}})),initialSelected:c()}},u={name:"Amount redacted (below sales.lead)",args:{view:a(n(t("oksana")).map(e=>({...e,amount:null}))),initialSelected:"q_1"}},k={name:"Empty · the one door",args:{view:o("empty"),canCreate:!0,accounts:_,create:C}},L={name:"Empty · reader",args:{view:o("empty")}},q={args:{view:o("loading")}},x={args:{view:o("error")}},B={args:{view:o("denied")}},b={args:{view:o("offline")}},J=["Populated","Native","Creating","WithInspector","LadderDraft","LadderPending","LadderSent","LadderAccepted","LadderBooking","LadderBooked","Redacted","EmptyCanCreate","Empty","Loading","Error","Denied","Offline"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.quotes(as("oksana")))
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Populated · native (New quote)",
  args: {
    view: ready(store.quotes(as("nazar"))),
    canCreate: true,
    accounts,
    create
  }
}`,...m.parameters?.docs?.source},description:{story:": the Skills / Agents rule — one *New quote* in the header once there is something to list",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "New quote · the form (account is a choice)",
  args: {
    view: ready(store.quotes(as("nazar"))),
    canCreate: true,
    accounts,
    create,
    initialCreating: true
  }
}`,...p.parameters?.docs?.source},description:{story:" · DS-7002: the Inspector opens on the form; from the list the account is a choice",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Row selected · Inspector",
  args: {
    view: ready(store.quotes(as("oksana"))),
    initialSelected: "q_1"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Ladder · draft (approve · mark sent)",
  args: {
    ...ladderArgs,
    view: ready(withStatus("draft")),
    initialSelected: firstId()
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Ladder · approval open (P-7)",
  args: {
    ...ladderArgs,
    view: ready(withStatus("draft")),
    initialSelected: firstId(),
    initialPending: true
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Ladder · sent (accepted · rejected)",
  args: {
    ...ladderArgs,
    view: ready(withStatus("sent")),
    initialSelected: firstId()
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Ladder · accepted (book)",
  args: {
    ...ladderArgs,
    view: ready(withStatus("accepted")),
    initialSelected: firstId()
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Ladder · booking (hand over to)",
  args: {
    ...ladderArgs,
    view: ready(withStatus("accepted")),
    initialSelected: firstId(),
    initialBooking: true
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Ladder · booked (handed over)",
  args: {
    ...ladderArgs,
    view: ready(withStatus("booked", {
      handover: {
        to_id: "marta",
        task_ref: "nexus://tasks/item/SALES-9",
        at: "2026-10-13T08:00:00Z"
      }
    })),
    initialSelected: firstId()
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Amount redacted (below sales.lead)",
  args: {
    view: ready(store.quotes(as("oksana")).map(q => ({
      ...q,
      amount: null
    }))),
    initialSelected: "q_1"
  }
}`,...u.parameters?.docs?.source},description:{story:" (P-8): below `sales.lead` the amount is a dash — the row is listed, the number is not",...u.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Empty · the one door",
  args: {
    view: state("empty"),
    canCreate: true,
    accounts,
    create
  }
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Empty · reader",
  args: {
    view: state("empty")
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...b.parameters?.docs?.source}}};export{p as Creating,B as Denied,L as Empty,k as EmptyCanCreate,x as Error,h as LadderAccepted,y as LadderBooked,f as LadderBooking,v as LadderDraft,w as LadderPending,S as LadderSent,q as Loading,m as Native,b as Offline,l as Populated,u as Redacted,g as WithInspector,J as __namedExportsOrder,G as default};
