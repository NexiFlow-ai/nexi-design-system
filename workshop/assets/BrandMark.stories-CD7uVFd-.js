import{j as e}from"./iframe-WvhPuRF9.js";import{B as i,a as o}from"./BrandMark-ZbGrFEPy.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Design system/Brand mark",component:i,parameters:{ds:"DS-1061",layout:"padded",docs:{description:{component:"BrandMark (DS-1061): the Nexi glyph — a stroked N whose diagonal is a curve, with a dot at its centre — drawn in\n`currentColor`. As the capital of the wordmark `Nexi` (`BrandWordmark`: one word, the glyph at cap height) in the\nexpanded shell brand row and as the sign-in title; alone in the collapsed rail; white on graphite as the favicon.\nThe wordmark is never translated, never in capitals."}}}},a={render:()=>e.jsx("span",{className:"nexus-brand",style:{cursor:"default"},"data-testid":"brand-shell",children:e.jsx(o,{})})},r={render:()=>e.jsx("div",{className:"nexus-cc-sidebar",style:{display:"inline-block",padding:0,border:0,minHeight:0},"data-testid":"brand-shell-app",children:e.jsxs("div",{className:"nexus-brand-row",style:{margin:0},children:[e.jsx("span",{className:"nexus-brand",style:{cursor:"default"},children:e.jsx(o,{})}),e.jsx("span",{className:"nexus-cc-sidebar-app",children:"Core"})]})})},s={render:()=>e.jsx("span",{className:"nexus-brand","data-variant":"rail",style:{cursor:"default"},"data-testid":"brand-rail",children:e.jsx(i,{})})},n={render:()=>e.jsx("span",{className:"nexus-cc-auth-title",style:{display:"inline-flex"},"data-testid":"brand-auth",children:e.jsx(o,{})})},t={render:()=>e.jsx("span",{style:{display:"inline-grid",placeItems:"center",width:32,height:32,borderRadius:"var(--nexus-radius-sm)",background:"var(--nexus-text)",color:"var(--nexus-bg)"},"data-testid":"brand-favicon",children:e.jsx(i,{style:{width:20,height:20}})})},d={args:{title:"Nexi",style:{width:48,height:48}}},m=["Shell","ShellWithApp","Rail","Auth","Favicon","Named"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <span className="nexus-brand" style={{
    cursor: "default"
  }} data-testid="brand-shell">
      <BrandWordmark />
    </span>
}`,...a.parameters?.docs?.source},description:{story:"The expanded shell brand row (`.nexus-brand`,  · ): the wordmark as one word, the glyph as its capital; the row is the launcher.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="nexus-cc-sidebar" style={{
    display: "inline-block",
    padding: 0,
    border: 0,
    minHeight: 0
  }} data-testid="brand-shell-app">
      <div className="nexus-brand-row" style={{
      margin: 0
    }}>
        <span className="nexus-brand" style={{
        cursor: "default"
      }}>
          <BrandWordmark />
        </span>
        <span className="nexus-cc-sidebar-app">Core</span>
      </div>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"NexCore's brand row: the wordmark followed by the application name in tracked uppercase.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <span className="nexus-brand" data-variant="rail" style={{
    cursor: "default"
  }} data-testid="brand-rail">
      <BrandMark />
    </span>
}`,...s.parameters?.docs?.source},description:{story:"The collapsed rail: the mark alone in a 32 px target.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <span className="nexus-cc-auth-title" style={{
    display: "inline-flex"
  }} data-testid="brand-auth">
      <BrandWordmark />
    </span>
}`,...n.parameters?.docs?.source},description:{story:"The unauthenticated doors (NexCore sign in · sign up · verify · welcome): the wordmark alone as the 26 px h1.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <span style={{
    display: "inline-grid",
    placeItems: "center",
    width: 32,
    height: 32,
    borderRadius: "var(--nexus-radius-sm)",
    background: "var(--nexus-text)",
    color: "var(--nexus-bg)"
  }} data-testid="brand-favicon">
      <BrandMark style={{
      width: 20,
      height: 20
    }} />
    </span>
}`,...t.parameters?.docs?.source},description:{story:"The favicon: white on a graphite rounded square (each app's `src/app/icon.svg`).",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nexi",
    style: {
      width: 48,
      height: 48
    }
  }
}`,...d.parameters?.docs?.source},description:{story:'Standing alone it is named (`role="img"` + `<title>`); inside a labelled control it is decorative (`aria-hidden`).',...d.parameters?.docs?.description}}};export{n as Auth,t as Favicon,d as Named,s as Rail,a as Shell,r as ShellWithApp,m as __namedExportsOrder,h as default};
