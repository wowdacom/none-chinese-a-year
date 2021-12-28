import{o as c,c as d,a as u,r as x,b as e,d as i,w as h,e as f,F as _,f as y,t as g,i as w,O as k,g as $,v as A,h as M,j,k as E,l as P}from"./vendor_1640682346518.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};R();var m=(a,n)=>{const o=a.__vccOpts||a;for(const[r,t]of n)o[r]=t;return o};const B={},C={class:"text-gray-600 body-font absolute w-full bottom-0"},L=u('<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"><a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg><span class="ml-3 text-xl">Tailblocks</span></a><p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> \xA9 2020 Tailblocks \u2014 <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a></p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a class="text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span></div>',1),O=[L];function I(a,n,o,r,t,s){return c(),d("footer",C,O)}var T=m(B,[["render",I]]);const G={},S={class:"text-gray-600 body-font"},F={class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},V=e("a",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",viewBox:"0 0 24 24"},[e("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})]),e("span",{class:"ml-3 text-xl"},"Tailblocks")],-1),z={class:"md:ml-auto flex flex-wrap items-center text-base justify-center"},D=f("Home"),H=f("Article"),N=e("a",{class:"mr-5 hover:text-gray-900"},"Third Link",-1),Y=e("a",{class:"mr-5 hover:text-gray-900"},"Fourth Link",-1),U=e("button",{class:"inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"},[f(" Button "),e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-4 h-4 ml-1",viewBox:"0 0 24 24"},[e("path",{d:"M5 12h14M12 5l7 7-7 7"})])],-1);function K(a,n,o,r,t,s){const l=x("router-link");return c(),d("header",S,[e("div",F,[V,e("nav",z,[i(l,{class:"mr-5 hover:text-gray-900",to:"/"},{default:h(()=>[D]),_:1}),i(l,{class:"mr-5 hover:text-gray-900",to:"/blog"},{default:h(()=>[H]),_:1}),N,Y]),U])])}var J=m(G,[["render",K]]);const W={},Z={class:"relative pb-104px"};function q(a,n){const o=J,r=x("router-view"),t=T;return c(),d("div",Z,[i(o),i(r),i(t)])}var Q=m(W,[["render",q]]);const X={},ee={class:"text-gray-600 body-font"},te=u('<div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap -mx-4 -my-8"><div class="py-8 px-4 lg:w-1/3"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span><span class="font-medium text-lg text-gray-800 title-font leading-none">18</span></div><div class="flex-grow pl-6"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> CATEGORY </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> The 400 Blows </h1><p class="leading-relaxed mb-5"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Alper Kamu</span></span></a></div></div></div><div class="py-8 px-4 lg:w-1/3"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span><span class="font-medium text-lg text-gray-800 title-font leading-none">18</span></div><div class="flex-grow pl-6"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> CATEGORY </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> Shooting Stars </h1><p class="leading-relaxed mb-5"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Holden Caulfield</span></span></a></div></div></div><div class="py-8 px-4 lg:w-1/3"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span><span class="font-medium text-lg text-gray-800 title-font leading-none">18</span></div><div class="flex-grow pl-6"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> CATEGORY </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> Neptune </h1><p class="leading-relaxed mb-5"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Henry Letham</span></span></a></div></div></div></div></div>',1),se=[te];function oe(a,n,o,r,t,s){return c(),d("section",ee,se)}var ne=m(X,[["render",oe]]);const re={},le={class:"text-gray-600 body-font overflow-hidden"},ae={class:"container px-5 py-24 mx-auto"},ie={class:"-my-8 divide-y-2 divide-gray-100"},ce={class:"py-8 flex flex-wrap md:flex-nowrap"},de=e("div",{class:"md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[e("span",{class:"font-semibold title-font text-gray-700"},"CATEGORY"),e("span",{class:"mt-1 text-gray-500 text-sm"},"12 Jun 2019")],-1),pe={class:"md:flex-grow"},me=e("h2",{class:"text-2xl font-medium text-gray-900 title-font mb-2"}," Bitters hashtag waistcoat fashion axe chia unicorn ",-1),fe=e("p",{class:"leading-relaxed"}," Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. ",-1),he=f("Learn More "),ue=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1),xe={class:"py-8 flex flex-wrap md:flex-nowrap"},ge=e("div",{class:"md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[e("span",{class:"font-semibold title-font text-gray-700"},"CATEGORY"),e("span",{class:"mt-1 text-gray-500 text-sm"},"12 Jun 2019")],-1),_e={class:"md:flex-grow"},ve=e("h2",{class:"text-2xl font-medium text-gray-900 title-font mb-2"}," Meditation bushwick direct trade taxidermy shaman ",-1),be=e("p",{class:"leading-relaxed"}," Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. ",-1),ye=f("Learn More "),we=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1),ke={class:"py-8 flex flex-wrap md:flex-nowrap"},$e=e("div",{class:"md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[e("span",{class:"font-semibold title-font text-gray-700"},"CATEGORY"),e("span",{class:"text-sm text-gray-500"},"12 Jun 2019")],-1),Ae={class:"md:flex-grow"},Me=e("h2",{class:"text-2xl font-medium text-gray-900 title-font mb-2"}," Woke master cleanse drinking vinegar salvia ",-1),je=e("p",{class:"leading-relaxed"}," Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. ",-1),Ee=f(" Learn More "),Pe=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1);function Re(a,n,o,r,t,s){const l=x("router-link");return c(),d("section",le,[e("div",ae,[e("div",ie,[e("div",ce,[de,e("div",pe,[me,fe,i(l,{class:"text-indigo-500 inline-flex items-center mt-4 cursor-pointer",to:"/blog/Bitters hashtag waistcoat fashion axe chia unicorn"},{default:h(()=>[he,ue]),_:1})])]),e("div",xe,[ge,e("div",_e,[ve,be,i(l,{class:"text-indigo-500 inline-flex items-center mt-4 cursor-pointer",to:"/blog/Meditation bushwick direct trade taxidermy shaman"},{default:h(()=>[ye,we]),_:1})])]),e("div",ke,[$e,e("div",Ae,[Me,je,i(l,{class:"text-indigo-500 inline-flex items-center mt-4 cursor-pointer",to:"/blog/Woke master cleanse drinking vinegar salvia"},{default:h(()=>[Ee,Pe]),_:1})])])])])])}var v=m(re,[["render",Re]]);const Be={props:{popArticles:{type:Array}},setup(a){}},Ce={class:"text-gray-600 body-font"},Le={class:"container px-5 py-24 mx-auto"},Oe={class:"flex flex-wrap -m-4"},Ie={class:"h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"},Te={class:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1"},Ge={class:"title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"},Se={class:"leading-relaxed mb-3"},Fe=f(" Learn More "),Ve=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1),ze=u('<div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"><span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"><svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>1.2K </span><span class="text-gray-400 inline-flex items-center leading-none text-sm"><svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg>6 </span></div>',1);function De(a,n,o,r,t,s){const l=x("router-link");return c(),d("section",Ce,[e("div",Le,[e("div",Oe,[(c(!0),d(_,null,y(o.popArticles,p=>(c(),d("div",{class:"p-4 lg:w-1/3",key:p.title},[e("div",Ie,[e("h2",Te,g(p.category),1),e("h1",Ge,g(p.title),1),e("p",Se,g(p.subtitle),1),i(l,{class:"text-indigo-500 inline-flex items-center",to:"/blog/Raclette Blueberry Nextious Level"},{default:h(()=>[Fe,Ve]),_:1}),ze])]))),128))])])])}var He=m(Be,[["render",De]]);w({apiKey:"AIzaSyDa4EAZpUtMcU4ct7XIjzmALae3YPVIFN0",authDomain:"none-chinese-a-year.firebaseapp.com",databaseURL:"https://none-chinese-a-year-default-rtdb.firebaseio.com",projectId:"none-chinese-a-year",storageBucket:"none-chinese-a-year.appspot.com",messagingSenderId:"1048115582755",appId:"1:1048115582755:web:857e1bc1f3ceb6d4591e96",measurementId:"G-TZVQGP3ZDJ"});const Ne=k(),Ye={setup(){const a={}.VUE_APP_FIRESTORAGE_KEY,n={}.VUE_APP_FIRESTORAGE_ID;console.log(a),console.log(n),console.log({}.VUE_APP_FIRESTORAGE_KEY),console.log({BASE_URL:"/none-chinese-a-year/",MODE:"production",DEV:!1,PROD:!0}),console.log({}.FIRESTORAGE_APP_APIID),console.log({}.VUE_APP_FIRESTORAGE_ID),console.log(config.VUE_APP_FIRESTORAGE_KEY),console.log(config.FIRESTORAGE_APP_APIID);const o=$([]);return(async()=>{const t=A(Ne,"article-lists","popular-article-lists"),s=await M(t);if(s.exists())for(const[l,p]of Object.entries(s.data()))o.value.push(p);else console.log("No such document!")})(),{popArticles:o}}};function Ue(a,n,o,r,t,s){const l=He,p=v,b=ne;return c(),d(_,null,[i(l,{"pop-articles":r.popArticles},null,8,["pop-articles"]),i(p),i(b)],64)}var Ke=m(Ye,[["render",Ue]]);const Je={},We={class:"text-gray-600 body-font"},Ze=u('<div class="container px-5 py-24 mx-auto flex flex-col"><div class="lg:w-4/6 mx-auto"><div class="rounded-lg h-64 overflow-hidden"><img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></div><div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="flex flex-col items-center text-center justify-center"><h2 class="font-medium title-font mt-4 text-gray-900 text-lg"> Phoebe Caulfield </h2><div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div><p class="text-base"> Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland. </p></div></div><div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"><p class="leading-relaxed text-lg mb-4"> Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90&#39;s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn. </p><a class="text-indigo-500 inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div></div></div>',1),qe=[Ze];function Qe(a,n,o,r,t,s){return c(),d("section",We,qe)}var Xe=m(Je,[["render",Qe]]);const et=j({base:"./",history:E(),routes:[{path:"/",name:"Home",component:Ke},{path:"/blog/",name:"BlogList",component:v},{path:"/blog/:title",name:"Blog",component:Xe}]});P(Q).use(et).mount("#app");
