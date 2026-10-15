import{N as l,r as p,j as e,O as a,n as d,V as c,b as s,a4 as u,w as r,S as h}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Kit/Properties",component:l,parameters:{ds:"DS-3017",docs:{description:{component:`PropertyList (DS-3017): an Inspector shows a resource's *properties* — one quiet row per property, label left,
value right; the value *is* the control (). No bordered field boxes, no helper sentences.`}}}},t={name:"PropertyList · PropertyRow",render:()=>{const[o,i]=p.useState("progress");return e.jsx("div",{style:{maxWidth:440},children:e.jsxs(l,{"aria-label":"Work item properties",children:[e.jsx(a,{label:"Status",children:e.jsx(d,{quiet:!0,value:o,onChange:i,label:"Status",options:[{value:"todo",label:"To do"},{value:"progress",label:"In progress"},{value:"done",label:"Done"}]})}),e.jsx(a,{label:"Assignee",align:"start",children:e.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[e.jsx(c,{name:"Olena Kovalenko",size:20})," Olena K."]})}),e.jsx(a,{label:"Priority",children:e.jsx(s,{tone:"danger",children:"High"})}),e.jsx(a,{label:"Due",hint:"after start",children:"12 Oct 2026"}),e.jsx(a,{label:"Tags",align:"start",children:e.jsxs("span",{style:{display:"inline-flex",gap:4},children:[e.jsx(s,{children:"incident"}),e.jsx(s,{children:"q4"})]})})]})})}},n={name:"Facts · Fact",parameters:{ds:"DS-3018"},render:()=>e.jsxs("div",{style:{display:"grid",gap:24,maxWidth:640},children:[e.jsx(u,{columns:2,items:[{label:"Created",value:"12 Aug 2026"},{label:"Owner",value:"Olena K."},{label:"Classification",value:e.jsx(s,{children:"internal"})},{label:"Blueprint",value:"nexus-base 1.3.0"}]}),e.jsxs("div",{style:{maxWidth:360},children:[e.jsx(r,{label:"Status",children:e.jsx(h,{tone:"warn",children:"In progress"})}),e.jsx(r,{label:"Assignee",children:"Olena K."}),e.jsx(r,{label:"Iteration",children:"Sprint 14"})]})]})},m=["Properties","ReadOnly"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "PropertyList · PropertyRow",
  render: () => {
    const [status, setStatus] = useState("progress");
    return <div style={{
      maxWidth: 440
    }}>
        <PropertyList aria-label="Work item properties">
          <PropertyRow label="Status">
            <Select quiet value={status} onChange={setStatus} label="Status" options={[{
            value: "todo",
            label: "To do"
          }, {
            value: "progress",
            label: "In progress"
          }, {
            value: "done",
            label: "Done"
          }]} />
          </PropertyRow>
          <PropertyRow label="Assignee" align="start">
            <span style={{
            display: "inline-flex",
            gap: 6,
            alignItems: "center"
          }}><Avatar name="Olena Kovalenko" size={20} /> Olena K.</span>
          </PropertyRow>
          <PropertyRow label="Priority"><Chip tone="danger">High</Chip></PropertyRow>
          <PropertyRow label="Due" hint="after start">12 Oct 2026</PropertyRow>
          <PropertyRow label="Tags" align="start">
            <span style={{
            display: "inline-flex",
            gap: 4
          }}><Chip>incident</Chip><Chip>q4</Chip></span>
          </PropertyRow>
        </PropertyList>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Facts · Fact",
  parameters: {
    ds: "DS-3018"
  },
  render: () => <div style={{
    display: "grid",
    gap: 24,
    maxWidth: 640
  }}>
      <Facts columns={2} items={[{
      label: "Created",
      value: "12 Aug 2026"
    }, {
      label: "Owner",
      value: "Olena K."
    }, {
      label: "Classification",
      value: <Chip>internal</Chip>
    }, {
      label: "Blueprint",
      value: "nexus-base 1.3.0"
    }]} />
      <div style={{
      maxWidth: 360
    }}>
        <Fact label="Status"><StatusDot tone="warn">In progress</StatusDot></Fact>
        <Fact label="Assignee">Olena K.</Fact>
        <Fact label="Iteration">Sprint 14</Fact>
      </div>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Facts (DS-3018): read-only label · value pairs on a detail page, one or two columns; `Fact` is the Inspector row.",...n.parameters?.docs?.description}}};export{t as Properties,n as ReadOnly,m as __namedExportsOrder,b as default};
