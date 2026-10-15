import{z as o,j as e,B as c,a7 as s,a8 as y,a4 as g,a9 as h,P as S}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Kit/States",component:o,parameters:{ds:"DS-3041",docs:{description:{component:`The state ladder (DS-3040–3043): every screen renders one of loading · empty · error · denied · offline · not found
before its content. Denied and not-found look the same on purpose (). A screen never shows a spinner over
stale content; the state replaces the content region only.`}}}},t={name:"LoadingState",parameters:{ds:"DS-3040"},render:()=>e.jsx(h,{})},i={name:"EmptyState · quiet",render:()=>e.jsx(o,{variant:"quiet",title:"No groups yet",action:e.jsxs(c,{variant:"primary",children:[e.jsx(S,{size:14,"aria-hidden":!0})," New group"]}),starting:[{label:"Import from identity provider",href:"/identity"},{label:"See who is in the organization",href:"/people"}]})},d={name:"EmptyState · quiet · permission explains it",render:()=>e.jsx(o,{variant:"quiet",title:"No dashboards you can open",body:"Dashboards are shared per project. Ask a project owner to share one, or create your own.",action:e.jsx(c,{variant:"primary",children:"New dashboard"})})},p={name:"EmptyState · inline",render:()=>e.jsx(o,{variant:"inline",title:"No comments yet",action:e.jsx("button",{type:"button",className:"nexus-linkbtn",children:"Write the first one"})})},r={name:"EmptyState · card (legacy)",tags:["legacy"],render:()=>e.jsx(o,{variant:"card",title:"No groups yet",body:"Groups collect people so that roles and project membership can be granted once instead of per person.",options:["Engineering","Support","Finance"],action:e.jsx(c,{variant:"primary",children:"New group"})})},n={name:"ErrorState · error · denied · offline · notFound",parameters:{ds:"DS-3042"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:800},children:[e.jsx(s,{kind:"error",onRetry:()=>{}}),e.jsx(s,{kind:"denied",body:"Only project owners can see runtime settings. Ask Olena K. or an organization admin."}),e.jsx(s,{kind:"offline",onRetry:()=>{}}),e.jsx(s,{kind:"notFound"})]})},x={state:"ready",data:{owner:"Olena K."}},a={name:"DataStateView",parameters:{ds:"DS-3043"},render:()=>e.jsx("div",{style:{display:"grid",gap:24,maxWidth:480},children:[{state:"loading"},{state:"empty"},{state:"error",retry:()=>{}},{state:"denied"},{state:"notFound"},{state:"offline",retry:()=>{}},x].map((m,l)=>e.jsxs("div",{children:[e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:"0 0 8px"},children:e.jsx("code",{children:m.state})}),e.jsx(y,{result:m,empty:{title:"Nothing here yet"},children:u=>e.jsx(g,{items:[{label:"Owner",value:u.owner}]})})]},l))})},E=["Loading","Quiet","QuietWithReason","Inline","Card","Errors","Ladder"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "LoadingState",
  parameters: {
    ds: "DS-3040"
  },
  render: () => <LoadingState />
}`,...t.parameters?.docs?.source},description:{story:"LoadingState (DS-3040): text only, no spinner colour.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "EmptyState · quiet",
  render: () => <EmptyState variant="quiet" title="No groups yet" action={<Button variant="primary"><Plus size={14} aria-hidden /> New group</Button>} starting={[{
    label: "Import from identity provider",
    href: "/identity"
  }, {
    label: "See who is in the organization",
    href: "/people"
  }]} />
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "EmptyState · quiet · permission explains it",
  render: () => <EmptyState variant="quiet" title="No dashboards you can open" body="Dashboards are shared per project. Ask a project owner to share one, or create your own." action={<Button variant="primary">New dashboard</Button>} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "EmptyState · inline",
  render: () => <EmptyState variant="inline" title="No comments yet" action={<button type="button" className="nexus-linkbtn">Write the first one</button>} />
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "EmptyState · card (legacy)",
  tags: ["legacy"],
  render: () => <EmptyState variant="card" title="No groups yet" body="Groups collect people so that roles and project membership can be granted once instead of per person." options={["Engineering", "Support", "Finance"]} action={<Button variant="primary">New group</Button>} />
}`,...r.parameters?.docs?.source},description:{story:"The pre- dashed card — legacy.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "ErrorState · error · denied · offline · notFound",
  parameters: {
    ds: "DS-3042"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    maxWidth: 800
  }}>
      <ErrorState kind="error" onRetry={() => {}} />
      <ErrorState kind="denied" body="Only project owners can see runtime settings. Ask Olena K. or an organization admin." />
      <ErrorState kind="offline" onRetry={() => {}} />
      <ErrorState kind="notFound" />
    </div>
}`,...n.parameters?.docs?.source},description:{story:"ErrorState (DS-3042): error and offline carry Retry; denied names who may grant access when the screen knows.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "DataStateView",
  parameters: {
    ds: "DS-3043"
  },
  render: () => <div style={{
    display: "grid",
    gap: 24,
    maxWidth: 480
  }}>
      {([{
      state: "loading"
    }, {
      state: "empty"
    }, {
      state: "error",
      retry: () => {}
    }, {
      state: "denied"
    }, {
      state: "notFound"
    }, {
      state: "offline",
      retry: () => {}
    }, READY] as (DataState<{
      owner: string;
    }> | {
      state: "notFound";
    })[]).map((r, i) => <div key={i}>
          <p className="nexus-mgmt-meta" style={{
        margin: "0 0 8px"
      }}><code>{r.state}</code></p>
          <DataStateView result={r} empty={{
        title: "Nothing here yet"
      }}>
            {d => <Facts items={[{
          label: "Owner",
          value: d.owner
        }]} />}
          </DataStateView>
        </div>)}
    </div>
}`,...a.parameters?.docs?.source},description:{story:"DataStateView (DS-3043): one switch for the ladder; screens pass their ready renderer.",...a.parameters?.docs?.description}}};export{r as Card,n as Errors,p as Inline,a as Ladder,t as Loading,i as Quiet,d as QuietWithReason,E as __namedExportsOrder,w as default};
