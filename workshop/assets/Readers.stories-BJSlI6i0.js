import{j as e}from"./iframe-C_4ax-Jm.js";import{i as l,a as p,I as u,V as g,e as f}from"./harness-BKnF6FGS.js";import{A as I,D as d,T as h}from"./DatasetPublish-L84DxI45.js";import{E as b}from"./EntityExplain-CDAcCRQy.js";import{P}from"./ProcessingConfig-B4zr8GZS.js";import{V as y}from"./VersionDiff-B2iKXRJq.js";import"./preload-helper-PPVm8Dsz.js";import"./GraphShell-BqaAvdfg.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";import"./format-BXHDRv_8.js";import"./common-Bf-mOKTC.js";const je={title:"Apps/NexGraph/Parts/Readers",decorators:[l],parameters:{ds:"DS-6002",layout:"fullscreen",...p("/graph/sources/bnd_upload/document/vs_q2"),docs:{description:{component:"The parts that read graph-api on their own (through the session's clients, over the fixture world): the raw artifacts review (S12-d), a table's dataset panel (S7), the version diff (), the processing configuration (), an entity's explain layer (S11c), a byte door as an image (DoorImage)."}}}},m="prj_supply",r={render:()=>e.jsx(I,{projectId:m,versionId:"vs_q2",onOpen:()=>{}})},o={name:"TablePanel",render:()=>e.jsx(h,{projectId:m,table:u[2],caption:"Таблиця 7. Показники за II квартал 2025",pdfPage:1,onClear:()=>{}})},a={name:"VersionDiffPanel",parameters:p("/graph/sources/bnd_upload/document/vs_q2b","populated",{versions:[g,f]}),render:()=>e.jsx(y,{projectId:m,versionId:"vs_q2b",versionNo:2,labelOf:c=>`v${c}`})},t={name:"ProcessingConfigInspector",parameters:p("/graph/pipeline","populated",{owner:!0}),render:()=>e.jsx(P,{projectId:m,onClose:()=>{}})},s={name:"EntityExplain",parameters:p("/graph/studio"),render:()=>e.jsx(b,{entityId:"ent_acme",wide:!1})},n={name:"DoorImage",render:()=>e.jsx(d,{alt:"Page 1",width:120,height:160,testId:"door",load:async()=>({blob:new Blob([new Uint8Array([137,80,78,71])],{type:"image/png"}),mediaType:"image/png"})})},i={name:"DoorImage · refused",render:()=>e.jsx(d,{alt:"Page 9",width:120,height:160,testId:"door",load:async()=>{throw new Error("denied")}})},_e=["Artifacts","Table","Diff","Config","Explain","Door","DoorRefused"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ArtifactsGallery projectId={PRJ} versionId="vs_q2" onOpen={() => {}} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "TablePanel",
  render: () => <TablePanel projectId={PRJ} table={ITEMS[2]} caption="Таблиця 7. Показники за II квартал 2025" pdfPage={1} onClear={() => {}} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "VersionDiffPanel",
  parameters: at("/graph/sources/bnd_upload/document/vs_q2b", "populated", {
    versions: [VERSION_V2, VERSION]
  }),
  render: () => <VersionDiffPanel projectId={PRJ} versionId="vs_q2b" versionNo={2} labelOf={v => \`v\${v}\`} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "ProcessingConfigInspector",
  parameters: at("/graph/pipeline", "populated", {
    owner: true
  }),
  render: () => <ProcessingConfigInspector projectId={PRJ} onClose={() => {}} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "EntityExplain",
  parameters: at("/graph/studio"),
  render: () => <EntityExplain entityId="ent_acme" wide={false} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "DoorImage",
  render: () => <DoorImage alt="Page 1" width={120} height={160} testId="door" load={async () => ({
    blob: new Blob([new Uint8Array([137, 80, 78, 71])], {
      type: "image/png"
    }),
    mediaType: "image/png"
  })} />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "DoorImage · refused",
  render: () => <DoorImage alt="Page 9" width={120} height={160} testId="door" load={async () => {
    throw new Error("denied");
  }} />
}`,...i.parameters?.docs?.source}}};export{r as Artifacts,t as Config,a as Diff,n as Door,i as DoorRefused,s as Explain,o as Table,_e as __namedExportsOrder,je as default};
