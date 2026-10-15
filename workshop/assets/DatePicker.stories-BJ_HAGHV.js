import{d as s,j as e,F as c,r as l}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Kit/DatePicker",component:s,parameters:{ds:"DS-3064",docs:{description:{component:`DatePicker (DS-3064): the suite's calendar instead of the browser's date popup. The trigger is the Select's
(DS-3011) with a calendar glyph; the month grid lives on the picker surface; the selected day is the primary pair.`}}}};function i({initial:t="",...r}){const[o,p]=l.useState(t);return e.jsx(s,{value:o,onChange:p,...r})}const d={name:"States",render:()=>e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:320},children:[e.jsx(i,{label:"Due",testId:"dp-empty"}),e.jsx(i,{label:"Due",initial:"2026-10-11",testId:"dp-picked"}),e.jsx(i,{label:"When",initial:"2026-10-11T22:56",withTime:!0,testId:"dp-time"}),e.jsx(i,{label:"From",initial:"2026-10-01",compact:!0,testId:"dp-compact"}),e.jsx(i,{label:"Within October",initial:"2026-10-11",min:"2026-10-01",max:"2026-10-31",testId:"dp-bounded"}),e.jsx(i,{label:"Locked",initial:"2026-10-11",disabled:!0,testId:"dp-disabled"})]})},n={name:"In a Field",render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(c,{id:"dp-field",label:"Next step due",hint:"Leave empty for no reminder.",children:t=>e.jsx(i,{id:t.id,label:"Next step due",initial:"2026-10-18",testId:"dp-field"})})})},a={name:"Open · with time",render:()=>e.jsx(m,{})};function m(){const[t,r]=l.useState("2026-10-11T22:56");return e.jsxs("div",{style:{minHeight:440,maxWidth:320},children:[e.jsx(s,{label:"When",value:t,onChange:r,withTime:!0,testId:"dp-open"}),e.jsx(u,{testId:"dp-open"})]})}function u({testId:t}){return l.useEffect(()=>{document.querySelector(`[data-testid="${t}-trigger"]`)?.click()},[t]),null}const y=["States","InField","Open"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "States",
  render: () => <div style={{
    display: "grid",
    gap: 16,
    maxWidth: 320
  }}>
      <Controlled label="Due" testId="dp-empty" />
      <Controlled label="Due" initial="2026-10-11" testId="dp-picked" />
      <Controlled label="When" initial="2026-10-11T22:56" withTime testId="dp-time" />
      <Controlled label="From" initial="2026-10-01" compact testId="dp-compact" />
      <Controlled label="Within October" initial="2026-10-11" min="2026-10-01" max="2026-10-31" testId="dp-bounded" />
      <Controlled label="Locked" initial="2026-10-11" disabled testId="dp-disabled" />
    </div>
}`,...d.parameters?.docs?.source},description:{story:"every state of the ladder at rest: empty · picked · with time · compact (toolbar) · bounded · disabled",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "In a Field",
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Field id="dp-field" label="Next step due" hint="Leave empty for no reminder.">
        {a => <Controlled id={a.id} label="Next step due" initial="2026-10-18" testId="dp-field" />}
      </Field>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"inside a Field (DS-3010): the label names the trigger through `id`",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Open · with time",
  render: () => <OpenPicker />
}`,...a.parameters?.docs?.source},description:{story:"the popover open — the month grid, today's ring, the selected day, the time row and the link footer",...a.parameters?.docs?.description}}};export{n as InField,a as Open,d as States,y as __namedExportsOrder,b as default};
