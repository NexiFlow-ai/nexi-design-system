import{r as le,j as ae}from"./iframe-C_4ax-Jm.js";import{L as Re}from"./LobbyThread-9xK7Bd9J.js";import"./preload-helper-PPVm8Dsz.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";const e=(a,o,s={})=>({id:a,role:"assistant",text:o,...s}),t=(a,o,s=!1)=>({id:a,role:"user",text:o,spoken:s}),ee=[e("a1","Hi Dana — I'm Nexi. Olena invited you to Acme Logistics. Say *join* when you're ready, or ask me anything first.")],oe=[...ee,t("u1","join"),e("a2","Here's what I'll do: accept Olena's invitation and bring you into Acme Logistics as Admin. Say *all good* and I go ahead.",{readback:!0})],De=[e("a1","Hi Dana — I'm Nexi. You have 2 invitations: Acme Logistics and Panama Freight. Which one shall we open?")],ue=[e("b1","Hi Dana — I'm Nexi. Panama Freight is prepared for you by Olena. Say *open* and I'll set it up.")],Oe=[...ue,t("u1","open"),e("b2","Here's what I'll do: open Panama Freight, prepared for you by Olena, with you as its owner, then continue there. Say *all good* and I go ahead.",{readback:!0})],n=[e("c1","Hi Dana — I'm Nexi. There's no organization for you here yet. What should we call yours? Or tell me the name of one to join — and ask me anything about Nexi along the way.")],ne=[...n,t("u1","lets call it Panama"),e("c2","Panama — good. Its handle — the short name people join it by — will be panama. Where should it live: Europe, the United States or Ukraine? It decides where your data is stored; you can't move it later.")],J=[...ne,t("u2","europe, and what can you do for a freight company?",!0),e("c3",`For freight: quotes from your price lists, support on one inbox, reports from your spreadsheets — I'll show you once we're in.

— from the Nexi guide

That's everything I need.

Here's what I'll do: open Panama (handle panama) in Europe, with you as its owner, then set up your first project and continue there. Say *all good* and I go ahead — or tell me what to change.`,{readback:!0})],Ae=[...n,t("u1","Acme"),e("c2","That name is taken — Acme Logistics and Acme Freight are free. Which one, or another?")],me=[e("d1","Hi Dana — organizations here are opened on request. Tell me about your company and I'll send the request for you — or ask me anything first.")],he=[...me,t("u1","Panama Freight, about 40 people, we do road freight across Europe and want quotes from our price lists"),e("d2","Here is what I'll send: Panama Freight, 11–50 people, quotes from price lists, to the owner for review — you'll hear by mail and here. All good?",{readback:!0})],Ee=[...n,t("u1","what is NEXUS?"),e("k1",`NEXUS is a suite of apps your organization works in together — Chat with Nexi, Tasks, BI, Graph and Core — governed by your own policies and running on the models your provider connects.

— from the platform documentation

Now — back to your organization. What should we call your organization?`)],Se=[...n,t("u1","does NEXUS integrate with Marko's ERP?"),e("k1",`I don't have that in the guide yet.

Now — back to your organization. What should we call your organization?`)],Be=[...oe,t("u2","not now"),e("a3","Alright — nothing was done. Tell me what to change, or ask me anything.")],pe=[...n,t("u1","I want to join acme-logistics"),e("j1","I'll ask @acme-logistics to let you in. Here's what I'll do: ask @acme-logistics to let you in. Say *all good* and I go ahead.",{readback:!0})],qe=[...pe,t("u2","all good"),e("j2","I can't find an organization at @acme-logistics — check the handle with the person who invited you, or tell me another.")],Ie=[...oe,t("u2","all good"),e("a3","That invitation is no longer open — nothing was done.")],Te=[...J,t("u3","all good"),e("c4","I couldn't create Panama just now. Nothing was created — say *again* and I'll try once more.")],Y=[...J,t("u3","all good")],se=[e("v1","Hi — I'm Nexi. I can set up access for your company — tell me about it, or ask me anything about Nexi first.")],te=[...se,t("u1","how can Nexi help automate our business flows?"),e("v2",`A business flow in Nexi is a Flow: a sequence of steps that agents, tools and people run — a quote request read from mail, checked against your price list, drafted as an answer and sent after a person approves. You describe the flow in chat; Nexi builds it from the skills and tools your organization has, and every run leaves a record you can read.

— from the platform documentation

Now — back to your request. What's your name?`)],Le=[...te,t("u2","Hi, my name is Dima O, we are Panama Logistics, about 40 people in Kyiv, I run operations"),e("v3","Nice to meet you, Dima. Which e-mail should the confirmation go to?"),t("u3","what is an ontology, in business words?"),e("v4",`An ontology is the shared vocabulary of your business — the things you talk about (customers, shipments, invoices), what each one means and how they relate — written down once so every agent, report and flow means the same thing by the same word.

— from the platform documentation

Now — back to your request. Which e-mail should the confirmation go to?`),t("u4","and what does a pack do?"),e("v5",`A pack is a set of ready skills, agents and flows for one line of work — installed into your organization in one step, governed like everything else.

— from the platform documentation

Now — back to your request. We have 5 of 8 — your e-mail, what to take off your hands first and a phone (or *skip*) to go. Which e-mail should the confirmation go to?`)],ge=[...te,t("u2","Hi, my name is Dima O, we are Panama Logistics, about 40 people in Kyiv, I run operations"),e("v4","Nice to meet you, Dima. Panama Logistics, around 40 people, Ukraine, operations — got it. Which e-mail should we write to?")],re=[...ge,t("u3","dima@panama-logistics.example"),e("v5","And what should Nexi do first for Panama Logistics — quotes, support, reporting, automation, or something else?"),t("u4","quotes from mail, like you said"),e("v6","A phone number, if you'd like a call — or say *skip*."),t("u5","skip"),e("v7",`That's everything I need.

Here's what I'll send to the NexiFlow team: Dima O, operations at Panama Logistics — 11-50 people, Ukraine. The confirmation goes to dima@panama-logistics.example. What you'd like first: quotes from mail. Say *all good* and I send it — or tell me what to change.`,{readback:!0})],ye=[...re,t("u6","all good"),e("v8","Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail.")],Ce=[...se,t("u1","Dima O"),e("v2","I'll keep this short — a few questions and I'll send your request. Which e-mail should we write to?"),t("u2","what is an ontology?"),e("v3",`I don't have that in the guide yet.

Now — back to your request. Which e-mail should the confirmation go to?`)],_e=[...he,t("u2","approved",!0)];function Fe({status:a="idle",turns:o=n,title:s="Welcome",context:r="Start with Nexi",workingLine:i,note:X,speech:Z,receipt:ie,handedOver:we=!1,handOverState:ce="waiting",handOverLine:xe,offline:fe=!1}){const[be,de]=le.useState(""),[ke,ve]=le.useState([]);return ae.jsxs("div",{className:"nexus-convo-page",children:[ae.jsx(Re,{title:s,context:r,status:fe?"offline":a,turns:o,workingLine:i,note:X,draft:be,onDraftChange:de,onSend:Pe=>{ve(Ne=>[...Ne,`send:${Pe}`]),de("")},speech:Z,receipt:ie,handOver:we?{receipt:ie??"Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat.",state:ce,line:xe??(ce==="waiting"?"Opening your chat…":"Panama is ready — I'll be right with you.")}:void 0,ariaLabel:"Nexi"}),ae.jsx("output",{"data-testid":"lobby-log",style:{display:"none"},children:ke.join("|")})]})}const Ye={title:"Conversation/Lobby thread",component:Fe,parameters:{ds:"DS-5016",layout:"fullscreen"}},c={args:{turns:ee,title:"Acme Logistics",context:"Acme Logistics · Invitation"}},d={args:{turns:oe,title:"Acme Logistics",context:"Acme Logistics · Invitation"}},l={args:{turns:De,title:"Welcome",context:"2 invitations"}},u={args:{turns:ue,title:"Panama Freight",context:"Panama Freight · Prepared for you"}},m={args:{turns:Oe,title:"Panama Freight",context:"Panama Freight · Prepared for you"}},h={args:{turns:n}},p={args:{turns:ne,title:"Panama",context:"Panama · New organization"}},g={args:{turns:J,title:"Panama",context:"Panama · New organization"}},y={args:{turns:Ae}},w={args:{turns:me}},x={args:{turns:he,title:"Panama Freight"}},f={args:{turns:Ee}},b={args:{turns:Se}},k={args:{turns:Be,title:"Acme Logistics",context:"Acme Logistics · Invitation"}},v={args:{turns:pe,title:"Welcome"}},P={args:{turns:qe,title:"Welcome"}},N={args:{status:"reading",turns:[]}},R={args:{status:"thinking",turns:[...n,t("u1","lets call it Panama")]}},D={args:{status:"working",turns:Y,title:"Panama",workingLine:"Creating Panama…"}},O={args:{status:"voice",turns:Y,title:"Panama",context:"Panama · New organization",receipt:"Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat.",speech:{status:"speaking",text:"Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat."}}},A={args:{status:"voice",turns:Y,title:"Panama",context:"Panama · New organization",receipt:"Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat.",speech:{status:"fetching"}}},E={args:{status:"voice",turns:_e,title:"Panama Freight",context:"Panama Freight · Request",receipt:"I'll take care of your data and put Panama Freight on the waiting list — you'll hear from me by mail, and here the next time you come.",speech:{status:"speaking"}}},S={args:{status:"handed_over",turns:Y,title:"Panama",context:"Panama · New organization",handedOver:!0}},B={args:{status:"handed_over",turns:Y,title:"Panama",context:"Panama · New organization",handedOver:!0,handOverState:"late"}},q={args:{turns:Ie,title:"Acme Logistics",context:"Acme Logistics · Invitation"}},I={args:{turns:Te,title:"Panama"}},T={args:{status:"fallback",turns:ne,title:"Panama"}},L={args:{turns:n,offline:!0}},C={args:{status:"capped",turns:J,title:"Panama"}},_={args:{turns:ee,title:"Acme Logistics",context:"Acme Logistics · Invitation",speech:{status:"speaking",text:ee[0].text}}},F={args:{turns:n,note:"I couldn't answer just now — your words are still here; send them again."}},W={args:{turns:se,title:"Request access",context:"Request access"}},z={args:{turns:te,title:"Request access",context:"Request access"}},K={args:{turns:Le,title:"Panama Logistics",context:"Panama Logistics · Request"}},H={args:{turns:ge,title:"Panama Logistics",context:"Panama Logistics · Request"}},V={args:{turns:re,title:"Panama Logistics",context:"Panama Logistics · Request"}},G={args:{status:"working",turns:[...re,t("u6","all good")],title:"Panama Logistics",context:"Panama Logistics · Request",workingLine:"Sending your request…"}},j={args:{status:"voice",turns:ye,title:"Panama Logistics",context:"Panama Logistics · Request sent",receipt:"Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail.",speech:{status:"speaking",text:"Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail."}}},U={args:{status:"handed_over",turns:ye,title:"Panama Logistics",context:"Panama Logistics · Request sent",handedOver:!0,handOverState:"late",receipt:"Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail.",handOverLine:"Back to nexiflow.ai in a moment — or press any key."}},M={args:{status:"fallback",turns:Ce,title:"Request access",context:"Request access"}},$={args:{turns:J,title:"Panama",context:"Panama · New organization"},play:async({canvasElement:a})=>{const o=a.querySelectorAll('[data-testid="lobby-thread-log"] button');if(o.length)throw new globalThis.Error(`a button in the lobby thread: ${o.length}`);const s=a.querySelector('[data-testid="lobby-thread-bar"]');if(!s)throw new globalThis.Error("no composer");const r=s.getAttribute("aria-label");if(r!=="Answer Nexi")throw new globalThis.Error(`the composer is named ${r}`);const i=a.querySelector('[data-testid="lobby-thread-title"]');if(i?.textContent!=="Panama"||!i.classList.contains("nexus-sr-only"))throw new globalThis.Error(`the state word is drawn: ${i?.textContent}`);const X=a.querySelectorAll('[data-testid="lobby-thread"] a');if(X.length)throw new globalThis.Error(`a link in the lobby: ${X.length}`);const Z=a.querySelector('[data-testid="lobby-thread-head"]');if(!Z?.querySelector('[role="img"][aria-label="Nexi"]'))throw new globalThis.Error("no identity in the header");if(Z.querySelector('[data-testid="lobby-thread-context"]')?.textContent!=="Panama · New organization")throw new globalThis.Error("the header has no context");if(a.querySelector('[data-testid="lobby-thread-voice-waves"]'))throw new globalThis.Error("a wave while nobody speaks")}},Q={args:{turns:te,title:"Request access",context:"Request access"},play:async({canvasElement:a})=>{const o=a.querySelectorAll('[data-testid="lobby-turn-assistant"]'),r=o[o.length-1]?.querySelectorAll("p")??[];if(r.length!==3)throw new globalThis.Error(`a knowledge turn in ${r.length} paragraphs, not 3`);if(r[1]?.textContent!=="— from the platform documentation")throw new globalThis.Error("the provenance is not the engine's line");if(a.querySelector('[data-testid="lobby-turn-knowledge"]'))throw new globalThis.Error("a caption beneath the answer")}},Xe=["Invited","InvitedReadBack","InvitedTwice","Prepared","PreparedReadBack","NewOrganization","NewOrganizationNamed","ReadBack","NameTaken","ByRequest","ByRequestReadBack","KnowledgeAnswer","KnowledgeNotFound","NotNow","JoinByHandle","JoinUnknownHandle","Reading","Thinking","Working","VoiceMode","VoiceModeFetching","VoiceModeByRequest","HandedOver","HandedOverLate","Stale","ToolFailed","Fallback","Offline","Capped","Speaking","TurnNotSent","DoorOpening","DoorKnowledgeAnswer","DoorProgress","DoorFactsInAnyOrder","DoorReadBack","DoorSending","DoorFinish","DoorClosing","DoorFallback","Interaction","KnowledgeParagraphs"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    turns: INVITED,
    title: "Acme Logistics",
    context: "Acme Logistics · Invitation"
  }
}`,...c.parameters?.docs?.source},description:{story:"A · invited — Nexi knows before she asks (): the inviter and the organization named, *join* is a word; the state word (the organization) is for assistive technology only (Δ2). No button ().",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    turns: INVITED_READBACK,
    title: "Acme Logistics",
    context: "Acme Logistics · Invitation"
  }
}`,...d.parameters?.docs?.source},description:{story:"A · the read-back (): what Nexi will do, then *all good* — the composer named *Answer Nexi*.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    turns: INVITED_TWO,
    title: "Welcome",
    context: "2 invitations"
  }
}`,...l.parameters?.docs?.source},description:{story:"A · two invitations — one question; the person names one.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    turns: PREPARED,
    title: "Panama Freight",
    context: "Panama Freight · Prepared for you"
  }
}`,...u.parameters?.docs?.source},description:{story:"B · prepared ( S3) — the preparer named; *open* is a word, or a question first.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    turns: PREPARED_READBACK,
    title: "Panama Freight",
    context: "Panama Freight · Prepared for you"
  }
}`,...m.parameters?.docs?.source},description:{story:"B · the read-back before the organization is opened.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NEW_ORG
  }
}`,...h.parameters?.docs?.source},description:{story:"C · nothing known — the open question; the composer named *Ask Nexi*.",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NEW_ORG_NAMED,
    title: "Panama",
    context: "Panama · New organization"
  }
}`,...p.parameters?.docs?.source},description:{story:"C · the name understood from free text (*lets call it Panama*), the slug and the region as a closed line; the title follows.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NEW_ORG_READBACK,
    title: "Panama",
    context: "Panama · New organization"
  }
}`,...g.parameters?.docs?.source},description:{story:"C · the read-back (): everything Nexi will do, then *All good?* — the composer is named *Answer Nexi*; the person types or says it.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NAME_TAKEN
  }
}`,...y.parameters?.docs?.source},description:{story:"C · validation is the engine's, said as a line (a taken name → two free ones), never a red field.",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    turns: BY_REQUEST
  }
}`,...w.parameters?.docs?.source},description:{story:"C′ · by request () — the request collected by conversation; the verified address needs no confirm mail (Q-L-5).",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    turns: BY_REQUEST_READBACK,
    title: "Panama Freight"
  }
}`,...x.parameters?.docs?.source},description:{story:"C′ · the read-back of the request before it is sent.",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    turns: KNOWLEDGE
  }
}`,...f.parameters?.docs?.source},description:{story:"Side path · a knowledge answer inline ( ·  a · e · f · h): the answer, the engine's provenance line, then *back to your organization* and the one ask — three paragraphs of one line of Nexi's; no guide prose before the answer, no caption beneath.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NOT_FOUND
  }
}`,...b.parameters?.docs?.source},description:{story:"Side path · not-found sameness — the same words as Chat's; the walk resumes all the same.",...b.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NOT_NOW,
    title: "Acme Logistics",
    context: "Acme Logistics · Invitation"
  }
}`,...k.parameters?.docs?.source},description:{story:"Side path · *Not now* — Nexi says what waits here; the thread stays.",...k.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    turns: JOIN_HANDLE,
    title: "Welcome"
  }
}`,...v.parameters?.docs?.source},description:{story:"Side path · a handle said to Nexi (Δ2 — the code door is retired): the read-back of the request to join.",...v.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    turns: JOIN_UNKNOWN,
    title: "Welcome"
  }
}`,...P.parameters?.docs?.source},description:{story:"Side path · no organization at that handle — the truth as a line, nothing created, no link.",...P.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    status: "reading",
    turns: []
  }
}`,...N.parameters?.docs?.source},description:{story:"Reading — the context read before the first line (≤ 1 s): the header only — no wave, no composer, no skeleton of a form.",...N.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    status: "thinking",
    turns: [...NEW_ORG, me("u1", "lets call it Panama")]
  }
}`,...R.parameters?.docs?.source},description:{story:"Thinking — the person's words are with the model; the composer waits.",...R.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: "working",
    turns: APPROVED,
    title: "Panama",
    workingLine: "Creating Panama…"
  }
}`,...D.parameters?.docs?.source},description:{story:"Working — the tool runs: the closed working line and the wave (long-running: 's 15 s line follows).",...D.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    status: "voice",
    turns: APPROVED,
    title: "Panama",
    context: "Panama · New organization",
    receipt: "Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat.",
    speech: {
      status: "speaking",
      text: "Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat."
    }
  }
}`,...O.parameters?.docs?.source},description:{story:"Voice mode () — the commit is done: the composer folds, the wave grows at the bottom, the receipt is spoken and written above it; the thread stays.",...O.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    status: "voice",
    turns: APPROVED,
    title: "Panama",
    context: "Panama · New organization",
    receipt: "Thank you, Dana. I'm setting Panama up now — give me a few seconds, and I'll open your chat.",
    speech: {
      status: "fetching"
    }
  }
}`,...A.parameters?.docs?.source},description:{story:"The finish · the clip is on its way ( a) — the thread has folded, the wave breathes at the screen's height, the words stand beneath; no composer, no door.",...A.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    status: "voice",
    turns: REQUEST_APPROVED,
    title: "Panama Freight",
    context: "Panama Freight · Request",
    receipt: "I'll take care of your data and put Panama Freight on the waiting list — you'll hear from me by mail, and here the next time you come.",
    speech: {
      status: "speaking"
    }
  }
}`,...E.parameters?.docs?.source},description:{story:"Voice mode · by request ( ·  Δ2) — the receipt names the waiting list; no link — the lobby says where the request stands on the next visit.",...E.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    status: "handed_over",
    turns: APPROVED,
    title: "Panama",
    context: "Panama · New organization",
    handedOver: true
  }
}`,...S.parameters?.docs?.source},description:{story:"Handed over ( · DS-7017 · Δ5 h6 ·  a) — the organization exists: the wave gone quiet, the receipt, one line beneath — *Opening your chat…* — and the host opens NexChat on Nexi's first message; no thread here, no Overview, no link.",...S.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    status: "handed_over",
    turns: APPROVED,
    title: "Panama",
    context: "Panama · New organization",
    handedOver: true,
    handOverState: "late"
  }
}`,...B.parameters?.docs?.source},description:{story:"Handed over · late ( §3,  · Δ5) — the first message is taking longer: the line; the host goes to NexChat all the same, no link; nothing invented.",...B.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    turns: STALE,
    title: "Acme Logistics",
    context: "Acme Logistics · Invitation"
  }
}`,...q.parameters?.docs?.source},description:{story:"Stale — an invitation accepted elsewhere: the fact, not an error.",...q.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    turns: TOOL_FAILED,
    title: "Panama"
  }
}`,...I.parameters?.docs?.source},description:{story:"Tool failed — one calm line; nothing created; the person says *again*.",...I.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    status: "fallback",
    turns: NEW_ORG_NAMED,
    title: "Panama"
  }
}`,...T.parameters?.docs?.source},description:{story:"Fallback () — the model is unavailable: the closed script carries on and the thread says so once.",...T.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NEW_ORG,
    offline: true
  }
}`,...L.parameters?.docs?.source},description:{story:"Offline — the composer's offline state; nothing is sent, the draft stays.",...L.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    status: "capped",
    turns: NEW_ORG_READBACK,
    title: "Panama"
  }
}`,...C.parameters?.docs?.source},description:{story:"Capped (Q-L-4) — the day's turns are spent: the note; the person's word on the read-back still works.",...C.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    turns: INVITED,
    title: "Acme Logistics",
    context: "Acme Logistics · Invitation",
    speech: {
      status: "speaking",
      text: INVITED[0].text
    }
  }
}`,..._.parameters?.docs?.source},description:{story:"Speaking ( ·  · Δ2) — Nexi's line is being spoken from the host's clip: the wave under the composer is alive and named; no toggle — the mic is the composer's.",..._.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NEW_ORG,
    note: "I couldn't answer just now — your words are still here; send them again."
  }
}`,...F.parameters?.docs?.source},description:{story:"Δ2: a turn that did not go through — the person's words stay in the composer, one line says so; sending again is the retry.",...F.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    turns: DOOR,
    title: "Request access",
    context: "Request access"
  }
}`,...W.parameters?.docs?.source},description:{story:" S4 · the door (): a stranger at /request — the engine's closed opening, the header *Request access*, the composer; no voice, no wave, no form.",...W.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    turns: DOOR_KNOWLEDGE,
    title: "Request access",
    context: "Request access"
  }
}`,...z.parameters?.docs?.source},description:{story:"The door · a platform question answered inline from the documentation with its provenance line ( ·  — the same `engine:knowledge` as inside an organization); then *back to your request* and the first ask ( a · h).",...z.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    turns: DOOR_PROGRESS,
    title: "Panama Logistics",
    context: "Panama Logistics · Request"
  }
}`,...K.parameters?.docs?.source},description:{story:"The door · the walk is driven ( h): two questions in a row after the facts — the second ask carries the progress (*We have 5 of 8 — … to go*), then the same question; never a chase, never a second message.",...K.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    turns: DOOR_FACTS,
    title: "Panama Logistics",
    context: "Panama Logistics · Request"
  }
}`,...H.parameters?.docs?.source},description:{story:"The door · the facts in any order (): one sentence gives name · organization · size · country · role; Nexi reads it back in passing and asks only for what is missing.",...H.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    turns: DOOR_READBACK,
    title: "Panama Logistics",
    context: "Panama Logistics · Request"
  }
}`,...V.parameters?.docs?.source},description:{story:"The door · the last fact is in: the close (*That's everything I need.*) and the read-back of the eight facts with its one next step; *all good* is a word in the composer ( ·  h).",...V.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    status: "working",
    turns: [...DOOR_READBACK, me("u6", "all good")],
    title: "Panama Logistics",
    context: "Panama Logistics · Request",
    workingLine: "Sending your request…"
  }
}`,...G.parameters?.docs?.source},description:{story:"The door · working — S1's door is being called: the closed working line; nothing spoken.",...G.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    status: "voice",
    turns: DOOR_CLOSING,
    title: "Panama Logistics",
    context: "Panama Logistics · Request sent",
    receipt: "Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail.",
    speech: {
      status: "speaking",
      text: "Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail."
    }
  }
}`,...j.parameters?.docs?.source},description:{story:`The door · the closing line (Δ5  · ): the request is with the NexiFlow team, the confirmation mail named; the composer folds; the landing follows once the line is read — no link, no button.
The door · the finish ( a, owner 2026-10-24) — after *all good* the thread folds away and the page is the wave while Nexi speaks the finish: the thanks and what comes next; the same words beneath.`,...j.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    status: "handed_over",
    turns: DOOR_CLOSING,
    title: "Panama Logistics",
    context: "Panama Logistics · Request sent",
    handedOver: true,
    handOverState: "late",
    receipt: "Thank you, Dima O — your request for Panama Logistics is with the NexiFlow team. A confirmation is on its way to dima@panama-logistics.example; when the team has read your request, your invitation follows by mail.",
    handOverLine: "Back to nexiflow.ai in a moment — or press any key."
  }
}`,...U.parameters?.docs?.source},description:{story:"The door · the finish, quiet ( a · Δ5 h5) — the clip has ended: the wave rests, the words stay, one line — *Back to nexiflow.ai in a moment* — and the landing opens by itself; no link.",...U.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    status: "fallback",
    turns: DOOR_FALLBACK,
    title: "Request access",
    context: "Request access"
  }
}`,...M.parameters?.docs?.source},description:{story:"The door · fallback ( · ): over the cap, the day's budget or with the model down — one honest line and the closed script carries on; a question meets the not-found sameness; never a 429, never a form.",...M.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    turns: NEW_ORG_READBACK,
    title: "Panama",
    context: "Panama · New organization"
  },
  play: async ({
    canvasElement
  }) => {
    const buttons = canvasElement.querySelectorAll('[data-testid="lobby-thread-log"] button');
    if (buttons.length) throw new globalThis.Error(\`a button in the lobby thread: \${buttons.length}\`);
    const bar = canvasElement.querySelector('[data-testid="lobby-thread-bar"]');
    if (!bar) throw new globalThis.Error("no composer");
    const name = bar.getAttribute("aria-label");
    if (name !== "Answer Nexi") throw new globalThis.Error(\`the composer is named \${name}\`);
    const title = canvasElement.querySelector('[data-testid="lobby-thread-title"]');
    if (title?.textContent !== "Panama" || !title.classList.contains("nexus-sr-only")) throw new globalThis.Error(\`the state word is drawn: \${title?.textContent}\`);
    const links = canvasElement.querySelectorAll('[data-testid="lobby-thread"] a');
    if (links.length) throw new globalThis.Error(\`a link in the lobby: \${links.length}\`);
    const head = canvasElement.querySelector('[data-testid="lobby-thread-head"]');
    if (!head?.querySelector('[role="img"][aria-label="Nexi"]')) throw new globalThis.Error("no identity in the header");
    if (head.querySelector('[data-testid="lobby-thread-context"]')?.textContent !== "Panama · New organization") throw new globalThis.Error("the header has no context");
    if (canvasElement.querySelector('[data-testid="lobby-thread-voice-waves"]')) throw new globalThis.Error("a wave while nobody speaks");
  }
}`,...$.parameters?.docs?.source},description:{story:"The interaction: there is no button in the thread (), no link anywhere in the lobby (Δ2); the composer is named by the state; the header carries the identity and the context; no wave while nobody speaks ().",...$.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    turns: DOOR_KNOWLEDGE,
    title: "Request access",
    context: "Request access"
  },
  play: async ({
    canvasElement
  }) => {
    const turns = canvasElement.querySelectorAll('[data-testid="lobby-turn-assistant"]');
    const last = turns[turns.length - 1];
    const paras = last?.querySelectorAll("p") ?? [];
    if (paras.length !== 3) throw new globalThis.Error(\`a knowledge turn in \${paras.length} paragraphs, not 3\`);
    if (paras[1]?.textContent !== "— from the platform documentation") throw new globalThis.Error("the provenance is not the engine's line");
    if (canvasElement.querySelector('[data-testid="lobby-turn-knowledge"]')) throw new globalThis.Error("a caption beneath the answer");
  }
}`,...Q.parameters?.docs?.source},description:{story:" (e · f): a knowledge turn is drawn as its paragraphs — the answer, the engine's provenance line, the resumed ask — and nothing is captioned beneath it.",...Q.parameters?.docs?.description}}};export{w as ByRequest,x as ByRequestReadBack,C as Capped,U as DoorClosing,H as DoorFactsInAnyOrder,M as DoorFallback,j as DoorFinish,z as DoorKnowledgeAnswer,W as DoorOpening,K as DoorProgress,V as DoorReadBack,G as DoorSending,T as Fallback,S as HandedOver,B as HandedOverLate,$ as Interaction,c as Invited,d as InvitedReadBack,l as InvitedTwice,v as JoinByHandle,P as JoinUnknownHandle,f as KnowledgeAnswer,b as KnowledgeNotFound,Q as KnowledgeParagraphs,y as NameTaken,h as NewOrganization,p as NewOrganizationNamed,k as NotNow,L as Offline,u as Prepared,m as PreparedReadBack,g as ReadBack,N as Reading,_ as Speaking,q as Stale,R as Thinking,I as ToolFailed,F as TurnNotSent,O as VoiceMode,E as VoiceModeByRequest,A as VoiceModeFetching,D as Working,Xe as __namedExportsOrder,Ye as default};
