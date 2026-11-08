import{j as e}from"./iframe-C_4ax-Jm.js";/* empty css                */import{I as x,a as C,b as y,O as E,g as _}from"./cost-GbfRQYcg.js";import{V as O,b as h,E as T,B as S,O as b}from"./CloudCost-DmWiTZUf.js";import"./preload-helper-PPVm8Dsz.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";const w={title:"Apps/NexCore/Platform Operations/Cloud & Reliability/Parts",parameters:{ds:"DS-6803",layout:"padded",docs:{description:{component:` S4 — the parts of Cloud & Reliability and Organization › Cost, one by one (DS-6803): the lag badge
(*export through <date>* · *no export read yet*), the contour strip, the variance issue card (routed · not yet
routed · none), the bindings table (contour- and tenant-scoped), the organization's cost tab.`}}}},r=B=>e.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:B}),s={name:"Lag badge · export through a day",render:()=>r(e.jsx(T,{through:"2026-11-11"}))},o={name:"Lag badge · no export read yet",render:()=>r(e.jsx(T,{through:null}))},n={name:"Contour strip · two reconciled days, one pending",render:()=>r(e.jsx(h,{contour:C}))},t={name:"Contour strip · estimated only",render:()=>r(e.jsx(h,{contour:y}))},d={name:"Contour strip · no day closed",render:()=>r(e.jsx(h,{contour:{...C,days:[]}}))},i={name:"Variance issue · routed to Tasks",render:()=>r(e.jsx(O,{issues:[x],threshold:"10",contour:"laptop"}))},c={name:"Variance issue · not yet routed (tasks-api did not answer)",render:()=>r(e.jsx(O,{issues:[{...x,issueRef:null}],threshold:"10",contour:"laptop"}))},p={name:"Variance issue · none this period",render:()=>r(e.jsx(O,{issues:[],threshold:"10",contour:"laptop"}))},u={name:"Bindings · contour and tenant scoped",render:()=>r(e.jsx(S,{bindings:C.bindings}))},m={name:"Bindings · none",render:()=>r(e.jsx(S,{bindings:[]}))},a={name:"Organization › Cost · the five numbers and the daily rows",render:()=>r(e.jsx(b,{cost:E}))},g={name:"Organization › Cost · customer-hosted",render:()=>r(e.jsx(b,{cost:_}))},l={...a,name:"Organization › Cost · українською",globals:{locale:"uk"}},D=["LagBadgeCovered","LagBadgeNone","Strip","StripEstimatedOnly","StripEmpty","IssueRouted","IssueUnrouted","IssueNone","Bindings","BindingsEmpty","OrgCostTab","OrgCostTabCustomer","OrgCostTabUkrainian"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Lag badge · export through a day",
  render: () => pad(<ExportThroughChip through="2026-11-11" />)
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Lag badge · no export read yet",
  render: () => pad(<ExportThroughChip through={null} />)
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Contour strip · two reconciled days, one pending",
  render: () => pad(<ContourStrip contour={CONTOUR_LAPTOP} />)
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Contour strip · estimated only",
  render: () => pad(<ContourStrip contour={CONTOUR_QA_ESTIMATED_ONLY} />)
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Contour strip · no day closed",
  render: () => pad(<ContourStrip contour={{
    ...CONTOUR_LAPTOP,
    days: []
  }} />)
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variance issue · routed to Tasks",
  render: () => pad(<VarianceIssueCard issues={[ISSUE_LAPTOP_DAY10]} threshold="10" contour="laptop" />)
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Variance issue · not yet routed (tasks-api did not answer)",
  render: () => pad(<VarianceIssueCard issues={[{
    ...ISSUE_LAPTOP_DAY10,
    issueRef: null
  }]} threshold="10" contour="laptop" />)
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Variance issue · none this period",
  render: () => pad(<VarianceIssueCard issues={[]} threshold="10" contour="laptop" />)
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Bindings · contour and tenant scoped",
  render: () => pad(<BindingsTable bindings={CONTOUR_LAPTOP.bindings} />)
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Bindings · none",
  render: () => pad(<BindingsTable bindings={[]} />)
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Organization › Cost · the five numbers and the daily rows",
  render: () => pad(<OrganizationCostTab cost={ORG_COST_ACME} />)
}`,...a.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Organization › Cost · customer-hosted",
  render: () => pad(<OrganizationCostTab cost={ORG_COST_VERKHOVYNA_CUSTOMER} />)
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...OrgCostTab,
  name: "Organization › Cost · українською",
  globals: {
    locale: "uk"
  }
}`,...l.parameters?.docs?.source}}};export{u as Bindings,m as BindingsEmpty,p as IssueNone,i as IssueRouted,c as IssueUnrouted,s as LagBadgeCovered,o as LagBadgeNone,a as OrgCostTab,g as OrgCostTabCustomer,l as OrgCostTabUkrainian,n as Strip,d as StripEmpty,t as StripEstimatedOnly,D as __namedExportsOrder,w as default};
