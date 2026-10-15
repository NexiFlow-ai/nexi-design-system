import{j as n,r as d}from"./iframe-WvhPuRF9.js";import{N as m}from"./NewContactForm-BxZ5v2lk.js";import{N as c}from"./NewLine-DbdUsufk.js";import"./preload-helper-PPVm8Dsz.js";import"./customFields-BTLjwQTu.js";import"./arrow-up-B8u2SNEL.js";const v={title:"Apps/NexSales/New line",component:c,parameters:{ds:"DS-6108",layout:"padded",workbench:{ns:"sales",path:"/sales/accounts"},docs:{description:{component:"The composer-line door (DS-6108 proposed ·  (1) · ): *New account* / *New contact* open the\n`FormInspector` with NexChat's line composer first — write what you know, Enter sorts it into the form\n(deterministic: digits → identifier, a domain → website, `+380…` → phone, `@` → e-mail), the duplicate check\nanswers on that line; *Start with an empty form* is the quiet exit. One idiom for every record the suite creates."}}},args:{placeholder:"Name, ЄДРПОУ or a website…",label:"New account — name, identifier or website",onEmptyForm:()=>{},onChange:()=>{},value:""},render:e=>{const[l,p]=d.useState(e.value);return n.jsx("form",{onSubmit:u=>u.preventDefault(),style:{maxWidth:420},children:n.jsx(c,{...e,value:l,onChange:p})})}},t={name:"Empty (the send waits for a word)"},o={name:"Written — Enter or ↑ sorts it into the form",args:{value:"Horizon Hotels, 12345678, horizon.ua"}},r={name:"The contact line",args:{placeholder:"Name, phone or e-mail…",label:"New contact — name, phone or e-mail",value:"Oleh Danyliuk +380 67 123 45 67"}},s={name:"Checking for duplicates",args:{value:"Horizon Hotels",busy:!0}},a={name:"In the Inspector (New contact)",parameters:{layout:"fullscreen"},render:()=>n.jsxs("div",{className:"nexus-cc-split nexus-sales-split",style:{minHeight:480},children:[n.jsx("div",{className:"nexus-sales-split-main"}),n.jsx(m,{accounts:[{id:"acc_1",name:"Sofia Bakery"},{id:"acc_2",name:"Horizon Hotels"}],create:async e=>({id:"ct_new",account_id:e.account_id,name:e.name,role:e.role??"",email:e.email,phone:e.phone,primary:!1,source:{kind:"native"}}),onClose:()=>{},onCreated:()=>{}})]})},i={name:"In the Inspector · the form after the line",parameters:{layout:"fullscreen"},render:()=>n.jsxs("div",{className:"nexus-cc-split nexus-sales-split",style:{minHeight:480},children:[n.jsx("div",{className:"nexus-sales-split-main"}),n.jsx(m,{accounts:[{id:"acc_1",name:"Sofia Bakery"},{id:"acc_2",name:"Horizon Hotels"}],create:async e=>({id:"ct_new",account_id:e.account_id,name:e.name,role:e.role??"",email:e.email,phone:e.phone,primary:!1,source:{kind:"native"}}),onClose:()=>{},onCreated:()=>{},initialStage:"form"})]})},g=["Empty","Written","Contact","Busy","InTheInspector","InTheInspectorForm"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Empty (the send waits for a word)"
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Written — Enter or ↑ sorts it into the form",
  args: {
    value: "Horizon Hotels, 12345678, horizon.ua"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "The contact line",
  args: {
    placeholder: "Name, phone or e-mail…",
    label: "New contact — name, phone or e-mail",
    value: "Oleh Danyliuk +380 67 123 45 67"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Checking for duplicates",
  args: {
    value: "Horizon Hotels",
    busy: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "In the Inspector (New contact)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="nexus-cc-split nexus-sales-split" style={{
    minHeight: 480
  }}>
      <div className="nexus-sales-split-main" />
      <NewContactForm accounts={[{
      id: "acc_1",
      name: "Sofia Bakery"
    }, {
      id: "acc_2",
      name: "Horizon Hotels"
    }]} create={async i => ({
      id: "ct_new",
      account_id: i.account_id,
      name: i.name,
      role: i.role ?? "",
      email: i.email,
      phone: i.phone,
      primary: false,
      source: {
        kind: "native"
      }
    })} onClose={() => {}} onCreated={() => {}} />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"the whole door, as the Contacts list opens it (DS-7002 FormInspector · the line first)",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "In the Inspector · the form after the line",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="nexus-cc-split nexus-sales-split" style={{
    minHeight: 480
  }}>
      <div className="nexus-sales-split-main" />
      <NewContactForm accounts={[{
      id: "acc_1",
      name: "Sofia Bakery"
    }, {
      id: "acc_2",
      name: "Horizon Hotels"
    }]} create={async i => ({
      id: "ct_new",
      account_id: i.account_id,
      name: i.name,
      role: i.role ?? "",
      email: i.email,
      phone: i.phone,
      primary: false,
      source: {
        kind: "native"
      }
    })} onClose={() => {}} onCreated={() => {}} initialStage="form" />
    </div>
}`,...i.parameters?.docs?.source}}};export{s as Busy,r as Contact,t as Empty,a as InTheInspector,i as InTheInspectorForm,o as Written,g as __namedExportsOrder,v as default};
