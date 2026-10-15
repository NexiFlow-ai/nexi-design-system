import{Q as c,j as e,B as d,H as m,U as p,V as l,W as v,X as x}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Kit/Menu",component:c,parameters:{ds:"DS-3005",docs:{description:{component:"Menu (DS-3005): the `⋯` for secondary actions — a header or footer shows at most two buttons, the rest live here.\nEsc and an outside click close it; a `danger` item is the one that opens a destructive confirmation."}}},args:{label:"More actions",items:[{key:"dup",label:"Duplicate",onSelect:()=>{}},{key:"exp",label:"Export",onSelect:()=>{}},{key:"arch",label:"Archive",disabled:!0,onSelect:()=>{}},{key:"del",label:"Delete…",danger:!0,onSelect:()=>{}}]}},r={},o={render:i=>e.jsxs("div",{style:{minHeight:180},children:[e.jsx(c,{...i,testId:"story-menu"}),e.jsx(m,{children:"Click `⋯` to open; Esc or a click outside closes it."})]})},t={name:"SavedNote",parameters:{ds:"DS-3006"},render:()=>{const{saved:i,flash:u}=v();return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(d,{size:"sm",onClick:u,children:"Save"}),e.jsx(x,{show:i})]})}},n={name:"Avatar",parameters:{ds:"DS-3007"},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(l,{name:"Olena Kovalenko"}),e.jsx(l,{name:"Petro",size:28}),e.jsx(l,{name:"Dana Ivanova",size:48}),e.jsx("span",{children:"Olena Kovalenko"})]})},a={name:"Hint · Restriction",parameters:{ds:"DS-3008"},render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(d,{children:"Invite"}),e.jsx(d,{variant:"ghost",children:"Export"})]}),e.jsx(m,{children:"Only organization admins may invite people."}),e.jsx(p,{by:"the organization Blueprint"})]})},s={name:"Floating surface (DS-7015)",parameters:{ds:"DS-7015"},render:()=>e.jsx("div",{style:{minHeight:220,position:"relative"},children:e.jsxs("div",{className:"nexus-float",role:"menu","aria-label":"Floating surface",style:{position:"absolute",top:0,left:0,minWidth:220},children:[e.jsx("div",{className:"nexus-float-caption",children:"Project"}),e.jsx("button",{type:"button",role:"menuitem",className:"nexus-float-item",children:"Duplicate"}),e.jsx("button",{type:"button",role:"menuitem",className:"nexus-float-item",children:"Export"}),e.jsx("button",{type:"button",role:"menuitem",className:"nexus-float-item","aria-disabled":"true",children:"Archive"}),e.jsx("hr",{className:"nexus-float-sep"}),e.jsx("button",{type:"button",role:"menuitem",className:"nexus-float-item",style:{color:"var(--nexus-error)"},children:"Delete…"})]})})},S=["Closed","Interactive","Saved","Initials","HintAndRestriction","FloatingSurface"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 180
  }}>
      <Menu {...args} testId="story-menu" />
      <Hint>Click \`⋯\` to open; Esc or a click outside closes it.</Hint>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "SavedNote",
  parameters: {
    ds: "DS-3006"
  },
  render: () => {
    const {
      saved,
      flash
    } = useSavedNote();
    return <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <Button size="sm" onClick={flash}>Save</Button>
        <SavedNote show={saved} />
      </div>;
  }
}`,...t.parameters?.docs?.source},description:{story:"SavedNote (DS-3006): the transient “Saved” line — announced through `role=status`, gone after 3 s.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Avatar",
  parameters: {
    ds: "DS-3007"
  },
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Avatar name="Olena Kovalenko" />
      <Avatar name="Petro" size={28} />
      <Avatar name="Dana Ivanova" size={48} />
      <span>Olena Kovalenko</span>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Avatar (DS-3007): initials on graphite, decorative — the name sits next to it as text.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Hint · Restriction",
  parameters: {
    ds: "DS-3008"
  },
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button>Invite</Button>
        <Button variant="ghost">Export</Button>
      </div>
      <Hint>Only organization admins may invite people.</Hint>
      <Restriction by="the organization Blueprint" />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Hint (DS-3008) under a row of actions; Restriction (DS-3009) explains a restriction instead of a bare disabled control.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Floating surface (DS-7015)",
  parameters: {
    ds: "DS-7015"
  },
  render: () => <div style={{
    minHeight: 220,
    position: "relative"
  }}>
      <div className="nexus-float" role="menu" aria-label="Floating surface" style={{
      position: "absolute",
      top: 0,
      left: 0,
      minWidth: 220
    }}>
        <div className="nexus-float-caption">Project</div>
        <button type="button" role="menuitem" className="nexus-float-item">Duplicate</button>
        <button type="button" role="menuitem" className="nexus-float-item">Export</button>
        <button type="button" role="menuitem" className="nexus-float-item" aria-disabled="true">Archive</button>
        <hr className="nexus-float-sep" />
        <button type="button" role="menuitem" className="nexus-float-item" style={{
        color: "var(--nexus-error)"
      }}>Delete…</button>
      </div>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Floating surface (DS-7015): the one anatomy a menu, a popover and a select's list share — radius 12,\npadding 6, a 1 px border, `--nexus-shadow-md`, 32 px items with an 8 px inset at 13 px, 1 px separators with 4 px\naround, 12 px captions; it names its layer. Shown open and static here so the measures can be read.",...s.parameters?.docs?.description}}};export{r as Closed,s as FloatingSurface,a as HintAndRestriction,n as Initials,o as Interactive,t as Saved,S as __namedExportsOrder,g as default};
