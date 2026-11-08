import{j as n,r as B,ak as j}from"./iframe-C_4ax-Jm.js";import{S as O,t as M}from"./SceneInspector-B1ifgm_B.js";import"./model-C05dco_2.js";import{u as C,R as T,S as q}from"./SceneScreen-b2O5I5UF.js";import{k as _,n as s}from"./fixtures-Tp3WgICc.js";import{o as A,s as D}from"./harness-hHeQurk0.js";import"./preload-helper-PPVm8Dsz.js";import"./ForgeShell-BXa4k2EW.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./square-kanban-1DGdpNhu.js";import"./workflow-BGMWCDzG.js";import"./Composer-_fiYph92.js";import"./at-sign-DxAm-yIt.js";import"./square-CY8wW9K4.js";import"./sticky-note-QP4A__EZ.js";import"./circle-YHOf4nP0.js";import"./arrow-right-QE--7mId.js";import"./minus-8B1Z9tTG.js";import"./trash-2-qQksh-HK.js";import"./arrow-down-CEX2ZLRK.js";import"./panel-right-Y_GI9Ph_.js";import"./FeedbackCard-DHVFYkoq.js";import"./bff-BhLxIK9U.js";function f({graph:o,selection:t=[],relation:a=null,readOnly:r}){const i=C(),[k,w]=B.useState(t),[P,b]=B.useState(a),v=e=>({id:e.id,kind:e.kind,shape:e.shape,x:e.x,y:e.y,width:e.width,height:e.height,label:e.label,semantic:e.semantic??"generic",layerId:e.layerId??"structure",locked:e.locked,style:e.style,props:{}}),R=e=>({id:e.id,from:e.from,to:e.to,kind:e.kind,label:e.label,direction:e.direction,animated:e.animated,order:e.order,style:e.style});return n.jsx("div",{className:"nexus-forge-stage-main nexus-forge-story-stage",children:n.jsx(O,{graph:o,selection:k,onSelectionChange:w,presence:[{id:"pavlo",name:"Pavlo",selection:["p-1"]}],fit:!0,readOnly:r,labels:i,selectedRelation:P,onRelationSelect:b,selectionBar:r?void 0:({ids:e})=>n.jsx(q,{objects:o.objects.filter(x=>e.includes(x.id)).map(v),onOps:s,onReorder:s,onOpenDetails:s,onConvert:s,onDelete:s}),relationBar:r?void 0:({relation:e,edit:x})=>n.jsx(T,{relation:R(e),onOps:s,onEditLabel:x,onDelete:s}),testId:"story-scene"})})}function $(o){const{t}=j(),a=B.useMemo(()=>M(D("sc-logistics","olha").scene,{t}),[t]);return n.jsx(f,{...o,graph:a})}const Ve={title:"Apps/NexForge/Scene canvas",component:f,decorators:[A],parameters:{ds:"DS-4010",layout:"fullscreen",workbench:{ns:"forge",path:"/forge/scenes/sc-q4?as=maria",params:{id:"sc-q4"}}},args:{graph:_()}},S=(o,t)=>async({canvasElement:a})=>{for(let r=0;r<40&&!a.querySelector(`[data-testid="${o}"]`);r++)await new Promise(i=>setTimeout(i,50));a.querySelector(`[data-testid="${o}"]`)?.click();for(let r=0;r<40&&!a.querySelector(`[data-testid="${t}"]`);r++)await new Promise(i=>setTimeout(i,50));if(!a.querySelector(`[data-testid="${t}"]`))throw new globalThis.Error(`${t} did not open`)},c={name:"Populated · every kind"},p={name:"Populated · one selected",args:{selection:["a-1"]}},l={name:"Populated · several selected",args:{selection:["n-person","n-team","n-system"]}},m={name:"Populated · a relation selected",args:{relation:"r-data_flow"}},d={name:"Populated · read only",args:{selection:["a-1"],readOnly:!0}},u={name:"Populated · the warehouse scene",render:o=>n.jsx($,{selection:o.selection,readOnly:o.readOnly})},h={name:"Populated · colour menu open",args:{selection:["a-1"]},play:S("selbar-color","pop-color")},g={name:"Populated · more menu open",args:{selection:["a-1"]},play:S("selbar-more","pop-more")},y={name:"Populated · relation kind menu open",args:{relation:"r-data_flow"},play:S("relbar-kind","pop-rel-kind")},Xe=["Kinds","Selected","MultiSelected","RelationSelected","ReadOnly","Warehouse","ColourMenu","MoreMenu","RelationKindMenu"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Populated · every kind"
}`,...c.parameters?.docs?.source},description:{story:"Every kind, semantic and relation on one canvas; nothing selected.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Populated · one selected",
  args: {
    selection: ["a-1"]
  }
}`,...p.parameters?.docs?.source},description:{story:"One object selected: the element's menu above it — colour · shape · text · arrange · lock · more (08 §3.2).",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Populated · several selected",
  args: {
    selection: ["n-person", "n-team", "n-system"]
  }
}`,...l.parameters?.docs?.source},description:{story:"A multi-selection: the menu acts on all of them; the toolbar names the count.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Populated · a relation selected",
  args: {
    relation: "r-data_flow"
  }
}`,...m.parameters?.docs?.source},description:{story:"A relation selected: its own menu — colour · line · direction · kind · words · more.",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Populated · read only",
  args: {
    selection: ["a-1"],
    readOnly: true
  }
}`,...d.parameters?.docs?.source},description:{story:"A viewer's canvas: the same picture, no menu follows a selection.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Populated · the warehouse scene",
  render: args => <WarehouseCanvas selection={args.selection} readOnly={args.readOnly} />
}`,...u.parameters?.docs?.source},description:{story:"The warehouse scene from the fixture world (`sc-logistics`), as the Board projects it.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Populated · colour menu open",
  args: {
    selection: ["a-1"]
  },
  play: open("selbar-color", "pop-color")
}`,...h.parameters?.docs?.source},description:{story:"The colour dialog open: the eight named hues (DS-1005) · tint | solid | outline · the stroke.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Populated · more menu open",
  args: {
    selection: ["a-1"]
  },
  play: open("selbar-more", "pop-more")
}`,...g.parameters?.docs?.source},description:{story:"The *more* menu open: meaning · duplicate · details · convert · delete, with the keys.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Populated · relation kind menu open",
  args: {
    relation: "r-data_flow"
  },
  play: open("relbar-kind", "pop-rel-kind")
}`,...y.parameters?.docs?.source},description:{story:"The relation's kind menu open: the nine kinds, the current one checked.",...y.parameters?.docs?.description}}};export{h as ColourMenu,c as Kinds,g as MoreMenu,l as MultiSelected,d as ReadOnly,y as RelationKindMenu,m as RelationSelected,p as Selected,u as Warehouse,Xe as __namedExportsOrder,Ve as default};
