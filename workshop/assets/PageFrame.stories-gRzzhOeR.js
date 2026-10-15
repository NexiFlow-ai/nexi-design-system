import{a0 as i,r as h,j as e,L as g,B as a,Q as x,b as t,a1 as b,a2 as m,a3 as p}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const j=[{key:"overview",label:"Overview"},{key:"members",label:"Members",count:12},{key:"capabilities",label:"Capabilities",count:7},{key:"runtime",label:"Runtime"}],S={title:"Kit/PageFrame",component:i,parameters:{ds:"DS-3020",layout:"fullscreen",docs:{description:{component:"PageFrame (DS-3020). `layout=\"dense\"` is the suite rule: one header line — back arrow · title · chips ·\nactions · ⋯ — and the content starts right under it. `stacked` (eyebrow · title · lead · meta) is NexCore's and\nNexChat's own frame and is legacy everywhere else."}}}},l={name:"Dense (the one header line)",render:()=>{const[o,u]=h.useState("runtime");return e.jsx(i,{layout:"dense",back:{href:"/projects",label:"Back to projects"},title:"Customer Support",meta:e.jsxs(e.Fragment,{children:[e.jsx(t,{tone:"ok",children:"Active"}),e.jsx(t,{children:"internal"})]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Edit"}),e.jsx(x,{label:"More actions",items:[{key:"archive",label:"Archive project",onSelect:()=>{}}]})]}),tabs:e.jsx(g,{tabs:j,current:o,onChange:u,label:"Project sections",id:"project"}),children:e.jsx("div",{id:`project-panel-${o}`,role:"tabpanel","aria-labelledby":`project-tab-${o}`,children:e.jsxs("p",{className:"nexus-mgmt-meta",style:{margin:0},children:["Content starts within 96 px of the top. Panel: ",e.jsx("code",{children:o})]})})})}},c={name:"Dense · wide · no back",render:()=>e.jsx(i,{layout:"dense",width:"wide",title:"Executions",meta:e.jsx(t,{children:"last 24 h"}),actions:e.jsx(a,{variant:"primary",children:"New run"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Wide pages: matrix views, audit, executions."})})},d={name:"Dense · long title truncates",render:()=>e.jsx(i,{layout:"dense",back:{href:"/flows",label:"Back to flows"},title:"Weekly incident digest for the European support organisation with escalation to the duty manager",meta:e.jsxs(e.Fragment,{children:[e.jsx(t,{tone:"warn",children:"Draft"}),e.jsx(t,{children:"v3"}),e.jsx(t,{children:"shared"})]}),actions:e.jsx(a,{children:"Publish"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"The title ellipsises at 46 % width; chips and actions keep their row."})})},n={name:"Stacked (NexCore · NexChat only)",tags:["legacy"],render:()=>e.jsx(i,{layout:"stacked",back:{href:"/projects",label:"Projects"},eyebrow:"Project",title:"Customer Support",lead:"A project groups people, capabilities and runtime under one classification and one Blueprint.",meta:e.jsxs(e.Fragment,{children:[e.jsx(t,{tone:"ok",children:"Active"}),e.jsx(t,{children:"internal"}),e.jsx("span",{children:"Created 12 Aug 2026 · 12 members"})]}),actions:e.jsx(a,{children:"Edit"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"≈ 190 px before any content."})})},s={name:"PageLine (standalone)",parameters:{ds:"DS-3021",layout:"padded"},render:()=>e.jsx(b,{back:{href:"/agents",label:"Back to agents"},title:"Support triage agent",meta:e.jsx(t,{tone:"ok",children:"Published"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Run"}),e.jsx(a,{variant:"primary",children:"Save"})]})})},r={name:"Section",parameters:{ds:"DS-3022",layout:"padded"},render:()=>e.jsxs("div",{style:{display:"grid",gap:24,maxWidth:720},children:[e.jsx(m,{title:"Runtime",link:{href:"/runtime",label:"View all"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16},children:[e.jsx(p,{label:"Models",value:"5",hint:"2 local"}),e.jsx(p,{label:"Connections",value:"3",delta:"+1",deltaTone:"ok"}),e.jsx(p,{label:"Runs today",value:"128",series:[3,8,5,12,9,14,11]})]})}),e.jsx(m,{title:"People",aside:e.jsx(t,{children:"12"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Members and groups."})})]})},C=["Dense","DenseWide","LongTitle","Stacked","Line","Sections"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Dense (the one header line)",
  render: () => {
    const [tab, setTab] = useState("runtime");
    return <PageFrame layout="dense" back={{
      href: "/projects",
      label: "Back to projects"
    }} title="Customer Support" meta={<><Chip tone="ok">Active</Chip><Chip>internal</Chip></>} actions={<><Button>Edit</Button><Menu label="More actions" items={[{
        key: "archive",
        label: "Archive project",
        onSelect: () => {}
      }]} /></>} tabs={<LocalTabs tabs={TABS} current={tab} onChange={setTab} label="Project sections" id="project" />}>
        <div id={\`project-panel-\${tab}\`} role="tabpanel" aria-labelledby={\`project-tab-\${tab}\`}>
          <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Content starts within 96 px of the top. Panel: <code>{tab}</code></p>
        </div>
      </PageFrame>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Dense · wide · no back",
  render: () => <PageFrame layout="dense" width="wide" title="Executions" meta={<Chip>last 24 h</Chip>} actions={<Button variant="primary">New run</Button>}>
      <p className="nexus-mgmt-meta" style={{
      margin: 0
    }}>Wide pages: matrix views, audit, executions.</p>
    </PageFrame>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Dense · long title truncates",
  render: () => <PageFrame layout="dense" back={{
    href: "/flows",
    label: "Back to flows"
  }} title="Weekly incident digest for the European support organisation with escalation to the duty manager" meta={<><Chip tone="warn">Draft</Chip><Chip>v3</Chip><Chip>shared</Chip></>} actions={<Button>Publish</Button>}>
      <p className="nexus-mgmt-meta" style={{
      margin: 0
    }}>The title ellipsises at 46 % width; chips and actions keep their row.</p>
    </PageFrame>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Stacked (NexCore · NexChat only)",
  tags: ["legacy"],
  render: () => <PageFrame layout="stacked" back={{
    href: "/projects",
    label: "Projects"
  }} eyebrow="Project" title="Customer Support" lead="A project groups people, capabilities and runtime under one classification and one Blueprint." meta={<><Chip tone="ok">Active</Chip><Chip>internal</Chip><span>Created 12 Aug 2026 · 12 members</span></>} actions={<Button>Edit</Button>}>
      <p className="nexus-mgmt-meta" style={{
      margin: 0
    }}>≈ 190 px before any content.</p>
    </PageFrame>
}`,...n.parameters?.docs?.source},description:{story:"Stacked (legacy outside NexCore / NexChat): the five header rows the owner photographed.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "PageLine (standalone)",
  parameters: {
    ds: "DS-3021",
    layout: "padded"
  },
  render: () => <PageLine back={{
    href: "/agents",
    label: "Back to agents"
  }} title="Support triage agent" meta={<Chip tone="ok">Published</Chip>} actions={<><Button>Run</Button><Button variant="primary">Save</Button></>} />
}`,...s.parameters?.docs?.source},description:{story:"PageLine (DS-3021) on its own — for an app that keeps its own page layout (NexChat's builders).",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Section",
  parameters: {
    ds: "DS-3022",
    layout: "padded"
  },
  render: () => <div style={{
    display: "grid",
    gap: 24,
    maxWidth: 720
  }}>
      <Section title="Runtime" link={{
      href: "/runtime",
      label: "View all"
    }}>
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }}>
          <Stat label="Models" value="5" hint="2 local" />
          <Stat label="Connections" value="3" delta="+1" deltaTone="ok" />
          <Stat label="Runs today" value="128" series={[3, 8, 5, 12, 9, 14, 11]} />
        </div>
      </Section>
      <Section title="People" aside={<Chip>12</Chip>}>
        <p className="nexus-mgmt-meta" style={{
        margin: 0
      }}>Members and groups.</p>
      </Section>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"Section (DS-3022): uppercase title, optional trailing link — the building block of overviews.",...r.parameters?.docs?.description}}};export{l as Dense,c as DenseWide,s as Line,d as LongTitle,r as Sections,n as Stacked,C as __namedExportsOrder,S as default};
