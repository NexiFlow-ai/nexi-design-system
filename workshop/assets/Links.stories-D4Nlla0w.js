import{K as e,j as n,M as l,N as h,O as d}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Kit/Links",component:e,parameters:{ds:"DS-7012",docs:{description:{component:"Link idioms (DS-7012): three looks for three jobs — *inline* in running text, *row* as the title cell of a\ntable or row list, *meta* at 12 px secondary; and `LinkButton` (DS-3063), a control that reads as a link over a\n24 px target, in three tones — `inline` · `meta` · `quiet`. `ActionRow` (DS-7016) is the quiet row of secondary\nactions under content: the goal card's *View plan · Pause · Change goal · Stop*. One class family\n(`.nexus-link` · `.is-row` · `.is-meta` · `.nexus-link-btn` · `.is-quiet` · `.nexus-cc-actionrow`); nothing app-local."}}}},r={name:"Inline · in running text",render:()=>n.jsxs("p",{style:{maxWidth:560,fontSize:14,lineHeight:1.5,margin:0},children:["The pack installs three agents and one flow. Review the ",n.jsx("a",{className:"nexus-link",href:"#blueprint",children:"blueprint"})," before you enable it, or read"," ",n.jsx("a",{className:"nexus-link",href:"#docs",children:"what a pack may change"}),"."]})},o={name:"Row · the title cell is the link",render:()=>n.jsxs("table",{className:"nexus-cc-table",style:{maxWidth:560},children:[n.jsx("caption",{className:"nexus-visually-hidden",children:"Flows"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{scope:"col",children:"Flow"}),n.jsx("th",{scope:"col",children:"Runs"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("a",{className:"nexus-link is-row",href:"#f1",children:"Quote follow-up"})}),n.jsx("td",{children:"128"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("a",{className:"nexus-link is-row",href:"#f2",children:"Invoice reminder"})}),n.jsx("td",{children:"41"})]})]})]})},a={name:"Meta · 12 px secondary",render:()=>n.jsxs(h,{"aria-label":"Run",children:[n.jsx(d,{label:"Source",children:n.jsxs("span",{children:["Chat · ",n.jsx("a",{className:"nexus-link is-meta",href:"#chat",children:"Open source chat"})]})}),n.jsx(d,{label:"Routed by",children:n.jsxs("span",{children:["Auto · ",n.jsx(e,{meta:!0,onClick:()=>{},children:"Why?"})]})})]})},c={name:"LinkButton · three tones over a 24 px target",parameters:{ds:"DS-3063"},render:()=>n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[n.jsx(e,{onClick:()=>{},children:"Show all 48"}),n.jsx(e,{tone:"meta",onClick:()=>{},children:"Clear all"}),n.jsx(e,{tone:"quiet",onClick:()=>{},children:"View plan"}),n.jsx(e,{href:"#runs",tone:"quiet",children:"Open the run"}),n.jsx(e,{onClick:()=>{},disabled:!0,children:"Nothing to undo"})]})},t={name:"ActionRow · secondary actions under content",parameters:{ds:"DS-7016"},render:()=>n.jsxs("div",{style:{maxWidth:480,fontSize:13,lineHeight:1.5},children:[n.jsx("p",{style:{margin:0},children:"It appears the decline is concentrated in three Poland–Ukraine lanes."}),n.jsx("p",{style:{margin:"4px 0 0"},children:"I'm checking whether this is carrier-specific or border-related."}),n.jsxs(l,{label:"Goal actions",children:[n.jsx(e,{onClick:()=>{},children:"View plan"}),n.jsx(e,{onClick:()=>{},children:"Pause"}),n.jsx(e,{onClick:()=>{},children:"Change goal"}),n.jsx(e,{onClick:()=>{},children:"Stop"})]})]})},i={name:"ActionRow · the door line",parameters:{ds:"DS-7016"},render:()=>n.jsx("div",{style:{maxWidth:480,fontSize:13},children:n.jsxs(l,{lead:"Carrier mails —",children:[n.jsx(e,{onClick:()=>{},children:"Connect Gmail"}),n.jsx(e,{onClick:()=>{},children:"Not now"}),!1]})})},s={name:"ActionRow · one action · the last is destructive",parameters:{ds:"DS-7016"},render:()=>n.jsxs("div",{style:{display:"grid",gap:16,maxWidth:480,fontSize:13},children:[n.jsx(l,{children:n.jsx(e,{onClick:()=>{},children:"Show the 12 earlier results"})}),n.jsxs(l,{label:"Artifact actions",children:[n.jsx(e,{onClick:()=>{},children:"Open"}),n.jsx(e,{onClick:()=>{},children:"Rename"}),n.jsx(e,{tone:"meta",onClick:()=>{},children:"Why is this here?"}),n.jsx(e,{onClick:()=>{},children:"Archive"})]})]})},k=["Inline","RowLinks","MetaLink","Buttons","QuietActionRow","DoorLine","OneAndDestructive"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Inline · in running text",
  render: () => <p style={{
    maxWidth: 560,
    fontSize: 14,
    lineHeight: 1.5,
    margin: 0
  }}>
      The pack installs three agents and one flow. Review the <a className="nexus-link" href="#blueprint">blueprint</a> before you enable it, or read{" "}
      <a className="nexus-link" href="#docs">what a pack may change</a>.
    </p>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Row · the title cell is the link",
  render: () => <table className="nexus-cc-table" style={{
    maxWidth: 560
  }}>
      <caption className="nexus-visually-hidden">Flows</caption>
      <thead>
        <tr><th scope="col">Flow</th><th scope="col">Runs</th></tr>
      </thead>
      <tbody>
        <tr><td><a className="nexus-link is-row" href="#f1">Quote follow-up</a></td><td>128</td></tr>
        <tr><td><a className="nexus-link is-row" href="#f2">Invoice reminder</a></td><td>41</td></tr>
      </tbody>
    </table>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Meta · 12 px secondary",
  render: () => <PropertyList aria-label="Run">
      <PropertyRow label="Source">
        <span>Chat · <a className="nexus-link is-meta" href="#chat">Open source chat</a></span>
      </PropertyRow>
      <PropertyRow label="Routed by">
        <span>Auto · <LinkButton meta onClick={() => {}}>Why?</LinkButton></span>
      </PropertyRow>
    </PropertyList>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "LinkButton · three tones over a 24 px target",
  parameters: {
    ds: "DS-3063"
  },
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <LinkButton onClick={() => {}}>Show all 48</LinkButton>
      <LinkButton tone="meta" onClick={() => {}}>Clear all</LinkButton>
      <LinkButton tone="quiet" onClick={() => {}}>View plan</LinkButton>
      <LinkButton href="#runs" tone="quiet">Open the run</LinkButton>
      <LinkButton onClick={() => {}} disabled>Nothing to undo</LinkButton>
    </div>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "ActionRow · secondary actions under content",
  parameters: {
    ds: "DS-7016"
  },
  render: () => <div style={{
    maxWidth: 480,
    fontSize: 13,
    lineHeight: 1.5
  }}>
      <p style={{
      margin: 0
    }}>It appears the decline is concentrated in three Poland–Ukraine lanes.</p>
      <p style={{
      margin: "4px 0 0"
    }}>I'm checking whether this is carrier-specific or border-related.</p>
      <ActionRow label="Goal actions">
        <LinkButton onClick={() => {}}>View plan</LinkButton>
        <LinkButton onClick={() => {}}>Pause</LinkButton>
        <LinkButton onClick={() => {}}>Change goal</LinkButton>
        <LinkButton onClick={() => {}}>Stop</LinkButton>
      </ActionRow>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"DS-7016 — the owner's variant (): the goal card's actions under its content.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "ActionRow · the door line",
  parameters: {
    ds: "DS-7016"
  },
  render: () => {
    const canConnect = true;
    const canSkip = false;
    return <div style={{
      maxWidth: 480,
      fontSize: 13
    }}>
        <ActionRow lead="Carrier mails —">
          {canConnect && <LinkButton onClick={() => {}}>Connect Gmail</LinkButton>}
          <LinkButton onClick={() => {}}>Not now</LinkButton>
          {canSkip && <LinkButton onClick={() => {}}>Skip this step</LinkButton>}
        </ActionRow>
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"The door line: the obstacle named in the sentence, its answers as links in the same line; a falsy child is skipped (DS-0004).",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "ActionRow · one action · the last is destructive",
  parameters: {
    ds: "DS-7016"
  },
  render: () => <div style={{
    display: "grid",
    gap: 16,
    maxWidth: 480,
    fontSize: 13
  }}>
      <ActionRow>
        <LinkButton onClick={() => {}}>Show the 12 earlier results</LinkButton>
      </ActionRow>
      <ActionRow label="Artifact actions">
        <LinkButton onClick={() => {}}>Open</LinkButton>
        <LinkButton onClick={() => {}}>Rename</LinkButton>
        <LinkButton tone="meta" onClick={() => {}}>Why is this here?</LinkButton>
        <LinkButton onClick={() => {}}>Archive</LinkButton>
      </ActionRow>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"One action is a sentence, not a row; a destructive one is last and named by its verb, never red (DS-0007).",...s.parameters?.docs?.description}}};export{c as Buttons,i as DoorLine,r as Inline,a as MetaLink,s as OneAndDestructive,t as QuietActionRow,o as RowLinks,k as __namedExportsOrder,x as default};
