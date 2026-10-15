import{E as v,j as e,r as s,B as y,e as E,T as W,A as x,F as g,u as k}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const A={title:"Kit/EditBar",component:v,parameters:{ds:"DS-3016",docs:{description:{component:"EditBar (DS-3016): Edit → form → Save / Cancel. A dirty Cancel asks inline where the action was taken — an\n`ActionPanel` (Discard · Keep editing), never `window.confirm`."}}}};function S({canEdit:n=!0}){const[t,r]=s.useState(!1),[a,i]=s.useState("Customer Support"),[d,C]=s.useState(a),[j,b]=s.useState(!1),f=t&&d!==a;return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[t?e.jsx(g,{id:"eb-name",label:"Display name",children:D=>e.jsx("input",{...D,className:"nexus-input",value:d,onChange:w=>C(w.target.value)})}):e.jsx("p",{style:{margin:0},children:a}),e.jsx(v,{editing:t,canEdit:n,dirty:f,saved:j,onEdit:()=>{C(a),r(!0)},onCancel:()=>r(!1),onSave:()=>{i(d),r(!1),b(!0),window.setTimeout(()=>b(!1),2500)},children:e.jsx(y,{variant:"ghost",children:"Mark done"})})]})}const c={name:"Read (Edit + secondary)",render:()=>e.jsx(S,{})},u={name:"Read · cannot edit",render:()=>e.jsx(S,{canEdit:!1})},p={render:()=>e.jsxs("div",{style:{maxWidth:420},children:[e.jsx(g,{id:"eb-name-2",label:"Display name",children:n=>e.jsx("input",{...n,className:"nexus-input",defaultValue:"Customer Support"})}),e.jsx(v,{editing:!0,dirty:!0,onEdit:()=>{},onCancel:()=>{},onSave:()=>{}})]})},m={render:()=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(v,{editing:!0,error:"The name is already used by another project.",onEdit:()=>{},onCancel:()=>{},onSave:()=>{}})})},o={name:"Dirty Cancel asks inline",render:()=>{const n=k(!0);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[e.jsx(y,{onClick:()=>n.guard(()=>{}),disabled:n.asking,children:"Cancel (dirty)"}),n.panel]})}},l={name:"ActionPanel · reversible · destructive",parameters:{ds:"DS-3034"},render:()=>{const[n,t]=s.useState("none"),[r,a]=s.useState("");return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:520},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsxs(y,{onClick:()=>t("reversible"),disabled:n==="reversible",children:[e.jsx(E,{size:14,"aria-hidden":!0})," Run flow now"]}),e.jsxs(y,{variant:"destructive",onClick:()=>t("destructive"),disabled:n==="destructive",children:[e.jsx(W,{size:14,"aria-hidden":!0})," Delete project…"]})]}),n==="reversible"?e.jsx(x,{title:"Run “Weekly incident digest” now?",onCancel:()=>t("none"),primary:{label:"Run now",onClick:()=>t("none")},testId:"panel-reversible",children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Starts a run with today's inputs. You can stop it from the run card."})}):null,n==="destructive"?e.jsxs(x,{title:"Delete project “Customer Support”",danger:!0,onCancel:()=>{t("none"),a("")},onSubmit:i=>{i.preventDefault(),t("none"),a("")},primary:{label:"Delete project",disabled:r!=="Customer Support"},testId:"panel-destructive",children:[e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:"0 0 8px"},children:"Removes 12 members' access, 7 capabilities and every thread. This cannot be undone."}),e.jsx(g,{id:"ap-typed",label:"Type the project name to confirm",children:i=>e.jsx("input",{...i,className:"nexus-input",value:r,onChange:d=>a(d.target.value),autoComplete:"off"})})]}):null]})}},h={name:"ActionPanel · open",parameters:{ds:"DS-3034"},render:()=>e.jsx("div",{style:{maxWidth:520},children:e.jsx(x,{title:"Run “Weekly incident digest” now?",onCancel:()=>{},primary:{label:"Run now"},children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Starts a run with today's inputs. You can stop it from the run card."})})})},T=["Read","CannotEdit","Editing","WithError","DirtyCancel","Confirmation","ReversibleOpen"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Read (Edit + secondary)",
  render: () => <Demo />
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Read · cannot edit",
  render: () => <Demo canEdit={false} />
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 420
  }}>
      <Field id="eb-name-2" label="Display name">{a => <input {...a} className="nexus-input" defaultValue="Customer Support" />}</Field>
      <EditBar editing dirty onEdit={() => {}} onCancel={() => {}} onSave={() => {}} />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 420
  }}>
      <EditBar editing error="The name is already used by another project." onEdit={() => {}} onCancel={() => {}} onSave={() => {}} />
    </div>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Dirty Cancel asks inline",
  render: () => {
    const guard = useDiscardGuard(true);
    return <div style={{
      display: "grid",
      gap: 12,
      maxWidth: 420
    }}>
        <Button onClick={() => guard.guard(() => {})} disabled={guard.asking}>Cancel (dirty)</Button>
        {guard.panel}
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"The discard guard (DS-3016): type, then Cancel — the question appears inline under the row.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "ActionPanel · reversible · destructive",
  parameters: {
    ds: "DS-3034"
  },
  render: () => {
    const [which, setWhich] = useState<"none" | "reversible" | "destructive">("none");
    const [typed, setTyped] = useState("");
    return <div style={{
      display: "grid",
      gap: 12,
      maxWidth: 520
    }}>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <Button onClick={() => setWhich("reversible")} disabled={which === "reversible"}><Play size={14} aria-hidden /> Run flow now</Button>
          <Button variant="destructive" onClick={() => setWhich("destructive")} disabled={which === "destructive"}><Trash2 size={14} aria-hidden /> Delete project…</Button>
        </div>
        {which === "reversible" ? <ActionPanel title="Run “Weekly incident digest” now?" onCancel={() => setWhich("none")} primary={{
        label: "Run now",
        onClick: () => setWhich("none")
      }} testId="panel-reversible">
            <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Starts a run with today's inputs. You can stop it from the run card.</p>
          </ActionPanel> : null}
        {which === "destructive" ? <ActionPanel title="Delete project “Customer Support”" danger onCancel={() => {
        setWhich("none");
        setTyped("");
      }} onSubmit={e => {
        e.preventDefault();
        setWhich("none");
        setTyped("");
      }} primary={{
        label: "Delete project",
        disabled: typed !== "Customer Support"
      }} testId="panel-destructive">
            <p className="nexus-mgmt-meta" style={{
          margin: "0 0 8px"
        }}>Removes 12 members' access, 7 capabilities and every thread. This cannot be undone.</p>
            <Field id="ap-typed" label="Type the project name to confirm">{a => <input {...a} className="nexus-input" value={typed} onChange={e => setTyped(e.target.value)} autoComplete="off" />}</Field>
          </ActionPanel> : null}
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:"ActionPanel (DS-3034): the only confirmation surface for a reversible action — inline, where the action was taken,\nnames the effect, one primary, Cancel; `onSubmit` makes it a form. A destructive action asks for the name.",...l.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "ActionPanel · open",
  parameters: {
    ds: "DS-3034"
  },
  render: () => <div style={{
    maxWidth: 520
  }}>
      <ActionPanel title="Run “Weekly incident digest” now?" onCancel={() => {}} primary={{
      label: "Run now"
    }}>
        <p className="nexus-mgmt-meta" style={{
        margin: 0
      }}>Starts a run with today's inputs. You can stop it from the run card.</p>
      </ActionPanel>
    </div>
}`,...h.parameters?.docs?.source}}};export{u as CannotEdit,l as Confirmation,o as DirtyCancel,p as Editing,c as Read,h as ReversibleOpen,m as WithError,T as __namedExportsOrder,A as default};
