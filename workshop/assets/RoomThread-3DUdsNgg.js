import{aj as U,ak as p,r as v,j as e}from"./iframe-C_4ax-Jm.js";import{T as b}from"./Trace-BSKaAXMd.js";import{B as _}from"./BrandMark-ZJnyD0IE.js";import{A as B}from"./AskBar-D6qFedOb.js";import{p as q,e as y}from"./LobbyThread-9xK7Bd9J.js";const I=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]],V=U("message-square-reply",I);function g({author:n,nexi:a=!1}){if(a)return e.jsx("span",{className:"nexus-room-face nexus-room-face-nexi","aria-hidden":!0,children:e.jsx(_,{})});if(n?.pictureSrc)return e.jsx("img",{className:"nexus-room-face",src:n.pictureSrc,alt:""});const t=(n?.initial??n?.name??"?").trim().slice(0,1).toUpperCase();return e.jsx("span",{className:"nexus-room-face","aria-hidden":!0,children:t})}function E(n,a){if(!a.length)return y(n);const t=a.map(i=>i.replace(/^@/,"")).filter(Boolean),l=new RegExp(`@(${t.map(i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})(?![\\w-])`,"g"),s=[];let r=0,u;for(;(u=l.exec(n))!==null;)u.index>r&&s.push(...y(n.slice(r,u.index))),s.push(e.jsxs("span",{className:"nexus-room-mention","data-testid":"room-mention",children:["@",u[1]]},u.index)),r=u.index+u[0].length;return r<n.length&&s.push(...y(n.slice(r))),s}function N({item:n,onOpenThread:a,onReply:t,testId:l="room-line"}){const{t:s}=p(),r=n.replies,u=t&&!n.pending&&!(r&&r.count>0);return e.jsxs("article",{className:"nexus-room-line","data-testid":l,"data-line":n.id,"data-me":n.author.me?"true":void 0,"data-pending":n.pending?"true":void 0,"aria-label":s("room.line.actions",{name:n.author.name,when:n.at}),children:[e.jsx(g,{author:n.author}),e.jsxs("div",{className:"nexus-room-line-body",children:[e.jsxs("div",{className:"nexus-room-line-head",children:[e.jsx("span",{className:"nexus-room-name",children:n.author.name}),e.jsx("time",{className:"nexus-room-time",children:n.at}),n.edited?e.jsxs("span",{className:"nexus-room-time",children:["(",s("room.edited"),")"]}):null,n.pending?e.jsx("span",{className:"nexus-room-time","data-testid":"room-line-pending",children:s("room.pending")}):null,u?e.jsx("button",{type:"button",className:"nexus-room-line-door nexus-hover-reveal","aria-label":s("room.line.reply"),title:s("room.line.reply"),onClick:()=>t(n.id),"data-testid":"room-line-reply",children:e.jsx(V,{size:14,"aria-hidden":!0})}):null]}),e.jsx("div",{className:"nexus-room-words",children:q(n.body).map((i,m)=>e.jsx("p",{children:E(i,n.mentions??[])},m))}),r&&r.count>0?e.jsxs("button",{type:"button",className:"nexus-room-replies",onClick:()=>a?.(n.id),"data-testid":"room-line-replies",children:[r.faces?.length?e.jsx("span",{className:"nexus-room-replies-faces","aria-hidden":!0,children:r.faces.slice(0,3).map((i,m)=>e.jsx(g,{author:i,nexi:i.name==="Nexi"},m))}):null,e.jsx("span",{className:"nexus-room-replies-count",children:r.count===1?s("room.reply.one"):s("room.reply.many",{n:String(r.count)})}),e.jsxs("span",{className:"nexus-room-replies-last",children:[" · ",s("room.reply.last",{when:r.lastAt})]})]}):null]})]})}function j({item:n,onOpenInNexi:a,testId:t="room-nexi"}){const{t:l}=p();return e.jsxs("article",{className:"nexus-room-line nexus-room-line-nexi","data-testid":t,"data-line":n.id,"data-stage":n.stage,"aria-label":l("room.line.actions",{name:"Nexi",when:n.at}),children:[e.jsx(g,{nexi:!0}),e.jsxs("div",{className:"nexus-room-line-body",children:[e.jsxs("div",{className:"nexus-room-line-head",children:[e.jsx("span",{className:"nexus-room-name",children:"Nexi"}),e.jsx("time",{className:"nexus-room-time",children:n.at}),n.askedBy?e.jsxs("span",{className:"nexus-room-time",children:["· ",l("room.nexi.asked_by",{asker:n.askedBy})]}):null]}),n.stage==="working"?e.jsxs("p",{className:"nexus-convo-working","data-testid":`${t}-working`,children:[e.jsx(b,{progress:null}),e.jsx("span",{children:n.progress??l("channel.spin.working")})]}):e.jsxs("div",{className:"nexus-room-words nexus-message-assistant","data-testid":`${t}-words`,children:[q(n.text??"").map((s,r)=>e.jsx("p",{children:y(s)},r)),n.gist?e.jsx("p",{className:"nexus-room-gist",children:l("channel.spin.answer.gist")}):null,n.receipt||n.openInNexi?e.jsxs("p",{className:"nexus-convo-provenance nexus-room-receipt",children:[n.receipt?e.jsx("em",{"data-testid":`${t}-receipt`,children:n.receipt}):null,n.receipt&&n.openInNexi?" · ":null,n.openInNexi?e.jsx("a",{className:"nexus-room-door",href:n.openInNexi,onClick:s=>a?(s.preventDefault(),a(n.openInNexi)):void 0,"data-testid":`${t}-open`,children:l("channel.spin.answer.open")}):null]}):null]})]})]})}function D({item:n,testId:a="room-connect"}){const{t}=p();return e.jsxs("article",{className:"nexus-room-line nexus-room-line-nexi","data-testid":a,"data-line":n.id,"aria-label":t("room.line.actions",{name:"Nexi",when:n.at}),children:[e.jsx(g,{nexi:!0}),e.jsxs("div",{className:"nexus-room-line-body",children:[e.jsxs("div",{className:"nexus-room-line-head",children:[e.jsx("span",{className:"nexus-room-name",children:"Nexi"}),e.jsx("time",{className:"nexus-room-time",children:n.at})]}),e.jsxs("div",{className:"nexus-room-words",children:[e.jsx("p",{children:n.text}),e.jsx("p",{children:e.jsx("button",{type:"button",className:"nexus-btn nexus-btn-sm",onClick:n.onConnect,"data-testid":`${a}-button`,children:t("room.nexi.connect")})})]})]})]})}function P({query:n,items:a,onPick:t,onClose:l,testId:s}){const{t:r}=p(),u=a.filter(i=>!n||i.name.toLowerCase().startsWith(n.toLowerCase()));return e.jsx("div",{className:"nexus-room-mentions",role:"listbox","aria-label":r("room.mention.title"),"data-testid":`${s}-mentions`,onKeyDown:i=>i.key==="Escape"&&l(),children:u.length===0?e.jsx("p",{className:"nexus-convo-note",role:"option","aria-selected":!1,children:r("room.mention.empty")}):u.map((i,m)=>e.jsxs("button",{type:"button",role:"option","aria-selected":m===0,className:"nexus-room-mention-item",onClick:()=>t(i),"data-nexi":i.nexi?"true":void 0,"data-testid":`${s}-mention-${i.id}`,children:[e.jsx(g,{author:i,nexi:i.nexi}),e.jsx("span",{className:"nexus-room-mention-name",children:i.name}),i.nexi?e.jsxs("span",{className:"nexus-room-time",children:["· ",r("room.mention.nexi")]}):null]},i.id))})}function z({room:n,mode:a="room",status:t,items:l,nexiInRoom:s=!1,draft:r,onDraftChange:u,onSend:i,onVoiceUtterance:m,onAttach:R,mention:f,onOpenThread:A,onReply:C,onOpenInNexi:T,onRetry:x,ariaLabel:w,testId:h="room-thread"}){const{t:d}=p(),k=v.useRef(null),L=v.useRef(null),S=n.replace(/^#/,"");v.useEffect(()=>{const o=k.current;!o||t!=="ready"||(typeof o.scrollTo=="function"?o.scrollTo({top:o.scrollHeight}):o.scrollTop=o.scrollHeight)},[l.length,t]);const M=a==="thread"?d("room.thread.composer.label"):d("room.composer.label",{room:n}),Y=a==="thread"?d("room.thread.placeholder"):d("room.placeholder",{room:S}),$=t==="ready"||t==="empty"||t==="offline";let c;return t==="loading"?c=e.jsxs("div",{className:"nexus-room-state",role:"status","aria-busy":!0,"data-testid":`${h}-loading`,children:[e.jsx(b,{progress:null}),e.jsx("span",{children:d("room.loading")})]}):t==="error"?c=e.jsxs("div",{className:"nexus-room-state",role:"alert","data-testid":`${h}-error`,children:[e.jsx("span",{children:d("room.error")}),x?e.jsx("button",{type:"button",className:"nexus-btn nexus-btn-sm",onClick:x,"data-testid":`${h}-retry`,children:d("room.retry")}):null]}):t==="not_member"?c=e.jsx("div",{className:"nexus-room-state","data-testid":`${h}-not-member`,children:e.jsx("span",{children:d("room.not_member")})}):t==="empty"||l.length===0?c=e.jsxs("div",{className:"nexus-room-state","data-testid":`${h}-empty`,children:[e.jsx("span",{children:d("room.empty")}),s?e.jsx("span",{className:"nexus-convo-note",children:d("room.empty.nexi")}):null]}):c=l.map((o,O)=>{switch(o.kind){case"line":return e.jsx(N,{item:o,onOpenThread:a==="room"?A:void 0,onReply:a==="room"?C:void 0,testId:a==="thread"&&O===0?"room-thread-root":"room-line"},o.id);case"nexi":return e.jsx(j,{item:o,onOpenInNexi:T},o.id);case"connect":return e.jsx(D,{item:o},o.id);case"day":return e.jsx("div",{className:"nexus-room-divider",role:"separator","aria-label":o.label,"data-testid":"room-day",children:e.jsx("span",{children:o.label})},o.id);case"unread":return e.jsx("div",{className:"nexus-room-divider nexus-room-divider-unread",role:"separator","aria-label":d("room.unread"),"data-testid":"room-unread",children:e.jsx("span",{children:d("room.unread")})},o.id)}}),e.jsxs("section",{className:"nexus-convo nexus-room","aria-label":w??(a==="thread"?d("room.thread.title"):n),"data-testid":h,"data-mode":a,"data-status":t,children:[a==="thread"?e.jsx("header",{className:"nexus-room-head","data-testid":`${h}-head`,children:e.jsx("span",{className:"nexus-room-head-title",children:d("room.thread.title")})}):null,e.jsx("div",{className:"nexus-convo-log nexus-room-log",role:"log","aria-label":w??n,ref:k,"data-testid":`${h}-log`,children:c}),t==="offline"?e.jsx("p",{className:"nexus-convo-note nexus-room-offline",role:"status","data-testid":`${h}-offline`,children:d("room.offline")}):null,$?e.jsxs("div",{className:"nexus-convo-foot nexus-room-foot","data-testid":`${h}-foot`,children:[f?e.jsx(P,{...f,testId:h}):null,e.jsx(B,{ref:L,placeholder:Y,value:r,onChange:u,onSend:()=>i(r),offline:t==="offline",onAttach:R,onVoiceUtterance:m,ariaLabel:M,testId:`${h}-bar`})]}):null]})}N.__docgenInfo={description:"DS-5022 — one member's line: the face, the name and the time, the words, the thread chip",methods:[],displayName:"RoomLine",props:{item:{required:!0,tsType:{name:"Extract",elements:[{name:"union",raw:`| {
    kind: "line";
    id: string;
    author: RoomAuthor;
    /** the time as the host writes it (*17:35* · *Yesterday 11:33*) */
    at: string;
    /** the words — paragraphs; \`*emphasis*\` only (the host renders richer Markdown itself, or not at all) */
    body: string;
    /** \`@Nexi\` and other mentions the host found in the body — drawn as marks, never as links */
    mentions?: string[];
    pending?: boolean;
    edited?: boolean;
    /** the thread under this line — a chip the host opens */
    replies?: { count: number; lastAt: string; faces?: RoomAuthor[] };
  }
| {
    kind: "nexi";
    id: string;
    at: string;
    /** : one event edited in place through the stages */
    stage: "working" | "answer" | "waiting" | "ceiling" | "unavailable";
    /** \`working\`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…* */
    progress?: string;
    /** \`answer\`: the words (paragraphs); \`waiting\` · \`ceiling\` · \`unavailable\`: the one line */
    text?: string;
    /** \`answer\`: *from n documents* */
    receipt?: string;
    /** \`answer\`: the gist — the full answer is in Nexi */
    gist?: boolean;
    /** the door — *Open in Nexi* (a \`nexus://chat/thread/…\` href the host resolves) */
    openInNexi?: string;
    /** in the channel (not in the thread) — whose question this answers */
    askedBy?: string;
  }
| {
    /** : Nexi's line to a person who is not connected — the one button */
    kind: "connect";
    id: string;
    at: string;
    text: string;
    onConnect: () => void;
  }
| { kind: "day"; id: string; label: string }
| { kind: "unread"; id: string }`,elements:[{name:"signature",type:"object",raw:`{
  kind: "line";
  id: string;
  author: RoomAuthor;
  /** the time as the host writes it (*17:35* · *Yesterday 11:33*) */
  at: string;
  /** the words — paragraphs; \`*emphasis*\` only (the host renders richer Markdown itself, or not at all) */
  body: string;
  /** \`@Nexi\` and other mentions the host found in the body — drawn as marks, never as links */
  mentions?: string[];
  pending?: boolean;
  edited?: boolean;
  /** the thread under this line — a chip the host opens */
  replies?: { count: number; lastAt: string; faces?: RoomAuthor[] };
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"line"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"author",value:{name:"signature",type:"object",raw:`{
  name: string;
  /** one letter for the face when there is no picture — the host decides (the first letter of the name, by default) */
  initial?: string;
  /** a picture the host already holds (never a URL to a relay) */
  pictureSrc?: string;
  /** the reader's own line — the name reads *You* for assistive technology, the face is the same */
  me?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1},description:"one letter for the face when there is no picture — the host decides (the first letter of the name, by default)"},{key:"pictureSrc",value:{name:"string",required:!1},description:"a picture the host already holds (never a URL to a relay)"},{key:"me",value:{name:"boolean",required:!1},description:"the reader's own line — the name reads *You* for assistive technology, the face is the same"}]},required:!0}},{key:"at",value:{name:"string",required:!0},description:"the time as the host writes it (*17:35* · *Yesterday 11:33*)"},{key:"body",value:{name:"string",required:!0},description:"the words — paragraphs; `*emphasis*` only (the host renders richer Markdown itself, or not at all)"},{key:"mentions",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"`@Nexi` and other mentions the host found in the body — drawn as marks, never as links"},{key:"pending",value:{name:"boolean",required:!1}},{key:"edited",value:{name:"boolean",required:!1}},{key:"replies",value:{name:"signature",type:"object",raw:"{ count: number; lastAt: string; faces?: RoomAuthor[] }",signature:{properties:[{key:"count",value:{name:"number",required:!0}},{key:"lastAt",value:{name:"string",required:!0}},{key:"faces",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  /** one letter for the face when there is no picture — the host decides (the first letter of the name, by default) */
  initial?: string;
  /** a picture the host already holds (never a URL to a relay) */
  pictureSrc?: string;
  /** the reader's own line — the name reads *You* for assistive technology, the face is the same */
  me?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1},description:"one letter for the face when there is no picture — the host decides (the first letter of the name, by default)"},{key:"pictureSrc",value:{name:"string",required:!1},description:"a picture the host already holds (never a URL to a relay)"},{key:"me",value:{name:"boolean",required:!1},description:"the reader's own line — the name reads *You* for assistive technology, the face is the same"}]},required:!0}],raw:"RoomAuthor[]",required:!1}}]},required:!1},description:"the thread under this line — a chip the host opens"}]}},{name:"signature",type:"object",raw:`{
  kind: "nexi";
  id: string;
  at: string;
  /** : one event edited in place through the stages */
  stage: "working" | "answer" | "waiting" | "ceiling" | "unavailable";
  /** \`working\`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…* */
  progress?: string;
  /** \`answer\`: the words (paragraphs); \`waiting\` · \`ceiling\` · \`unavailable\`: the one line */
  text?: string;
  /** \`answer\`: *from n documents* */
  receipt?: string;
  /** \`answer\`: the gist — the full answer is in Nexi */
  gist?: boolean;
  /** the door — *Open in Nexi* (a \`nexus://chat/thread/…\` href the host resolves) */
  openInNexi?: string;
  /** in the channel (not in the thread) — whose question this answers */
  askedBy?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"nexi"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"at",value:{name:"string",required:!0}},{key:"stage",value:{name:"union",raw:'"working" | "answer" | "waiting" | "ceiling" | "unavailable"',elements:[{name:"literal",value:'"working"'},{name:"literal",value:'"answer"'},{name:"literal",value:'"waiting"'},{name:"literal",value:'"ceiling"'},{name:"literal",value:'"unavailable"'}],required:!0},description:": one event edited in place through the stages"},{key:"progress",value:{name:"string",required:!1},description:"`working`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…*"},{key:"text",value:{name:"string",required:!1},description:"`answer`: the words (paragraphs); `waiting` · `ceiling` · `unavailable`: the one line"},{key:"receipt",value:{name:"string",required:!1},description:"`answer`: *from n documents*"},{key:"gist",value:{name:"boolean",required:!1},description:"`answer`: the gist — the full answer is in Nexi"},{key:"openInNexi",value:{name:"string",required:!1},description:"the door — *Open in Nexi* (a `nexus://chat/thread/…` href the host resolves)"},{key:"askedBy",value:{name:"string",required:!1},description:"in the channel (not in the thread) — whose question this answers"}]}},{name:"signature",type:"object",raw:`{
  /** : Nexi's line to a person who is not connected — the one button */
  kind: "connect";
  id: string;
  at: string;
  text: string;
  onConnect: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"connect"',required:!0},description:": Nexi's line to a person who is not connected — the one button"},{key:"id",value:{name:"string",required:!0}},{key:"at",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"onConnect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "day"; id: string; label: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"day"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "unread"; id: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"unread"',required:!0}},{key:"id",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:'{ kind: "line" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"line"',required:!0}}]}}],raw:'Extract<RoomItem, { kind: "line" }>'},description:""},onOpenThread:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onReply:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:" (a), S7: the quiet door on hover / focus — *Reply in thread* on a line that has no thread yet"},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"room-line"',computed:!1}}}};j.__docgenInfo={description:"DS-5022 — Nexi's line in a room (): the same shape, the wordmark for a face, the stages edited in place",methods:[],displayName:"NexiRoomLine",props:{item:{required:!0,tsType:{name:"Extract",elements:[{name:"union",raw:`| {
    kind: "line";
    id: string;
    author: RoomAuthor;
    /** the time as the host writes it (*17:35* · *Yesterday 11:33*) */
    at: string;
    /** the words — paragraphs; \`*emphasis*\` only (the host renders richer Markdown itself, or not at all) */
    body: string;
    /** \`@Nexi\` and other mentions the host found in the body — drawn as marks, never as links */
    mentions?: string[];
    pending?: boolean;
    edited?: boolean;
    /** the thread under this line — a chip the host opens */
    replies?: { count: number; lastAt: string; faces?: RoomAuthor[] };
  }
| {
    kind: "nexi";
    id: string;
    at: string;
    /** : one event edited in place through the stages */
    stage: "working" | "answer" | "waiting" | "ceiling" | "unavailable";
    /** \`working\`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…* */
    progress?: string;
    /** \`answer\`: the words (paragraphs); \`waiting\` · \`ceiling\` · \`unavailable\`: the one line */
    text?: string;
    /** \`answer\`: *from n documents* */
    receipt?: string;
    /** \`answer\`: the gist — the full answer is in Nexi */
    gist?: boolean;
    /** the door — *Open in Nexi* (a \`nexus://chat/thread/…\` href the host resolves) */
    openInNexi?: string;
    /** in the channel (not in the thread) — whose question this answers */
    askedBy?: string;
  }
| {
    /** : Nexi's line to a person who is not connected — the one button */
    kind: "connect";
    id: string;
    at: string;
    text: string;
    onConnect: () => void;
  }
| { kind: "day"; id: string; label: string }
| { kind: "unread"; id: string }`,elements:[{name:"signature",type:"object",raw:`{
  kind: "line";
  id: string;
  author: RoomAuthor;
  /** the time as the host writes it (*17:35* · *Yesterday 11:33*) */
  at: string;
  /** the words — paragraphs; \`*emphasis*\` only (the host renders richer Markdown itself, or not at all) */
  body: string;
  /** \`@Nexi\` and other mentions the host found in the body — drawn as marks, never as links */
  mentions?: string[];
  pending?: boolean;
  edited?: boolean;
  /** the thread under this line — a chip the host opens */
  replies?: { count: number; lastAt: string; faces?: RoomAuthor[] };
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"line"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"author",value:{name:"signature",type:"object",raw:`{
  name: string;
  /** one letter for the face when there is no picture — the host decides (the first letter of the name, by default) */
  initial?: string;
  /** a picture the host already holds (never a URL to a relay) */
  pictureSrc?: string;
  /** the reader's own line — the name reads *You* for assistive technology, the face is the same */
  me?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1},description:"one letter for the face when there is no picture — the host decides (the first letter of the name, by default)"},{key:"pictureSrc",value:{name:"string",required:!1},description:"a picture the host already holds (never a URL to a relay)"},{key:"me",value:{name:"boolean",required:!1},description:"the reader's own line — the name reads *You* for assistive technology, the face is the same"}]},required:!0}},{key:"at",value:{name:"string",required:!0},description:"the time as the host writes it (*17:35* · *Yesterday 11:33*)"},{key:"body",value:{name:"string",required:!0},description:"the words — paragraphs; `*emphasis*` only (the host renders richer Markdown itself, or not at all)"},{key:"mentions",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"`@Nexi` and other mentions the host found in the body — drawn as marks, never as links"},{key:"pending",value:{name:"boolean",required:!1}},{key:"edited",value:{name:"boolean",required:!1}},{key:"replies",value:{name:"signature",type:"object",raw:"{ count: number; lastAt: string; faces?: RoomAuthor[] }",signature:{properties:[{key:"count",value:{name:"number",required:!0}},{key:"lastAt",value:{name:"string",required:!0}},{key:"faces",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  /** one letter for the face when there is no picture — the host decides (the first letter of the name, by default) */
  initial?: string;
  /** a picture the host already holds (never a URL to a relay) */
  pictureSrc?: string;
  /** the reader's own line — the name reads *You* for assistive technology, the face is the same */
  me?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1},description:"one letter for the face when there is no picture — the host decides (the first letter of the name, by default)"},{key:"pictureSrc",value:{name:"string",required:!1},description:"a picture the host already holds (never a URL to a relay)"},{key:"me",value:{name:"boolean",required:!1},description:"the reader's own line — the name reads *You* for assistive technology, the face is the same"}]},required:!0}],raw:"RoomAuthor[]",required:!1}}]},required:!1},description:"the thread under this line — a chip the host opens"}]}},{name:"signature",type:"object",raw:`{
  kind: "nexi";
  id: string;
  at: string;
  /** : one event edited in place through the stages */
  stage: "working" | "answer" | "waiting" | "ceiling" | "unavailable";
  /** \`working\`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…* */
  progress?: string;
  /** \`answer\`: the words (paragraphs); \`waiting\` · \`ceiling\` · \`unavailable\`: the one line */
  text?: string;
  /** \`answer\`: *from n documents* */
  receipt?: string;
  /** \`answer\`: the gist — the full answer is in Nexi */
  gist?: boolean;
  /** the door — *Open in Nexi* (a \`nexus://chat/thread/…\` href the host resolves) */
  openInNexi?: string;
  /** in the channel (not in the thread) — whose question this answers */
  askedBy?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"nexi"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"at",value:{name:"string",required:!0}},{key:"stage",value:{name:"union",raw:'"working" | "answer" | "waiting" | "ceiling" | "unavailable"',elements:[{name:"literal",value:'"working"'},{name:"literal",value:'"answer"'},{name:"literal",value:'"waiting"'},{name:"literal",value:'"ceiling"'},{name:"literal",value:'"unavailable"'}],required:!0},description:": one event edited in place through the stages"},{key:"progress",value:{name:"string",required:!1},description:"`working`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…*"},{key:"text",value:{name:"string",required:!1},description:"`answer`: the words (paragraphs); `waiting` · `ceiling` · `unavailable`: the one line"},{key:"receipt",value:{name:"string",required:!1},description:"`answer`: *from n documents*"},{key:"gist",value:{name:"boolean",required:!1},description:"`answer`: the gist — the full answer is in Nexi"},{key:"openInNexi",value:{name:"string",required:!1},description:"the door — *Open in Nexi* (a `nexus://chat/thread/…` href the host resolves)"},{key:"askedBy",value:{name:"string",required:!1},description:"in the channel (not in the thread) — whose question this answers"}]}},{name:"signature",type:"object",raw:`{
  /** : Nexi's line to a person who is not connected — the one button */
  kind: "connect";
  id: string;
  at: string;
  text: string;
  onConnect: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"connect"',required:!0},description:": Nexi's line to a person who is not connected — the one button"},{key:"id",value:{name:"string",required:!0}},{key:"at",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"onConnect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "day"; id: string; label: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"day"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "unread"; id: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"unread"',required:!0}},{key:"id",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:'{ kind: "nexi" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"nexi"',required:!0}}]}}],raw:'Extract<RoomItem, { kind: "nexi" }>'},description:""},onOpenInNexi:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"room-nexi"',computed:!1}}}};z.__docgenInfo={description:"",methods:[],displayName:"RoomThread",props:{room:{required:!0,tsType:{name:"string"},description:"the room's name — `#general`, *Supply desk*; the thread panel names its root's author instead"},mode:{required:!1,tsType:{name:"union",raw:'"room" | "thread"',elements:[{name:"literal",value:'"room"'},{name:"literal",value:'"thread"'}]},description:"",defaultValue:{value:'"room"',computed:!1}},status:{required:!0,tsType:{name:"union",raw:'"ready" | "empty" | "loading" | "error" | "not_member" | "offline"',elements:[{name:"literal",value:'"ready"'},{name:"literal",value:'"empty"'},{name:"literal",value:'"loading"'},{name:"literal",value:'"error"'},{name:"literal",value:'"not_member"'},{name:"literal",value:'"offline"'}]},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| {
    kind: "line";
    id: string;
    author: RoomAuthor;
    /** the time as the host writes it (*17:35* · *Yesterday 11:33*) */
    at: string;
    /** the words — paragraphs; \`*emphasis*\` only (the host renders richer Markdown itself, or not at all) */
    body: string;
    /** \`@Nexi\` and other mentions the host found in the body — drawn as marks, never as links */
    mentions?: string[];
    pending?: boolean;
    edited?: boolean;
    /** the thread under this line — a chip the host opens */
    replies?: { count: number; lastAt: string; faces?: RoomAuthor[] };
  }
