import{p as B,r as a,t as o,b as s,l as k}from"./scene-CqiggoaI.js";import{T as E}from"./TodayScreen-JoxfnHUJ.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";import"./format-BBzwDLam.js";import"./flags--SfV1VDA.js";import"./routes-DgN3bgVk.js";import"./SetupDoor-BOweqHeo.js";const N={title:"Apps/NexSales/Today",component:E,parameters:{ds:"DS-6103",layout:"fullscreen",workbench:{ns:"sales",path:"/sales"},docs:{description:{component:"Today (DS-6103 · an instance of the Overview page DS-7006, the NexCore cockpit idiom): the *Sales pulse* strip,\nthree `Stat`s (planned today · open pipeline · going quiet), then two-column `Section`s with `StatusList`s —\nplanned today · waiting on me · going quiet · recent. Monochrome; colour only for state; every row is a door."}}},args:{world:"connected",personName:B,canCreate:!1,onNewAccount:()=>{},onStartNative:()=>{},onConnect:()=>{}}},m={name:"Populated · connected (BAS)",args:{view:a(o(s("oksana")))}},h={name:"Populated · native",args:{world:"native",canCreate:!0,view:a(o(s("nazar")))}},i={name:"Waiting on me · the writes (unknown · not saved · conflict)",args:{view:(()=>{const n=o(s("oksana")),e=n.quiet[0],p=e?.id??"acc_horizon",r=e?.name??"Horizon Hotels",t=(S,u,x,l)=>({id:S,kind:u,record_type:x,title:l,due:n.date,assignee_id:"oksana",account_id:p,account_name:r,status:"open",task_ref:""});return a({...n,waiting:[...n.waiting,t("wi_7","write_unknown","account","account.update"),t("wi_8","write_not_saved","interaction","interaction.create"),t("wi_9","write_conflict","account","account.update")]})})()}},c={name:"Waiting on me · the decided writes (approved → send · declined → kept · the transfer's confirm)",args:{onSend:async n=>n==="wi_12"?{status:"unknown",idempotency_key:"k-12"}:{status:"saved",id:"int_11",source:{kind:"external",provider:"BAS",external_id:"E-1011",verified_at:"",state:"live"}},view:(()=>{const n=o(s("oksana")),e=n.quiet[0],p=e?.id??"acc_horizon",r=e?.name??"Horizon Hotels",t=(S,u,x,l)=>({id:S,kind:u,record_type:x,door:l,title:l,due:n.date,assignee_id:"oksana",account_id:p,account_name:r,status:"open",task_ref:"",decision:{outcome:u==="write_approved"?"approved":"declined",by_id:"ihor",at:n.date}});return a({...n,waiting:[t("wi_11","write_approved","interaction","sales.interaction.create"),t("wi_12","write_approved","account","sales.account.transfer"),t("wi_13","write_declined","account","sales.account.update"),t("wi_14","write_declined","account","sales.account.create"),...n.waiting]})})()},play:async({canvasElement:n})=>{const e=r=>n.querySelector(`[data-testid="${r}"]`);if(!e("waiting-wi_11")?.textContent?.includes("Ihor Savchuk approved — send to BAS"))throw new globalThis.Error("the approved row does not say who approved and where it goes");if(!e("waiting-wi_12")?.textContent?.includes("approved the transfer"))throw new globalThis.Error("the transfer's row does not ask for the confirm");if(!e("waiting-wi_13")?.textContent?.includes("declined — the draft is kept")||e("send-wi_13"))throw new globalThis.Error("the declined row is not terminal");if(!e("write-wi_14")?.getAttribute("href")?.endsWith("/sales/accounts?new=1&from=wi_14"))throw new globalThis.Error("the declined create does not open the form from the kept draft");if(e("write-wi_13")?.getAttribute("href")?.includes("from="))throw new globalThis.Error("a declined update opens its record, not the form");e("send-wi_11")?.click();for(let r=0;r<50&&!e("sent-wi_11");r+=1)await new Promise(t=>setTimeout(t,20));if(e("sent-wi_11")?.textContent!=="Saved in BAS")throw new globalThis.Error("the send's answer did not appear under the row");if(e("send-wi_11"))throw new globalThis.Error("the door stayed after the save")}},d={name:"Eligible for hand-over (head of sales)",args:{view:a(o(s("ihor")))}},w={name:"Contracts ending (owner, native)",args:{world:"native",canCreate:!0,view:a(o(s("nazar")))}},g={name:"Empty · the setup door",args:{world:"empty",canCreate:!0,view:a(o(s("nazar","empty")))}},_={name:"Org admin without a relation",args:{view:a(o(s("bob")))}},f={args:{view:k("loading")}},v={args:{view:k("error")}},y={args:{view:k("denied")}},b={args:{view:k("offline")}},P=["Connected","Native","WritesOnMyHands","DecidedOnMyHands","HandOver","ContractsEnding","SetupDoor","OrgAdmin","Loading","Error","Denied","Offline"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (BAS)",
  args: {
    view: ready(store.today(as("oksana")))
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Populated · native",
  args: {
    world: "native",
    canCreate: true,
    view: ready(store.today(as("nazar")))
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Waiting on me · the writes (unknown · not saved · conflict)",
  args: {
    view: (() => {
      const base = store.today(as("oksana"));
      const acc = base.quiet[0];
      const account_id = acc?.id ?? "acc_horizon";
      const account_name = acc?.name ?? "Horizon Hotels";
      const write = (id: string, kind: FollowUp["kind"], record_type: FollowUp["record_type"], title: string): FollowUp & {
        account_name: string;
      } => ({
        id,
        kind,
        record_type,
        title,
        due: base.date,
        assignee_id: "oksana",
        account_id,
        account_name,
        status: "open",
        task_ref: ""
      });
      return ready({
        ...base,
        waiting: [...base.waiting, write("wi_7", "write_unknown", "account", "account.update"), write("wi_8", "write_not_saved", "interaction", "interaction.create"), write("wi_9", "write_conflict", "account", "account.update")]
      });
    })()
  }
}`,...i.parameters?.docs?.source},description:{story:`S4-B ( ·  · ): the writes on the person's hands under *waiting on me* — no answer yet · not saved,
 try again (a new intent) · a conflict to resolve — each with the door it came from.`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Waiting on me · the decided writes (approved → send · declined → kept · the transfer's confirm)",
  args: {
    onSend: async (id: string) => id === "wi_12" ? {
      status: "unknown",
      idempotency_key: "k-12"
    } : {
      status: "saved",
      id: "int_11",
      source: {
        kind: "external",
        provider: "BAS",
        external_id: "E-1011",
        verified_at: "",
        state: "live"
      }
    },
    view: (() => {
      const base = store.today(as("oksana"));
      const acc = base.quiet[0];
      const account_id = acc?.id ?? "acc_horizon";
      const account_name = acc?.name ?? "Horizon Hotels";
      const decided = (id: string, kind: "write_approved" | "write_declined", record_type: FollowUp["record_type"], door: string): FollowUp & {
        account_name: string;
      } => ({
        id,
        kind,
        record_type,
        door,
        title: door,
        due: base.date,
        assignee_id: "oksana",
        account_id,
        account_name,
        status: "open",
        task_ref: "",
        decision: {
          outcome: kind === "write_approved" ? "approved" : "declined",
          by_id: "ihor",
          at: base.date
        }
      });
      return ready({
        ...base,
        waiting: [decided("wi_11", "write_approved", "interaction", "sales.interaction.create"), decided("wi_12", "write_approved", "account", "sales.account.transfer"), decided("wi_13", "write_declined", "account", "sales.account.update"), decided("wi_14", "write_declined", "account", "sales.account.create"), ...base.waiting]
      });
    })()
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const row = by("waiting-wi_11");
    if (!row?.textContent?.includes("Ihor Savchuk approved — send to BAS")) throw new globalThis.Error("the approved row does not say who approved and where it goes");
    if (!by("waiting-wi_12")?.textContent?.includes("approved the transfer")) throw new globalThis.Error("the transfer's row does not ask for the confirm");
    if (!by("waiting-wi_13")?.textContent?.includes("declined — the draft is kept") || by("send-wi_13")) throw new globalThis.Error("the declined row is not terminal");
    //  (c): a declined CREATE has no record to open — its *Open* is the form from the kept draft (a new request)
    if (!by("write-wi_14")?.getAttribute("href")?.endsWith("/sales/accounts?new=1&from=wi_14")) throw new globalThis.Error("the declined create does not open the form from the kept draft");
    if (by("write-wi_13")?.getAttribute("href")?.includes("from=")) throw new globalThis.Error("a declined update opens its record, not the form");
    by("send-wi_11")?.click();
    for (let i = 0; i < 50 && !by("sent-wi_11"); i += 1) await new Promise(r => setTimeout(r, 20));
    if (by("sent-wi_11")?.textContent !== "Saved in BAS") throw new globalThis.Error("the send's answer did not appear under the row");
    if (by("send-wi_11")) throw new globalThis.Error("the door stayed after the save");
  }
}`,...c.parameters?.docs?.source},description:{story:`S4-B close-out ( P-57 b · ): the approver has answered — *Ihor approved — send to BAS* is the author's
 one door (their own session, the same key; the word under the row is the ladder's) · *Ihor declined — the draft is
 kept* is terminal · the transfer () is the same shape with *confirm*. The play presses Send: the answer
 *Saved in BAS* appears under the row and the door is gone.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Eligible for hand-over (head of sales)",
  args: {
    view: ready(store.today(as("ihor")))
  }
}`,...d.parameters?.docs?.source},description:{story:" (): a prospect with no touch for 60 days is *eligible for hand-over* — the head of sales sees everyone's; nothing moves by itself.",...d.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Contracts ending (owner, native)",
  args: {
    world: "native",
    canCreate: true,
    view: ready(store.today(as("nazar")))
  }
}`,...w.parameters?.docs?.source},description:{story:"S2-F (): an active contract that ends within `contract_ending_days` (30) — a row to the account's Contracts view; nothing renews by itself.",...w.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Empty · the setup door",
  args: {
    world: "empty",
    canCreate: true,
    view: ready(store.today(as("nazar", "empty")))
  }
}`,...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Org admin without a relation",
  args: {
    view: ready(store.today(as("bob")))
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...b.parameters?.docs?.source}}};export{m as Connected,w as ContractsEnding,c as DecidedOnMyHands,y as Denied,v as Error,d as HandOver,f as Loading,h as Native,b as Offline,_ as OrgAdmin,g as SetupDoor,i as WritesOnMyHands,P as __namedExportsOrder,N as default};
