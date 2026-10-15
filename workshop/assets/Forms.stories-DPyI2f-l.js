import{F as i,j as e,r as s,f as D,g as L,B as C,P as V,h as T,i as F,b as W,k as E,l as P,m as R,n as j,o as N,p as z,H as M,q as A,s as H}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const G={title:"Kit/Forms",component:i,parameters:{ds:"DS-3010",docs:{description:{component:"The form contract (DS-3010): label above the control, hint under it, error under the hint with `role=alert`; the\ncontrol receives `id` and `aria-describedby` from the render prop. The form's first error receives focus on submit."}}}},k={name:"Field · hint · error · required",render:()=>e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:420},children:[e.jsx(i,{id:"f-name",label:"Display name",hint:"Shown in the launcher and in every header.",required:!0,children:n=>e.jsx("input",{...n,className:"nexus-input",defaultValue:"Customer Support"})}),e.jsx(i,{id:"f-slug",label:"Slug",error:"Only lowercase letters, digits and dashes.",children:n=>e.jsx("input",{...n,className:"nexus-input",defaultValue:"Customer Support!"})}),e.jsx(i,{id:"f-notes",label:"Notes",children:n=>e.jsx("textarea",{...n,className:"nexus-input",rows:3,defaultValue:""})})]})},h={name:"Select · compact · quiet",parameters:{ds:"DS-3011"},render:()=>{const[n,a]=s.useState("eu"),t=[{value:"eu",label:"EU (Frankfurt)",description:"Default"},{value:"us",label:"US (Virginia)"},{value:"ua",label:"Ukraine (Kyiv)",disabled:!0,description:"Not yet available"}];return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:420},children:[e.jsx(i,{id:"f-region",label:"Region",children:r=>e.jsx(j,{id:r.id,value:n,onChange:a,label:"Region",options:t})}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(j,{compact:!0,value:n,onChange:a,label:"Region (filter)",options:t}),e.jsx("span",{className:"nexus-mgmt-meta",children:"compact — a toolbar filter"})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(j,{quiet:!0,value:n,onChange:a,label:"Region (property)",options:t}),e.jsx("span",{className:"nexus-mgmt-meta",children:"quiet — a property value, no border at rest"})]})]})}},v={name:"Switch",parameters:{ds:"DS-3012"},render:()=>{const[n,a]=s.useState(!0);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(N,{checked:n,onChange:a,label:"Members may create projects"}),e.jsx(N,{checked:!1,onChange:()=>{},label:"Self-approval of goal completion",disabled:!0})]})}},g={name:"CheckList",parameters:{ds:"DS-3013"},render:()=>{const[n,a]=s.useState(["eng"]);return e.jsx(E,{label:"Groups",value:n,onChange:a,options:[{value:"eng",label:"Engineering",hint:"14 people"},{value:"support",label:"Support",hint:"9 people"},{value:"finance",label:"Finance"}]})}},b={name:"Toolbar · SearchField · showListControls",parameters:{ds:"DS-3019"},render:()=>{const[n,a]=s.useState(""),[t,r]=s.useState(20),o=H(t,n!=="");return e.jsxs("div",{style:{display:"grid",gap:12},children:[o?e.jsxs(D,{children:[e.jsx(L,{value:n,onChange:a,placeholder:"Filter models",label:"Filter models"}),e.jsx("span",{style:{marginLeft:"auto"},children:e.jsxs(C,{variant:"primary",size:"sm",children:[e.jsx(V,{size:14,"aria-hidden":!0})," Enable model"]})})]}):e.jsxs("p",{className:"nexus-mgmt-meta",style:{margin:0},children:[t," rows fit on one screen — no search, no filter."]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(C,{size:"sm",onClick:()=>r(8),children:"8 rows"}),e.jsx(C,{size:"sm",onClick:()=>r(20),children:"20 rows"})]})]})}},S={name:"SecretInput",parameters:{ds:"DS-3015"},render:()=>{const[n,a]=s.useState("sk-live-4f2a…");return e.jsx("div",{style:{maxWidth:420},children:e.jsx(i,{id:"f-key",label:"API key",hint:"Stored sealed in the Credential Broker. Shown only until you save.",children:t=>e.jsx(A,{...t,value:n,onChange:a,placeholder:"sk-…",testId:"api-key"})})})}},x={name:"RadioCard",parameters:{ds:"DS-3036"},render:()=>{const[n,a]=s.useState("draft");return e.jsx("div",{style:{maxWidth:420},children:e.jsxs(P,{label:"How the loop ends",testId:"story-radiocards",children:[e.jsx(R,{name:"end",value:"draft",checked:n==="draft",onChange:a,title:"Leave a draft",description:"The result waits in Tasks for a person to send it."}),e.jsx(R,{name:"end",value:"send",checked:n==="send",onChange:a,title:"Send when the evaluator passes",description:"No person in the loop; the policy ceiling still applies."}),e.jsx(R,{name:"end",value:"hold",checked:n==="hold",onChange:a,title:"Hold for review",description:"Every result stops at an approval.",disabled:!0})]})})}},y={name:"SaveViewPanel · new · replace existing",parameters:{ds:"DS-3037"},render:()=>{const[n,a]=s.useState("Q3 deliveries by district"),[t,r]=s.useState(""),[o,u]=s.useState(!1),[p,d]=s.useState(!0),m={title:"Save this view",name:"Name",description:"Description",replace:"Replace the existing view",save:"Save"};return e.jsxs("div",{style:{maxWidth:420,display:"grid",gap:12},children:[p?e.jsx(z,{labels:m,name:n,onName:a,description:t,onDescription:r,exists:n.trim().toLowerCase()==="q3 deliveries by district",replace:o,onReplace:u,onSubmit:c=>{c.preventDefault(),d(!1)},onCancel:()=>d(!1),testId:"story-save-view"}):e.jsx(C,{size:"sm",onClick:()=>d(!0),children:"Save view…"}),e.jsx(M,{children:"A name that already exists shows the *Replace* switch; Save is enabled throughout — validation happens on submit."})]})}},f={name:"Form rhythm (DS-7014)",parameters:{ds:"DS-7014"},render:()=>e.jsxs("form",{className:"nexus-cc-form",style:{maxWidth:560},onSubmit:n=>n.preventDefault(),children:[e.jsxs("div",{className:"nexus-cc-form-grid",children:[e.jsx(i,{id:"r-first",label:"First name",required:!0,children:n=>e.jsx("input",{...n,className:"nexus-input",defaultValue:"Olena"})}),e.jsx(i,{id:"r-last",label:"Last name",required:!0,children:n=>e.jsx("input",{...n,className:"nexus-input",defaultValue:"Kovalenko"})})]}),e.jsx(i,{id:"r-email",label:"Email",hint:"Where invitations and digests go.",error:"Enter an address with an @.",children:n=>e.jsx("input",{...n,className:"nexus-input",type:"email",defaultValue:"olena.kovalenko"})}),e.jsx(i,{id:"r-role",label:"Role",children:n=>e.jsx(j,{id:n.id,label:"Role",value:"member",onChange:()=>{},options:[{value:"member",label:"Member"},{value:"admin",label:"Administrator"}]})}),e.jsxs("fieldset",{className:"nexus-cc-fieldset",children:[e.jsx("legend",{className:"nexus-cc-eyebrow",children:"Notifications"}),e.jsx(N,{checked:!0,onChange:()=>{},label:"Weekly digest"}),e.jsx(N,{checked:!1,onChange:()=>{},label:"Mention alerts"})]})]})},w={name:"FilterPanel (DS-7013)",parameters:{ds:"DS-7013"},render:()=>{const[n,a]=s.useState("open"),[t,r]=s.useState(""),[o,u]=s.useState("email"),[p,d]=s.useState(""),m=[n?{key:"status",label:`Status: ${n}`,onRemove:()=>a("")}:null,t?{key:"owner",label:`Owner: ${t}`,onRemove:()=>r("")}:null,o?{key:"channel",label:`Channel: ${o}`,onRemove:()=>u("")}:null,p?{key:"lang",label:`Language: ${p}`,onRemove:()=>d("")}:null].filter(l=>l!==null),c=(l,B,q,O,I)=>e.jsx(j,{id:l,label:B,value:q,onChange:O,size:"toolbar",placeholder:"Any",options:I});return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsxs(D,{children:[e.jsx(L,{value:"",onChange:()=>{},placeholder:"Search conversations",label:"Search conversations"}),e.jsx("span",{style:{marginLeft:"auto"},children:e.jsxs(C,{variant:"primary",size:"toolbar",children:[e.jsx(V,{size:14,"aria-hidden":!0})," New"]})})]}),e.jsxs(T,{label:"Filters",clearLabel:"Clear all",active:m,onClear:()=>{a(""),r(""),u(""),d("")},testId:"story-filters",children:[e.jsx(F,{label:"Status",children:l=>c(l,"Status",n,a,[{value:"open",label:"Open"},{value:"waiting",label:"Waiting"},{value:"closed",label:"Closed"}])}),e.jsx(F,{label:"Owner",children:l=>c(l,"Owner",t,r,[{value:"me",label:"Me"},{value:"team",label:"My team"}])}),e.jsx(F,{label:"Channel",children:l=>c(l,"Channel",o,u,[{value:"email",label:"Email"},{value:"chat",label:"Web chat"},{value:"phone",label:"Phone"}])}),e.jsx(F,{label:"Language",children:l=>c(l,"Language",p,d,[{value:"en",label:"English"},{value:"uk",label:"Ukrainian"}])})]}),e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:m.length?e.jsxs(e.Fragment,{children:[m.length," filters · ",e.jsxs(W,{children:[12," of 48"]})]}):"48 conversations"})]})}},K=["FieldStates","SelectField","Switches","Memberships","ToolbarRow","Secret","RadioCards","SaveView","Rhythm","Filters"];k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Field · hint · error · required",
  render: () => <div style={{
    display: "grid",
    gap: 16,
    maxWidth: 420
  }}>
      <Field id="f-name" label="Display name" hint="Shown in the launcher and in every header." required>
        {a => <input {...a} className="nexus-input" defaultValue="Customer Support" />}
      </Field>
      <Field id="f-slug" label="Slug" error="Only lowercase letters, digits and dashes.">
        {a => <input {...a} className="nexus-input" defaultValue="Customer Support!" />}
      </Field>
      <Field id="f-notes" label="Notes">
        {a => <textarea {...a} className="nexus-input" rows={3} defaultValue="" />}
      </Field>
    </div>
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Select · compact · quiet",
  parameters: {
    ds: "DS-3011"
  },
  render: () => {
    const [region, setRegion] = useState("eu");
    const options = [{
      value: "eu",
      label: "EU (Frankfurt)",
      description: "Default"
    }, {
      value: "us",
      label: "US (Virginia)"
    }, {
      value: "ua",
      label: "Ukraine (Kyiv)",
      disabled: true,
      description: "Not yet available"
    }];
    return <div style={{
      display: "grid",
      gap: 16,
      maxWidth: 420
    }}>
        <Field id="f-region" label="Region">{a => <Select id={a.id} value={region} onChange={setRegion} label="Region" options={options} />}</Field>
        <div style={{
        display: "flex",
        gap: 8,
        alignItems: "center"
      }}>
          <Select compact value={region} onChange={setRegion} label="Region (filter)" options={options} />
          <span className="nexus-mgmt-meta">compact — a toolbar filter</span>
        </div>
        <div style={{
        display: "flex",
        gap: 8,
        alignItems: "center"
      }}>
          <Select quiet value={region} onChange={setRegion} label="Region (property)" options={options} />
          <span className="nexus-mgmt-meta">quiet — a property value, no border at rest</span>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Select (DS-3011): the NexChat combobox as the suite's only select — never a native `<select>`.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Switch",
  parameters: {
    ds: "DS-3012"
  },
  render: () => {
    const [on, setOn] = useState(true);
    return <div style={{
      display: "grid",
      gap: 12
    }}>
        <Switch checked={on} onChange={setOn} label="Members may create projects" />
        <Switch checked={false} onChange={() => {}} label="Self-approval of goal completion" disabled />
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Switch (DS-3012): the change is the commit; the caller shows the saved note.",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "CheckList",
  parameters: {
    ds: "DS-3013"
  },
  render: () => {
    const [value, setValue] = useState(["eng"]);
    return <CheckList label="Groups" value={value} onChange={setValue} options={[{
      value: "eng",
      label: "Engineering",
      hint: "14 people"
    }, {
      value: "support",
      label: "Support",
      hint: "9 people"
    }, {
      value: "finance",
      label: "Finance"
    }]} />;
  }
}`,...g.parameters?.docs?.source},description:{story:"CheckList (DS-3013): memberships — groups, projects.",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Toolbar · SearchField · showListControls",
  parameters: {
    ds: "DS-3019"
  },
  render: () => {
    const [q, setQ] = useState("");
    const [total, setTotal] = useState(20);
    const show = showListControls(total, q !== "");
    return <div style={{
      display: "grid",
      gap: 12
    }}>
        {show ? <Toolbar>
            <SearchField value={q} onChange={setQ} placeholder="Filter models" label="Filter models" />
            <span style={{
          marginLeft: "auto"
        }}>
              <Button variant="primary" size="sm"><Plus size={14} aria-hidden /> Enable model</Button>
            </span>
          </Toolbar> : <p className="nexus-mgmt-meta" style={{
        margin: 0
      }}>{total} rows fit on one screen — no search, no filter.</p>}
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <Button size="sm" onClick={() => setTotal(8)}>8 rows</Button>
          <Button size="sm" onClick={() => setTotal(20)}>20 rows</Button>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"SearchField (DS-3014) and the Toolbar (DS-3019). A control that cannot change anything is not shown.",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "SecretInput",
  parameters: {
    ds: "DS-3015"
  },
  render: () => {
    const [v, setV] = useState("sk-live-4f2a…");
    return <div style={{
      maxWidth: 420
    }}>
        <Field id="f-key" label="API key" hint="Stored sealed in the Credential Broker. Shown only until you save.">
          {a => <SecretInput {...a} value={v} onChange={setV} placeholder="sk-…" testId="api-key" />}
        </Field>
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:"SecretInput (DS-3015): masked, an eye reveals what was typed; a stored secret never comes back.",...S.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "RadioCard",
  parameters: {
    ds: "DS-3036"
  },
  render: () => {
    const [v, setV] = useState("draft");
    return <div style={{
      maxWidth: 420
    }}>
        <RadioCardGroup label="How the loop ends" testId="story-radiocards">
          <RadioCard name="end" value="draft" checked={v === "draft"} onChange={setV} title="Leave a draft" description="The result waits in Tasks for a person to send it." />
          <RadioCard name="end" value="send" checked={v === "send"} onChange={setV} title="Send when the evaluator passes" description="No person in the loop; the policy ceiling still applies." />
          <RadioCard name="end" value="hold" checked={v === "hold"} onChange={setV} title="Hold for review" description="Every result stops at an approval." disabled />
        </RadioCardGroup>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:"RadioCard (DS-3036): two to five explained options — the card is the label; never a Select for that.",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "SaveViewPanel · new · replace existing",
  parameters: {
    ds: "DS-3037"
  },
  render: () => {
    const [name, setName] = useState("Q3 deliveries by district");
    const [desc, setDesc] = useState("");
    const [replace, setReplace] = useState(false);
    const [shown, setShown] = useState(true);
    const labels = {
      title: "Save this view",
      name: "Name",
      description: "Description",
      replace: "Replace the existing view",
      save: "Save"
    };
    return <div style={{
      maxWidth: 420,
      display: "grid",
      gap: 12
    }}>
        {shown ? <SaveViewPanel labels={labels} name={name} onName={setName} description={desc} onDescription={setDesc} exists={name.trim().toLowerCase() === "q3 deliveries by district"} replace={replace} onReplace={setReplace} onSubmit={e => {
        e.preventDefault();
        setShown(false);
      }} onCancel={() => setShown(false)} testId="story-save-view" /> : <Button size="sm" onClick={() => setShown(true)}>Save view…</Button>}
        <Hint>A name that already exists shows the *Replace* switch; Save is enabled throughout — validation happens on submit.</Hint>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:"SaveViewPanel (DS-3037): *Save this view* — one panel for NexGraph, NexMap and (S3) NexBI's dashboards.",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Form rhythm (DS-7014)",
  parameters: {
    ds: "DS-7014"
  },
  render: () => <form className="nexus-cc-form" style={{
    maxWidth: 560
  }} onSubmit={e => e.preventDefault()}>
      <div className="nexus-cc-form-grid">
        <Field id="r-first" label="First name" required>
          {a => <input {...a} className="nexus-input" defaultValue="Olena" />}
        </Field>
        <Field id="r-last" label="Last name" required>
          {a => <input {...a} className="nexus-input" defaultValue="Kovalenko" />}
        </Field>
      </div>
      <Field id="r-email" label="Email" hint="Where invitations and digests go." error="Enter an address with an @.">
        {a => <input {...a} className="nexus-input" type="email" defaultValue="olena.kovalenko" />}
      </Field>
      <Field id="r-role" label="Role">
        {a => <Select id={a.id} label="Role" value="member" onChange={() => {}} options={[{
        value: "member",
        label: "Member"
      }, {
        value: "admin",
        label: "Administrator"
      }]} />}
      </Field>
      <fieldset className="nexus-cc-fieldset">
        <legend className="nexus-cc-eyebrow">Notifications</legend>
        <Switch checked onChange={() => {}} label="Weekly digest" />
        <Switch checked={false} onChange={() => {}} label="Mention alerts" />
      </fieldset>
    </form>
}`,...f.parameters?.docs?.source},description:{story:'Form rhythm (DS-7014): label · 6 · 34 px control · 6 · hint; 16 between fields; a two-column grid at 16 × 24; "wrong" said once.',...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "FilterPanel (DS-7013)",
  parameters: {
    ds: "DS-7013"
  },
  render: () => {
    const [status, setStatus] = useState("open");
    const [owner, setOwner] = useState("");
    const [channel, setChannel] = useState("email");
    const [lang, setLang] = useState("");
    const active = [status ? {
      key: "status",
      label: \`Status: \${status}\`,
      onRemove: () => setStatus("")
    } : null, owner ? {
      key: "owner",
      label: \`Owner: \${owner}\`,
      onRemove: () => setOwner("")
    } : null, channel ? {
      key: "channel",
      label: \`Channel: \${channel}\`,
      onRemove: () => setChannel("")
    } : null, lang ? {
      key: "lang",
      label: \`Language: \${lang}\`,
      onRemove: () => setLang("")
    } : null].filter((a): a is NonNullable<typeof a> => a !== null);
    const sel = (id: string, label: string, value: string, onChange: (v: string) => void, options: {
      value: string;
      label: string;
    }[]) => <Select id={id} label={label} value={value} onChange={onChange} size="toolbar" placeholder="Any" options={options} />;
    return <div style={{
      display: "grid",
      gap: 12
    }}>
        <Toolbar>
          <SearchField value="" onChange={() => {}} placeholder="Search conversations" label="Search conversations" />
          <span style={{
          marginLeft: "auto"
        }}><Button variant="primary" size="toolbar"><Plus size={14} aria-hidden /> New</Button></span>
        </Toolbar>
        <FilterPanel label="Filters" clearLabel="Clear all" active={active} onClear={() => {
        setStatus("");
        setOwner("");
        setChannel("");
        setLang("");
      }} testId="story-filters">
          <FilterField label="Status">{id => sel(id, "Status", status, setStatus, [{
            value: "open",
            label: "Open"
          }, {
            value: "waiting",
            label: "Waiting"
          }, {
            value: "closed",
            label: "Closed"
          }])}</FilterField>
          <FilterField label="Owner">{id => sel(id, "Owner", owner, setOwner, [{
            value: "me",
            label: "Me"
          }, {
            value: "team",
            label: "My team"
          }])}</FilterField>
          <FilterField label="Channel">{id => sel(id, "Channel", channel, setChannel, [{
            value: "email",
            label: "Email"
          }, {
            value: "chat",
            label: "Web chat"
          }, {
            value: "phone",
            label: "Phone"
          }])}</FilterField>
          <FilterField label="Language">{id => sel(id, "Language", lang, setLang, [{
            value: "en",
            label: "English"
          }, {
            value: "uk",
            label: "Ukrainian"
          }])}</FilterField>
        </FilterPanel>
        <p className="nexus-mgmt-meta" style={{
        margin: 0
      }}>{active.length ? <>{active.length} filters · <Chip>{12} of 48</Chip></> : "48 conversations"}</p>
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Filter panel (DS-7013): more than three filters leave the toolbar; active filters repeat as removable chips with *Clear all*.",...w.parameters?.docs?.description}}};export{k as FieldStates,w as Filters,g as Memberships,x as RadioCards,f as Rhythm,y as SaveView,S as Secret,h as SelectField,v as Switches,b as ToolbarRow,K as __namedExportsOrder,G as default};
