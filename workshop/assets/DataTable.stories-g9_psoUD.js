import{c as p,j as i,B as g,r as h,S as y}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const w=[{id:"qwen3-235b",name:"Qwen3 235B",provider:"OpenRouter",tier:3,status:"ready"},{id:"qwen3-coder",name:"Qwen3 Coder",provider:"OpenRouter",tier:3,status:"ready"},{id:"qwen3-8b",name:"Qwen3 8B",provider:"llama.cpp · local",tier:1,status:"degraded"},{id:"bge-m3",name:"bge-m3 (embeddings)",provider:"llama.cpp · local",tier:1,status:"ready"},{id:"gpt5",name:"GPT-5",provider:"Azure OpenAI",tier:4,status:"offline"}],b={ready:"ok",degraded:"warn",offline:"danger"},l=[{key:"name",header:"Model",render:e=>i.jsx("strong",{children:e.name})},{key:"provider",header:"Provider",render:e=>e.provider},{key:"tier",header:"Tier",align:"center",width:"72px",render:e=>e.tier},{key:"status",header:"Availability",render:e=>i.jsx(y,{tone:b[e.status],children:e.status})}],E={title:"Kit/DataTable",component:p,parameters:{ds:"DS-3030",docs:{description:{component:`DataTable (DS-3030): every list of records in the suite. 36 px sticky header, 42 px rows, one border; click /
Space selects, Enter / double-click drills in. The body owns loading, error and empty — a header over nothing is
the defect the fitness test catches ( AC-3).`}}},args:{rows:w,columns:l,rowKey:e=>e.id,caption:"Models available to this project"}},a={},t={render:e=>{const[m,u]=h.useState("qwen3-coder");return i.jsx(p,{...e,selected:m,onOpen:c=>u(c.id),onActivate:c=>window.alert(`open ${c.name}`)})}},o={name:"Empty (inline EmptyState in the body)",args:{rows:[],empty:{title:"No models are enabled for this project",body:"Enable one from the organization catalogue.",action:i.jsx(g,{size:"sm",children:"Enable a model"})}}},s={args:{rows:[],state:"loading"}},n={name:"Error · Retry",args:{rows:[],state:"error",onRetry:()=>{}}},d={name:"Wrapping cells",args:{columns:[...l.slice(0,1),{key:"desc",header:"Description",wrap:!0,render:e=>`${e.name} is served by ${e.provider}; tier ${e.tier} models are routed for long, multi-step work and fall back to a local model when the connection degrades.`},...l.slice(3)]}},r={name:"Bare header (forbidden)",tags:["legacy"],args:{rows:[]}},v=["Populated","Selectable","Empty","Loading","Failed","Wrapping","BareHeader"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string | null>("qwen3-coder");
    return <DataTable {...args} selected={selected} onOpen={m => setSelected(m.id)} onActivate={m => window.alert(\`open \${m.name}\`)} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Empty (inline EmptyState in the body)",
  args: {
    rows: [],
    empty: {
      title: "No models are enabled for this project",
      body: "Enable one from the organization catalogue.",
      action: <Button size="sm">Enable a model</Button>
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    state: "loading"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Error · Retry",
  args: {
    rows: [],
    state: "error",
    onRetry: () => {}
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Wrapping cells",
  args: {
    columns: [...COLUMNS.slice(0, 1), {
      key: "desc",
      header: "Description",
      wrap: true,
      render: (m: Model) => \`\${m.name} is served by \${m.provider}; tier \${m.tier} models are routed for long, multi-step work and fall back to a local model when the connection degrades.\`
    }, ...COLUMNS.slice(3)]
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Bare header (forbidden)",
  tags: ["legacy"],
  args: {
    rows: []
  }
}`,...r.parameters?.docs?.source},description:{story:"The defect: a header with nothing under it. Kept so the fitness rule has a DOM to fail on.",...r.parameters?.docs?.description}}};export{r as BareHeader,o as Empty,n as Failed,s as Loading,a as Populated,t as Selectable,d as Wrapping,v as __namedExportsOrder,E as default};
