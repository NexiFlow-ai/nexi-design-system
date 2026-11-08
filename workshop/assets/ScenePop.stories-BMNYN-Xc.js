import{j as e,r as S}from"./iframe-C_4ax-Jm.js";import{S as t,a as u,b as s,c as h,d as g,e as b,f as j}from"./model-C05dco_2.js";import"./preload-helper-PPVm8Dsz.js";function m({children:n,placement:o="above"}){return e.jsx("div",{className:"nexus-scene","data-motion":"0",style:{position:"relative",minHeight:320},children:e.jsxs("div",{className:"nexus-scene-bar","data-placement":o,style:{left:"50%",top:o==="below"?"60%":"16px"},children:[e.jsx("button",{type:"button",className:"nexus-icon-btn","aria-label":"Open","aria-haspopup":"menu","aria-expanded":"true",children:"⋯"}),n]})})}const f={title:"Kit/Scene popover",component:t,parameters:{ds:"DS-4011",layout:"padded"}},c={render:()=>e.jsx(m,{children:e.jsx(t,{role:"menu",label:"More",testId:"story-pop",children:e.jsxs(u,{children:[e.jsx(s,{keys:"⌘D",onSelect:()=>{},children:"Duplicate"}),e.jsx(s,{keys:"I",onSelect:()=>{},children:"Details"}),e.jsx(s,{hint:"Service",onSelect:()=>{},children:"Meaning"}),e.jsx(s,{disabled:!0,onSelect:()=>{},children:"Group"}),e.jsx(s,{danger:!0,keys:"⌫",onSelect:()=>{},children:"Delete"})]})})})},l={name:"Menu · one of several",render:()=>e.jsx(y,{})};function y(){const[n,o]=S.useState("data_flow");return e.jsx(m,{children:e.jsxs(t,{role:"menu",label:"Relation kind",testId:"story-pop",children:[e.jsx(j,{children:"Kind"}),e.jsx(u,{children:["dependency","data_flow","command","sequence","ownership","blocks","generic"].map(r=>e.jsx(s,{role:"menuitemradio",checked:n===r,onSelect:()=>o(r),children:r.replace("_"," ")},r))})]})})}const i={name:"Menu · scrolling",render:()=>e.jsx(m,{children:e.jsx(t,{role:"menu",label:"Meaning",testId:"story-pop",children:e.jsx(u,{scroll:!0,children:["person","team","system","service","database","api","queue","storage","building","room","zone","vehicle","device","process","step","decision","task","epic","story","milestone","risk","requirement","dataset","agent","flow","generic"].map((n,o)=>e.jsx(s,{role:"menuitemradio",checked:o===3,onSelect:()=>{},children:n},n))})})})},d={name:"Dialog · colour",render:()=>e.jsx(P,{})};function P(){const[n,o]=S.useState("blue"),[r,x]=S.useState("tint");return e.jsx(m,{children:e.jsxs(t,{role:"dialog",label:"Colour",testId:"story-pop",children:[e.jsxs(h,{label:"Colour",children:[e.jsx("button",{type:"button",role:"radio","aria-checked":!n,"aria-label":"None",className:"nexus-icon-btn",onClick:()=>o(null),children:e.jsx("span",{className:"nexus-scene-bar-swatch","data-none":"1","aria-hidden":!0})}),g.map(a=>e.jsx("button",{type:"button",role:"radio","aria-checked":n===a,"aria-label":a,className:"nexus-icon-btn",onClick:()=>o(a),children:e.jsx("span",{className:"nexus-scene-bar-swatch","data-color":a,"aria-hidden":!0})},a))]}),e.jsx(h,{children:e.jsx(b,{options:[{value:"tint",label:"Tint"},{value:"solid",label:"Solid"},{value:"outline",label:"Outline"}],value:r,onChange:x,label:"Fill"})})]})})}const p={name:"Menu · opens below",render:()=>e.jsx(m,{placement:"below",children:e.jsx(t,{role:"menu",label:"Order",testId:"story-pop",children:e.jsxs(u,{children:[e.jsx(s,{keys:"]",onSelect:()=>{},children:"Bring forward"}),e.jsx(s,{keys:"[",onSelect:()=>{},children:"Send backward"})]})})})},v=["Menu","Radio","Scrolling","Dialog","Below"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
      <ScenePop role="menu" label="More" testId="story-pop">
        <ScenePopList>
          <ScenePopItem keys="⌘D" onSelect={() => {}}>Duplicate</ScenePopItem>
          <ScenePopItem keys="I" onSelect={() => {}}>Details</ScenePopItem>
          <ScenePopItem hint="Service" onSelect={() => {}}>Meaning</ScenePopItem>
          <ScenePopItem disabled onSelect={() => {}}>Group</ScenePopItem>
          <ScenePopItem danger keys="⌫" onSelect={() => {}}>Delete</ScenePopItem>
        </ScenePopList>
      </ScenePop>
    </Stage>
}`,...c.parameters?.docs?.source},description:{story:"A menu of plain actions with their keys; the danger item last.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Menu · one of several",
  render: () => <RadioMenu />
}`,...l.parameters?.docs?.source},description:{story:"One of several (`menuitemradio`): the chosen one bold; a title over the group.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Menu · scrolling",
  render: () => <Stage>
      <ScenePop role="menu" label="Meaning" testId="story-pop">
        <ScenePopList scroll>
          {["person", "team", "system", "service", "database", "api", "queue", "storage", "building", "room", "zone", "vehicle", "device", "process", "step", "decision", "task", "epic", "story", "milestone", "risk", "requirement", "dataset", "agent", "flow", "generic"].map((k, i) => <ScenePopItem key={k} role="menuitemradio" checked={i === 3} onSelect={() => {}}>{k}</ScenePopItem>)}
        </ScenePopList>
      </ScenePop>
    </Stage>
}`,...i.parameters?.docs?.source},description:{story:"A long list (the 26 meanings) scrolls inside the pop.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Dialog · colour",
  render: () => <ColourDialog />
}`,...d.parameters?.docs?.source},description:{story:"A dialog of controls: the eight named hues as a `radiogroup` of swatches (DS-1005), fill and stroke as pills.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Menu · opens below",
  render: () => <Stage placement="below">
      <ScenePop role="menu" label="Order" testId="story-pop">
        <ScenePopList>
          <ScenePopItem keys="]" onSelect={() => {}}>Bring forward</ScenePopItem>
          <ScenePopItem keys="[" onSelect={() => {}}>Send backward</ScenePopItem>
        </ScenePopList>
      </ScenePop>
    </Stage>
}`,...p.parameters?.docs?.source},description:{story:"Below the bar: when the selection sits at the top of the canvas the bar flips and the pop opens downward.",...p.parameters?.docs?.description}}};export{p as Below,d as Dialog,c as Menu,l as Radio,i as Scrolling,v as __namedExportsOrder,f as default};
