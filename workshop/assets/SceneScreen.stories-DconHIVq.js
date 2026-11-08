import{i as y,a as w,b as f}from"./harness-hHeQurk0.js";import{c as S}from"./SceneScreen-b2O5I5UF.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C_4ax-Jm.js";import"./bff-BhLxIK9U.js";import"./ForgeShell-BXa4k2EW.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./square-kanban-1DGdpNhu.js";import"./workflow-BGMWCDzG.js";import"./SceneInspector-B1ifgm_B.js";import"./model-C05dco_2.js";import"./Composer-_fiYph92.js";import"./at-sign-DxAm-yIt.js";import"./square-CY8wW9K4.js";import"./sticky-note-QP4A__EZ.js";import"./circle-YHOf4nP0.js";import"./arrow-right-QE--7mId.js";import"./minus-8B1Z9tTG.js";import"./trash-2-qQksh-HK.js";import"./arrow-down-CEX2ZLRK.js";import"./panel-right-Y_GI9Ph_.js";import"./FeedbackCard-DHVFYkoq.js";const Le={title:"Apps/NexForge/Scene",component:S,decorators:[y],parameters:{ds:"DS-6023",layout:"fullscreen",...w("/forge/scenes/sc-q4","populated","maria",{id:"sc-q4"}),docs:{description:{component:`The Scene page (08 §3 — DS-6023 the scene workspace): one header line (the title typed over in place · version chip ·
presence · the view switch · Objects · Details · ⋯), the canvas with the Board's tools, the dock (the feedback card
over NexChat's line composer) and the Inspector as a door. Four views on one scene — Board · Diagram · 3D · Present.`}}},args:{id:"sc-q4"}},l=f("/forge/scenes/sc-q4","maria",{id:"sc-q4"}),o=l.Populated,s=l.Empty,u=l.Loading,h=l.Error,a={parameters:w("/forge/scenes/sc-q4","populated","olha",{id:"sc-q4"})},g=l.Offline,i={name:"Populated · view only",parameters:w("/forge/scenes/sc-q4","populated","denys",{id:"sc-q4"})},n={name:"Populated · Diagram",parameters:{workbench:{ns:"forge",path:"/forge/scenes/sc-orders?as=denys&view=diagram",params:{id:"sc-orders"}}},args:{id:"sc-orders"}},c={name:"Populated · 3D",parameters:{workbench:{ns:"forge",path:"/forge/scenes/sc-logistics?as=olha&view=3d",params:{id:"sc-logistics"}}},args:{id:"sc-logistics"}},p={name:"Populated · Present",parameters:{workbench:{ns:"forge",path:"/forge/scenes/sc-logistics?as=olha&view=present",params:{id:"sc-logistics"}}},args:{id:"sc-logistics"}},m={name:"Populated · Objects list",play:async({canvasElement:r})=>{for(let e=0;e<40&&!r.querySelector('[data-testid="toggle-objects"]');e++)await new Promise(t=>setTimeout(t,50));r.querySelector('[data-testid="toggle-objects"]')?.click();for(let e=0;e<40&&!r.querySelector('[data-testid="objects-list"]');e++)await new Promise(t=>setTimeout(t,50));if(!r.querySelector('[data-testid="objects-list"]'))throw new globalThis.Error("the Objects list did not open")}},d={name:"Populated · Inspector open",play:async({canvasElement:r})=>{for(let e=0;e<40&&!r.querySelector('[data-testid="toggle-inspector"]');e++)await new Promise(t=>setTimeout(t,50));r.querySelector('[data-testid="toggle-inspector"]')?.click();for(let e=0;e<40&&!r.querySelector('[data-testid="scene-inspector"]');e++)await new Promise(t=>setTimeout(t,50));if(!r.querySelector('[data-testid="scene-inspector"]'))throw new globalThis.Error("the Inspector did not open")}},Ie=["Populated","Empty","Loading","Error","Denied","Offline","ViewOnly","Diagram","ThreeD","Present","WithObjects","WithInspector"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"L.Populated",...o.parameters?.docs?.source},description:{story:"The Board as an editor: the tools on the left edge, the colour key on the canvas, the composer below.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"L.Empty",...s.parameters?.docs?.source},description:{story:"A scene with nothing on it: the quiet canvas and one hint; the composer's placeholder asks for the first thing.",...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"L.Loading",...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"L.Error",...h.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: at("/forge/scenes/sc-q4", "populated", "olha", {
    id: "sc-q4"
  })
}`,...a.parameters?.docs?.source},description:{story:"No relation to this scene (): the sentence, nothing of the scene.",...a.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"L.Offline",...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Populated · view only",
  parameters: at("/forge/scenes/sc-q4", "populated", "denys", {
    id: "sc-q4"
  })
}`,...i.parameters?.docs?.source},description:{story:"A viewer: the same page — *View only* on the header line, no tools, the Inspector read-only, a questions-only composer.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Populated · Diagram",
  parameters: {
    workbench: {
      ns: "forge",
      path: "/forge/scenes/sc-orders?as=denys&view=diagram",
      params: {
        id: "sc-orders"
      }
    }
  },
  args: {
    id: "sc-orders"
  }
}`,...n.parameters?.docs?.source},description:{story:"Diagram: the same objects at the diagram level, fitted, read-only; the level chip on the canvas.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Populated · 3D",
  parameters: {
    workbench: {
      ns: "forge",
      path: "/forge/scenes/sc-logistics?as=olha&view=3d",
      params: {
        id: "sc-logistics"
      }
    }
  },
  args: {
    id: "sc-logistics"
  }
}`,...c.parameters?.docs?.source},description:{story:"3D: the solids through a real camera with the CAD gizmo (); the *Conceptual* chip every spatial view carries.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Populated · Present",
  parameters: {
    workbench: {
      ns: "forge",
      path: "/forge/scenes/sc-logistics?as=olha&view=present",
      params: {
        id: "sc-logistics"
      }
    }
  },
  args: {
    id: "sc-logistics"
  }
}`,...p.parameters?.docs?.source},description:{story:"Present: the camera track — no Inspector, no composer; `← → Space` step, `Esc` exits.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Populated · Objects list",
  play: async ({
    canvasElement
  }) => {
    for (let i = 0; i < 40 && !canvasElement.querySelector('[data-testid="toggle-objects"]'); i++) await new Promise(r => setTimeout(r, 50));
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="toggle-objects"]')?.click();
    for (let i = 0; i < 40 && !canvasElement.querySelector('[data-testid="objects-list"]'); i++) await new Promise(r => setTimeout(r, 50));
    if (!canvasElement.querySelector('[data-testid="objects-list"]')) throw new globalThis.Error("the Objects list did not open");
  }
}`,...m.parameters?.docs?.source},description:{story:"The Objects list open under the canvas (`o`): the canvas as a table with the same selection.",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Populated · Inspector open",
  play: async ({
    canvasElement
  }) => {
    for (let i = 0; i < 40 && !canvasElement.querySelector('[data-testid="toggle-inspector"]'); i++) await new Promise(r => setTimeout(r, 50));
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="toggle-inspector"]')?.click();
    for (let i = 0; i < 40 && !canvasElement.querySelector('[data-testid="scene-inspector"]'); i++) await new Promise(r => setTimeout(r, 50));
    if (!canvasElement.querySelector('[data-testid="scene-inspector"]')) throw new globalThis.Error("the Inspector did not open");
  }
}`,...d.parameters?.docs?.source},description:{story:"The Inspector opened from *Details* (`i`): a door, never a wall — the scene's sections when nothing is selected.",...d.parameters?.docs?.description}}};export{a as Denied,n as Diagram,s as Empty,h as Error,u as Loading,g as Offline,o as Populated,p as Present,c as ThreeD,i as ViewOnly,d as WithInspector,m as WithObjects,Ie as __namedExportsOrder,Le as default};
