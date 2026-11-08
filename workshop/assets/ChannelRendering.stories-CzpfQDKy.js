import{aH as se,ak as Y,j as t}from"./iframe-C_4ax-Jm.js";/* empty css                */import"./preload-helper-PPVm8Dsz.js";const g="channel.telegram.button.open";function re(s){const a=(c,d)=>se(s,c,d),n=(c,d)=>({key:c,label:a(c,d)}),o=()=>[[n(g)]],i=(c,d,ae="09:41")=>({id:c,side:"person",text:d,time:ae}),r=(c,d,ae={})=>({id:c,side:"nexi",text:d,time:"09:41",...ae}),e=s==="uk",p=e?"які відправлення з Китаю чекають ставку?":"which shipments from China are waiting for a rate?",Z=e?"Три відправлення чекають ставку: SCG-41 (Нінбо → Одеса, 2 контейнери), SCG-44 (Шеньчжень → Гданськ, 1 контейнер) і SCG-47 (Ціндао → Констанца, 3 контейнери). Для SCG-44 перевізник обіцяв відповідь до п'ятниці [1].":"Three shipments are waiting for a rate: SCG-41 (Ningbo → Odesa, 2 containers), SCG-44 (Shenzhen → Gdańsk, 1 container) and SCG-47 (Qingdao → Constanța, 3 containers). For SCG-44 the carrier promised an answer by Friday [1].",ee=a("channel.telegram.answer.receipt",{n:"3"}),te=e?"Огляд логістики за третій квартал: витрати на морські перевезення зросли на 8 %, залізниця стабільна, два напрямки перевищили план — Нінбо → Одеса і Шеньчжень → Гданськ. Основна причина — простої в портах.":"The Q3 logistics review: sea freight spend rose 8 %, rail held steady, two lanes ran over plan — Ningbo → Odesa and Shenzhen → Gdańsk. The main cause was port dwell time.",u=e?"Надіслати пропозицію Lystva":"Send the quote to Lystva";return[{id:"answer",cardState:"done",label:e?"Відповідь":"The answer",note:e?"Звичайна відповідь: текст як у вебі, квитанція з кількістю джерел, [n] збережено, Відкрити в Nexi під кожною карткою ( · ).":"A plain answer: the web's text, the receipt's source count, [n] kept, Open in Nexi under every card ( · ).",messages:[i("p1",p),r("n1",`${Z}

${ee}`,{keyboard:o(),edited:!0})]},{id:"working",cardState:"working",label:e?"Працюю":"Working",note:e?"Індикатор набору ≤ 2 с, потім одне повідомлення прогресу, яке редагується на місці; ніколи другого ( · ).":"Typing within 2 s, then one progress message edited in place; never a second ( · ).",messages:[i("p1",p),r("n1",a("channel.telegram.working"),{kind:"typing"})]},{id:"gist",cardState:"done",label:e?"Довга відповідь — суть":"The long answer — the gist",note:e?"Понад gist_chars: суть за правилом озвученої суті () і двері; повна відповідь у Nexi ().":"Past gist_chars: the gist by the spoken-gist rule () and the door; the full answer is in Nexi ().",messages:[i("p1",e?"підсумуй огляд логістики за третій квартал":"summarise the Q3 logistics review"),r("n1",`${te}

${a("channel.telegram.answer.gist")}`,{keyboard:o()})]},{id:"table",cardState:"done",label:e?"Таблиця":"A table",note:e?"Таблиця ніколи не вставляється як текст — один рядок і двері ().":"A table is never pasted as text — one line and the door ().",messages:[i("p1",e?"покажи ставки за напрямками":"show the rates per lane"),r("n1",`${e?"Ставки за п'ятьма напрямками за вересень — найвища Нінбо → Одеса.":"The rates for five lanes in September — Ningbo → Odesa the highest."}

${a("channel.telegram.answer.table")}`,{keyboard:o()})]},{id:"figures",cardState:"done",label:e?"Зображення":"Figures",note:e?"Екрани відповіді (DS-5011) — лічильник і двері, ніколи файлів у чаті ().":"The answer's screens (DS-5011) — a count and the door, never files in the chat ().",messages:[i("p1",e?"як створити проєкт?":"how do I create a project?"),r("n1",`${e?"Відкрийте Проєкти, натисніть Новий проєкт, назвіть його і виберіть класифікацію.":"Open Projects, press New project, name it and pick the classification."}

${a("channel.telegram.answer.figures",{n:"4"})}`,{keyboard:o()})]},{id:"stages",cardState:"working",label:e?"Етапи (ціль · Flow)":"Stages (a goal · a Flow)",note:e?"Одне повідомлення, що редагується: ✓ за кожен етап, Пауза · Зупинити рівно тоді, коли їх має картка у вебі ().":"One message edited in place: ✓ per stage, Pause · Stop exactly when the web's card has them ().",messages:[i("p1",e?"розрахуй пропозицію для запиту Сосновець":"calculate the quote for the Sosnowiec request"),r("n1",e?`Розрахунок пропозиції
✓ Читаю запит
✓ Розрахунок
… Чернетка`:`Quote calculation
✓ Reading the request
✓ Pricing
… Drafting`,{keyboard:[[n("channel.telegram.button.pause"),n("channel.telegram.button.stop")]],edited:!0})]},{id:"paused",cardState:"stopped",label:e?"Пауза":"Paused",note:e?"⏸ і Продовжити — та сама картка, відредагована ().":"⏸ and Resume — the same card, edited ().",messages:[r("n1",`${e?`Розрахунок пропозиції
✓ Читаю запит
✓ Розрахунок`:`Quote calculation
✓ Reading the request
✓ Pricing`}
${a("channel.telegram.goal.paused")}`,{keyboard:[[n("channel.telegram.button.resume")]],edited:!0})]},{id:"approval-inline",cardState:"waiting_on_you",label:e?"Погодження — кнопки":"Approval — inline",note:e?"Рівень ≤ approvals_inline_max_level: Погодити · Відхилити · Відкрити ().":"Level ≤ approvals_inline_max_level: Approve · Reject · Open ().",messages:[r("n1",`${u}
${e?"Пропозиція  · €4 820":"Quote  · €4 820"}`,{keyboard:[[n("channel.telegram.button.approve"),n("channel.telegram.button.reject"),n(g)]]})]},{id:"approval-second-tap",cardState:"waiting_on_you",label:e?"Погодження — друге натискання":"Approval — the second tap",note:e?"Жодне рішення з одного натискання: Так · Ні на тій самій картці ().":"No decision from one tap: Yes · No on the same card ().",messages:[r("n1",a("channel.telegram.approval.second_tap.approve",{title:u}),{keyboard:[[n("channel.telegram.button.yes"),n("channel.telegram.button.no")]],edited:!0})]},{id:"approval-done",cardState:"done",label:e?"Погодження — вирішено":"Approval — decided",note:e?"Картка відредагована в ✓ Погоджено; клавіатури більше немає ().":"The card edited into ✓ Approved; no keyboard remains ().",messages:[r("n1",`${u}
${a("channel.telegram.approval.done.approved")}`,{edited:!0})]},{id:"approval-already",cardState:"done",label:e?"Погодження — уже вирішено":"Approval — already decided",note:e?"Натискання на вирішену картку: один рядок, нічого не робиться ().":"A press on a decided card: one line, nothing done ().",messages:[r("n1",a("channel.telegram.approval.already"))]},{id:"approval-web-only",cardState:"waiting_on_you",label:e?"Погодження — лише в Nexi":"Approval — web only",note:e?"classification або рівень 4: жодних кнопок, лише двері ( · ).":"A classification approval or level 4: no buttons, the door only ( · ).",messages:[r("n1",a("channel.telegram.approval.web_only",{title:e?"Поділитися оглядом Q3 поза організацією":"Share the Q3 review outside the organization"}),{keyboard:o()})]},{id:"approval-expired",cardState:"failed",label:e?"Погодження — переслана картка":"Approval — a forwarded card",note:e?"Кнопка з пересланої або застарілої картки: Застаріло, нічого не робиться ().":"A button from a forwarded or stale card: Expired, nothing done ().",messages:[r("n1",a("channel.telegram.approval.expired"))]},{id:"connect-ask",cardState:"waiting_on_you",label:e?"Під'єднати — запит":"Connect — the ask",note:e?"Крок цілі чекає на з'єднання особи: Під'єднати ⟨provider⟩ відкриває її згоду у браузері ().":"A goal step waits on the person's connection: Connect ⟨provider⟩ opens her own consent in the browser ().",messages:[r("n1",a("channel.telegram.connect.ask",{provider:"Gmail",step:e?"прочитати відповідь перевізника":"read the carrier's reply"}),{keyboard:[[n("channel.telegram.button.connect",{provider:"Gmail"}),n("channel.telegram.button.not_now")]]})]},{id:"connect-waiting",cardState:"waiting_on_other",label:e?"Під'єднати — чекаю":"Connect — waiting",note:e?"Після натискання: та сама картка, відредагована ().":"After the press: the same card, edited ().",messages:[r("n1",a("channel.telegram.connect.waiting",{provider:"Gmail"}),{edited:!0})]},{id:"connect-done",cardState:"working",label:e?"Під'єднати — готово":"Connect — done",note:e?"Згода надана у браузері; тред продовжується ().":"The consent given in the browser; the thread resumes ().",messages:[r("n1",a("channel.telegram.connect.done",{provider:"Gmail"}),{edited:!0})]},{id:"connect-declined",cardState:"waiting_on_you",label:e?"Під'єднати — не зараз":"Connect — not now",note:e?"Відмова записана; ціль чесно призупинена ().":"The decline recorded; the goal honestly paused ().",messages:[r("n1",a("channel.telegram.connect.declined",{provider:"Gmail"}),{keyboard:[[n("channel.telegram.button.connect",{provider:"Gmail"})]],edited:!0})]},{id:"route-confirm",cardState:"waiting_on_you",label:e?"Запустити?":"Run?",note:e?"Підтвердження маршруту через двері підтвердження від імені особи ().":"Route confirm through the confirm door as the person ().",messages:[i("p1",e?"розрахуй пропозицію для запиту Сосновець":"calculate the quote for the Sosnowiec request"),r("n1",a("channel.telegram.route.confirm",{label:e?"Розрахунок пропозиції":"Quote calculation"}),{keyboard:[[n("channel.telegram.button.run"),n("channel.telegram.button.not_now")]]})]},{id:"artifact",cardState:"done",label:e?"Артефакт":"An artifact",note:e?"Рядок назви й двері; нічого з тіла не вставляється ().":"The title line and the door; nothing of the body pasted ().",messages:[r("n1",`${a("channel.telegram.artifact.result",{title:e?"Пропозиція ":"Quote ",type:e?"документ":"document",version:"1"})}
${e?"Розрахунок завершено — три напрямки, одна ставка на кожен.":"Calculation done — three lanes, one rate each."}`,{keyboard:o(),edited:!0})]},{id:"next-line",cardState:"done",label:e?"Наступний рядок":"The next line",note:e?"Наступний рядок відповіді () як ≤ 3 кнопки ().":"The answer's next line () as ≤ 3 buttons ().",messages:[r("n1",`${Z}

${ee}`,{keyboard:[[{key:"next.1",label:e?"Нагадати перевізнику":"Chase the carrier"},{key:"next.2",label:e?"Показати SCG-44":"Show SCG-44"}],[n(g)]]})]},{id:"nothing-found",cardState:"nothing_found",label:e?"Не знайдено":"Nothing found",note:e?"Один і той самий рядок для нечитабельного, за лімітом і неіснуючого — без дверей ().":"One and the same line for the unreadable, the above-ceiling and the nonexistent — no door ().",messages:[i("p1",e?"що в треді про оренду київського офісу?":"what is in the thread about the Kyiv office lease?"),r("n1",a("turn.state.nothing_found.resource"))]},{id:"failed",cardState:"failed",label:e?"Не вдалося":"Failed",note:e?"Рядок реєстру для невдачі — без слова про механізм — і двері ( · ).":"The register's failed line — no mechanism word — and the door ( · ).",messages:[r("n1",`${e?"Розрахунок пропозиції":"Quote calculation"}
${a("turn.state.failed.flow_failed")}`,{keyboard:o(),edited:!0})]},{id:"generic",cardState:"plain",label:e?"Невідомий стан — загальний рядок":"An unknown state — the generic line",note:e?"Стан, якого немає в таблиці рендерера: рядок реєстру й двері, ніколи тиші ().":"A card state the renderer's table lacks: the register's line and the door, never silence ().",messages:[r("n1",a("turn.state.asked"),{keyboard:o()})]},{id:"voice",cardState:"done",label:e?"Голос — відтворення, відповідь, бульбашка":"Voice — the read-back, the answer, the bubble",note:e?"🎤 «…» за 8 с, текстова відповідь, озвучена суть голосовою бульбашкою (…3533).":"🎤 “…” within 8 s, the text answer, the spoken gist as a voice bubble (…3533).",messages:[{id:"p1",side:"person",kind:"voice",seconds:20,time:"09:41"},r("n1",a("channel.telegram.voice.readback",{transcript:p})),r("n2",`${Z}

${ee}`,{keyboard:o()}),{id:"n3",side:"nexi",kind:"voice",seconds:11,time:"09:41"}]},{id:"voice-audio-file",cardState:"done",label:e?"Голос — аудіофайл":"Voice — the audio file",note:e?"Тримач голосу дає лише WAV: файл і чесний рядок ().":"The voice holder yields WAV only: the file and the honest line ().",messages:[{id:"n1",side:"nexi",kind:"file",file:{name:"nexi.wav",size:"180 KB"},text:a("channel.telegram.voice.audio_file"),time:"09:41"}]},{id:"voice-too-long",cardState:"failed",label:e?"Голос — задовге":"Voice — too long",note:e?"Понад 60 с: один рядок, жодного байта не отримано ().":"Past 60 s: one line, no bytes fetched ().",messages:[{id:"p1",side:"person",kind:"voice",seconds:75,time:"09:41"},r("n1",a("channel.telegram.voice.too_long"))]},{id:"file-attached",cardState:"done",label:e?"Файл — додано":"A file — attached",note:e?"PDF через двері вкладень від імені особи; підпис стає ходом ().":"A PDF through the attachments door as the person; the caption becomes the turn ().",messages:[{id:"p1",side:"person",kind:"file",file:{name:"contract-sosnowiec.pdf",size:"412 KB"},text:e?"перевір цей договір":"check this contract",time:"09:41"},r("n1",a("channel.telegram.file.attached",{project:"Supply Chain"}))]},{id:"file-refused",cardState:"failed",label:e?"Файл — відхилено":"A file — refused",note:e?"Непідтримуваний тип, невідповідність, завеликий — по одному рядку ().":"Unsupported, mismatch, too big — one line each ().",messages:[r("n1",a("channel.telegram.file.unsupported")),r("n2",a("channel.telegram.file.mismatch",{type:"PDF"})),r("n3",a("channel.telegram.file.too_big",{cap:"20 MB"}))]},{id:"queued",cardState:"working",label:e?"Черга":"The queue",note:e?"Одне в черзі за ходом, що виконується; третє — по одному ().":"One queued behind a running turn; a third — one at a time ().",messages:[i("p1",e?"а минулого місяця?":"and last month?"),r("n1",a("channel.telegram.queued")),i("p2",e?"а позаминулого?":"and the one before?"),r("n2",a("channel.telegram.queue.full"))]},{id:"stranger",cardState:"plain",label:e?"Незнайомець":"The stranger",note:e?"До під'єднання: одна пропозиція, одна кнопка, нічого більше ().":"Before a link: one offer, one button, nothing else ().",messages:[i("p1","/start"),r("n1",a("channel.telegram.stranger.start"),{keyboard:[[n("channel.telegram.button.sign_in")]]})]},{id:"link-confirm",cardState:"waiting_on_you",label:e?"Під'єднання з вебу":"The web-first link",note:e?"Запитання бота називає особу; Підтвердити · Скасувати ().":"The bot's question names the person; Confirm · Cancel ().",messages:[r("n1",a("channel.telegram.link.web_first.confirm",{display_name:"Oksana Bondar",organization:"SupplyChain Guru"}),{keyboard:[[n("channel.telegram.button.confirm"),n("channel.telegram.button.cancel")]]})]},{id:"link-done",cardState:"done",label:e?"Під'єднано":"Linked",note:e?"Рядок готовності з організацією, іменем і поточним проєктом ( · ).":"The done line with the organization, the name and the current project ( · ).",messages:[r("n1",a("channel.telegram.link.done",{organization:"SupplyChain Guru",display_name:"Oksana Bondar",project:"Supply Chain"}),{edited:!0})]},{id:"cues",cardState:"plain",label:e?"Підказки":"The cues",note:e?"Проєкт · організація · новий чат — детерміновано, ніколи модель ( ·  · ).":"Project · organization · new chat — deterministic, never a model ( ·  · ).",messages:[i("p1",e?"перейти до проєкту Supply Chain":"use project Supply Chain"),r("n1",a("channel.telegram.project.switched",{project:"Supply Chain",classification:"confidential"})),i("p2",e?"перейти до Consulting Demo":"switch to Consulting Demo"),r("n2",a("channel.telegram.organization.not_enabled",{organization:"Consulting Demo"})),i("p3",e?"новий чат":"new chat"),r("n3",a("channel.telegram.newchat.done",{project:"Supply Chain"}))]},{id:"project-pick",cardState:"waiting_on_you",label:e?"Застарілий контекст — вибір":"A stale context — the picker",note:e?"Повідомлення чекає за вибором проєкту; ≤ 3 проєкти як кнопки, решта в Nexi ().":"The message waits behind the project picker; ≤ 3 projects as buttons, the rest in Nexi ().",messages:[i("p1",e?"проаналізуй це":"analyse this"),r("n1",a("channel.telegram.project.pick"),{keyboard:[[{key:"project.1",label:"Supply Chain"},{key:"project.2",label:"Quotes"}],[n("channel.telegram.button.more_in_nexi")]]})]},{id:"notify",cardState:"waiting_on_you",label:e?"Nexi пише першим":"Nexi writes first",note:e?"Погодження, призначене чужим запуском; назва і двері, ніколи тіла ().":"An approval assigned by another's run; the name and a door, never a body ().",messages:[r("n1",a("channel.telegram.notify.approval_assigned",{title:u}),{keyboard:[[n("channel.telegram.button.approve"),n("channel.telegram.button.reject"),n(g)]],time:"17:02"}),r("n2",a("channel.telegram.notify.digest",{n:"3"}),{keyboard:o(),time:"07:00"})]},{id:"disconnect",cardState:"waiting_on_you",label:e?"Від'єднати":"Disconnect",note:e?"Підтвердження спершу; потім рядок готовності й пропозиція увійти ().":"A confirmation first; then the done line and the sign-in offer ().",messages:[r("n1",a("channel.telegram.disconnect.confirm"),{keyboard:[[n("channel.telegram.button.disconnect"),n("channel.telegram.button.cancel")]]}),r("n2",a("channel.telegram.disconnect.done"),{keyboard:[[n("channel.telegram.button.sign_in")]]})]},{id:"revoked",cardState:"failed",label:e?"Відкликано адміністратором":"Revoked by the admin",note:e?"Наступне повідомлення після відкликання: чесний рядок, жодного ходу ().":"The next message after a revoke: the honest line, no turn ().",messages:[i("p1",e?"є новини щодо відправлення в Одесу?":"any news on the Odesa shipment?"),r("n1",a("channel.telegram.revoked.by_admin"),{keyboard:[[n("channel.telegram.button.sign_in")]]})]},{id:"unavailable",cardState:"failed",label:e?"Nexi недоступний":"Nexi unavailable",note:e?"chat-api не відповідає: один рядок, повідомлення не втрачено ().":"chat-api does not answer: one line, the message not lost ().",messages:[i("p1",p),r("n1",a("channel.telegram.unavailable"))]}]}function ne({messages:s,testId:a,label:n}){const{t:o}=Y();return t.jsxs("section",{className:"nexus-tg","aria-label":n??o("channel.preview.label"),"data-testid":a,children:[t.jsxs("header",{className:"nexus-tg-head",children:[t.jsx("span",{className:"nexus-tg-avatar","aria-hidden":!0,children:"N"}),t.jsx("span",{className:"nexus-tg-name",children:"Nexi"}),t.jsx("span",{className:"nexus-tg-status",children:o("channel.preview.bot")})]}),t.jsx("ol",{className:"nexus-tg-list",children:s.map(i=>t.jsx(oe,{message:i,testId:a?`${a}-${i.id}`:void 0},i.id))}),t.jsx("footer",{className:"nexus-tg-foot","aria-hidden":!0,children:t.jsx("span",{className:"nexus-tg-foot-field",children:o("channel.preview.field")})})]})}function oe({message:s,testId:a}){const{t:n}=Y(),o=s.kind??"text";return t.jsxs("li",{className:"nexus-tg-row","data-side":s.side,"data-kind":o,"data-testid":a,children:[t.jsxs("div",{className:"nexus-tg-bubble","data-edited":s.edited?"true":void 0,children:[o==="typing"?t.jsx("span",{className:"nexus-tg-typing",role:"status","aria-live":"polite",children:s.text}):null,o==="voice"?t.jsxs("span",{className:"nexus-tg-voice","aria-label":n("channel.preview.voice",{s:String(s.seconds??0)}),children:[t.jsx("span",{className:"nexus-tg-voice-play","aria-hidden":!0,children:"▶"}),t.jsx("span",{className:"nexus-tg-voice-wave","aria-hidden":!0}),t.jsx("span",{className:"nexus-tg-voice-len",children:ie(s.seconds??0)})]}):null,o==="file"&&s.file?t.jsxs("span",{className:"nexus-tg-file",children:[t.jsx("span",{className:"nexus-tg-file-icon","aria-hidden":!0,children:"▤"}),t.jsxs("span",{className:"nexus-tg-file-text",children:[t.jsx("span",{className:"nexus-tg-file-name",children:s.file.name}),t.jsx("span",{className:"nexus-tg-file-size",children:s.file.size})]})]}):null,o!=="typing"&&s.text?t.jsx("p",{className:"nexus-tg-text",children:s.text}):null,t.jsxs("span",{className:"nexus-tg-meta",children:[s.edited?t.jsx("span",{className:"nexus-tg-edited",children:n("channel.preview.edited")}):null,t.jsx("span",{className:"nexus-tg-time",children:s.time??""})]})]}),s.keyboard?.length?t.jsx("div",{className:"nexus-tg-keyboard",role:"group","aria-label":n("channel.preview.keyboard"),children:s.keyboard.map((i,r)=>t.jsx("div",{className:"nexus-tg-keyboard-row",children:i.map(e=>t.jsx("button",{type:"button",className:"nexus-tg-button","data-key":e.key,children:e.label},e.key))},r))}):null]})}function ie(s){const a=Math.floor(s/60),n=s%60;return`${a}:${n<10?"0":""}${n}`}ne.__docgenInfo={description:`TelegramPreview ( S0 · DS-5013 · ): a **monochrome mock** of a Telegram private chat — the person's
bubbles right, Nexi's left, an inline keyboard under a card, a voice bubble, a file bubble, the typing line. The
workshop's own idiom (no Telegram asset, no brand colour — the suite's tokens only, DS-1001…1060); it exists so the
renderer's goldens (\`TurnView\` → Telegram JSON) can be *seen* and reviewed, en and uk, before any code sends a
byte. Nothing here is interactive beyond focus: a button is a real \`<button>\` for the a11y contract (the label is the
accessible name) and does nothing — the wire's opaque ids are not part of a story ().`,methods:[],displayName:"TelegramPreview",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"TelegramMessageView"}],raw:"TelegramMessageView[]"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};function ce({id:s}){const{locale:a}=Y(),n=re(a==="uk"?"uk":"en").find(o=>o.id===s);return t.jsx("div",{className:"nexus-tg-scenes",children:t.jsxs("div",{children:[t.jsx(ne,{messages:n.messages,testId:`tg-${n.id}`,label:n.label}),t.jsx("p",{className:"nexus-tg-scene-note","data-card-state":n.cardState,children:n.note})]})})}function de(){const{locale:s}=Y(),a=re(s==="uk"?"uk":"en");return t.jsx("div",{className:"nexus-tg-scenes",children:a.map(n=>t.jsxs("div",{children:[t.jsx(ne,{messages:n.messages,testId:`tg-${n.id}`,label:n.label}),t.jsx("p",{className:"nexus-tg-scene-note",children:n.note})]},n.id))})}const ge={title:"Conversation/Channel rendering",component:ce,parameters:{ds:"DS-5013",layout:"padded"}},m={args:{id:"answer"}},h={args:{id:"working"}},b={args:{id:"gist"}},f={args:{id:"table"}},v={args:{id:"figures"}},y={args:{id:"stages"}},x={args:{id:"paused"}},w={args:{id:"next-line"}},S={args:{id:"artifact"}},k={args:{id:"approval-inline"}},F={args:{id:"approval-second-tap"}},R={args:{id:"approval-done"}},N={args:{id:"approval-already"}},j={args:{id:"approval-web-only"},play:async({canvasElement:s})=>{const a=[...s.querySelectorAll(".nexus-tg-button")];if(a.length!==1||a[0].dataset.key!=="channel.telegram.button.open")throw new globalThis.Error("a web-only approval has the door and nothing else ()")}},A={args:{id:"approval-expired"}},C={args:{id:"connect-ask"}},_={args:{id:"connect-waiting"}},T={args:{id:"connect-done"}},$={args:{id:"connect-declined"}},E={args:{id:"route-confirm"}},D={args:{id:"nothing-found"},play:async({canvasElement:s})=>{if(s.querySelector(".nexus-tg-button"))throw new globalThis.Error("the not-found line has no door (: no hint, no door)")}},q={args:{id:"failed"}},G={args:{id:"generic"}},P={args:{id:"voice"}},Q={args:{id:"voice-audio-file"}},O={args:{id:"voice-too-long"}},V={args:{id:"file-attached"}},L={args:{id:"file-refused"}},z={args:{id:"queued"}},B={args:{id:"stranger"}},I={args:{id:"link-confirm"}},W={args:{id:"link-done"}},M={args:{id:"cues"}},K={args:{id:"project-pick"}},U={args:{id:"notify"}},H={args:{id:"disconnect"}},J={args:{id:"revoked"}},X={args:{id:"unavailable"}},l={args:{id:"link"},render:()=>t.jsx(de,{}),play:async({canvasElement:s})=>{const n=[...s.querySelectorAll(".nexus-tg-text, .nexus-tg-button")].map(o=>o.textContent??"").join(`
`).match(/\b(flow|agent|node|webhook|assertion|callback|template|renderer|session)\b|\b(вебхук|колбек|шаблон|агент|нод[аи])\b/i);if(n)throw new globalThis.Error(`a mechanism word on the Telegram face: ${n[0]}`)}},me=["Answer","Working","Gist","Table","Figures","Stages","Paused","NextLine","Artifact","ApprovalInline","ApprovalSecondTap","ApprovalDone","ApprovalAlready","ApprovalWebOnly","ApprovalExpired","ConnectAsk","ConnectWaiting","ConnectDone","ConnectDeclined","RouteConfirm","NothingFound","Failed","Generic","Voice","VoiceAudioFile","VoiceTooLong","FileAttached","FileRefused","Queued","Stranger","LinkConfirm","LinkDone","Cues","ProjectPick","Notify","Disconnect","Revoked","Unavailable","All"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "answer"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "working"
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "gist"
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "table"
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "figures"
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stages"
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "paused"
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "next-line"
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "artifact"
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "approval-inline"
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "approval-second-tap"
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    id: "approval-done"
  }
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "approval-already"
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "approval-web-only"
  },
  play: async ({
    canvasElement
  }) => {
    const buttons = [...canvasElement.querySelectorAll<HTMLButtonElement>(".nexus-tg-button")];
    if (buttons.length !== 1 || buttons[0].dataset.key !== "channel.telegram.button.open") throw new globalThis.Error("a web-only approval has the door and nothing else ()");
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: "approval-expired"
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "connect-ask"
  }
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "connect-waiting"
  }
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: "connect-done"
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    id: "connect-declined"
  }
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "route-confirm"
  }
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "nothing-found"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector(".nexus-tg-button")) throw new globalThis.Error("the not-found line has no door (: no hint, no door)");
  }
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    id: "failed"
  }
}`,...q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    id: "generic"
  }
}`,...G.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: "voice"
  }
}`,...P.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    id: "voice-audio-file"
  }
}`,...Q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: "voice-too-long"
  }
}`,...O.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "file-attached"
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "file-refused"
  }
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    id: "queued"
  }
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stranger"
  }
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "link-confirm"
  }
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "link-done"
  }
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: "cues"
  }
}`,...M.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    id: "project-pick"
  }
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    id: "notify"
  }
}`,...U.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disconnect"
  }
}`,...H.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    id: "revoked"
  }
}`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    id: "unavailable"
  }
}`,...X.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "link"
  },
  render: () => <AllScenes />,
  play: async ({
    canvasElement
  }) => {
    // 's copy half: no mechanism word on any bubble or button ()
    const text = [...canvasElement.querySelectorAll(".nexus-tg-text, .nexus-tg-button")].map(e => e.textContent ?? "").join("\\n");
    const bad = text.match(/\\b(flow|agent|node|webhook|assertion|callback|template|renderer|session)\\b|\\b(вебхук|колбек|шаблон|агент|нод[аи])\\b/i);
    if (bad) throw new globalThis.Error(\`a mechanism word on the Telegram face: \${bad[0]}\`);
  }
}`,...l.parameters?.docs?.source},description:{story:"Every scene on one page — the review sheet for `APPROVED ` (uk = en through the toolbar).",...l.parameters?.docs?.description}}};export{l as All,m as Answer,N as ApprovalAlready,R as ApprovalDone,A as ApprovalExpired,k as ApprovalInline,F as ApprovalSecondTap,j as ApprovalWebOnly,S as Artifact,C as ConnectAsk,$ as ConnectDeclined,T as ConnectDone,_ as ConnectWaiting,M as Cues,H as Disconnect,q as Failed,v as Figures,V as FileAttached,L as FileRefused,G as Generic,b as Gist,I as LinkConfirm,W as LinkDone,w as NextLine,D as NothingFound,U as Notify,x as Paused,K as ProjectPick,z as Queued,J as Revoked,E as RouteConfirm,y as Stages,B as Stranger,f as Table,X as Unavailable,P as Voice,Q as VoiceAudioFile,O as VoiceTooLong,h as Working,me as __namedExportsOrder,ge as default};
