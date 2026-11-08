import{j as n}from"./iframe-C_4ax-Jm.js";import{T as a}from"./Trace-BSKaAXMd.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Design system/Trace",component:a,parameters:{ds:"DS-5001",layout:"padded",docs:{description:{component:"Trace (DS-5001's progress idiom): one 2 px line, one dot — the one moving part of a thinking Nexi. The dot is the\naccent's (DS-1001; the brand pink was tried on 2026-10-23 and returned). Indeterminate: the dot travels the line (a synchronous\nturn). Determinate: `progress` places it (a run with known steps) and it breathes while active. Still when inactive\nand under reduced motion. Presentational and `aria-hidden`: the words beside it carry the meaning — NexChat's\n*Working on it · 2.4 s*, the lobby's *Nexi is writing…*."}}},args:{progress:null,active:!0}},e={},r={args:{progress:.4}},s={args:{progress:1,active:!1}},t={render:o=>n.jsxs("p",{className:"nexus-convo-working",style:{margin:0},children:[n.jsx(a,{...o}),n.jsx("span",{children:"Nexi is writing…"})]})},m=["Indeterminate","Determinate","Inactive","BesideWords"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"A synchronous turn: nothing observable until the answer lands — the dot travels.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 0.4
  }
}`,...r.parameters?.docs?.source},description:{story:"A run with known steps: the dot sits at 2 of 5 and breathes.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 1,
    active: false
  }
}`,...s.parameters?.docs?.source},description:{story:"The run is over or paused: a graphite, still dot.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <p className="nexus-convo-working" style={{
    margin: 0
  }}>
      <Trace {...args} />
      <span>Nexi is writing…</span>
    </p>
}`,...t.parameters?.docs?.source},description:{story:"The lobby's working line (DS-5016 `thinking`): the trace beside the words, on one row.",...t.parameters?.docs?.description}}};export{t as BesideWords,r as Determinate,s as Inactive,e as Indeterminate,m as __namedExportsOrder,p as default};
