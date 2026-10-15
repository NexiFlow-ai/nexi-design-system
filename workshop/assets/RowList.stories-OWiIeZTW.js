import{a5 as s,j as e,a6 as r,S as h,r as p,b as w}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Kit/RowList",component:s,parameters:{ds:"DS-3035",docs:{description:{component:"RowList · Row (DS-3035): a list of things that are not a grid — conversations, layers, threads, inbox\nitems. 36 px rows (44 with a meta line), 12 px inset, a 2 px accent rail on the selected row, the whole row the\ntarget. One component for the four app rows the census found (`.nexus-tasks-row`, `.nexus-care-row`,\n`.nexus-care-chat-row`, `.nexus-map-layer-row`)."}}}},u=[{id:"c1",who:"Olena K.",last:"Can you resend the invoice for March?",when:"2 min",unread:2},{id:"c2",who:"Marcus B.",last:"Thanks — that fixed it.",when:"14 min",unread:0},{id:"c3",who:"Priya N.",last:"Which plan includes the SSO option?",when:"1 h",unread:1},{id:"c4",who:"Jonas R.",last:"Following up on the quote from last week.",when:"3 h",unread:0}],a={name:"Populated · selected",render:()=>{const[c,m]=p.useState("c1");return e.jsx("div",{style:{maxWidth:480},children:e.jsx(s,{label:"Conversations",testId:"story-rows",children:u.map(t=>e.jsx(r,{title:t.who,selected:c===t.id,onSelect:()=>m(t.id),aside:e.jsxs(e.Fragment,{children:[t.unread?e.jsx(w,{tone:"ok",children:t.unread}):null,e.jsx("span",{children:t.when})]}),testId:`row-${t.id}`},t.id))})})}},n={name:"With a meta line (44 px)",render:()=>{const[c,m]=p.useState("c2");return e.jsx("div",{style:{maxWidth:480},children:e.jsx(s,{label:"Conversations",children:u.map(t=>e.jsx(r,{title:t.who,meta:t.last,selected:c===t.id,onSelect:()=>m(t.id),aside:e.jsx("span",{children:t.when})},t.id))})})}},o={name:"Rows as links (row link idiom)",render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsxs(s,{label:"Layers",children:[e.jsx(r,{title:"Districts",meta:"Polygon · 112 features",href:"/map/layers/districts",aside:e.jsx(h,{tone:"ok",children:"visible"})}),e.jsx(r,{title:"Stores",meta:"Point · 48 features",href:"/map/layers/stores",aside:e.jsx(h,{tone:"ok",children:"visible"}),selected:!0}),e.jsx(r,{title:"Deliveries (Q3)",meta:"Line · 1 204 features",href:"/map/layers/deliveries",aside:e.jsx(h,{tone:"neutral",children:"hidden"})})]})})},i={render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(s,{label:"Conversations",empty:{title:"No conversations yet",body:"The first message from a customer appears here."},children:[]})})},d={render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(s,{label:"Conversations",state:"loading",children:[]})})},l={name:"Error · retry",render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(s,{label:"Conversations",state:"error",onRetry:()=>{},children:[]})})},v=["Populated","WithMeta","Links","Empty","Loading","ErrorState"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Populated · selected",
  render: () => {
    const [sel, setSel] = useState("c1");
    return <div style={{
      maxWidth: 480
    }}>
        <RowList label="Conversations" testId="story-rows">
          {CONVERSATIONS.map(c => <Row key={c.id} title={c.who} selected={sel === c.id} onSelect={() => setSel(c.id)} aside={<>{c.unread ? <Chip tone="ok">{c.unread}</Chip> : null}<span>{c.when}</span></>} testId={\`row-\${c.id}\`} />)}
        </RowList>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With a meta line (44 px)",
  render: () => {
    const [sel, setSel] = useState("c2");
    return <div style={{
      maxWidth: 480
    }}>
        <RowList label="Conversations">
          {CONVERSATIONS.map(c => <Row key={c.id} title={c.who} meta={c.last} selected={sel === c.id} onSelect={() => setSel(c.id)} aside={<span>{c.when}</span>} />)}
        </RowList>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Rows as links (row link idiom)",
  render: () => <div style={{
    maxWidth: 480
  }}>
      <RowList label="Layers">
        <Row title="Districts" meta="Polygon · 112 features" href="/map/layers/districts" aside={<StatusDot tone="ok">visible</StatusDot>} />
        <Row title="Stores" meta="Point · 48 features" href="/map/layers/stores" aside={<StatusDot tone="ok">visible</StatusDot>} selected />
        <Row title="Deliveries (Q3)" meta="Line · 1 204 features" href="/map/layers/deliveries" aside={<StatusDot tone="neutral">hidden</StatusDot>} />
      </RowList>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      <RowList label="Conversations" empty={{
      title: "No conversations yet",
      body: "The first message from a customer appears here."
    }}>{[]}</RowList>
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      <RowList label="Conversations" state="loading">{[]}</RowList>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Error · retry",
  render: () => <div style={{
    maxWidth: 480
  }}>
      <RowList label="Conversations" state="error" onRetry={() => {}}>{[]}</RowList>
    </div>
}`,...l.parameters?.docs?.source}}};export{i as Empty,l as ErrorState,o as Links,d as Loading,a as Populated,n as WithMeta,v as __namedExportsOrder,S as default};
