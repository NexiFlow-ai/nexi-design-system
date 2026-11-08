import{j as a,X as h}from"./iframe-C_4ax-Jm.js";import{k as g,c as x,b as y}from"./scene-CqiggoaI.js";import{W as w,a as p}from"./WorkRows-DShgTDfa.js";import"./preload-helper-PPVm8Dsz.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./format-BBzwDLam.js";import"./flags--SfV1VDA.js";import"./routes-DgN3bgVk.js";import"./external-link-BxhqZ-kj.js";const i=y("oksana"),q=g(i,"acc_agrolan"),s=g(i),k=x(i,"acc_agrolan").quotes,f=e=>({oksana:"Oksana Hrytsenko",ihor:"Ihor Savchuk",taras:"Taras Melnyk"})[e]??e,B={...s.leads[2],stage:{name:"Converted",category:"done"},fields:{...s.leads[2].fields,converted_to:"nexus://tasks/work_item/opp_3"}},A={title:"Apps/NexSales/Work rows",component:w,parameters:{ds:"DS-6109",layout:"padded",workbench:{ns:"sales",path:"/sales/accounts/acc_agrolan"}},args:{personName:f,empty:{title:"No rows"}},render:e=>a.jsx(h,{title:"Work",testId:"story-work",children:a.jsx(w,{...e})})},o={name:"Deals · amount · close date · stage",args:{rows:s.deals.slice(0,5)}},r={name:"Requests · one quoted, the open ones offer Quote this",args:{rows:s.requests,quotes:k,quoteHref:e=>`/sales/quotes?quote=${e}`,onQuote:()=>{}}},t={name:"Requests · member who cannot quote",args:{rows:s.requests,quotes:k,quoteHref:e=>`/sales/quotes?quote=${e}`}},n={name:"Leads · company · channel · stage · one converted",args:{rows:[...s.leads.slice(0,2),B]}},c={name:"One account's deals and requests",args:{rows:[...q.deals,...q.requests],quotes:k}},d={name:"Empty · the inline state with its door",args:{rows:[],empty:{title:"No open opportunities",body:"Deals live on the Pipeline board."}}},l={name:"Door state · NexTasks away",args:{rows:[]},render:()=>a.jsx(p,{work:{available:!1,boards:[],deals:[],leads:[],requests:[],tasks:[]}})},m={name:"Door state · no board yet — the one door",args:{rows:[]},render:()=>a.jsx(p,{work:{available:!0,boards:[],deals:[],leads:[],requests:[],tasks:[]},newBoardHref:"/tasks?new=project",canAct:!0})},u={name:"Door state · a board the person may list but not read",args:{rows:[]},render:()=>a.jsx(p,{work:{...s,boards:s.boards.map((e,b)=>b===0?e:{...e,available:!1})}})},E=["Deals","Requests","RequestsReadOnly","Leads","OneAccount","Empty","TasksAway","NoBoard","BoardHidden"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Deals · amount · close date · stage",
  args: {
    rows: allWork.deals.slice(0, 5)
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Requests · one quoted, the open ones offer Quote this",
  args: {
    rows: allWork.requests,
    quotes,
    quoteHref: id => \`/sales/quotes?quote=\${id}\`,
    onQuote: () => {}
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Requests · member who cannot quote",
  args: {
    rows: allWork.requests,
    quotes,
    quoteHref: id => \`/sales/quotes?quote=\${id}\`
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Leads · company · channel · stage · one converted",
  args: {
    rows: [...allWork.leads.slice(0, 2), convertedLead]
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "One account's deals and requests",
  args: {
    rows: [...horizonWork.deals, ...horizonWork.requests],
    quotes
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Empty · the inline state with its door",
  args: {
    rows: [],
    empty: {
      title: "No open opportunities",
      body: "Deals live on the Pipeline board."
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Door state · NexTasks away",
  args: {
    rows: []
  },
  render: () => <WorkDoorState work={{
    available: false,
    boards: [],
    deals: [],
    leads: [],
    requests: [],
    tasks: []
  }} />
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Door state · no board yet — the one door",
  args: {
    rows: []
  },
  render: () => <WorkDoorState work={{
    available: true,
    boards: [],
    deals: [],
    leads: [],
    requests: [],
    tasks: []
  }} newBoardHref="/tasks?new=project" canAct />
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Door state · a board the person may list but not read",
  args: {
    rows: []
  },
  render: () => <WorkDoorState work={{
    ...allWork,
    boards: allWork.boards.map((b, i) => i === 0 ? b : {
      ...b,
      available: false
    })
  }} />
}`,...u.parameters?.docs?.source}}};export{u as BoardHidden,o as Deals,d as Empty,n as Leads,m as NoBoard,c as OneAccount,r as Requests,t as RequestsReadOnly,l as TasksAway,E as __namedExportsOrder,A as default};
