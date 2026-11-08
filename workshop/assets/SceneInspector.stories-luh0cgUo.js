import{n as e}from"./fixtures-Tp3WgICc.js";import{o as c,s as a}from"./harness-hHeQurk0.js";import{b as p}from"./SceneInspector-B1ifgm_B.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C_4ax-Jm.js";import"./bff-BhLxIK9U.js";import"./ForgeShell-BXa4k2EW.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./square-kanban-1DGdpNhu.js";import"./workflow-BGMWCDzG.js";import"./model-C05dco_2.js";const de={title:"Apps/NexForge/Scene inspector",component:p,decorators:[c],parameters:{ds:"DS-6023",workbench:{ns:"forge",path:"/forge/scenes/sc-q4?as=maria",params:{id:"sc-q4"}},docs:{description:{component:"The scene Inspector (DS-6023 · 08 §3.6 · ): a door, never a wall — opened from *Details*, closed by `Esc`. One\nobject: name · meaning · properties · the binding · convert. A multi-selection: what applies to all of them. Nothing\nselected: the scene's own sections — layers · versions · the history. A viewer's Inspector reads the same picture\nunder a `Restriction` line (kit `Inspector` · `Field` · `PropertyList` · `ActionRow`)."}}},args:{read:a("sc-q4"),selection:[],onOps:e,onClose:e,onSelect:e,onConvert:e,onSuggest:e,onSaveVersion:e,onPublish:e,onRestore:e}},o={name:"The scene"},r={name:"One object",args:{selection:["e-onb"]}},s={name:"One object · bound",args:{selection:["st-1"]}},t={name:"A selection",args:{selection:["st-1","st-2","st-3"]}},n={name:"One object · read only",args:{read:a("sc-q4","denys"),selection:["e-onb"]}},i={name:"The scene · empty",args:{read:{...a("sc-q4"),scene:{...a("sc-q4").scene,objects:[],relations:[]},versions:[],history:[]}}},le=["Scene","Object","Bound","Selection","ReadOnly","Empty"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "The scene"
}`,...o.parameters?.docs?.source},description:{story:"Nothing selected: the scene itself — layers, versions, the history.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "One object",
  args: {
    selection: ["e-onb"]
  }
}`,...r.parameters?.docs?.source},description:{story:"One object: its name in a field, the meaning as a select, the properties, convert to a backlog item · a Flow · the graph.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "One object · bound",
  args: {
    selection: ["st-1"]
  }
}`,...s.parameters?.docs?.source},description:{story:"A bound object (NEX-412): the binding's status and door, *Unlink* beside it.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "A selection",
  args: {
    selection: ["st-1", "st-2", "st-3"]
  }
}`,...t.parameters?.docs?.source},description:{story:"A multi-selection: the common actions — layer · lock · convert all.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "One object · read only",
  args: {
    read: sceneRead("sc-q4", "denys"),
    selection: ["e-onb"]
  }
}`,...n.parameters?.docs?.source},description:{story:"A viewer (Denys may only view `sc-q4`): the same sections, every control disabled, the `Restriction` line first.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "The scene · empty",
  args: {
    read: {
      ...sceneRead("sc-q4"),
      scene: {
        ...sceneRead("sc-q4").scene,
        objects: [],
        relations: []
      },
      versions: [],
      history: []
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"An empty scene: no layers worth a list, no versions yet — the sections say so.",...i.parameters?.docs?.description}}};export{s as Bound,i as Empty,r as Object,n as ReadOnly,o as Scene,t as Selection,le as __namedExportsOrder,de as default};
