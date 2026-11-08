import{j as e}from"./iframe-C_4ax-Jm.js";import{i as m,a as d}from"./harness-BKnF6FGS.js";import{M as l,a as p,T as n,V as a}from"./common-Bf-mOKTC.js";import"./preload-helper-PPVm8Dsz.js";import"./GraphShell-BqaAvdfg.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";import"./format-BXHDRv_8.js";const ye={title:"Apps/NexGraph/Parts/Common",decorators:[m],parameters:{ds:"DS-6001",layout:"fullscreen",...d("/graph"),docs:{description:{component:"The small shared parts of NexGraph: a claim status (DS-3004 tone + word), a knowledge tier (DS-3003), a MiniTable — the kit's DataTable without cell overrides ()."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--nexus-space-4)",flexWrap:"wrap"},children:[["proposed","contested","verified","falsified","superseded","needs_reverification"].map(r=>e.jsx(p,{status:r},r)),e.jsx(p,{status:"verified",scope:"platform"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--nexus-space-4)"},children:[e.jsx(n,{tier:"project"}),e.jsx(n,{tier:"base"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--nexus-space-4)"},children:[e.jsx(a,{visibility:"shadow"}),e.jsx(a,{visibility:"superseded"}),e.jsx(a,{visibility:"live"})]})},c=[{id:"a",name:"Bronze blobs",n:482113},{id:"b",name:"Silver embeddings",n:2},{id:"c",name:"AGE domain",n:1}],o={name:"MiniTable",render:()=>e.jsx(l,{rows:c,columns:[{key:"name",header:"Store",render:r=>r.name},{key:"n",header:"Volume",align:"right",render:r=>String(r.n)}],rowKey:r=>r.id,caption:"Datastores",testId:"mini"})},xe=["Statuses","Tiers","Visibility","Mini"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--nexus-space-4)",
    flexWrap: "wrap"
  }}>
      {(["proposed", "contested", "verified", "falsified", "superseded", "needs_reverification"] as const).map(s => <Status key={s} status={s} />)}
      <Status status="verified" scope="platform" />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--nexus-space-4)"
  }}>
      <TierChip tier="project" />
      <TierChip tier="base" />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--nexus-space-4)"
  }}>
      <VisibilityChip visibility="shadow" />
      <VisibilityChip visibility="superseded" />
      <VisibilityChip visibility="live" />
    </div>
}`,...i.parameters?.docs?.source},description:{story:" S2 ( §2): a version under measurement is *Shadow*, the twin it replaced *Superseded*; live carries no chip.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "MiniTable",
  render: () => <MiniTable<Row> rows={rows} columns={[{
    key: "name",
    header: "Store",
    render: r => r.name
  }, {
    key: "n",
    header: "Volume",
    align: "right",
    render: r => String(r.n)
  }]} rowKey={r => r.id} caption="Datastores" testId="mini" />
}`,...o.parameters?.docs?.source}}};export{o as Mini,s as Statuses,t as Tiers,i as Visibility,xe as __namedExportsOrder,ye as default};
