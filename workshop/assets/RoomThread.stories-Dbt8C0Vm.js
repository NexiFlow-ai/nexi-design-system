import{r as $,j as D}from"./iframe-C_4ax-Jm.js";import{R as H}from"./RoomThread-3DUdsNgg.js";import"./preload-helper-PPVm8Dsz.js";import"./Trace-BSKaAXMd.js";import"./BrandMark-ZJnyD0IE.js";import"./AskBar-D6qFedOb.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./LobbyThread-9xK7Bd9J.js";import"./ConversationFrame-crdlsIAN.js";import"./HandOver-BZSm7-D2.js";const L={name:"Olena"},z={name:"Marko"},I={name:"Dana",me:!0},U={name:"Nexi"},i=(o,t,e,a,c={})=>({kind:"line",id:o,author:t,at:e,body:a,...c}),n=[{kind:"day",id:"d1",label:"Yesterday"},i("l1",z,"11:02","Morning — the Ningbo rates are in, I put them on the desk."),i("l2",L,"11:33","@Nexi which shipments from China are waiting for a rate?",{mentions:["Nexi"],replies:{count:1,lastAt:"yesterday",faces:[U]}}),{kind:"day",id:"d2",label:"Today"},{kind:"unread",id:"u1"},i("l3",L,"17:35","@Nexi in one sentence: what is NexChat?",{mentions:["Nexi"]}),{kind:"nexi",id:"n1",at:"17:35",stage:"answer",askedBy:"Olena",text:"NexChat is the conversation at the centre of Nexi — you ask in plain words and Nexi answers from your organization's knowledge, runs its agents and flows, and keeps a record of every turn.",receipt:"from 2 documents",openInNexi:"nexus://chat/thread/thr_01jb5q7wzr"},i("l4",I,"17:36","thanks — and the Odesa one?")],Q=[...n.slice(0,6),{kind:"nexi",id:"n1",at:"17:35",stage:"working",askedBy:"Olena"}],Y=[...n.slice(0,6),{kind:"nexi",id:"n1",at:"17:35",stage:"working",askedBy:"Olena",progress:"Reading the ledger · 4 s"}],K=[...n.slice(0,6),{kind:"nexi",id:"n1",at:"17:35",stage:"answer",askedBy:"Olena",text:"Three shipments are waiting for a rate: SCG-41 (Ningbo → Odesa, 2 containers), SCG-44 and SCG-47. For SCG-44 the carrier promised an answer by Friday.",gist:!0,receipt:"from 3 documents",openInNexi:"nexus://chat/thread/thr_01jb5q7wzr"}],X=[...n.slice(0,6),{kind:"nexi",id:"n1",at:"17:35",stage:"waiting",askedBy:"Olena",text:"Waiting on Olena."}],J=[...n.slice(0,6),{kind:"nexi",id:"n1",at:"17:35",stage:"ceiling",askedBy:"Olena",text:"Nothing at this room's level — ask Nexi in your own chat for more."}],V=[...n.slice(0,4),i("l3",I,"17:35","@Nexi hi, can you help me here?",{mentions:["Nexi"]}),{kind:"connect",id:"c1",at:"17:35",text:"Connect your Nexi account to ask — You › Nexi.",onConnect:()=>{}}],Z=[...n,i("l5",I,"17:37","sending this one now",{pending:!0})],ee=[i("l2",L,"Yesterday 11:33","@Nexi which shipments from China are waiting for a rate?",{mentions:["Nexi"]}),{kind:"nexi",id:"n0",at:"Yesterday 11:33",stage:"answer",text:"Three shipments are waiting for a rate: SCG-41 (Ningbo → Odesa, 2 containers), SCG-44 and SCG-47. For SCG-44 the carrier promised an answer by Friday.",receipt:"from 3 documents",openInNexi:"nexus://chat/thread/thr_01jb5q7wzr"},i("l6",I,"Yesterday 11:40","@Nexi and SCG-47 — who is the carrier?",{mentions:["Nexi"]}),{kind:"nexi",id:"n2",at:"Yesterday 11:40",stage:"answer",text:"SCG-47 goes with Maersk; the rate request went out on 28 Oct and has no answer yet.",receipt:"from 1 document",openInNexi:"nexus://chat/thread/thr_01jb5q7wzr"}],te=[{id:"nexi",name:"Nexi",nexi:!0},{id:"olena",name:"Olena"},{id:"marko",name:"Marko"},{id:"ivan",name:"Ivan"}];function re({items:o,status:t="ready",mode:e="room",room:a="#supply-desk",nexiInRoom:c=!0,mentionQuery:M,offline:A=!1,replyDoor:B=!1,attach:_=!1}){const[j,P]=$.useState(M!==void 0?`@${M}`:""),[F,d]=$.useState([]),[W,G]=$.useState(M);return D.jsxs("div",{className:"nexus-convo-page",style:{maxWidth:e==="thread"?480:void 0,marginInline:"auto"},children:[D.jsx(H,{room:a,mode:e,status:A?"offline":t,items:o,nexiInRoom:c,draft:j,onDraftChange:r=>{P(r);const s=/@([\w-]*)$/.exec(r);G(s?s[1]:void 0)},onSend:r=>{d(s=>[...s,`send:${r}`]),P(""),G(void 0)},mention:W!==void 0?{query:W,items:te,onPick:r=>{P(s=>s.replace(/@[\w-]*$/,`@${r.name} `)),G(void 0),d(s=>[...s,`mention:${r.id}`])},onClose:()=>G(void 0)}:void 0,onOpenThread:r=>d(s=>[...s,`thread:${r}`]),onReply:B?r=>d(s=>[...s,`reply:${r}`]):void 0,onAttach:_?()=>d(r=>[...r,"attach"]):void 0,onOpenInNexi:r=>d(s=>[...s,`open:${r}`]),onRetry:()=>d(r=>[...r,"retry"])}),D.jsx("output",{"data-testid":"room-log",style:{display:"none"},children:F.join("|")})]})}const we={title:"Conversation/Room thread",component:re,parameters:{ds:"DS-5023",layout:"fullscreen"}},m={args:{items:n}},l={args:{items:Q}},h={args:{items:Y}},p={args:{items:K}},u={args:{items:X}},g={args:{items:J}},y={args:{items:V}},w={args:{items:Z}},x={args:{items:n,mentionQuery:""},play:async({canvasElement:o})=>{const t=e=>o.querySelector(`[data-testid="${e}"]`);if(!t("room-thread-mentions"))throw new globalThis.Error("the mention panel is not open");if(t("room-thread-mention-nexi")?.click(),await new Promise(e=>setTimeout(e,20)),!t("room-log")?.textContent?.includes("mention:nexi"))throw new globalThis.Error("picking Nexi did not reach the host");if(t("room-thread-bar-input")?.value!=="@Nexi ")throw new globalThis.Error("the name did not land in the draft")}},N={args:{items:n,mentionQuery:"ma"}},f={args:{items:ee,mode:"thread"}},k={args:{items:[],status:"empty"}},T={args:{items:[],status:"empty",nexiInRoom:!1}},b={args:{items:[],status:"loading"}},E={args:{items:[],status:"error"},play:async({canvasElement:o})=>{const t=e=>o.querySelector(`[data-testid="${e}"]`);if(t("room-thread-retry")?.click(),await new Promise(e=>setTimeout(e,20)),!t("room-log")?.textContent?.includes("retry"))throw new globalThis.Error("Try again did not reach the host")}},S={args:{items:[],status:"not_member"}},O={args:{items:n,offline:!0}},q={args:{items:n},play:async({canvasElement:o})=>{const t=a=>o.querySelector(`[data-testid="${a}"]`);t("room-line-replies")?.click(),t("room-nexi-open")?.click(),await new Promise(a=>setTimeout(a,20));const e=t("room-log")?.textContent??"";if(!e.includes("thread:l2"))throw new globalThis.Error("the thread chip did not open the thread");if(!e.includes("open:nexus://chat/thread/thr_01jb5q7wzr"))throw new globalThis.Error("Open in Nexi did not reach the host")}},oe=[...n.slice(0,4),i("l3",I,"17:35","@Nexi can you help me here?",{mentions:["Nexi"]}),{kind:"nexi",id:"n1",at:"17:35",stage:"unavailable",askedBy:"Dana",text:"Nexi rooms are off for Bench Lab — ask your Admin."}],C={args:{items:n,replyDoor:!0},play:async({canvasElement:o})=>{const t=c=>o.querySelector(`[data-testid="${c}"]`),e=o.querySelectorAll('[data-testid="room-line-reply"]');if(e.length===0)throw new globalThis.Error("no reply door drawn");if(o.querySelector('[data-line="l2"] [data-testid="room-line-reply"]'))throw new globalThis.Error("a line with a thread must keep its chip, not a door");if(e[0].click(),await new Promise(c=>setTimeout(c,20)),!t("room-log")?.textContent?.includes("reply:l1"))throw new globalThis.Error("the reply door did not reach the host")}},v={args:{items:n,attach:!0},play:async({canvasElement:o})=>{const t=a=>o.querySelector(`[data-testid="${a}"]`),e=t("room-thread-bar-attach");if(!e)throw new globalThis.Error("the composer has no + with an attach door");if(e.click(),await new Promise(a=>setTimeout(a,20)),!t("room-log")?.textContent?.includes("attach"))throw new globalThis.Error("+ did not reach the host")}},R={args:{items:oe}},xe=["Populated","NexiWorking","NexiWorkingStage","NexiGist","NexiWaiting","NexiCeiling","NexiUnbound","Pending","MentionPanel","MentionPanelNarrowed","ThreadPanel","Empty","EmptyNoNexi","Loading","ErrorState","NotMember","Offline","OpenThread","LineReplyDoor","ComposerAttach","NexiOff"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM
  }
}`,...m.parameters?.docs?.source},description:{story:"Populated — a day of a room: lines under a name and a time, the day dividers, the *New* line, a question to Nexi and her answer with the receipt and the door, the reader's own line as a line (no bubble in a room).",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: WORKING
  }
}`,...l.parameters?.docs?.source},description:{story:"Nexi is working ( stage 1): the trace beside *Nexi is working…* — the same line that becomes the answer.",...l.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: WORKING_STAGE
  }
}`,...h.parameters?.docs?.source},description:{story:"Nexi is working — a stage with its elapsed time (*Reading the ledger · 4 s*).",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: GIST
  }
}`,...p.parameters?.docs?.source},description:{story:"The gist (): past the room's limit the answer is its gist, *(the full answer is in Nexi)* and the door.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: WAITING
  }
}`,...u.parameters?.docs?.source},description:{story:"Waiting on the asker (): the audience hears *Waiting on Olena.* — her own door is in her chat.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: CEILING
  }
}`,...g.parameters?.docs?.source},description:{story:"The ceiling line (): the room hears the same sentence for everyone; nothing is invented.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: UNBOUND
  }
}`,...y.parameters?.docs?.source},description:{story:"Unbound (): the reader asked before connecting — Nexi's one line and its one button; no console, no key.",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: PENDING
  }
}`,...w.parameters?.docs?.source},description:{story:"A line on its way — the reader's words on screen the moment they are sent, quieter until the relay has them.",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM,
    mentionQuery: ""
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!q("room-thread-mentions")) throw new globalThis.Error("the mention panel is not open");
    q("room-thread-mention-nexi")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("room-log")?.textContent?.includes("mention:nexi")) throw new globalThis.Error("picking Nexi did not reach the host");
    if ((q("room-thread-bar-input") as HTMLTextAreaElement | null)?.value !== "@Nexi ") throw new globalThis.Error("the name did not land in the draft");
  }
}`,...x.parameters?.docs?.source},description:{story:"The `@` panel above the composer — Nexi first when she is in the room, then the members; typing narrows it; Enter or a click puts the name in the draft.",...x.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM,
    mentionQuery: "ma"
  }
}`,...N.parameters?.docs?.source},description:{story:"The `@` panel narrowed to one name.",...N.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: THREAD,
    mode: "thread"
  }
}`,...f.parameters?.docs?.source},description:{story:'The thread panel (`mode="thread"`): the root pinned first, the replies beneath, the composer *Reply in thread* — the same log, narrower.',...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    status: "empty"
  }
}`,...k.parameters?.docs?.source},description:{story:"Empty — a new room: one sentence, and how to ask Nexi when she is a member.",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    status: "empty",
    nexiInRoom: false
  }
}`,...T.parameters?.docs?.source},description:{story:"Empty — Nexi is not in this room: the one sentence only.",...T.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    status: "loading"
  }
}`,...b.parameters?.docs?.source},description:{story:"Loading — the trace and one line; no skeleton of lines.",...b.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    status: "error"
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    q("room-thread-retry")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("room-log")?.textContent?.includes("retry")) throw new globalThis.Error("Try again did not reach the host");
  }
}`,...E.parameters?.docs?.source},description:{story:"Error — one sentence and *Try again*; the composer is away.",...E.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    status: "not_member"
  }
}`,...S.parameters?.docs?.source},description:{story:"Not a member — the truth in one line; nothing of the room is shown (not-found sameness).",...S.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM,
    offline: true
  }
}`,...O.parameters?.docs?.source},description:{story:"Offline — the lines stay, the composer says so beneath, nothing is sent (C-6).",...O.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    q("room-line-replies")?.click();
    q("room-nexi-open")?.click();
    await new Promise(r => setTimeout(r, 20));
    const log = q("room-log")?.textContent ?? "";
    if (!log.includes("thread:l2")) throw new globalThis.Error("the thread chip did not open the thread");
    if (!log.includes("open:nexus://chat/thread/thr_01jb5q7wzr")) throw new globalThis.Error("Open in Nexi did not reach the host");
  }
}`,...q.parameters?.docs?.source},description:{story:"Opening a thread from its chip.",...q.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM,
    replyDoor: true
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const doors = canvasElement.querySelectorAll('[data-testid="room-line-reply"]');
    if (doors.length === 0) throw new globalThis.Error("no reply door drawn");
    const withChip = canvasElement.querySelector('[data-line="l2"] [data-testid="room-line-reply"]');
    if (withChip) throw new globalThis.Error("a line with a thread must keep its chip, not a door");
    (doors[0] as HTMLElement).click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("room-log")?.textContent?.includes("reply:l1")) throw new globalThis.Error("the reply door did not reach the host");
  }
}`,...C.parameters?.docs?.source},description:{story:"S7 ·  (a) — *Reply in thread* on a line that has no thread yet: a quiet door at the right of the name, on hover or focus (always on touch); a line that already has a thread keeps its chip instead.",...C.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: ROOM,
    attach: true
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const plus = q("room-thread-bar-attach");
    if (!plus) throw new globalThis.Error("the composer has no + with an attach door");
    plus.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("room-log")?.textContent?.includes("attach")) throw new globalThis.Error("+ did not reach the host");
  }
}`,...v.parameters?.docs?.source},description:{story:"S7 ·  — the composer's `+` returns with the attach door (the media door behind it, the host's).",...v.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    items: NEXI_OFF
  }
}`,...R.parameters?.docs?.source},description:{story:"S7 ·  (b) — the organization keeps Nexi rooms off: one line to the asker ('s shape; the host's words), never silence.",...R.parameters?.docs?.description}}};export{v as ComposerAttach,k as Empty,T as EmptyNoNexi,E as ErrorState,C as LineReplyDoor,b as Loading,x as MentionPanel,N as MentionPanelNarrowed,g as NexiCeiling,p as NexiGist,R as NexiOff,y as NexiUnbound,u as NexiWaiting,l as NexiWorking,h as NexiWorkingStage,S as NotMember,O as Offline,q as OpenThread,w as Pending,m as Populated,f as ThreadPanel,xe as __namedExportsOrder,we as default};
