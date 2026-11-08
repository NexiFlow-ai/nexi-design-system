import{I as u,r as i,j as e,m as s,n as r,S as a,i as F,E as I,o as S,F as y,h as C,B as g,p as k,a as D,q as E,L as N}from"./iframe-C_4ax-Jm.js";import{P as B}from"./pencil-CCPuQVYt.js";import"./preload-helper-PPVm8Dsz.js";const P={title:"Kit/Inspector",component:u,parameters:{ds:"DS-3031",layout:"fullscreen",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:`Inspector (DS-3031): the right-hand panel where a person reads and edits one thing. Head: kind · title · close
(and ⋯). Body: sections. Foot: the primary action, sticky. Resizable 360–640 px by its splitter (drag, ← →,
double-click resets), Esc closes and focus returns to the opener.`}}}};function j({children:t}){return e.jsx("div",{style:{display:"flex",minHeight:480,justifyContent:"flex-end"},children:t})}const h={render:()=>{const[t,n]=i.useState(!0);return e.jsx(j,{children:e.jsxs(u,{kind:"Model",title:"Qwen3 Coder",onClose:()=>{},menu:[{key:"copy",label:"Copy model id",onSelect:()=>{}}],footer:e.jsx(I,{editing:!1,onEdit:()=>{},onCancel:()=>{},onSave:()=>{}}),children:[e.jsxs(s,{idiom:"rule",title:"Availability",children:[e.jsx(r,{label:"Status",children:e.jsx(a,{tone:"ok",children:"ready"})}),e.jsx(r,{label:"Provider",children:"OpenRouter"}),e.jsx(r,{label:"Tier",children:"3"})]}),e.jsx(s,{idiom:"rule",title:"Policy",description:"From the organization Blueprint",children:e.jsx(F,{checked:t,onChange:n,label:"Enabled for this project"})}),e.jsxs(s,{idiom:"rule",title:"Details",collapsible:!0,defaultOpen:!1,testId:"section-details",children:[e.jsx(r,{label:"Created",children:"11 Oct, 22:41"}),e.jsx(r,{label:"Version",children:"3"})]})]})})}},x={name:"With tabs · subtitle",render:()=>{const[t,n]=i.useState("details");return e.jsx(j,{children:e.jsx(u,{kind:"Work item",title:"Classify incident root causes",subtitle:"EP-118 · Sprint 14",onClose:()=>{},tabs:e.jsx(N,{tabs:[{key:"details",label:"Details"},{key:"activity",label:"Activity",count:4}],current:t,onChange:n,label:"Inspector sections"}),children:t==="details"?e.jsxs(s,{idiom:"rule",title:"Details",children:[e.jsx(r,{label:"Status",children:e.jsx(a,{tone:"warn",children:"In progress"})}),e.jsx(r,{label:"Priority",children:e.jsx(D,{tone:"danger",children:"High"})})]}):e.jsx(s,{idiom:"rule",title:"Activity",children:e.jsx(E,{variant:"inline",title:"No comments in the last 7 days"})})})})}},l={name:"Open · Esc · splitter",render:()=>{const[t,n]=i.useState(!1),m=i.useRef(null);return e.jsxs("div",{style:{display:"flex",minHeight:480,gap:16,padding:16},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx(g,{ref:m,onClick:()=>n(!0),"aria-expanded":t,children:"Open Inspector"}),e.jsx("p",{className:"nexus-mgmt-meta",children:"Focus lands on the title; Esc closes and returns focus here; the splitter is a keyboard separator."})]}),t?e.jsx(u,{kind:"Model",title:"Qwen3 Coder",onClose:()=>n(!1),returnFocusTo:m.current,children:e.jsx(s,{idiom:"rule",title:"Availability",children:e.jsx(r,{label:"Status",children:e.jsx(a,{tone:"ok",children:"ready"})})})}):null]})}},c={name:"Over the page",render:()=>{const[t,n]=i.useState(!0);return e.jsxs("div",{className:"nexus-cc-split","data-inspector":t?"open":"closed",style:{width:"min(960px, 100%)",minHeight:480,border:"1px solid var(--nexus-border)"},children:[e.jsxs("div",{className:"nexus-cc-page",style:{padding:16},children:[e.jsx(g,{onClick:()=>n(!0),"aria-expanded":t,children:"Open Inspector"}),e.jsxs("table",{className:"nexus-cc-table",style:{marginTop:16},children:[e.jsx("caption",{className:"nexus-visually-hidden",children:"Models"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Model"}),e.jsx("th",{scope:"col",children:"Provider"}),e.jsx("th",{scope:"col",children:"Tier"}),e.jsx("th",{scope:"col",children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"is-selected",children:[e.jsx("td",{children:"Qwen3 Coder"}),e.jsx("td",{children:"OpenRouter"}),e.jsx("td",{children:"3"}),e.jsx("td",{children:e.jsx(a,{tone:"ok",children:"ready"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Llama 4 Scout"}),e.jsx("td",{children:"OpenRouter"}),e.jsx("td",{children:"2"}),e.jsx("td",{children:e.jsx(a,{tone:"ok",children:"ready"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mistral Small"}),e.jsx("td",{children:"Mistral"}),e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsx(a,{tone:"neutral",children:"paused"})})]})]})]})]}),t?e.jsx(u,{kind:"Model",title:"Qwen3 Coder",onClose:()=>n(!1),children:e.jsxs(s,{idiom:"rule",title:"Availability",children:[e.jsx(r,{label:"Status",children:e.jsx(a,{tone:"ok",children:"ready"})}),e.jsx(r,{label:"Provider",children:"OpenRouter"})]})}):null]})}},d={name:"InspectorSection · rule · caps",parameters:{ds:"DS-3032",layout:"padded"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,maxWidth:800},children:[e.jsxs("div",{children:[e.jsx(s,{idiom:"rule",title:"Description",aside:e.jsx(k,{label:"Edit description",children:e.jsx(B,{size:14,"aria-hidden":!0})}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Group the 412 open incidents by probable root cause."})}),e.jsx(s,{idiom:"rule",title:"Relations",description:"What this item blocks or depends on",aside:e.jsx("span",{children:"2"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Blocks EP-118 · Related to EP-102"})})]}),e.jsxs("div",{children:[e.jsx(s,{title:"Description (caps · legacy)",children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Group the 412 open incidents by probable root cause."})}),e.jsx(s,{title:"Relations (caps · legacy)",aside:e.jsx("span",{children:"2"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Blocks EP-118 · Related to EP-102"})})]})]})},p={name:"FormInspector (New …)",parameters:{ds:"DS-3033"},render:()=>{const[t,n]=i.useState(""),[m,v]=i.useState("eu");return e.jsx(j,{children:e.jsxs(S,{title:"New project",kind:"Project",onClose:()=>{},onSubmit:o=>o.preventDefault(),primary:{label:"Create project"},children:[e.jsx(y,{id:"fi-name",label:"Name",required:!0,children:o=>e.jsx("input",{...o,className:"nexus-input",value:t,onChange:f=>n(f.target.value)})}),e.jsx(y,{id:"fi-region",label:"Region",children:o=>e.jsx(C,{id:o.id,value:m,onChange:v,label:"Region",options:[{value:"eu",label:"EU (Frankfurt)"},{value:"us",label:"US (Virginia)"}]})})]})})}},b={name:"FormInspector · error",parameters:{ds:"DS-3033"},render:()=>e.jsx(j,{children:e.jsx(S,{title:"New project",kind:"Project",lead:"Organization: Acme Retail",onClose:()=>{},onSubmit:t=>t.preventDefault(),primary:{label:"Create project"},error:"A project with this name already exists.",children:e.jsx(y,{id:"fi-name-2",label:"Name",required:!0,children:t=>e.jsx("input",{...t,className:"nexus-input",defaultValue:"Customer Support"})})})})},T=["Detail","WithTabs","Live","OverThePage","Sections","Form","FormWithError"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Open from a button: focus lands on the title, Esc closes and returns focus to the opener.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Over the page",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="nexus-cc-split" data-inspector={open ? "open" : "closed"} style={{
      width: "min(960px, 100%)",
      minHeight: 480,
      border: "1px solid var(--nexus-border)"
    }}>
        <div className="nexus-cc-page" style={{
        padding: 16
      }}>
          <Button onClick={() => setOpen(true)} aria-expanded={open}>Open Inspector</Button>
          <table className="nexus-cc-table" style={{
          marginTop: 16
        }}>
            <caption className="nexus-visually-hidden">Models</caption>
            <thead><tr><th scope="col">Model</th><th scope="col">Provider</th><th scope="col">Tier</th><th scope="col">Status</th></tr></thead>
            <tbody>
              <tr className="is-selected"><td>Qwen3 Coder</td><td>OpenRouter</td><td>3</td><td><StatusDot tone="ok">ready</StatusDot></td></tr>
              <tr><td>Llama 4 Scout</td><td>OpenRouter</td><td>2</td><td><StatusDot tone="ok">ready</StatusDot></td></tr>
              <tr><td>Mistral Small</td><td>Mistral</td><td>1</td><td><StatusDot tone="neutral">paused</StatusDot></td></tr>
            </tbody>
          </table>
        </div>
        {open ? <Inspector kind="Model" title="Qwen3 Coder" onClose={() => setOpen(false)}>
            <InspectorSection idiom="rule" title="Availability">
              <Fact label="Status"><StatusDot tone="ok">ready</StatusDot></Fact>
              <Fact label="Provider">OpenRouter</Fact>
            </InspectorSection>
          </Inspector> : null}
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`Over the page (owner 2026-10-24): the split is too narrow to hold a 640 px page beside the panel, so the panel lays
over the page's right edge — the table beneath keeps its columns, its selection and its scroll instead of being
squeezed a column at a time. Rendered in a 960 px split; widen the canvas past ~1080 px and it pushes again.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"InspectorSection (DS-3032): `rule` is the contract; `caps` is the pre- uppercase h4, legacy.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`FormInspector (DS-3033): creation happens in the Inspector — “New …” opens it empty, the footer carries Submit.
The owner's review: the head owns kind · title · one line of subtitle; 16 · rule · 16 · fields 16
apart; the footer is one toolbar-size primary, right-aligned, enabled throughout (validation on submit), with Cancel
as a link — never two bordered twins, never a disabled primary as the only clue. A \`lead\` sentence under the rule
is retired: what must be said before the first field is the subtitle.`,...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};export{h as Detail,p as Form,b as FormWithError,l as Live,c as OverThePage,d as Sections,x as WithTabs,T as __namedExportsOrder,P as default};
