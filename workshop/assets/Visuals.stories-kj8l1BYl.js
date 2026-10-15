import{a3 as l,j as e,aa as d,ab as m,ac as c,ad as u,ae as p}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Kit/Visuals",component:l,parameters:{ds:"DS-3051",docs:{description:{component:`Operational visuals (DS-3050–3055): monochrome, no pies. A metric is a big numeral · label · delta · sparkline;
shares are horizontal bands; the organization's runtime is one Pulse line.`}}}},i=[3,8,5,12,9,14,11,16,13,18],a={name:"Sparkline",parameters:{ds:"DS-3050"},render:()=>e.jsx(u,{values:i})},o={name:"Stat",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,maxWidth:720},children:[e.jsx(l,{label:"Runs today",value:"128",delta:"+12 %",deltaTone:"ok",hint:"vs yesterday",series:i}),e.jsx(l,{label:"Failed",value:"4",delta:"+2",deltaTone:"danger",series:[0,1,0,2,1,0,1,2,2,4]}),e.jsx(l,{label:"Models",value:"5",hint:"2 local"})]})},n={name:"PulseStrip · live",parameters:{ds:"DS-3052"},render:()=>e.jsx(m,{live:!0,nodes:[{key:"projects",label:"Projects",value:12,tone:"ok",href:"/projects"},{key:"capabilities",label:"Capabilities",value:41,tone:"ok",href:"/capabilities"},{key:"models",label:"Models",value:5,tone:"warn",href:"/runtime/models"},{key:"connections",label:"Connections",value:3,tone:"danger",href:"/runtime/connections"}]})},s={name:"Bands",parameters:{ds:"DS-3053"},render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(c,{items:[{key:"local",label:"Local",share:62,tone:"ok"},{key:"cloud",label:"Cloud",share:30},{key:"escalated",label:"Escalated",share:8,tone:"warn"}]})})},r={name:"SummaryColumns",parameters:{ds:"DS-3054"},render:()=>e.jsx(p,{columns:[{title:"Ownership",rows:[{value:"Olena K.",label:"owner"},{value:"12 members"}]},{title:"Governance",rows:[{value:"internal",label:"classification"},{value:"nexus-base 1.3.0",label:"Blueprint"}]},{title:"Usage",rows:[{value:"128 runs",label:"today"},{value:"4 failed"}]}]})},t={name:"StatusList",parameters:{ds:"DS-3055"},render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(d,{rows:[{key:"qwen3-coder",name:"Qwen3 Coder",meta:"OpenRouter · tier 3",tone:"ok",status:"ready",href:"/models/qwen3-coder"},{key:"qwen3-8b",name:"Qwen3 8B",meta:"local · tier 1",tone:"warn",status:"degraded",detail:"Latency above 2 s for 10 min"},{key:"gpt5",name:"GPT-5",meta:"Azure OpenAI · tier 4",tone:"danger",status:"offline"}]})})},b=["Spark","Stats","Pulse","Shares","Summary","List"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Sparkline",
  parameters: {
    ds: "DS-3050"
  },
  render: () => <Sparkline values={SERIES} />
}`,...a.parameters?.docs?.source},description:{story:"Sparkline (DS-3050): decorative — the numeric value sits next to it.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Stat",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    maxWidth: 720
  }}>
      <Stat label="Runs today" value="128" delta="+12 %" deltaTone="ok" hint="vs yesterday" series={SERIES} />
      <Stat label="Failed" value="4" delta="+2" deltaTone="danger" series={[0, 1, 0, 2, 1, 0, 1, 2, 2, 4]} />
      <Stat label="Models" value="5" hint="2 local" />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "PulseStrip · live",
  parameters: {
    ds: "DS-3052"
  },
  render: () => <PulseStrip live nodes={[{
    key: "projects",
    label: "Projects",
    value: 12,
    tone: "ok",
    href: "/projects"
  }, {
    key: "capabilities",
    label: "Capabilities",
    value: 41,
    tone: "ok",
    href: "/capabilities"
  }, {
    key: "models",
    label: "Models",
    value: 5,
    tone: "warn",
    href: "/runtime/models"
  }, {
    key: "connections",
    label: "Connections",
    value: 3,
    tone: "danger",
    href: "/runtime/connections"
  }]} />
}`,...n.parameters?.docs?.source},description:{story:"PulseStrip (DS-3052): Projects ─ Capabilities ─ Models ─ Connections; filled dot healthy, hollow an issue.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Bands",
  parameters: {
    ds: "DS-3053"
  },
  render: () => <div style={{
    maxWidth: 480
  }}>
      <Bands items={[{
      key: "local",
      label: "Local",
      share: 62,
      tone: "ok"
    }, {
      key: "cloud",
      label: "Cloud",
      share: 30
    }, {
      key: "escalated",
      label: "Escalated",
      share: 8,
      tone: "warn"
    }]} />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Bands (DS-3053): shares as bar strips, never a pie.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "SummaryColumns",
  parameters: {
    ds: "DS-3054"
  },
  render: () => <SummaryColumns columns={[{
    title: "Ownership",
    rows: [{
      value: "Olena K.",
      label: "owner"
    }, {
      value: "12 members"
    }]
  }, {
    title: "Governance",
    rows: [{
      value: "internal",
      label: "classification"
    }, {
      value: "nexus-base 1.3.0",
      label: "Blueprint"
    }]
  }, {
    title: "Usage",
    rows: [{
      value: "128 runs",
      label: "today"
    }, {
      value: "4 failed"
    }]
  }]} />
}`,...r.parameters?.docs?.source},description:{story:"SummaryColumns (DS-3054): ownership · governance · usage on a detail page.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "StatusList",
  parameters: {
    ds: "DS-3055"
  },
  render: () => <div style={{
    maxWidth: 480
  }}>
      <StatusList rows={[{
      key: "qwen3-coder",
      name: "Qwen3 Coder",
      meta: "OpenRouter · tier 3",
      tone: "ok",
      status: "ready",
      href: "/models/qwen3-coder"
    }, {
      key: "qwen3-8b",
      name: "Qwen3 8B",
      meta: "local · tier 1",
      tone: "warn",
      status: "degraded",
      detail: "Latency above 2 s for 10 min"
    }, {
      key: "gpt5",
      name: "GPT-5",
      meta: "Azure OpenAI · tier 4",
      tone: "danger",
      status: "offline"
    }]} />
    </div>
}`,...t.parameters?.docs?.source},description:{story:"StatusList (DS-3055): compact name · meta · status rows on an overview.",...t.parameters?.docs?.description}}};export{t as List,n as Pulse,s as Shares,a as Spark,o as Stats,r as Summary,b as __namedExportsOrder,y as default};
