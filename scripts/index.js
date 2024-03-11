var $=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),C=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),L=matchMedia("(prefers-color-scheme: dark)"),d=document.querySelector(".scheme-toggle__control"),q=()=>L.matches?"dark":"light",A=()=>localStorage.getItem("color-scheme-local"),M=()=>localStorage.getItem("color-scheme-system"),T=e=>{localStorage.setItem("color-scheme-local",e)},I=e=>{localStorage.setItem("color-scheme-system",e)},B=()=>{localStorage.removeItem("color-scheme-local")},p=e=>{let o=e==="light"?"all":"not all",t=e==="dark"?"all":"not all";[...$].forEach(i=>{i.media=o}),[...C].forEach(i=>{i.media=t})},N=e=>{let o=e.target.checked?"dark":"light";T(o),p(o)},h=()=>{let e=A(),o=M(),t=q();o!==t&&(I(t),B()),p(e??t),d.checked=(e??t)==="dark",d.addEventListener("click",N)};var g="\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435",D="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435",u=document.querySelectorAll(".additions-card__button"),b=new Map,P=e=>{let t=e.target.textContent===g;b.get(e.target).forEach(a=>{a.open=t}),e.target.textContent=t?D:g},f=()=>{for(let e of u){let o=e.parentNode.querySelectorAll(".additions-card__dropdown");b.set(e,o)}u.forEach(e=>e.addEventListener("click",P))};function y(e){let o=document.createElement("div");return o.innerHTML=e,o.firstElementChild}var r={diploma:"\u0414\u0438\u043F\u043B\u043E\u043C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",trainig:"\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u043D\u0430\u0432\u044B\u043A\u0430",personal:"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"},c={html:"html",css:"css",sass:"sass",js:"javascript",bem:"bem"},s=[{id:"project-cat-energy",name:"Cat Energy",type:r.diploma,descrption:`\u0413\u043B\u0430\u0432\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0431\u044B\u043B\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430 pixel perfect. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u044B\u043B\u0438 \u0434\u0430\u043D\u044B \u043C\u0430\u043A\u0435\u0442\u044B \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0434\u043B\u044F 3-\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u044D\u043A\u0440\u0430\u043D\u0430 \u0438 \u0441\u0442\u0430\u0439\u043B\u0433\u0430\u0439\u0434 \u0434\u043B\u044F \u0444\u043E\u043A\u0443\u0441\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439. \u0421\u0430\u0439\u0442 \u0438\u043C\u0435\u0435\u0442 \u0442\u0440\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B: \u043B\u0435\u043D\u0434\u0438\u043D\u0433, \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0444\u043E\u0440\u043C\u0443 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u0437\u0430\u043A\u0430\u0437\u0430. \u0412\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432 \u043A \u0437\u0430\u043C\u0435\u043D\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438. \u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u044E (\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432 \u043F\u043E\u0442\u043E\u043A\u0435 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F JS \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0435\u0433\u043E \u043D\u0430\u043B\u0438\u0447\u0438\u044F) \u0438 \u0441\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0444\u043E\u043D\u0430 \u0443 \u0431\u043B\u043E\u043A\u0430 hero (\u043A\u043E\u0442 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u043E\u043A\u043D\u0430, \u043D\u043E \u0434\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043E\u0431\u0440\u0435\u0437\u0430\u043D\u043D\u044B\u0439 \u043A\u0440\u0430\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438).
    </br>\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u0434\u0430\u043D \u043D\u0430 100 \u0431\u0430\u043B\u043B\u043E\u0432 \u0441 \u043F\u0435\u0440\u0432\u043E\u0439 \u043F\u043E\u043F\u044B\u0442\u043A\u0438.`,tools:[c.html,c.sass,c.js,c.bem],github:"https://github.com/urchifox/cat-energy",webpage:"https://urchifox.github.io/cat-energy/",images:["cat-energy"]},{id:"project-grafit-academy",name:"Grafit Academy",type:r.personal,descrption:`\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u044F \u043E\u0442\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043B\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F. \u0421\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 - \u043B\u0435\u043D\u0434\u0438\u043D\u0433 \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0438 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0444\u0438\u0447\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430:
    </br>- \u043F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0441\u0435\u0442\u043E\u043A \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432,
    </br>- \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0441\u043B\u0430\u0439\u0434\u0435\u0440 (\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u043B\u0430 \u0435\u0433\u043E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u043E\u0439, \u0442.\u043A. \u0445\u043E\u0442\u0435\u043B\u0430 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0435\u0439),
    </br>- \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 (\u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432),
    </br>- \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432,
    </br>- \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 noUiSlider,
    </br>- \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 Local Storage (\u0434\u0438\u0441\u043A\u043B\u0435\u0439\u043C\u0435\u0440 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435 \u0441\u0430\u0439\u0442\u0430, \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u0430\u0445 \u0438 \u0442\u043E\u0432\u0430\u0440\u0430\u0445 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438),
    </br>- \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u0430\u043A\u0435 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435, \u043C\u043E\u0434\u0430\u043B\u043A\u0435 \u0438 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 (\u0432 \u0442.\u0447. \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439).
    </br>\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0443, \u0447\u0442\u043E \u0443\u0436\u0435 \u0432 \u0444\u0438\u043D\u0430\u043B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 Sass \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u044F \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0430 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043B\u0435\u0433\u0430\u0441\u0438-\u043A\u043E\u0434\u043E\u043C, \u0432\u0435\u0434\u044C \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043B\u043E\u0441\u044C \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u0434\u0430.`,tools:[c.html,c.css,c.js,c.bem],github:"https://github.com/urchifox/grafit-academy",webpage:"https://urchifox.github.io/grafit-academy/",images:["grafit-academy"]},{id:"project-online-smartphones-store",name:"Online smartphones store",type:r.trainig,descrption:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C\u0438 \u0432 \u0434\u0432\u0443\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F\u0445. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u044B\u043B \u043C\u0430\u043A\u0435\u0442 \u0433\u0430\u043B\u0435\u0440\u0435\u0438 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430. \u042F \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0430 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430\u0434\u0430\u0447\u0443 \u043F\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u0443\u043F\u0430\u043A\u043E\u0432\u0430\u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0442\u043E\u0432\u0430\u0440\u0430\u0445 \u0432 \u043E\u0431\u044A\u0435\u043A\u0442 JS. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043B\u0430 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u0435\u0440\u0435\u0440\u0438\u0441\u043E\u0432\u043A\u0443 \u0447\u0430\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 (\u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0432\u044B\u0431\u043E\u0440\u0430 \u0446\u0432\u0435\u0442\u0430 \u0438\u043B\u0438 \u043E\u0431\u044A\u0435\u043C\u0430 \u043F\u0430\u043C\u044F\u0442\u0438 \u0431\u0443\u0434\u0435\u0442 \u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430).",tools:[c.html,c.css,c.js,c.bem],github:"https://github.com/urchifox/online-store",webpage:"https://urchifox.github.io/online-store/",images:["online-smartphones-store"]},{id:"project-multilayer-exercises",name:"Multilayer exercises",type:r.trainig,descrption:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u043A\u0435\u0442\u0430, \u0433\u0434\u0435 \u044F \u043F\u043E\u043F\u0440\u0430\u043A\u0442\u0438\u043A\u043E\u0432\u0430\u043B\u0430\u0441\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0441\u043B\u043E\u0439\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430: \u0441\u0442\u0438\u043A\u0438-\u0445\u0435\u0434\u0435\u0440, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E cookies \u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u043D\u0430\u0432\u0435\u0440\u0445\u201D.",tools:[c.html,c.css,c.js,c.bem],github:"https://github.com/urchifox/multilayer-exercise",webpage:"https://urchifox.github.io/multilayer-exercise/",images:["multilayer-exercises"]},{id:"project-big-trip",name:"Big Trip",type:r.diploma,descrption:`SPA, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0435 \u0432 \u041E\u041E\u041F \u0441\u0442\u0438\u043B\u0435 \u0441 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\u043C \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B MVP.  \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u044B\u043B\u043E \u0434\u0430\u043D\u043E \u0422\u0417 \u0441 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0443 \u0441\u0430\u0439\u0442\u0430 \u0438 \u0433\u043E\u0442\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u043E \u0432\u0441\u0435\u0445 \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F\u0445. \u042D\u0442\u0443 \u0432\u0435\u0440\u0441\u0442\u043A\u0443 \u044F \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u043B\u0430 \u043D\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0430 \u0432 JS \u043A\u043E\u0434 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u043A. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438, \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C html-\u0444\u0430\u0439\u043B\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u0430\u0440\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432. \u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C (\u043C\u0435\u0442\u043E\u0434\u044B CRUD). \u0414\u043B\u044F \u044D\u043A\u0440\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u201Che\u201D, \u0430 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0434\u0430\u0442\u0430\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u201Cflatpickr\u201D \u0438 \u201Cdayjs\u201D. \u0422\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u044D\u0442\u0438\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0430 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u043C (\u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u043C \u043E\u0442 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 \u043A\u0443\u0440\u0441\u0430).

    </br>\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u0434\u0430\u043D \u043D\u0430 100 \u0431\u0430\u043B\u043B\u043E\u0432 \u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043F\u044B\u0442\u043A\u0438.`,tools:[c.js],github:"https://github.com/urchifox/big-trip",webpage:"https://urchifox.github.io/big-trip/",images:["big-trip"]},{id:"project-kekstagram",name:"Kekstagram",type:r.diploma,descrption:`\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u043F\u043E\u0441\u0442\u0430\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u0442 \u0438\u0445 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438. \u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 - \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043E\u0448\u0438\u0431\u043E\u043A \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0431 \u044D\u0442\u043E\u043C.
    \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u044B\u043B\u0430 \u0433\u043E\u0442\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u0448\u0430\u0431\u043B\u043E\u043D\u0430\u043C\u0438 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (\u0432 \u0442\u0435\u0433\u0430\u0445 template).
    \u041E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u043C\u043E\u0435\u0439 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u043B\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0432\u0441\u0435\u0445 querySelector \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432.

    </br>\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u0434\u0430\u043D \u043D\u0430 100 \u0431\u0430\u043B\u043B\u043E\u0432 \u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043F\u044B\u0442\u043A\u0438.`,tools:[c.js],github:"https://github.com/urchifox/kekstagram",webpage:"https://urchifox.github.io/kekstagram/",images:["kekstagram"]},{id:"project-italian-chefs-blog",name:"Italian chef\u2019s blog",type:r.trainig,descrption:`\u041E\u0434\u0438\u043D \u0438\u0437 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u043A\u0435\u0442\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u0441\u043B\u043E\u0436\u043D\u0430\u044F \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430:
    </br>- \u0431\u0443\u043A\u0432\u0438\u0446\u044B,
    </br>- \u043B\u0438\u0433\u0430\u0442\u0443\u0440\u044B,
    </br>- \u0432\u0440\u0435\u0437\u043A\u0438 \u0438 \u043E\u0431\u0442\u0435\u043A\u0430\u043D\u0438\u044F \u0441\u043B\u043E\u0436\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B,
    </br>- \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u043E\u0434 \u0443\u0433\u043B\u043E\u043C,
    </br>- \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u043E \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C.
    </br>\u041F\u043E\u043C\u0438\u043C\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u044F \u0443\u0434\u0435\u043B\u0438\u043B\u0430 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C \u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u0438\u0445 \u0444\u043E\u043A\u0443\u0441\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439.`,tools:[c.html,c.css,c.bem],github:"https://github.com/urchifox/Italian-chefs-blog__article",webpage:"https://urchifox.github.io/Italian-chefs-blog__article/",images:["italian-chefs-blog"]},{id:"project-science-blog",name:"Science blog",type:r.trainig,descrption:`\u0412\u0435\u0440\u0441\u0442\u043A\u0430 (\u043F\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u043C\u0443 \u043C\u0430\u043A\u0435\u0442\u0443) \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0438 \u0441 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438:
    </br>- \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435,
    </br>- \u0442\u0430\u0431\u043B\u0438\u0446\u044B,
    </br>- \u0444\u043E\u0440\u043C\u0443\u043B\u044B,
    </br>- \u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0438,
    </br>- \u0441\u043D\u043E\u0441\u043A\u0438 \u0441 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430,
    </br>- \u043C\u043D\u043E\u0433\u043E\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u044B\u0439 \u043D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A.
    </br>\u0422\u0430\u043A\u0436\u0435 \u0437\u0434\u0435\u0441\u044C \u0435\u0441\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0442\u0430\u0442\u0435\u0439 \u0441 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u201C\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435\u201D \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043D\u0430 \u0441\u0442\u0430\u0442\u044C\u044E. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0430 \u0438 \u0440\u0435\u0448\u0438\u043B\u0430 \u0437\u0430\u0434\u0430\u0447\u0443 \u043F\u043E \u043E\u0436\u0438\u0432\u043B\u0435\u043D\u0438\u044E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 "\u043F\u043E\u0438\u0441\u043A" \u043D\u0430 \u0447\u0438\u0441\u0442\u043E\u043C css: \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E "\u043F\u043E\u0438\u0441\u043A" \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0432\u044B\u0435\u0437\u0436\u0430\u0435\u0442 \u043D\u0430 \u0446\u0435\u043D\u0442\u0440 \u0448\u0430\u043F\u043A\u0438.`,tools:[c.html,c.css,c.bem],github:"https://github.com/urchifox/SCIENCE__article_carbohydrates",webpage:"https://urchifox.github.io/SCIENCE__article_carbohydrates/",images:["science-blog"]},{id:"project-onenews",name:"OneNews",type:r.trainig,descrption:`\u0412\u0435\u0440\u0441\u0442\u043A\u0430 (\u043F\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u043C\u0443 \u043C\u0430\u043A\u0435\u0442\u0443) \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u0444\u0438\u043D\u0430\u043D\u0441\u0430\u0445 \u043D\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u0442\u0430\u043B\u0435, \u0433\u0434\u0435 \u043F\u043E\u043C\u0438\u043C\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u0434\u043B\u044F \u0441\u0442\u0430\u0442\u0435\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442:
    </br>- \u0442\u0430\u0431\u043B\u0438\u0446\u044B,
    </br>- \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0439, \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u043A \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430,
    </br>- \u043C\u043D\u043E\u0433\u043E\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u044B\u0439 \u043D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A,
    </br>- \u0444\u043E\u0440\u043C\u0443\u043B\u044B,
    </br>- \u0431\u043B\u043E\u043A\u0438, \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0432\u043D\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430,
    </br>- \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0438 \u0441 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u201C\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435\u201D \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043D\u0430 \u0441\u0442\u0430\u0442\u044C\u044E.`,tools:[c.html,c.css,c.bem],github:"https://github.com/urchifox/OneNews__article_credits",webpage:"https://urchifox.github.io/OneNews__article_credits/",images:["onenews"]},{id:"project-blogick",name:"Blogick",type:r.trainig,descrption:`\u0412\u0435\u0440\u0441\u0442\u043A\u0430 (\u043F\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u043C\u0443 \u043C\u0430\u043A\u0435\u0442\u0443) \u0441\u0442\u0430\u0442\u044C\u0438 \u0432 \u0431\u043B\u043E\u0433\u0435 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445, \u0433\u0434\u0435 \u0440\u0430\u0437\u043C\u0435\u0447\u0435\u043D\u044B \u0438 \u0441\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u044B \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A:
    </br>- \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438,
    </br>- \u043B\u0438\u0434-\u0431\u043B\u043E\u043A,
    </br>- \u043C\u0435\u0442\u0430-\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0441\u0442\u0430\u0442\u044C\u0435,
    </br>- \u0445\u043B\u0435\u0431\u043D\u044B\u0435-\u043A\u0440\u043E\u0448\u043A\u0438,
    </br>- \u0446\u0438\u0442\u0430\u0442\u044B,
    </br>- \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0441 \u043F\u0440\u0435\u0440\u044B\u0432\u0430\u044E\u0449\u0435\u0439\u0441\u044F \u043D\u0443\u043C\u0435\u0440\u0430\u0446\u0438\u0435\u0439.
    </br>\u041F\u043E\u043C\u0438\u043C\u043E \u044D\u0442\u043E\u0433\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u043E\u0431\u0442\u0435\u043A\u0430\u0435\u043C\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0432\u043D\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0431\u043B\u043E\u043A\u0438.`,tools:[c.html,c.css,c.bem],github:"https://github.com/urchifox/Blogick__article_Georgia",webpage:"https://urchifox.github.io/Blogick__article_Georgia/",images:["blogick"]}];var l=document.querySelector(".projects__list"),O=document.querySelectorAll('input[name="filter"]'),H=document.querySelector('input#all[name="filter"]'),J=document.querySelectorAll('a[href^="#project-"]'),R=document.querySelectorAll(".projects__filters-count"),x=document.createDocumentFragment(),G=e=>e.reduce((o,t)=>`${o}
  <li class="project-card__stack-item project-card__stack-item--icon-${t}">
    <span class="visually-hidden">${t}</span>
  </li>`,""),U=e=>e.reduce((o,t)=>`
  <picture>
    <source type="image/webp" media="(min-width: 1200px)"
      srcset="./images/cover-${t}-large@1x.webp 1x,
              ./images/cover-${t}-large@2x.webp 2x"
      width="441" height="248">
    <source type="image/webp" media="(min-width: 760px)"
      srcset="./images/cover-${t}-medium@1x.webp 1x,
              ./images/cover-${t}-medium@2x.webp 2x"
      width="1096" height="616">
    <source type="image/webp"
      srcset="./images/cover-${t}-small@1x.webp 1x,
              ./images/cover-${t}-small@2x.webp 2x"
      width="689" height="387">

      <source type="image/jpg" media="(min-width: 1200px)"
        srcset="./images/cover-${t}-large@1x.jpg 1x,
                ./images/cover-${t}-large@2x.jpg 2x"
        width="441" height="248">
      <source type="image/jpg" media="(min-width: 760px)"
        srcset="./images/cover-${t}-medium@1x.jpg 1x,
                ./images/cover-${t}-medium@2x.jpg 2x"
        width="1096" height="616">

    <img class="project-card__picture"
      src="./images/cover-${t}-small@1x.jpg"
      srcset="./images/$cover-{image}-small@2x.jpg 2x"
      width="689" height="387"
      alt="\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430">
  </picture>`,""),F=({id:e,name:o,type:t,descrption:i,tools:a,github:w,webpage:E,images:v})=>`
  <li class="projects__item project-card" id="${e}">
    <h3 class="project-card__title">${o}</h3>
    <p class="project-card__caption">${t}</p>
    <p class="project-card__text">${i}</p>
    <ul class="project-card__stack-list">
      ${G(a)}
    </ul>
    <div class="project-card__buttons-wrapper">
      <a class="project-card__button button button--icon-github" href="${w}">
        <span class="visually-hidden">\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0430 github</span>
      </a>
      <a class="project-card__button button button--icon-external-link" href="${E}">
        <span class="visually-hidden">\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430</span>
      </a>
    </div>
    <div class="project-card__slider">
      ${U(v)}
    </div>
  </li>
`,n=e=>{e.forEach(o=>{let t=y(F(o));x.append(t)}),l.append(x)},K=e=>{let o=e.target.value==="all"?s:s.filter(t=>t.type===r[e.target.value]);l.innerHTML="",n(o)},V=()=>{H.checked=!0,l.innerHTML="",n(s)},_=()=>{n(s),R.forEach(e=>{e.textContent=e.dataset.type==="all"?`(${s.length})`:`(${s.filter(o=>o.type===r[e.dataset.type]).length})`}),O.forEach(e=>e.addEventListener("change",K)),J.forEach(e=>e.addEventListener("click",V))};var z="https://esm.run/dialog-polyfill",Q=window.HTMLDialogElement===void 0,W=document.querySelectorAll(".modal"),X=document.querySelectorAll("[data-modal-id]"),Y=document.querySelectorAll(".modal__button"),S=new Map,Z=e=>{let o=e.target.closest("[data-modal-id]"),t=S.get(o);e.preventDefault(),t.showModal()},ee=e=>{e.stopPropagation(),e.target.closest(".modal").close()},te=e=>{let o=e.currentTarget;e.target===o&&o.close()},k=()=>{Q&&document.querySelectorAll("dialog").forEach(async o=>{let{default:t}=await import(z);t.registerDialog(o)}),X.forEach(e=>{let o=document.querySelector(`#${e.dataset.modalId}`);S.set(e,o),e.addEventListener("click",Z)}),Y.forEach(e=>e.addEventListener("click",ee)),W.forEach(e=>e.addEventListener("click",te))};var m=document.querySelector(".header"),oe=m.clientHeight,ce=m.querySelector(".header__menu-toggle"),re=m.querySelectorAll(".header__menu-link"),se=()=>{ce.checked=!1},j=()=>{document.documentElement.style.setProperty("--header-height",`${oe}px`),re.forEach(e=>e.addEventListener("click",se))};h();f();_();k();j();
