import{j as e,H as A,r as s,ak as E}from"./iframe-C_4ax-Jm.js";import{C as D,a as P,O as R,E as I,b as B,V as q,u as L,P as N,T as F}from"./SceneScreen-b2O5I5UF.js";import{g as H,a as Q}from"./SceneInspector-B1ifgm_B.js";import{n as o}from"./fixtures-Tp3WgICc.js";import{o as U,s as t}from"./harness-hHeQurk0.js";import{C as T}from"./Composer-_fiYph92.js";import"./preload-helper-PPVm8Dsz.js";import"./navigation-BPhnWcXc.js";import"./model-C05dco_2.js";import"./ForgeShell-BXa4k2EW.js";import"./link-CXIEul0Q.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./square-kanban-1DGdpNhu.js";import"./workflow-BGMWCDzG.js";import"./square-CY8wW9K4.js";import"./sticky-note-QP4A__EZ.js";import"./circle-YHOf4nP0.js";import"./arrow-right-QE--7mId.js";import"./minus-8B1Z9tTG.js";import"./trash-2-qQksh-HK.js";import"./arrow-down-CEX2ZLRK.js";import"./panel-right-Y_GI9Ph_.js";import"./FeedbackCard-DHVFYkoq.js";import"./bff-BhLxIK9U.js";import"./at-sign-DxAm-yIt.js";function V({children:r}){return e.jsx("div",{className:"nexus-forge-stage-main nexus-forge-story-stage",children:r})}const to={title:"Apps/NexForge/Scene workspace parts",decorators:[U],parameters:{ds:"DS-6023",workbench:{ns:"forge",path:"/forge/scenes/sc-q4?as=maria",params:{id:"sc-q4"}}}},i={name:"View switch",render:()=>{const[r,n]=s.useState("board");return e.jsx(q,{value:r,onChange:n})}},c={name:"View switch · 3D not available",render:()=>e.jsx(q,{value:"board",onChange:o,disabled:{"3d":"No solids on a planning board"}})},p={name:"Scene title",render:()=>e.jsx(B,{title:"Q4 release plan",canEdit:!0,onRename:async()=>{}})},m={name:"Scene title · read only",render:()=>e.jsx(B,{title:"Q4 release plan",canEdit:!1,onRename:async()=>{}})},l={name:"Scene title · naming a new scene",render:()=>e.jsx(B,{title:"Untitled scene",canEdit:!0,autoEdit:!0,onRename:async()=>{}})},d={name:"Element palette",render:()=>{const[r,n]=s.useState("select");return e.jsx(V,{children:e.jsx(I,{tool:r,onChange:n})})}},u={name:"Colour key",render:()=>e.jsx(P,{scene:t("sc-q4").scene})},h={name:"Colour key · none",render:()=>e.jsx(P,{scene:{...t("sc-orders","denys").scene,colorKey:void 0}})},g={name:"Objects list",render:()=>{const[r,n]=s.useState(["e-onb"]);return e.jsx(R,{scene:t("sc-q4").scene,selection:r,onSelect:n,onOpen:o})}},y={name:"Objects list · empty",render:()=>e.jsx(R,{scene:{...t("sc-q4").scene,objects:[],relations:[]},selection:[],onSelect:o,onOpen:o})},b={name:"Conversion panel · to backlog",render:()=>e.jsx(D,{sceneId:"sc-q4",target:"backlog",ids:["st-1","st-2","st-3"],onDone:o,onCancel:o})},C={name:"Conversion panel · to the graph",render:()=>e.jsx(D,{sceneId:"sc-orders",target:"graph",ids:["n-web","n-api","n-db"],onDone:o,onCancel:o})},S={name:"Composer · idle",render:()=>e.jsx(T,{phase:"idle",voice:"ok",readOnly:!1,onSubmit:o,onVoice:async()=>null,onCancel:o})},x={name:"Composer · thinking",render:()=>e.jsx(T,{phase:"thinking",voice:"ok",readOnly:!1,onSubmit:o,onVoice:async()=>null,onCancel:o})},v={name:"Composer · voice unavailable",render:()=>e.jsx(T,{phase:"idle",voice:"unavailable",readOnly:!1,onSubmit:o,onVoice:async()=>null,onCancel:o})},w={name:"Composer · read only",render:()=>e.jsx(T,{phase:"idle",voice:"ok",readOnly:!0,onSubmit:o,onVoice:async()=>null,onCancel:o})},j={name:"Composer · the start door",render:()=>e.jsx(T,{phase:"idle",voice:"ok",readOnly:!1,leading:"none",allowEmpty:!0,onSubmit:o,onVoice:async()=>null,onCancel:o,placeholder:"What should the scene show?",below:e.jsx(A,{children:"Blank · Planning board · Software diagram · Space"})})},f={name:"3D view",render:()=>e.jsx(G,{})};function G(){const{t:r}=E(),n=t("sc-logistics","olha"),a=s.useMemo(()=>Q(n.scene,{}),[n.scene,r]),[O,K]=s.useState([]);return e.jsx(V,{children:e.jsx(F,{scene:n.scene,graph:a,selection:O,presence:n.presence,camera:null,onCameraChange:o,readOnly:!1,onSelect:K,onOpen:o,onOps:o})})}const k={name:"Present view",render:()=>e.jsx(M,{})};function M(){const{t:r}=E(),n=L(),a=t("sc-logistics","olha"),O=s.useMemo(()=>H("present",a.scene,{t:r}),[a.scene,r]);return e.jsx(V,{children:e.jsx(N,{scene:a.scene,graph:O,labels:n,onExit:o})})}const ao=["Views","ViewsDisabled","Title","TitleReadOnly","TitleAutoEdit","Palette","Key","KeyEmpty","Objects","ObjectsEmpty","Conversion","ConversionGraph","ComposerIdle","ComposerThinking","ComposerVoiceUnavailable","ComposerReadOnly","ComposerDoor","ThreeD","Present"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "View switch",
  render: () => {
    const [v, setV] = useState<SceneView>("board");
    return <ViewSwitch value={v} onChange={setV} />;
  }
}`,...i.parameters?.docs?.source},description:{story:"The view switch (segmented, on the header line): Board · Diagram · 3D · Present; a view a scene cannot show is disabled with a reason.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "View switch · 3D not available",
  render: () => <ViewSwitch value="board" onChange={noop} disabled={{
    "3d": "No solids on a planning board"
  }} />
}`,...c.parameters?.docs?.source},description:{story:"The view switch with 3D disabled: a planning board has no solids — the reason in the title.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Scene title",
  render: () => <SceneTitle title="Q4 release plan" canEdit onRename={async () => undefined} />
}`,...p.parameters?.docs?.source},description:{story:"The title: one click to type over it (DS-7021 inline edit), Enter commits, Esc restores.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Scene title · read only",
  render: () => <SceneTitle title="Q4 release plan" canEdit={false} onRename={async () => undefined} />
}`,...m.parameters?.docs?.source},description:{story:"The title for a viewer: text, nothing to click.",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Scene title · naming a new scene",
  render: () => <SceneTitle title="Untitled scene" canEdit autoEdit onRename={async () => undefined} />
}`,...l.parameters?.docs?.source},description:{story:"The title in edit from birth (`?rename=1`): a scene created from the door asks for its name first.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Element palette",
  render: () => {
    const [tool, setTool] = useState<Tool>("select");
    return <Part><ElementPalette tool={tool} onChange={setTool} /></Part>;
  }
}`,...d.parameters?.docs?.source},description:{story:"The Board's tools (left edge): select · connect · node · sticky · text · frame · shape, with the keys.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Colour key",
  render: () => <ColorKey scene={sceneRead("sc-q4").scene} />
}`,...u.parameters?.docs?.source},description:{story:"The colour key on the canvas: the meanings this scene gave its hues ( — content, never a system meaning).",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Colour key · none",
  render: () => <ColorKey scene={{
    ...sceneRead("sc-orders", "denys").scene,
    colorKey: undefined
  }} />
}`,...h.parameters?.docs?.source},description:{story:"No key: a scene that gave no hue a meaning renders nothing.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Objects list",
  render: () => {
    const [sel, setSel] = useState<string[]>(["e-onb"]);
    return <ObjectsList scene={sceneRead("sc-q4").scene} selection={sel} onSelect={setSel} onOpen={noop} />;
  }
}`,...g.parameters?.docs?.source},description:{story:"The Objects list under the canvas (`o`): the same objects as a table — kind · meaning · layer; the selection shared.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Objects list · empty",
  render: () => <ObjectsList scene={{
    ...sceneRead("sc-q4").scene,
    objects: [],
    relations: []
  }} selection={[]} onSelect={noop} onOpen={noop} />
}`,...y.parameters?.docs?.source},description:{story:"The Objects list of an empty scene: the one line.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Conversion panel · to backlog",
  render: () => <ConversionPanel sceneId="sc-q4" target="backlog" ids={["st-1", "st-2", "st-3"]} onDone={noop} onCancel={noop} />
}`,...b.parameters?.docs?.source},description:{story:"The conversion panel (): three stories to a backlog — the preview as a table, *Create* the primary. Reads the in-process BFF.",...b.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Conversion panel · to the graph",
  render: () => <ConversionPanel sceneId="sc-orders" target="graph" ids={["n-web", "n-api", "n-db"]} onDone={noop} onCancel={noop} />
}`,...C.parameters?.docs?.source},description:{story:"The conversion panel to the graph: the same shape, the graph's claims proposed (Subject/proposed, rule 80).",...C.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Composer · idle",
  render: () => <Composer phase="idle" voice="ok" readOnly={false} onSubmit={noop} onVoice={async () => null} onCancel={noop} />
}`,...S.parameters?.docs?.source},description:{story:"The dock's composer, idle: the `@` agent in front, the mic, one line.",...S.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Composer · thinking",
  render: () => <Composer phase="thinking" voice="ok" readOnly={false} onSubmit={noop} onVoice={async () => null} onCancel={noop} />
}`,...x.parameters?.docs?.source},description:{story:"Thinking: the line busy, *Stop* in place of send.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Composer · voice unavailable",
  render: () => <Composer phase="idle" voice="unavailable" readOnly={false} onSubmit={noop} onVoice={async () => null} onCancel={noop} />
}`,...v.parameters?.docs?.source},description:{story:"The mic unavailable (no transcriber on this stack, ): said in place, text still works.",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Composer · read only",
  render: () => <Composer phase="idle" voice="ok" readOnly onSubmit={noop} onVoice={async () => null} onCancel={noop} />
}`,...w.parameters?.docs?.source},description:{story:"A viewer's composer: questions only; the placeholder says so.",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Composer · the start door",
  render: () => <Composer phase="idle" voice="ok" readOnly={false} leading="none" allowEmpty onSubmit={noop} onVoice={async () => null} onCancel={noop} placeholder="What should the scene show?" below={<Hint>Blank · Planning board · Software diagram · Space</Hint>} />
}`,...j.parameters?.docs?.source},description:{story:"The start door's composer: no leading tool, Enter on an empty line is *from scratch*, the starting points beneath.",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "3D view",
  render: () => <ThreeDPart />
}`,...f.parameters?.docs?.source},description:{story:"3D (): the logistics hall's solids through the kit's camera; the CAD gizmo on a selection.",...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Present view",
  render: () => <PresentPart />
}`,...k.parameters?.docs?.source},description:{story:"Present (08 §3.8): the camera track over the Board — `← → Space` step, `Esc` exits.",...k.parameters?.docs?.description}}};export{j as ComposerDoor,S as ComposerIdle,w as ComposerReadOnly,x as ComposerThinking,v as ComposerVoiceUnavailable,b as Conversion,C as ConversionGraph,u as Key,h as KeyEmpty,g as Objects,y as ObjectsEmpty,d as Palette,k as Present,f as ThreeD,p as Title,l as TitleAutoEdit,m as TitleReadOnly,i as Views,c as ViewsDisabled,ao as __namedExportsOrder,to as default};
