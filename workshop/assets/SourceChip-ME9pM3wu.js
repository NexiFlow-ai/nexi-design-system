import{ak as c,j as t,a as r}from"./iframe-C_4ax-Jm.js";import{a as v,c as p}from"./format-CwKZ7-7k.js";function h({source:e,waiting:l=!1,testId:i="source-chip"}){const{t:a,locale:n}=c();if(e.kind==="native")return t.jsx(r,{tone:"muted",testId:i,children:t.jsx("span",{"data-source":"native",children:a("factory.source.nexus")})});if(l)return t.jsx(r,{tone:"muted",testId:i,children:t.jsx("span",{"data-source":"waiting",role:"status","aria-live":"polite",className:"nexus-factory-source",children:a("factory.source.waiting",{provider:e.provider})})});const s=v(e.verified_at,a),o=e.state==="unavailable"?e.unavailable_since?a("factory.source.unavailableSince",{provider:e.provider,at:p(e.unavailable_since,n)}):a("factory.source.unavailable",{provider:e.provider}):e.state==="stale"?a("factory.source.stale",{provider:e.provider,age:s}):a("factory.source.from",{provider:e.provider,age:s}),u=e.state==="unavailable"?"danger":e.state==="stale"?"warn":"neutral",d=a("factory.source.verifiedAt",{at:new Intl.DateTimeFormat(n==="uk"?"uk-UA":"en-GB",{dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Kyiv"}).format(new Date(e.verified_at))});return t.jsx(r,{tone:u,testId:i,children:t.jsx("span",{"data-source":e.state,title:d,tabIndex:0,className:"nexus-factory-source",children:o})})}h.__docgenInfo={description:`The source chip — DS-6101, adopted from NexSales (): who owns the record and how fresh NexFactory's picture of
it is. \`Nexi\` · *from ‹provider› · 4 min ago* · *stale · 3 h* · *‹provider› unavailable*. S3 () adds the two
states of a live read: **waiting** — *‹provider› · waiting…* while a read of the source passes 2 s (; the
screen says so instead of showing a copy as fresh) — and **unavailable since** — *‹provider› unavailable since 10:41*
from the health row's clock, never computed here. Text carries the meaning; the tone is redundant (DS-0001); the
tooltip gives the verification time. The provider is the connection's display name, never a word in the code
( · ).`,methods:[],displayName:"SourceChip",props:{source:{required:!0,tsType:{name:"union",raw:`| { kind: "native" }
| {
    kind: "external";
    provider: string;
    external_id: string;
    verified_at: string;
    state: "live" | "stale" | "unavailable";
    /** S3 (DS-6101 · *unavailable since*): the health row's clock — when the source stopped answering */
    unavailable_since?: string | null;
  }`,elements:[{name:"signature",type:"object",raw:'{ kind: "native" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"native"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: "external";
  provider: string;
  external_id: string;
  verified_at: string;
  state: "live" | "stale" | "unavailable";
  /** S3 (DS-6101 · *unavailable since*): the health row's clock — when the source stopped answering */
  unavailable_since?: string | null;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"external"',required:!0}},{key:"provider",value:{name:"string",required:!0}},{key:"external_id",value:{name:"string",required:!0}},{key:"verified_at",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:'"live" | "stale" | "unavailable"',elements:[{name:"literal",value:'"live"'},{name:"literal",value:'"stale"'},{name:"literal",value:'"unavailable"'}],required:!0}},{key:"unavailable_since",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1},description:"S3 (DS-6101 · *unavailable since*): the health row's clock — when the source stopped answering"}]}}]},description:""},waiting:{required:!1,tsType:{name:"boolean"},description:"a live read of the source that has not answered within 2 s ()",defaultValue:{value:"false",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"source-chip"',computed:!1}}}};export{h as S};
