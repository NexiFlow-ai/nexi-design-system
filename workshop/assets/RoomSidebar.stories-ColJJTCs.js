import{r as d,j as o}from"./iframe-C_4ax-Jm.js";import{W as z,R as C}from"./RoomSidebar-BgJ9u28b.js";import{R as I}from"./RoomHeader-Dll_zJRu.js";import{R as $}from"./RoomThread-3DUdsNgg.js";import{S as _}from"./settings-2-DzycKneG.js";import"./preload-helper-PPVm8Dsz.js";import"./BrandMark-ZJnyD0IE.js";import"./plus-Dc-VMSiJ.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./users-w3fldoSO.js";import"./Trace-BSKaAXMd.js";import"./AskBar-D6qFedOb.js";import"./VoiceWaves-CVFNr488.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./LobbyThread-9xK7Bd9J.js";import"./ConversationFrame-crdlsIAN.js";import"./HandOver-BZSm7-D2.js";const c={id:"me",name:"Dana",kind:"personal"},a={id:"org_bench",name:"Bench Lab",kind:"organization"},v={id:"org_harbour",name:"Harbour Works",kind:"organization",unread:3},T=[{id:"general",name:"general",nexi:!0},{id:"supply-desk",name:"supply-desk",unread:2,nexi:!0},{id:"warehouse",name:"warehouse"},{id:"random",name:"random",muted:!0,unread:7}],j=[{id:"weekend-ride",name:"weekend-ride",unread:1},{id:"stats-101",name:"stats-101",nexi:!0}],N=[{id:"olena",name:"Olena",unread:1},{id:"marko",name:"Marko"},{id:"ivan",name:"Ivan"}];function D({name:r,onSettings:e}){return o.jsx("nav",{className:"nexus-dock","data-variant":"expanded","aria-label":"Account","data-testid":"story-dock",children:o.jsxs("div",{className:"nexus-dock-line",children:[o.jsxs("button",{type:"button",className:"nexus-sidebar-row nexus-dock-row nexus-dock-user","aria-label":`${r} — account menu`,"aria-haspopup":"menu",onClick:e,children:[o.jsx("span",{className:"nexus-dock-avatar","aria-hidden":!0,children:r.slice(0,1)}),o.jsx("span",{className:"nexus-dock-row-text nexus-dock-name",children:r})]}),o.jsx("button",{type:"button",className:"nexus-rail-btn nexus-dock-icon","aria-label":"Settings",title:"Settings",onClick:e,children:o.jsx(_,{size:16,"aria-hidden":!0})})]})})}function q({children:r,width:e=248,height:n=600}){return o.jsx("div",{style:{display:"flex",width:e,height:n,border:"1px solid var(--nexus-border)",overflow:"hidden"},children:r})}function U({workspace:r=c,workspaces:e,rooms:n=T,people:s=N,status:b="ready",connected:f=!0,activeId:O="supply-desk",switchOpen:P}){const[A,H]=d.useState([]),[B,L]=d.useState(P??!1),[R,M]=d.useState(r),t=i=>H(E=>[...E,i]);return o.jsxs(q,{children:[o.jsx(C,{workspace:R,workspaces:e,switchOpen:B,onSwitchOpenChange:L,onSwitchWorkspace:i=>{t(`switch:${i}`),M(e?.find(E=>E.id===i)??R)},onJoinOrganization:()=>t("join"),nexi:{connected:f,unread:f?1:void 0},onOpenNexi:()=>t("nexi"),onConnectNexi:()=>t("connect"),rooms:n,people:s,activeId:O,status:b,onOpenRoom:i=>t(`room:${i}`),onOpenPerson:i=>t(`person:${i}`),onNewRoom:()=>t("new-room"),onBrowseRooms:()=>t("browse"),onNewMessage:()=>t("new-message"),onSearch:()=>t("search"),onRetry:()=>t("retry"),dock:o.jsx(D,{name:"Dana",onSettings:()=>t("settings")})}),o.jsx("output",{"data-testid":"sidebar-log",style:{display:"none"},children:A.join("|")})]})}const he={title:"Apps/Nexi Spin/Sidebar",component:U,parameters:{ds:"DS-6920",layout:"padded"}},p={args:{rooms:j,people:N,activeId:"weekend-ride"}},l={args:{workspace:a,workspaces:[c,a,v]}},m={args:{workspace:a,workspaces:[c,a,v],switchOpen:!0},play:async({canvasElement:r})=>{const e=s=>r.querySelector(`[data-testid="${s}"]`),n=r.querySelectorAll('[role="menuitemradio"]');if(n.length!==3)throw new globalThis.Error(`expected 3 workspaces, got ${n.length}`);if(!n[0].textContent?.includes("Dana"))throw new globalThis.Error("Personal is not the first row");if(e("room-sidebar-switch-item-me")?.click(),await new Promise(s=>setTimeout(s,20)),!e("sidebar-log")?.textContent?.includes("switch:me"))throw new globalThis.Error("switching did not reach the host");if(e("room-sidebar")?.getAttribute("data-workspace")!=="personal")throw new globalThis.Error("the sidebar did not follow the switch")}},u={render:()=>{const[r,e]=d.useState(!0),[n,s]=d.useState(a),b=[c,a,v];return o.jsx("div",{style:{width:248,minHeight:240},className:"nexus-room-sidebar",children:o.jsx(z,{workspace:n,workspaces:b,open:r,onOpenChange:e,onSwitch:f=>s(b.find(O=>O.id===f)??n),onJoinOrganization:()=>{}})})},parameters:{ds:"DS-6923",layout:"padded"}},h={args:{connected:!1,rooms:j,activeId:"weekend-ride"}},w={args:{rooms:[],people:[],activeId:"nexi"}},g={args:{status:"loading",rooms:[],people:[]}},x={args:{status:"error",rooms:[],people:[]},play:async({canvasElement:r})=>{const e=n=>r.querySelector(`[data-testid="${n}"]`);if(e("room-sidebar-retry")?.click(),await new Promise(n=>setTimeout(n,20)),!e("sidebar-log")?.textContent?.includes("retry"))throw new globalThis.Error("Try again did not reach the host")}},k={args:{status:"offline",workspace:a,workspaces:[c,a]}},y={args:{},play:async({canvasElement:r})=>{const e=s=>r.querySelector(`[data-testid="${s}"]`);e("room-sidebar-room-warehouse")?.click(),e("room-sidebar-person-olena")?.click(),e("room-sidebar-nexi")?.click(),await new Promise(s=>setTimeout(s,20));const n=e("sidebar-log")?.textContent??"";for(const s of["room:warehouse","person:olena","nexi"])if(!n.includes(s))throw new globalThis.Error(`${s} did not reach the host`)}},W={name:"Olena"},G={name:"Marko"},J={name:"Dana",me:!0},F=[{kind:"day",id:"d1",label:"Today"},{kind:"line",id:"l1",author:G,at:"09:12",body:"Morning — the Ningbo rates are in, I put them on the desk."},{kind:"line",id:"l2",author:W,at:"09:40",body:"@Nexi which shipments from China are waiting for a rate?",mentions:["Nexi"]},{kind:"nexi",id:"n1",at:"09:40",stage:"answer",askedBy:"Olena",text:"Three shipments are waiting for a rate: SCG-41 (Ningbo → Odesa, 2 containers), SCG-44 and SCG-47. For SCG-44 the carrier promised an answer by Friday.",receipt:"from 3 documents",openInNexi:"nexus://chat/thread/thr_01jb5q7wzr"},{kind:"unread",id:"u1"},{kind:"line",id:"l3",author:J,at:"09:52",body:"thanks — I'll chase SCG-47 with Maersk today."}];function K(){const[r,e]=d.useState(""),[n,s]=d.useState(!1);return o.jsxs(q,{width:1040,height:640,children:[o.jsx(C,{workspace:a,workspaces:[c,a],nexi:{connected:!0},rooms:T,people:N,activeId:"supply-desk",status:"ready",onSearch:()=>{},onNewRoom:()=>{},onBrowseRooms:()=>{},onNewMessage:()=>{},dock:o.jsx(D,{name:"Dana",onSettings:()=>{}})}),o.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column"},children:[o.jsx(I,{kind:"room",title:"supply-desk",topic:"Rates, bookings and the week's shipments",members:6,nexiInRoom:!0,onMembers:()=>{},onSearch:()=>{},menuOpen:n,onMenuOpenChange:s,actions:[{id:"details",label:"Room details",onSelect:()=>{}},{id:"mute",label:"Mute",onSelect:()=>{}},{id:"leave",label:"Leave room",onSelect:()=>{},danger:!0}]}),o.jsx("div",{className:"nexus-convo-page",style:{flex:1,minHeight:0,display:"flex",flexDirection:"column"},children:o.jsx($,{room:"#supply-desk",status:"ready",items:F,nexiInRoom:!0,draft:r,onDraftChange:e,onSend:()=>e(""),onReply:()=>{},onOpenThread:()=>{},onAttach:()=>{}})})]})]})}const S={render:()=>o.jsx(K,{}),parameters:{ds:"DS-6920",layout:"padded"}},we=["Personal","Organization","SwitchOpen","SwitchAlone","NexiUnbound","Empty","Loading","ErrorState","Offline","OpenRows","TheDesk"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rooms: PERSONAL_ROOMS,
    people: PEOPLE,
    activeId: "weekend-ride"
  }
}`,...p.parameters?.docs?.source},description:{story:"Personal — one workspace, so no switch: the brand row, Nexi first, the person's rooms and chats, the dock.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: BENCH,
    workspaces: [PERSONAL, BENCH, HARBOUR]
  }
}`,...l.parameters?.docs?.source},description:{story:"In an organization — the switch row under the brand names *Bench Lab · Organization*; the rooms are the organization's; Nexi's mark on the rooms she is in.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: BENCH,
    workspaces: [PERSONAL, BENCH, HARBOUR],
    switchOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const items = canvasElement.querySelectorAll('[role="menuitemradio"]');
    if (items.length !== 3) throw new globalThis.Error(\`expected 3 workspaces, got \${items.length}\`);
    if (!items[0].textContent?.includes("Dana")) throw new globalThis.Error("Personal is not the first row");
    q("room-sidebar-switch-item-me")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("sidebar-log")?.textContent?.includes("switch:me")) throw new globalThis.Error("switching did not reach the host");
    if (q("room-sidebar")?.getAttribute("data-workspace") !== "personal") throw new globalThis.Error("the sidebar did not follow the switch");
  }
}`,...m.parameters?.docs?.source},description:{story:"The switch open (DS-6923): *Personal* first, then every organization that bound the person, the unread count of the one not open, *Join an organization…* last.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const [current, setCurrent] = useState(BENCH);
    const all = [PERSONAL, BENCH, HARBOUR];
    return <div style={{
      width: 248,
      minHeight: 240
    }} className="nexus-room-sidebar">
        <WorkspaceSwitch workspace={current} workspaces={all} open={open} onOpenChange={setOpen} onSwitch={id => setCurrent(all.find(w => w.id === id) ?? current)} onJoinOrganization={() => undefined} />
      </div>;
  },
  parameters: {
    ds: "DS-6923",
    layout: "padded"
  }
}`,...u.parameters?.docs?.source},description:{story:"The switch alone (DS-6923) — the row and its menu as the phone draws them from the drawer's header too (S4, one experience).",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    connected: false,
    rooms: PERSONAL_ROOMS,
    activeId: "weekend-ride"
  }
}`,...h.parameters?.docs?.source},description:{story:"Nexi not connected — her row says so and carries the one button ('s shape; S3-B's ceremony behind it).",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    rooms: [],
    people: [],
    activeId: "nexi"
  }
}`,...w.parameters?.docs?.source},description:{story:"Empty — a new person: no rooms, no chats; one sentence each and the doors in the group rows.",...w.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: "loading",
    rooms: [],
    people: []
  }
}`,...g.parameters?.docs?.source},description:{story:"Loading — Nexi's row at once, six quiet bars for the rest.",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    rooms: [],
    people: []
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    q("room-sidebar-retry")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("sidebar-log")?.textContent?.includes("retry")) throw new globalThis.Error("Try again did not reach the host");
  }
}`,...x.parameters?.docs?.source},description:{story:"Error — one sentence and *Try again*.",...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    status: "offline",
    workspace: BENCH,
    workspaces: [PERSONAL, BENCH]
  }
}`,...k.parameters?.docs?.source},description:{story:"Offline — the lists stay as last seen, one line says so at the foot of the lists.",...k.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    q("room-sidebar-room-warehouse")?.click();
    q("room-sidebar-person-olena")?.click();
    q("room-sidebar-nexi")?.click();
    await new Promise(r => setTimeout(r, 20));
    const log = q("sidebar-log")?.textContent ?? "";
    for (const expected of ["room:warehouse", "person:olena", "nexi"]) if (!log.includes(expected)) throw new globalThis.Error(\`\${expected} did not reach the host\`);
  }
}`,...y.parameters?.docs?.source},description:{story:"Opening a room and a person from their rows.",...y.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Desk />,
  parameters: {
    ds: "DS-6920",
    layout: "padded"
  }
}`,...S.parameters?.docs?.source},description:{story:"The desk — the sidebar (DS-6920), the header line (DS-6921) and the room (DS-5023) together: one window of the Nexi desktop in an organization.",...S.parameters?.docs?.description}}};export{w as Empty,x as ErrorState,g as Loading,h as NexiUnbound,k as Offline,y as OpenRows,l as Organization,p as Personal,u as SwitchAlone,m as SwitchOpen,S as TheDesk,we as __namedExportsOrder,he as default};
