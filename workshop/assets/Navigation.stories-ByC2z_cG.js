import{L as l,Y as v,j as e,Z as g,r as m,_ as u,$ as p}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const d=[{key:"overview",label:"Overview"},{key:"members",label:"Members",count:12},{key:"capabilities",label:"Capabilities",count:7},{key:"runtime",label:"Runtime"},{key:"governance",label:"Governance"}],b=[{key:"models",label:"Models",count:5},{key:"connections",label:"Connections",count:3},{key:"usage",label:"Usage"},{key:"limits",label:"Limits",disabled:!0}],h={title:"Kit/Navigation",component:l,parameters:{ds:"DS-3023",docs:{description:{component:"Tabs (DS-3023): the first level of a page is one underline tab row — 36 px, 600 weight when active, a 2 px accent\nline, no fill. State lives in the URL (`UrlTabs`, `?tab=`) or in the parent (`LocalTabs`). Never a tab row under\na tab row: the second level is a `SideNav` (DS-3024)."}}}},r={name:"LocalTabs · page",render:()=>{const[a,n]=m.useState("runtime");return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(l,{tabs:d,current:a,onChange:n,label:"Project sections",layout:"page",id:"project"}),e.jsx("div",{id:`project-panel-${a}`,role:"tabpanel","aria-labelledby":`project-tab-${a}`,children:e.jsxs("p",{className:"nexus-mgmt-meta",style:{margin:0},children:["Panel: ",e.jsx("code",{children:a})]})})]})}},o={name:"LocalTabs · inline (Inspector)",render:()=>{const[a,n]=m.useState("details");return e.jsx(l,{tabs:[{key:"details",label:"Details"},{key:"activity",label:"Activity",count:4},{key:"json",label:"JSON"}],current:a,onChange:n,label:"Inspector sections"})}},c={name:"UrlTabs (state in ?tab=)",parameters:{workbench:{path:"/projects/p1?tab=members"}},render:()=>{const a=v("overview");return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(g,{tabs:d,defaultKey:"overview",label:"Project sections"}),e.jsxs("p",{className:"nexus-mgmt-meta",style:{margin:0},children:["Current tab from the URL: ",e.jsx("code",{children:a})]})]})}},t={name:"LocalTabs · surface (legacy)",tags:["legacy"],render:()=>e.jsx(l,{tabs:d,current:"runtime",onChange:()=>{},label:"Project sections (legacy)",variant:"surface",layout:"page"})},s={name:"SideNav · SideNavLayout",parameters:{ds:"DS-3024"},render:()=>{const[a,n]=m.useState("models");return e.jsx(u,{nav:e.jsx(p,{label:"Runtime sections",items:b,current:a,onSelect:n}),children:e.jsxs("p",{className:"nexus-mgmt-meta",style:{margin:0},children:["Section: ",e.jsx("code",{children:a})]})})}},i={name:"SideNav · links (aria-current=page)",parameters:{ds:"DS-3024",workbench:{path:"/runtime/connections"}},render:()=>e.jsx(u,{nav:e.jsx(p,{label:"Runtime sections",items:b.map(a=>({...a,href:`/runtime/${a.key}`})),current:"connections"}),children:e.jsx("p",{className:"nexus-mgmt-meta",style:{margin:0},children:"Each item navigates."})})},x=["Tabs","InlineTabs","InUrl","Surface","LeftNav","LeftNavLinks"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "LocalTabs · page",
  render: () => {
    const [tab, setTab] = useState("runtime");
    return <div style={{
      display: "grid",
      gap: 16
    }}>
        <LocalTabs tabs={TABS} current={tab} onChange={setTab} label="Project sections" layout="page" id="project" />
        {/* \`id\` wires \`aria-controls\` to the panels the screen renders — the story renders the active one */}
        <div id={\`project-panel-\${tab}\`} role="tabpanel" aria-labelledby={\`project-tab-\${tab}\`}>
          <p className="nexus-mgmt-meta" style={{
          margin: 0
        }}>Panel: <code>{tab}</code></p>
        </div>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "LocalTabs · inline (Inspector)",
  render: () => {
    const [tab, setTab] = useState("details");
    return <LocalTabs tabs={[{
      key: "details",
      label: "Details"
    }, {
      key: "activity",
      label: "Activity",
      count: 4
    }, {
      key: "json",
      label: "JSON"
    }]} current={tab} onChange={setTab} label="Inspector sections" />;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "UrlTabs (state in ?tab=)",
  parameters: {
    workbench: {
      path: "/projects/p1?tab=members"
    }
  },
  render: () => {
    const current = useTab("overview");
    return <div style={{
      display: "grid",
      gap: 12
    }}>
        <UrlTabs tabs={TABS} defaultKey="overview" label="Project sections" />
        <p className="nexus-mgmt-meta" style={{
        margin: 0
      }}>Current tab from the URL: <code>{current}</code></p>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "LocalTabs · surface (legacy)",
  tags: ["legacy"],
  render: () => <LocalTabs tabs={TABS} current="runtime" onChange={() => {}} label="Project sections (legacy)" variant="surface" layout="page" />
}`,...t.parameters?.docs?.source},description:{story:"The pre- graphite pill (legacy). No screen should ask for it.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "SideNav · SideNavLayout",
  parameters: {
    ds: "DS-3024"
  },
  render: () => {
    const [section, setSection] = useState("models");
    return <SideNavLayout nav={<SideNav label="Runtime sections" items={SECTIONS} current={section} onSelect={setSection} />}>
        <p className="nexus-mgmt-meta" style={{
        margin: 0
      }}>Section: <code>{section}</code></p>
      </SideNavLayout>;
  }
}`,...s.parameters?.docs?.source},description:{story:"SideNav (DS-3024): the second level — a left column of sections; ↑ ↓ Home End move, `aria-current` marks.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "SideNav · links (aria-current=page)",
  parameters: {
    ds: "DS-3024",
    workbench: {
      path: "/runtime/connections"
    }
  },
  render: () => <SideNavLayout nav={<SideNav label="Runtime sections" items={SECTIONS.map(s => ({
    ...s,
    href: \`/runtime/\${s.key}\`
  }))} current="connections" />}>
      <p className="nexus-mgmt-meta" style={{
      margin: 0
    }}>Each item navigates.</p>
    </SideNavLayout>
}`,...i.parameters?.docs?.source}}};export{c as InUrl,o as InlineTabs,s as LeftNav,i as LeftNavLinks,t as Surface,r as Tabs,x as __namedExportsOrder,h as default};
