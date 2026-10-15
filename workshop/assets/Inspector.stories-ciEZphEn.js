import{t as h,r as a,j as e,v as n,w as r,S as y,o as f,E as F,x as S,F as x,n as I,B as v,I as C,y as k,b as E,z as B,L as D}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const R={title:"Kit/Inspector",component:h,parameters:{ds:"DS-3031",layout:"fullscreen",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:`Inspector (DS-3031): the right-hand panel where a person reads and edits one thing. Head: kind · title · close
(and ⋯). Body: sections. Foot: the primary action, sticky. Resizable 360–640 px by its splitter (drag, ← →,
double-click resets), Esc closes and focus returns to the opener.`}}}};function b({children:t}){return e.jsx("div",{style:{display:"flex",minHeight:480,justifyContent:"flex-end"},children:t})}const p={render:()=>{const[t,s]=a.useState(!0);return e.jsx(b,{children:e.jsxs(h,{kind:"Model",title:"Qwen3 Coder",onClose:()=>{},menu:[{key:"copy",label:"Copy model id",onSelect:()=>{}}],footer:e.jsx(F,{editing:!1,onEdit:()=>{},onCancel:()=>{},onSave:()=>{}}),children:[e.jsxs(n,{idiom:"rule",title:"Availability",children:[e.jsx(r,{label:"Status",children:e.jsx(y,{tone:"ok",children:"ready"})}),e.jsx(r,{label:"Provider",children:"OpenRouter"}),e.jsx(r,{label:"Tier",children:"3"})]}),e.jsx(n,{idiom:"rule",title:"Policy",description:"From the organization Blueprint",children:e.jsx(f,{checked:t,onChange:s,label:"Enabled for this project"})}),e.jsxs(n,{idiom:"rule",title:"Details",collapsible:!0,defaultOpen:!1,testId:"section-details",children:[e.jsx(r,{label:"Created",children:"11 Oct, 22:41"}),e.jsx(r,{label:"Version",children:"3"})]})]})})}},u={name:"With tabs · subtitle",render:()=>{const[t,s]=a.useState("details");return e.jsx(b,{children:e.jsx(h,{kind:"Work item",title:"Classify incident root causes",subtitle:"EP-118 · Sprint 14",onClose:()=>{},tabs:e.jsx(D,{tabs:[{key:"details",label:"Details"},{key:"activity",label:"Activity",count:4}],current:t,onChange:s,label:"Inspector sections"}),children:t==="details"?e.jsxs(n,{idiom:"rule",title:"Details",children:[e.jsx(r,{label:"Status",children:e.jsx(y,{tone:"warn",children:"In progress"})}),e.jsx(r,{label:"Priority",children:e.jsx(E,{tone:"danger",children:"High"})})]}):e.jsx(n,{idiom:"rule",title:"Activity",children:e.jsx(B,{variant:"inline",title:"No comments in the last 7 days"})})})})}},o={name:"Open · Esc · splitter",render:()=>{const[t,s]=a.useState(!1),d=a.useRef(null);return e.jsxs("div",{style:{display:"flex",minHeight:480,gap:16,padding:16},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx(v,{ref:d,onClick:()=>s(!0),"aria-expanded":t,children:"Open Inspector"}),e.jsx("p",{className:"nexus-mgmt-meta",children:"Focus lands on the title; Esc closes and returns focus here; the splitter is a keyboard separator."})]}),t?e.jsx(h,{kind:"Model",title:"Qwen3 Coder",onClose:()=>s(!1),returnFocusTo:d.current,children:e.jsx(n,{idiom:"rule",title:"Availability",children:e.jsx(r,{label:"Status",children:e.jsx(y,{tone:"ok",children:"ready"})})})}):null]})}},l={name:"InspectorSection · rule · caps",parameters:{ds:"DS-3032",layout:"padded"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,maxWidth:800},children:[e.jsxs("div",{children:[e.jsx(n,{idiom:"rule",title:"Description",aside:e.jsx(C,{label:"Edit description",children:e.jsx(k,{size:14,"aria-hidden":!0})}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Group the 412 open incidents by probable root cause."})}),e.jsx(n,{idiom:"rule",title:"Relations",description:"What this item blocks or depends on",aside:e.jsx("span",{children:"2"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Blocks EP-118 · Related to EP-102"})})]}),e.jsxs("div",{children:[e.jsx(n,{title:"Description (caps · legacy)",children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Group the 412 open incidents by probable root cause."})}),e.jsx(n,{title:"Relations (caps · legacy)",aside:e.jsx("span",{children:"2"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Blocks EP-118 · Related to EP-102"})})]})]})},c={name:"FormInspector (New …)",parameters:{ds:"DS-3033"},render:()=>{const[t,s]=a.useState(""),[d,g]=a.useState("eu");return e.jsx(b,{children:e.jsxs(S,{title:"New project",kind:"Project",onClose:()=>{},onSubmit:i=>i.preventDefault(),primary:{label:"Create project"},children:[e.jsx(x,{id:"fi-name",label:"Name",required:!0,children:i=>e.jsx("input",{...i,className:"nexus-input",value:t,onChange:j=>s(j.target.value)})}),e.jsx(x,{id:"fi-region",label:"Region",children:i=>e.jsx(I,{id:i.id,value:d,onChange:g,label:"Region",options:[{value:"eu",label:"EU (Frankfurt)"},{value:"us",label:"US (Virginia)"}]})})]})})}},m={name:"FormInspector · error",parameters:{ds:"DS-3033"},render:()=>e.jsx(b,{children:e.jsx(S,{title:"New project",kind:"Project",lead:"Organization: Acme Retail",onClose:()=>{},onSubmit:t=>t.preventDefault(),primary:{label:"Create project"},error:"A project with this name already exists.",children:e.jsx(x,{id:"fi-name-2",label:"Name",required:!0,children:t=>e.jsx("input",{...t,className:"nexus-input",defaultValue:"Customer Support"})})})})},P=["Detail","WithTabs","Live","Sections","Form","FormWithError"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(true);
    return <Frame>
        <Inspector kind="Model" title="Qwen3 Coder" onClose={() => {}} menu={[{
        key: "copy",
        label: "Copy model id",
        onSelect: () => {}
      }]} footer={<EditBar editing={false} onEdit={() => {}} onCancel={() => {}} onSave={() => {}} />}>
          <InspectorSection idiom="rule" title="Availability">
            <Fact label="Status"><StatusDot tone="ok">ready</StatusDot></Fact>
            <Fact label="Provider">OpenRouter</Fact>
            <Fact label="Tier">3</Fact>
          </InspectorSection>
          <InspectorSection idiom="rule" title="Policy" description="From the organization Blueprint">
            <Switch checked={enabled} onChange={setEnabled} label="Enabled for this project" />
          </InspectorSection>
          {/* rule-collapsible: the title is the disclosure, closed by default, the body kept in the DOM */}
          <InspectorSection idiom="rule" title="Details" collapsible defaultOpen={false} testId="section-details">
            <Fact label="Created">11 Oct, 22:41</Fact>
            <Fact label="Version">3</Fact>
          </InspectorSection>
        </Inspector>
      </Frame>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With tabs · subtitle",
  render: () => {
    const [tab, setTab] = useState("details");
    return <Frame>
        <Inspector kind="Work item" title="Classify incident root causes" subtitle="EP-118 · Sprint 14" onClose={() => {}} tabs={<LocalTabs tabs={[{
        key: "details",
        label: "Details"
      }, {
        key: "activity",
        label: "Activity",
        count: 4
      }]} current={tab} onChange={setTab} label="Inspector sections" />}>
          {tab === "details" ? <InspectorSection idiom="rule" title="Details">
              <Fact label="Status"><StatusDot tone="warn">In progress</StatusDot></Fact>
              <Fact label="Priority"><Chip tone="danger">High</Chip></Fact>
            </InspectorSection> : <InspectorSection idiom="rule" title="Activity">
              <EmptyState variant="inline" title="No comments in the last 7 days" />
            </InspectorSection>}
        </Inspector>
      </Frame>;
  }
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Open · Esc · splitter",
  render: () => {
    const [open, setOpen] = useState(false);
    const opener = useRef<HTMLButtonElement>(null);
    return <div style={{
      display: "flex",
      minHeight: 480,
      gap: 16,
      padding: 16
    }}>
        <div style={{
        flex: 1
      }}>
          <Button ref={opener} onClick={() => setOpen(true)} aria-expanded={open}>Open Inspector</Button>
          <p className="nexus-mgmt-meta">Focus lands on the title; Esc closes and returns focus here; the splitter is a keyboard separator.</p>
        </div>
        {open ? <Inspector kind="Model" title="Qwen3 Coder" onClose={() => setOpen(false)} returnFocusTo={opener.current}>
            <InspectorSection idiom="rule" title="Availability">
              <Fact label="Status"><StatusDot tone="ok">ready</StatusDot></Fact>
            </InspectorSection>
          </Inspector> : null}
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Open from a button: focus lands on the title, Esc closes and returns focus to the opener.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "InspectorSection · rule · caps",
  parameters: {
    ds: "DS-3032",
    layout: "padded"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    maxWidth: 800
  }}>
      <div>
        <InspectorSection idiom="rule" title="Description" aside={<IconButton label="Edit description"><Pencil size={14} aria-hidden /></IconButton>}>
          <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Group the 412 open incidents by probable root cause.</p>
        </InspectorSection>
        <InspectorSection idiom="rule" title="Relations" description="What this item blocks or depends on" aside={<span>2</span>}>
          <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Blocks EP-118 · Related to EP-102</p>
        </InspectorSection>
      </div>
      <div>
        <InspectorSection title="Description (caps · legacy)">
          <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Group the 412 open incidents by probable root cause.</p>
        </InspectorSection>
        <InspectorSection title="Relations (caps · legacy)" aside={<span>2</span>}>
          <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Blocks EP-118 · Related to EP-102</p>
        </InspectorSection>
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"InspectorSection (DS-3032): `rule` is the contract; `caps` is the pre- uppercase h4, legacy.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "FormInspector (New …)",
  parameters: {
    ds: "DS-3033"
  },
  render: () => {
    const [name, setName] = useState("");
    const [region, setRegion] = useState("eu");
    return <Frame>
        <FormInspector title="New project" kind="Project" onClose={() => {}} onSubmit={e => e.preventDefault()} primary={{
        label: "Create project"
      }}>
          <Field id="fi-name" label="Name" required>{a => <input {...a} className="nexus-input" value={name} onChange={e => setName(e.target.value)} />}</Field>
          <Field id="fi-region" label="Region">{a => <Select id={a.id} value={region} onChange={setRegion} label="Region" options={[{
            value: "eu",
            label: "EU (Frankfurt)"
          }, {
            value: "us",
            label: "US (Virginia)"
          }]} />}</Field>
        </FormInspector>
      </Frame>;
  }
}`,...c.parameters?.docs?.source},description:{story:`FormInspector (DS-3033): creation happens in the Inspector — “New …” opens it empty, the footer carries Submit.
The owner's review: the head owns kind · title · one line of subtitle; 16 · rule · 16 · fields 16
apart; the footer is one toolbar-size primary, right-aligned, enabled throughout (validation on submit), with Cancel
as a link — never two bordered twins, never a disabled primary as the only clue. A \`lead\` sentence under the rule
is retired: what must be said before the first field is the subtitle.`,...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "FormInspector · error",
  parameters: {
    ds: "DS-3033"
  },
  render: () => <Frame>
      <FormInspector title="New project" kind="Project" lead="Organization: Acme Retail" onClose={() => {}} onSubmit={e => e.preventDefault()} primary={{
      label: "Create project"
    }} error="A project with this name already exists.">
        <Field id="fi-name-2" label="Name" required>{a => <input {...a} className="nexus-input" defaultValue="Customer Support" />}</Field>
      </FormInspector>
    </Frame>
}`,...m.parameters?.docs?.source}}};export{p as Detail,c as Form,m as FormWithError,o as Live,l as Sections,u as WithTabs,P as __namedExportsOrder,R as default};
