import{P as c,r as u,j as e,x as t,h as m,z as h,a as r,Z as l,n as i,S as o,m as b}from"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Kit/Properties",component:c,parameters:{ds:"DS-3017",docs:{description:{component:`PropertyList (DS-3017): an Inspector shows a resource's *properties* — one quiet row per property, label left,
value right; the value *is* the control (). No bordered field boxes, no helper sentences.`}}}},s={name:"PropertyList · PropertyRow",render:()=>{const[d,p]=u.useState("progress");return e.jsx("div",{style:{maxWidth:440},children:e.jsxs(c,{"aria-label":"Work item properties",children:[e.jsx(t,{label:"Status",children:e.jsx(m,{quiet:!0,value:d,onChange:p,label:"Status",options:[{value:"todo",label:"To do"},{value:"progress",label:"In progress"},{value:"done",label:"Done"}]})}),e.jsx(t,{label:"Assignee",align:"start",children:e.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[e.jsx(h,{name:"Olena Kovalenko",size:20})," Olena K."]})}),e.jsx(t,{label:"Priority",children:e.jsx(r,{tone:"danger",children:"High"})}),e.jsx(t,{label:"Due",hint:"after start",children:"12 Oct 2026"}),e.jsx(t,{label:"Tags",align:"start",children:e.jsxs("span",{style:{display:"inline-flex",gap:4},children:[e.jsx(r,{children:"incident"}),e.jsx(r,{children:"q4"})]})})]})})}},n={name:"Facts · Fact",parameters:{ds:"DS-3018"},render:()=>e.jsxs("div",{style:{display:"grid",gap:24,maxWidth:640},children:[e.jsx(l,{columns:2,items:[{label:"Created",value:"12 Aug 2026"},{label:"Owner",value:"Olena K."},{label:"Classification",value:e.jsx(r,{children:"internal"})},{label:"Blueprint",value:"nexus-base 1.3.0"}]}),e.jsxs("div",{style:{maxWidth:360},children:[e.jsx(i,{label:"Status",children:e.jsx(o,{tone:"warn",children:"In progress"})}),e.jsx(i,{label:"Assignee",children:"Olena K."}),e.jsx(i,{label:"Iteration",children:"Sprint 14"})]})]})},a={name:"Facts · stacked · after a section",parameters:{ds:"DS-3018"},render:()=>e.jsxs("div",{style:{maxWidth:360},children:[e.jsx(b,{title:"Five states",children:e.jsx(l,{items:[{label:"Connection",value:e.jsx(o,{tone:"ok",children:"Healthy"})},{label:"Content",value:e.jsx(o,{tone:"ok",children:"Current"})},{label:"Processing",value:e.jsx(o,{tone:"neutral",children:"Queued"})}]})}),e.jsx(l,{items:[{label:"Mode",value:"One-time"},{label:"Documents",value:"3"}]}),e.jsx(l,{items:[{label:"Updated",value:"24 Sep 2026 16:39"}]})]})},g=["Properties","ReadOnly","Stacked"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Facts (DS-3018): read-only label · value pairs on a detail page, one or two columns; `Fact` is the Inspector row.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Facts · stacked · after a section",
  parameters: {
    ds: "DS-3018"
  },
  render: () => <div style={{
    maxWidth: 360
  }}>
      <InspectorSection title="Five states">
        <Facts items={[{
        label: "Connection",
        value: <StatusDot tone="ok">Healthy</StatusDot>
      }, {
        label: "Content",
        value: <StatusDot tone="ok">Current</StatusDot>
      }, {
        label: "Processing",
        value: <StatusDot tone="neutral">Queued</StatusDot>
      }]} />
      </InspectorSection>
      <Facts items={[{
      label: "Mode",
      value: "One-time"
    }, {
      label: "Documents",
      value: "3"
    }]} />
      <Facts items={[{
      label: "Updated",
      value: "24 Sep 2026 16:39"
    }]} />
    </div>
}`,...a.parameters?.docs?.source},description:{story:" (DS-3018, WP-7): one rule between neighbours. Two `Facts` blocks in a row, or a `Facts` after a bordered\n`InspectorSection`, share the rule between them — never a double hairline (NexGraph's binding Inspector drew two\nbetween *Processing* and *Mode*).",...a.parameters?.docs?.description}}};export{s as Properties,n as ReadOnly,a as Stacked,g as __namedExportsOrder,y as default};
