import{j as x}from"./iframe-C_4ax-Jm.js";import{i as D,a,s as r,D as R,c as S,d as g}from"./harness-BKnF6FGS.js";import{P as T,R as A}from"./ProcessingConfig-B4zr8GZS.js";import"./preload-helper-PPVm8Dsz.js";import"./GraphShell-BqaAvdfg.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";import"./format-BXHDRv_8.js";const i="prj_supply",C="2026-10-30T10:00:00Z",P={...R,sufficiency_mode:"per_clause",index_page_follow:3,lexical_weight:1.4},h={...S,uri:"nexus://graph/retrieval_profile/rtp_d1",profile_id:"rtp_d1",version:`rtp_${i}@0`,status:"draft",settings:P,note:"Запитання з двох частин — кожна має бути покрита",created_by_ref:"nexus://core/user/usr_alex"},E={...h,uri:"nexus://graph/retrieval_profile/rtp_a1",profile_id:"rtp_a1",version:`rtp_${i}@1`,status:"active",activated_by_ref:"nexus://core/user/usr_alex",activated_at:C},v={...g,uri:"nexus://graph/processing_profile/prf_d1",profile_id:"prf_d1",version:`prf_${i}@0`,status:"draft",settings:{...g.settings,chunk_chars:900},note:"Коротші фрагменти для таблиць",created_by_ref:"nexus://core/user/usr_alex",runs_pinned:0},Fe={title:"Apps/NexGraph/Parts/ProcessingConfig",component:T,decorators:[D],parameters:{ds:"DS-6002",layout:"fullscreen",...a("/graph/pipeline?config=1","populated",{owner:!0}),docs:{description:{component:"The Pipeline's Inspector (-3 ·  S1, DS-6002 amendment): the processing knobs and, under them, the\nretrieval dials — each pair *Active · Draft*. The retrieval states the register names: defaults (`rtp_default@1`\nread-only until edited) · draft · invalid (the one cross-field rule inline) · active (`rtp_<project>@1`) · viewer\n(facts and what the doors require) · denied."}}},args:{projectId:i,onClose:()=>{}}},c={name:"Retrieval · defaults",play:async({canvasElement:e})=>{if(!(await r(e,"rtp-active-facts")).textContent?.includes("rtp_default@1"))throw new Error("the platform default is not named");if(!(await r(e,"rtp-activate")).disabled)throw new Error("activate must wait for a saved draft")}},d={name:"Retrieval · draft",parameters:a("/graph/pipeline?config=1","populated",{owner:!0,retrievalDraft:h})},l={name:"Retrieval · invalid",play:async({canvasElement:e})=>{const t=await r(e,"rtp-rerank_confident");Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(t,"0.2"),t.dispatchEvent(new Event("input",{bubbles:!0})),await r(e,"rtp-save");const _=Date.now()+3e3;for(;Date.now()<_&&!e.querySelector("#rtp-rerank_floor-err");)await new Promise(y=>setTimeout(y,20));if(!e.querySelector("#rtp-rerank_floor-err"))throw new Error("the cross-field rule did not speak");if(!e.querySelector('[data-testid="rtp-save"]')?.disabled)throw new Error("save must be shut while invalid")}},u={name:"Retrieval · active",parameters:a("/graph/pipeline?config=1","populated",{owner:!0,retrievalActive:E})},m={name:"Retrieval · viewer",parameters:a("/graph/pipeline?config=1","populated",{viewer:!0,retrievalActive:E})},f={name:"Retrieval · denied",parameters:a("/graph/pipeline?config=1","populated",{owner:!0,retrievalDenied:!0})},o={name:"RetrievalConfigSections",parameters:a("/graph/pipeline?config=1","populated",{owner:!0,retrievalDraft:h}),render:()=>x.jsx(A,{projectId:i})},w={name:"Processing · draft · Run as shadow",parameters:a("/graph/pipeline?config=1","populated",{owner:!0,profileDraft:v}),play:async({canvasElement:e})=>{const t=await r(e,"cfg-shadow");if(t.disabled)throw new Error("a saved draft opens the shadow door");t.click();const p=await r(e,"cfg-notice");if(!/1 shadow runs|тіньових запусків: 1/.test(p.textContent??""))throw new Error(`the receipt counts the runs: ${p.textContent}`)}},n={name:"Processing · draft · shadow refused (cap)",parameters:a("/graph/pipeline?config=1","populated",{owner:!0,profileDraft:v,shadowRefused:"SHADOW_CAP"}),play:async({canvasElement:e})=>{(await r(e,"cfg-shadow")).click();const t=await r(e,"cfg-error");if(!/Two shadow versions|дві тіньові версії/.test(t.textContent??""))throw new Error(`the cap speaks: ${t.textContent}`)}},s={name:"Processing · draft · editor (no shadow door)",parameters:a("/graph/pipeline?config=1","populated",{owner:!1,editor:!0,profileDraft:v}),play:async({canvasElement:e})=>{if(await r(e,"cfg-save"),e.querySelector('[data-testid="cfg-shadow"]'))throw new Error("an editor has no shadow door")}},Ie=["Defaults","Draft","Invalid","Active","Viewer","Denied","Sections","ShadowDraft","ShadowRefused","ShadowEditor"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Retrieval · defaults",
  play: async ({
    canvasElement
  }) => {
    const facts = await settled(canvasElement, "rtp-active-facts");
    if (!facts.textContent?.includes("rtp_default@1")) throw new Error("the platform default is not named");
    const activate = await settled(canvasElement, "rtp-activate");
    if (!(activate as HTMLButtonElement).disabled) throw new Error("activate must wait for a saved draft");
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Retrieval · draft",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: true,
    retrievalDraft: DRAFT
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Retrieval · invalid",
  play: async ({
    canvasElement
  }) => {
    // the floor (0.4) must stay below *Confident from* — pulling the latter under it says so inline and keeps *Save draft* shut
    const confident = (await settled(canvasElement, "rtp-rerank_confident")) as HTMLInputElement;
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    setter?.call(confident, "0.2");
    confident.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    await settled(canvasElement, "rtp-save");
    const until = Date.now() + 3_000;
    while (Date.now() < until && !canvasElement.querySelector("#rtp-rerank_floor-err")) await new Promise(r => setTimeout(r, 20));
    if (!canvasElement.querySelector("#rtp-rerank_floor-err")) throw new Error("the cross-field rule did not speak");
    if (!canvasElement.querySelector<HTMLButtonElement>('[data-testid="rtp-save"]')?.disabled) throw new Error("save must be shut while invalid");
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Retrieval · active",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: true,
    retrievalActive: ACTIVE
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Retrieval · viewer",
  parameters: at("/graph/pipeline?config=1", "populated", {
    viewer: true,
    retrievalActive: ACTIVE
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Retrieval · denied",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: true,
    retrievalDenied: true
  })
}`,...f.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "RetrievalConfigSections",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: true,
    retrievalDraft: DRAFT
  }),
  render: () => <RetrievalConfigSections projectId={PRJ} />
}`,...o.parameters?.docs?.source},description:{story:"The retrieval pair on its own — the sections any Inspector may host (the story of `RetrievalConfigSections`).",...o.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Processing · draft · Run as shadow",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: true,
    profileDraft: PRF_DRAFT
  }),
  play: async ({
    canvasElement
  }) => {
    const door = (await settled(canvasElement, "cfg-shadow")) as HTMLButtonElement;
    if (door.disabled) throw new Error("a saved draft opens the shadow door");
    door.click();
    const notice = await settled(canvasElement, "cfg-notice");
    if (!/1 shadow runs|тіньових запусків: 1/.test(notice.textContent ?? "")) throw new Error(\`the receipt counts the runs: \${notice.textContent}\`);
  }
}`,...w.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Processing · draft · shadow refused (cap)",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: true,
    profileDraft: PRF_DRAFT,
    shadowRefused: "SHADOW_CAP"
  }),
  play: async ({
    canvasElement
  }) => {
    ((await settled(canvasElement, "cfg-shadow")) as HTMLButtonElement).click();
    const err = await settled(canvasElement, "cfg-error");
    if (!/Two shadow versions|дві тіньові версії/.test(err.textContent ?? "")) throw new Error(\`the cap speaks: \${err.textContent}\`);
  }
}`,...n.parameters?.docs?.source},description:{story:"The cap (): two shadows already stand for a document — the door says so, nothing is ordered.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Processing · draft · editor (no shadow door)",
  parameters: at("/graph/pipeline?config=1", "populated", {
    owner: false,
    editor: true,
    profileDraft: PRF_DRAFT
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "cfg-save");
    if (canvasElement.querySelector('[data-testid="cfg-shadow"]')) throw new Error("an editor has no shadow door");
  }
}`,...s.parameters?.docs?.source},description:{story:"An editor edits the draft but neither activates nor shadows — one restriction line, no greyed door ().",...s.parameters?.docs?.description}}};export{u as Active,c as Defaults,f as Denied,d as Draft,l as Invalid,o as Sections,w as ShadowDraft,s as ShadowEditor,n as ShadowRefused,m as Viewer,Ie as __namedExportsOrder,Fe as default};
