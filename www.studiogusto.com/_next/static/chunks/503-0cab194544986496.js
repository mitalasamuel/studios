"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{8808:function(e,t,n){var r=n(5893),o=n(7294),s=n(9008),i=n.n(s);function a(e){let{description:t,keywords:n,openGraphType:o,schemaType:s,title:a,url:l}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:a}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"https://www.studiogusto.com/favicon/favicon-1.png"}),(0,r.jsx)("meta",{name:"keywords",content:n}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"theme-color",content:"#0F0F0F"}),(0,r.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:l}),(0,r.jsx)("meta",{name:"twitter:title",content:a}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image:src",content:"https://www.studiogusto.com/images/seo_image.jpg"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"og:title",content:a}),(0,r.jsx)("meta",{name:"og:type",content:o}),(0,r.jsx)("meta",{name:"og:url",content:l}),(0,r.jsx)("meta",{name:"og:image",content:"https://www.studiogusto.com/images/seo_image.jpg"}),(0,r.jsx)("meta",{name:"og:description",content:t}),(0,r.jsx)("meta",{name:"og:site_name",content:a}),(0,r.jsx)("meta",{name:"og:published_time",content:new Date().toISOString()}),(0,r.jsx)("meta",{name:"og:modified_time",content:new Date().toISOString()}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":s,name:a,about:t,url:l})}})]})}a.defaultProps={url:"/",openGraphType:"website",schemaType:"Article"},t.Z=(0,o.memo)(a)},9391:function(e,t,n){var r=n(7294),o=n(3988),s=n.n(o),i=n(8428);let a=["mousemove","mousedown","resize","keydown","touchstart","wheel"];t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a,[l,A]=(0,r.useState)(n);return(0,r.useEffect)(()=>{let n,r=!0,a=l,c=e=>{r&&(a=e,A(e))},u=(0,i.P2)(()=>{a&&c(!1),clearTimeout(n),n=setTimeout(()=>c(!0),e)},50),d=()=>{document.hidden||u()};if(t&&!s().mobile){for(let e=0;e<o.length;e+=1)window.addEventListener(o[e],u);document.addEventListener("visibilitychange",d),n=setTimeout(()=>c(!0),e)}return()=>{if(r=!1,t&&!s().mobile){for(let e=0;e<o.length;e+=1)window.removeEventListener(o[e],u);document.removeEventListener("visibilitychange",d)}}},[e,o,t]),l}},1089:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(7294),o=n(8488);let s=e=>e.filter(e=>void 0!==e.src).filter(e=>null!==e.src);var i=n(7986),a=n(6433);let l=e=>{let{init:t=!1,sources:n=[],callback:l=()=>{}}=e,[A,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(!1),[g,m]=(0,r.useState)(!1),f=(0,i.Z)(e=>e.setReady),B=(0,i.Z)(e=>e.setSiteLoaded),w=(0,i.Z)(e=>e.setPageAnimationReady),h=(0,a.Z)(e=>e.setSources),E=(0,a.Z)(e=>e.patchSources),{isFontReady:Z,isLoaderExited:p,isPageAnimationReady:v}=(0,i.Z)();(0,r.useEffect)(()=>{n.length>0&&h(n)},[]);let Q=e=>{e&&e.length>0&&E(e[0]),f(!0),B(!0),c(!0)};return(0,r.useEffect)(()=>{t&&s(n).length>0&&!v&&(0,o.g)(s(n),Q),t&&0===s(n).length&&Q()},[t,v]),(0,r.useEffect)(()=>{A&&Z&&d(!0)},[A,Z]),(0,r.useEffect)(()=>{u&&p&&(m(!0),w(!0),l())},[u,p]),[u,g]};var A=l},3481:function(e,t,n){n.d(t,{Z:function(){return q}});var r=n(5893),o=n(5152),s=n.n(o),i=n(1651),a=n(7294),l=n(7347),A=n.n(l),c=n(7986);let u=e=>{let{fonts:t}=e,n=(0,a.useRef)([]),r=(0,c.Z)(e=>e.setFontReady),{isFontReady:o}=(0,c.Z)();return(0,a.useEffect)(()=>{t.length>0&&!o&&(t.map(e=>(n.current.push(new(A())(e)),null)),Promise.all(n.current.map(e=>e.load())).then(()=>{r(!0)}))},[t,o]),null};u.defaultProps={fonts:[]};var d=n(2977),g=n(3047),m=n(294),f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],{lenis:n}=(0,m.Z)();(0,a.useEffect)(()=>{if(n)return n.on("scroll",e),n.notify(),()=>{n.off("scroll",e)}},[n,e,[...t]])},B=n(8428),w=n(3963),h=e=>({scrollbar:{position:"fixed",right:0,bottom:0,top:0,zIndex:e.zindex.scrollbar,padding:"4px 0",[e.mq.sm]:{display:"none !important"}},inner:{height:"100%",position:"relative"},thumb:{minHeight:50,width:8,backgroundColor:e.colors[1],border:"1px solid ".concat(e.colors[0]),position:"absolute",right:4,borderRadius:4,cursor:"grab"}});let E=(0,w.ZL)({name:"Scrollbar"})(h);var Z=function(){let{classes:e}=E(),t=(0,a.useRef)(),{width:n,height:o}=(0,d.Z)(),{lenis:s}=(0,m.Z)(),[i,{height:l}]=(0,g.Z)(),[A,{height:c}]=(0,g.Z)();f(e=>{let{scroll:n,limit:r}=e;t.current.style.transform="translate3d(0,".concat(n/r*(l-c),"px,0)")});let[u,w]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(u)return window.addEventListener("pointermove",e,!1),window.addEventListener("pointerup",t,!1),()=>{window.removeEventListener("pointermove",e,!1),window.removeEventListener("pointerup",t,!1)};function e(e){e.preventDefault();let t=(o-l)/2,n=(0,B.KK)(0,o,e.clientY,-t,l+t),r=(0,B.uZ)(0,n/l,1),i=s.limit*r;"vertical"===s.direction?window.scrollTo(0,i):window.scrollTo(i,0)}function t(){w(!1)}},[u,o,n,s]),(0,r.jsx)("div",{className:e.scrollbar,children:(0,r.jsx)("div",{ref:i,className:e.inner,children:(0,r.jsx)("div",{className:e.thumb,ref:e=>{t.current=e,A(e)},onPointerDown:()=>{w(!0)}})})})},p=n(1163),v=n(7176),Q=n(9949),R=n(5361),T=n(8861);let P=()=>{let e=(0,T.Z)(e=>e.setClicked),t=(0,T.Z)(e=>e.setLoadingColor),n=(0,c.Z)(e=>e.setLoading),r=(0,c.Z)(e=>e.setReady),o=(0,c.Z)(e=>e.setPageAnimationReady),{isReady:s}=(0,c.Z)(),i=(0,Q.Z)(e=>e.closeAllLayer),l=(0,R.Z)(e=>e.setHeaderStyle),A=(0,p.useRouter)(),u=(0,v.Z)(A.asPath);(0,a.useEffect)(()=>{null!==u&&u!==A.asPath&&(e(!0),o(!1),r(!1),n(!0),i(),l("background",!0))},[A.asPath]);let d=(0,a.useRef)();return(0,a.useEffect)(()=>(A.beforePopState(n=>{let{as:r}=n;r!==A.asPath&&(t("#fafafa"),e(!0),clearTimeout(d.current),d.current=setTimeout(()=>{A.push(r)},800))}),()=>{A.beforePopState(()=>!0)}),[A]),(0,a.useEffect)(()=>{s&&n(!1)},[s]),null},S=()=>{let{lenis:e}=(0,m.Z)(),t=(0,Q.Z)(e=>e.layerIsOpen);return(0,a.useEffect)(()=>{e&&e[t?"stop":"start"]()},[t]),null};var y=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let e=e=>{n("mousedown"===e.type)};return document.addEventListener("mousedown",e),document.addEventListener("mouseup",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("mouseup",e)}},[]),t},x=n(9391),L=JSON.parse('{"c":["data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBZJREFUeNrsndFRrDAUhsX74hvaAXaAb76BHWwHagfYwXbgWIFagWMFQgXSgdvBQgXcM5cZx/HuMAmbkIR83wOzzCgJ/8k5h4SQnJwAAAAAAAAAAEAsJJ7X7/z8PM/zsizTNJUf4+nE37dt23WdHPu+r+t6PMUAemRZJooXRSFH+X3k1Xa7nViiaRo5ym98bkr3qqo+Pz8Ha8jFpYjjjboqJKrc3d1Z1f2gJaRQKTr2Jr/dbvf7/eAIKVoqEKNDyD0/Pz8P3iCVicUM4vVuW/20N6w8KG02Gw+l/2UGqeQ6G/7Hx8cQCFLVVbmC/w1/za7gVbKdkZzDDjsLP91b6jEEGY7yPA8u7EyEo+kBKNTHBj+QLv6wUuTWUB8bTEaeIQI8jUXri/vL5AMzL2TkQe3r6yue0d2u6y4vL428azs1UqG19d3VRlbo69JP/jfOM0TM8eNFCaHfbTI4Kge8vb1F/lpVbl9EIPgEHIgSgo/bQDQzBFVVhfo/m6MIslx5WZZF0unV6h7Pm1fxZ8b/PD4+Xl9f0/B/cnZ2Jn7w/v5uPQeInSX6o/hBJBPoTj/VzgEBjIk7HY236wE8/Bh/HNLzAHngRf3pBmp3MssKZjksMIvCVggi/dpIxada8QdxjQulYYDb21vENS6Uaggi/liKQqoeUJYlsqqjLpeqAYqiQFZ11OXCAxx7gFIOkP7Ffr9HVi0uLi5UusRKHhDY3GA/UBTt1KxDga5oSgZI0xRBdVEUjRAUQghiBHQGiqIpPQUNw4CgM0iSxIwHgD0wAAbAAIABMABgAAwAGAADHKRtW5TSRVE0JQN4vvisnyiKhgeE4AF93yOoLoqiKRmgrmsE1UVRNF7K28LkS3m5EOuOayFymUzCRCFL8UfDAE3TIKs66nLhAYF4gAQ1egPqPQArH2i8vr4irnGh+ETJPLY+USIKGY8/J7rD0U9PT0hsViI+1DaJ9Q+15dI4wXTz1x26Z7EOZ+l3jgeMqfjl5QWt/0dkWWjEjAWbDC7YNOelvNiZTPB/9J/X/Fm0zwAi/dXV1aKL9klh9/f3SD/y8PDgZt5CQFuDWd107BgNWbp46Z6XmRBEIBqR23c/aYrl690T4VJmukuTWckB0SYD77Ywkarc3NxEMoXU35tlGyv3sJEbNohb/e9YxGae2CBi9b+fTdnQ2T1sae6ezWYTXDiSCq9qqeZx88WARpjX2av33xXW1vAPusJ2u/XQDFIlqVgsw1lZlnmVnKUy8+Y0BG8Gt94wtvoYpf8VlKSLv3CPQYqTQpnV8dshqqqyagm5uBThVZNP/LREWZZFUcjxeLF2u11d103TyNHDj20T/wNUnudiiTRN5cd4OvH3bdt2XSfHvu9F8fGU6AIAAAAAAAAAAD7wV4ABAH1+BETW1IQRAAAAAElFTkSuQmCC","data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABzJJREFUeNrsXV1y4jgQhpl9J1WZdzuVA0DNvi/UZJ8zJAdICPueePYEzN6AXCA/F8jP807F3gsMnABzAswJ2K/WtRQVQG5ZP5bt/spFQSqWWt3qbrXUkhoNBoPBYDAYDAaDwWAwGAxGXdB0nL6Dg4NOp9Pr9VqtFr6kPwX/P5lMkiTB53K5DMMw/ckCkIPv++B4t9vFJ74rlhbHMSQRRRE+8Z11TsT3IAh+/vy5MgYUjirUhVopwKoMBgOjfN8pCVSKquve5Uej0WKxWBUEVA0C6qgQaPPd3d3KGYCYuogBWl9srxdrQ8WNUr/fd5D178QAIqvZ8d/e3lYlAUitlCq43/GrrApOOdsczrncZsfy6N5QxFBKc9TpdEpndgTmSDwBxdxnGWwAIf6qokDTmPssA6HlWdUAjtqi6tl9O/5Az4IMBmqz2aw+s7tJkhwdHWlZa/ughaCqxe60mRWOdTlO/m+eZ1VjqM8XNdn0F+sMlHzA09NTzZdV0XwwgY1PiQ1Rk41PsYYopwkKgoC5v9kdwRB79fm+byLojeN4OBweHn76+PEXPJ8///rw8KBeLApBUWmZKBxVoCIT4bG9vAoTA3+wac36zefLl5PcwsaLeH27TFSkRbTFhAWQs3bSJ5PJNpvWz/n5eb5i8aKgWFSqvSE2lGA0Gmmne2c/3XzCMJQtE6+Iy0Sl2hsC5hj3NtqtPyyymFN4vn37U7ZYvJJZrHZnAObIjk3kRkEY8Gof/FBSxqfTqWyxlFe0Z6uDObIxgZwAbm5ueNCpl0UfpNxvyZIDigBYJOWKJQRQzaRJM5M0RgRweXnJzNXOKKoA2P4YskJUAfR6PeYsHXR2UQXQ7XaZrXTQ2cUaUAYNQHzBWztlZ8yIEStJAGV0vwcHrcJdsTYBGLU/MJeZneXr11PtVhiVGnVsRKaRBNBqme1N19fXYk5dXFzIlolXxHIVV6oOnUwzvb9usVisF622n9yLJ3hxX5moznQmq87UOQs7jcCO7fWTw8NPz88vKsXi9e2FNlRkIY8YTKPwlpQVgeLsOK7pdPry8vr/QMI7PT1Vn/1OkuT19TWO52t30m637TSn2WzaFsB8Pn94eIyiKG1qpiF2H5Df4+Nj2i3gtC8vLzzP0yiABlEA+RbW8dPE0qs1gPjtFtF9krZeQFxZ3JnWgD+WdOMGyN7XIuJaps6piEyMx7c7U8NSFS6j8QHZ+1qExuqqRZsABGuwa79aLgjIzrFGbVwADBYAC2D/SK6kA9AyCQBxkwWLaRMCsgWNNSIADIcz/8fzfHGAVi7uiwkWN5bONKoAKMoo7hRpbFwiiAmmaADRgmnTAPEES8UEQJlN0qkBy+VSUQClCwXEBFMEQGEaVQBhGFL+TbBuBX0skQxAqsCAEJfniEzTZoIaWauAt7e3ZRGAmFTiQiaRaVTMZjP1TH8Tm7NMbFVTbwXYpTkOoCiU53li4zgc/uF+9xcTiQZS1gOI9kdCAMRhzM3NtbgQx4dDmRSKG2hw1Efcm7dvDn39HB8fO7s8AMJAnoB4+tqGkTw24tL89+9/iW3ocDh0UwAgTEw5mqZxOV4aQRBoUQKVTBNzEOSwyHZ/U7vm6TuEM5XANRlkcp/e/c3uFqYnCImNqVPr9dsr7ztdl950oJygHwuauU/aET2g9H2pneJmDxaV2qhN2SqNZzweF8V9VE2hkL5NPMdGbWnQjyoQZ3zazxXMzIRUzyI1flRBQ/Kwjn3JQjtdgmIaqGLC6D6qpKZPLG1jkTquRnwSyvYBGkbni1B45sEguU9UsXeKpeyBTURHtxmp5TgeJXNQkBlnqQwQrB7Y1JA/tEZWBusTsxR9A17fPDHLEPctWf/cw6F9qbt0u4QgSEon8M94RcraqHgjlfML8+dP9/t92SMzp9PpycnvKvk27XZbsLcriiIUrpIFg8J//PhbdgPB2dnZ8/NzAZO3ObYu0cem9p98+5aKPMU79wFalMkiyw99qsd25JVpiHLPwDiiCiAj96yUE0f4qJxiOR6P83lmLQ+qVpkIceiaN5VtlNBiqL9lMaA6VKoyxjU762nNGbwTQ+YktvqDKhRZ74Tp34auS3wwBpcNWekBtpbpJncvddN7jVUqCUWdwOu6+L6GXu439cpgMBhod01pbBVF/8zncRzP8X1fKAezgBjK9z3P87vd39KoTS8xV1dX9/f3Tic28VWG1fEHTqUM8YWqzH35sSlf6FzuOLlwlPtK8835otKZIxBcqaOa08sXy8L9yl6N6b4qVK3j71SF0WjkoBhAEgiry91cvu875ZxBTB1PpkWbi9WGtNfX/VBgaD1CfMsRA6pDpXwZ4HuFCILAqCRQOKpwqss33ZREr9frdrv4VGdWHMdhGEZRhE/t1yZVUwDvDFSn04EkWq0WvqQ/Bf8/mUySJMHncrkEx9OfbF0YDAaDwWAwGAwGg8FgMBgu4F8BBgDnjAUQrZw9XwAAAABJRU5ErkJggg==","data:image/x-icon;base64,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","data:image/x-icon;base64,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"]}');let b=()=>{let[e,t]=(0,a.useState)(""),n=(0,a.useRef)(""),r=(0,a.useRef)(),{asPath:o}=(0,p.useRouter)(),s=(0,a.useRef)(),i=(0,a.useRef)(0),l=y(),{isPageAnimationReady:A}=(0,c.Z)(),u=(0,x.Z)(5e3,A);return(0,a.useEffect)(()=>{n.current=document.title,r.current=document.querySelector("link[rel*='icon']")||document.createElement("link"),r.current.type="image/x-icon",r.current.rel="shortcut icon",r.current.href=L.c[0],document.getElementsByTagName("head")[0].appendChild(r.current)},[o]),(0,a.useEffect)(()=>{let e=0;return u&&(s.current=setInterval(()=>{t("Zzzz".concat(".".repeat(e))),(e+=1)>3&&(e=0),i.current+=1;let n=i.current%2==0?2:3;r.current.href=L.c[n]},500)),u||(clearInterval(s.current),t(n.current),r.current.href=L.c[0]),()=>{clearInterval(s.current)}},[u]),(0,a.useEffect)(()=>{A&&(l&&clearInterval(s.current),r.current.href=L.c[l?1:0])},[l,A]),(0,a.useEffect)(()=>{document.title=e},[e]),null};var C=n(9961),V=n(7129);let j=s()(()=>n.e(635).then(n.bind(n,8635)),{loadableGenerated:{webpack:()=>[8635]},ssr:!1}),k=s()(()=>n.e(688).then(n.bind(n,1688)),{loadableGenerated:{webpack:()=>[1688]},ssr:!1}),U=s()(()=>n.e(232).then(n.bind(n,7232)),{loadableGenerated:{webpack:()=>[7232]},ssr:!1});var q=function(e){let{children:t,className:n,style:o}=e,s=(0,i.YQ)();return u({fonts:["Matter"]}),P(),S(),b(),!function(){let[e,t]=(0,a.useState)(),[n,r]=(0,m.Z)(e=>[e.lenis,e.setLenis]),{theme:o}=(0,w.yK)();(0,V.Z)(()=>{window.scrollTo(0,0);let e=new C.Z({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2});return r(e),()=>{e.destroy(),r(null)}},[]),(0,V.Z)(()=>{if(n&&e){let t=document.querySelector(e);n.scrollTo(t,{offset:-1.1*o.header.height})}},[n,e,o.header.height]),(0,V.Z)(()=>{function e(e){e.preventDefault();let n=e.currentTarget,r=n.href.split("#").pop();t("#".concat(r)),setTimeout(()=>{window.location.hash=r},0)}let n=[...document.querySelectorAll("[href]")].filter(e=>e.href.includes("#"));return n.forEach(t=>{t.addEventListener("click",e,!1)}),()=>{n.forEach(t=>{t.removeEventListener("click",e,!1)})}},[]),(0,i.xQ)(e=>{null==n||n.raf(e)},[])}(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:n,style:o,children:t}),(0,r.jsx)(k,{}),(0,r.jsx)(j,{}),s?null:(0,r.jsx)(Z,{}),(0,r.jsx)(U,{})]})}},6433:function(e,t,n){var r=n(4671),o=n(2902),s=n(8597);let i=e=>({sources:[],setSources:t=>e((0,o.ZP)(e=>{let n=t.map(t=>e.sources.some(e=>e.src===t.src)).some(e=>e);return{sources:n?e.sources:[...e.sources,...t]}}),!1,"CACHE/SET_SOURCES"),patchSources:t=>e((0,o.ZP)(e=>{let n=e.sources.find(e=>e.src===t.src);n.srcCached||(n.srcCached=t.srcCached)}),!1,"CACHE/PATCH_SOURCES")}),a=(0,r.Z)((0,s.mW)(i,{name:"Cache Store"}));t.Z=a},294:function(e,t,n){var r=n(4671),o=n(2902),s=n(8597);let i=(e,t)=>({lenis:null,setLenis:t=>e((0,o.ZP)(e=>{e.lenis=t}),!1,"SCROLL/SET_INSTANCE"),node:null,setNode:t=>e((0,o.ZP)(e=>{e.node=t}),!1,"SCROLL/SET_NODE"),scroll:0,setScroll:t=>e((0,o.ZP)(e=>{e.scroll=t}),!1,"SCROLL/SET_SCROLL_VALUE"),limit:0,setLimit:t=>e((0,o.ZP)(e=>{e.limit=t}),!1,"SCROLL/SET_LIMIT_VALUE"),direction:"down",setDirection:n=>{let r="up";1>Math.abs(t().scroll-n)?r=t().direction:t().scroll<n&&(r="down"),e((0,o.ZP)(e=>{e.direction=r}),!1,"SCROLL/SET_DIRECTION")},velocity:0,setVelocity:t=>e((0,o.ZP)(e=>{e.velocity=t}),!1,"SCROLL/SET_VELOCITY_VALUE")}),a=(0,r.Z)((0,s.mW)(i,{name:"Scroll Store"}));t.Z=a},8488:function(e,t,n){n.d(t,{g:function(){return r}});let r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=null==e?void 0:e.filter(e=>"image"===e.type),r=null==e?void 0:e.filter(e=>"video"===e.type||"hdr"===e.type||"glb"===e.type),o=await n.map(e=>new Promise((t,n)=>{let r=new Image;r.src=e.src,r.onload=t({...e,srcCached:e.src}),r.onerror=n()})),s=await r.map(e=>new Promise((t,n)=>{let r=new XMLHttpRequest;r.open("GET",e.src,!0),r.responseType="blob",r.onload=()=>{if(200===r.status){let n=r.response,o=URL.createObjectURL(n);t({...e,srcCached:o})}},r.onerror=()=>n(),r.send()}));await Promise.all([...o,...s]).then(e=>t(e))}}}]);