| {
    kind: "nexi";
    id: string;
    at: string;
    /** : one event edited in place through the stages */
    stage: "working" | "answer" | "waiting" | "ceiling" | "unavailable";
    /** \`working\`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…* */
    progress?: string;
    /** \`answer\`: the words (paragraphs); \`waiting\` · \`ceiling\` · \`unavailable\`: the one line */
    text?: string;
    /** \`answer\`: *from n documents* */
    receipt?: string;
    /** \`answer\`: the gist — the full answer is in Nexi */
    gist?: boolean;
    /** the door — *Open in Nexi* (a \`nexus://chat/thread/…\` href the host resolves) */
    openInNexi?: string;
    /** in the channel (not in the thread) — whose question this answers */
    askedBy?: string;
  }
| {
    /** : Nexi's line to a person who is not connected — the one button */
    kind: "connect";
    id: string;
    at: string;
    text: string;
    onConnect: () => void;
  }
| { kind: "day"; id: string; label: string }
| { kind: "unread"; id: string }`,elements:[{name:"signature",type:"object",raw:`{
  kind: "line";
  id: string;
  author: RoomAuthor;
  /** the time as the host writes it (*17:35* · *Yesterday 11:33*) */
  at: string;
  /** the words — paragraphs; \`*emphasis*\` only (the host renders richer Markdown itself, or not at all) */
  body: string;
  /** \`@Nexi\` and other mentions the host found in the body — drawn as marks, never as links */
  mentions?: string[];
  pending?: boolean;
  edited?: boolean;
  /** the thread under this line — a chip the host opens */
  replies?: { count: number; lastAt: string; faces?: RoomAuthor[] };
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"line"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"author",value:{name:"signature",type:"object",raw:`{
  name: string;
  /** one letter for the face when there is no picture — the host decides (the first letter of the name, by default) */
  initial?: string;
  /** a picture the host already holds (never a URL to a relay) */
  pictureSrc?: string;
  /** the reader's own line — the name reads *You* for assistive technology, the face is the same */
  me?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1},description:"one letter for the face when there is no picture — the host decides (the first letter of the name, by default)"},{key:"pictureSrc",value:{name:"string",required:!1},description:"a picture the host already holds (never a URL to a relay)"},{key:"me",value:{name:"boolean",required:!1},description:"the reader's own line — the name reads *You* for assistive technology, the face is the same"}]},required:!0}},{key:"at",value:{name:"string",required:!0},description:"the time as the host writes it (*17:35* · *Yesterday 11:33*)"},{key:"body",value:{name:"string",required:!0},description:"the words — paragraphs; `*emphasis*` only (the host renders richer Markdown itself, or not at all)"},{key:"mentions",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"`@Nexi` and other mentions the host found in the body — drawn as marks, never as links"},{key:"pending",value:{name:"boolean",required:!1}},{key:"edited",value:{name:"boolean",required:!1}},{key:"replies",value:{name:"signature",type:"object",raw:"{ count: number; lastAt: string; faces?: RoomAuthor[] }",signature:{properties:[{key:"count",value:{name:"number",required:!0}},{key:"lastAt",value:{name:"string",required:!0}},{key:"faces",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  /** one letter for the face when there is no picture — the host decides (the first letter of the name, by default) */
  initial?: string;
  /** a picture the host already holds (never a URL to a relay) */
  pictureSrc?: string;
  /** the reader's own line — the name reads *You* for assistive technology, the face is the same */
  me?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1},description:"one letter for the face when there is no picture — the host decides (the first letter of the name, by default)"},{key:"pictureSrc",value:{name:"string",required:!1},description:"a picture the host already holds (never a URL to a relay)"},{key:"me",value:{name:"boolean",required:!1},description:"the reader's own line — the name reads *You* for assistive technology, the face is the same"}]},required:!0}],raw:"RoomAuthor[]",required:!1}}]},required:!1},description:"the thread under this line — a chip the host opens"}]}},{name:"signature",type:"object",raw:`{
  kind: "nexi";
  id: string;
  at: string;
  /** : one event edited in place through the stages */
  stage: "working" | "answer" | "waiting" | "ceiling" | "unavailable";
  /** \`working\`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…* */
  progress?: string;
  /** \`answer\`: the words (paragraphs); \`waiting\` · \`ceiling\` · \`unavailable\`: the one line */
  text?: string;
  /** \`answer\`: *from n documents* */
  receipt?: string;
  /** \`answer\`: the gist — the full answer is in Nexi */
  gist?: boolean;
  /** the door — *Open in Nexi* (a \`nexus://chat/thread/…\` href the host resolves) */
  openInNexi?: string;
  /** in the channel (not in the thread) — whose question this answers */
  askedBy?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"nexi"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"at",value:{name:"string",required:!0}},{key:"stage",value:{name:"union",raw:'"working" | "answer" | "waiting" | "ceiling" | "unavailable"',elements:[{name:"literal",value:'"working"'},{name:"literal",value:'"answer"'},{name:"literal",value:'"waiting"'},{name:"literal",value:'"ceiling"'},{name:"literal",value:'"unavailable"'}],required:!0},description:": one event edited in place through the stages"},{key:"progress",value:{name:"string",required:!1},description:"`working`: the stage line (*Reading the ledger · 4 s*); absent → *Nexi is working…*"},{key:"text",value:{name:"string",required:!1},description:"`answer`: the words (paragraphs); `waiting` · `ceiling` · `unavailable`: the one line"},{key:"receipt",value:{name:"string",required:!1},description:"`answer`: *from n documents*"},{key:"gist",value:{name:"boolean",required:!1},description:"`answer`: the gist — the full answer is in Nexi"},{key:"openInNexi",value:{name:"string",required:!1},description:"the door — *Open in Nexi* (a `nexus://chat/thread/…` href the host resolves)"},{key:"askedBy",value:{name:"string",required:!1},description:"in the channel (not in the thread) — whose question this answers"}]}},{name:"signature",type:"object",raw:`{
  /** : Nexi's line to a person who is not connected — the one button */
  kind: "connect";
  id: string;
  at: string;
  text: string;
  onConnect: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"connect"',required:!0},description:": Nexi's line to a person who is not connected — the one button"},{key:"id",value:{name:"string",required:!0}},{key:"at",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"onConnect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "day"; id: string; label: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"day"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "unread"; id: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"unread"',required:!0}},{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"RoomItem[]"},description:""},nexiInRoom:{required:!1,tsType:{name:"boolean"},description:"Nexi is a member of this room — the empty state says how to ask her",defaultValue:{value:"false",computed:!1}},draft:{required:!0,tsType:{name:"string"},description:""},onDraftChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(draft: string) => void",signature:{arguments:[{type:{name:"string"},name:"draft"}],return:{name:"void"}}},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onVoiceUtterance:{required:!1,tsType:{name:"signature",type:"function",raw:"(utterance: VoiceUtterance) => Promise<AskVoiceOutcome>",signature:{arguments:[{type:{name:"VoiceUtterance"},name:"utterance"}],return:{name:"Promise",elements:[{name:"union",raw:'{ kind: "send"; text: string } | { kind: "review"; text: string } | { kind: "no_speech" } | { kind: "failed"; message?: string }',elements:[{name:"signature",type:"object",raw:'{ kind: "send"; text: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"send"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "review"; text: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"review"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "no_speech" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"no_speech"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "failed"; message?: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"failed"',required:!0}},{key:"message",value:{name:"string",required:!1}}]}}]}],raw:"Promise<AskVoiceOutcome>"}}},description:""},onAttach:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mention:{required:!1,tsType:{name:"signature",type:"object",raw:"{ query: string; items: RoomMention[]; onPick: (item: RoomMention) => void; onClose: () => void }",signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"RoomMention"}],raw:"RoomMention[]",required:!0}},{key:"onPick",value:{name:"signature",type:"function",raw:"(item: RoomMention) => void",signature:{arguments:[{type:{name:"RoomMention"},name:"item"}],return:{name:"void"}},required:!0}},{key:"onClose",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"the `@` panel above the composer — open while the host has a query"},onOpenThread:{required:!1,tsType:{name:"signature",type:"function",raw:"(lineId: string) => void",signature:{arguments:[{type:{name:"string"},name:"lineId"}],return:{name:"void"}}},description:""},onReply:{required:!1,tsType:{name:"signature",type:"function",raw:"(lineId: string) => void",signature:{arguments:[{type:{name:"string"},name:"lineId"}],return:{name:"void"}}},description:" (a), S7: *Reply in thread* on a line that has no thread yet — a quiet door on hover / focus; absent → no door"},onOpenInNexi:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"room-thread"',computed:!1}}}};export{z as R};
