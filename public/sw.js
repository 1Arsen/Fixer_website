if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192px.png",revision:"01ab3779b1ab89df450057179df53bc3"},{url:"/_next/app-build-manifest.json",revision:"dc0527a0228fd82f58c9c1119d30550d"},{url:"/_next/static/Yy0yfBXEXvmSat8e-ZndJ/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/Yy0yfBXEXvmSat8e-ZndJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/211-f8fa522e25ee491c.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/69-fde4f8ce6c77cd94.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/749-00da045b30fd92f9.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/811-315dcb6a2b1bbdea.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/_not-found-348c83d318e50d92.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/about/page-f99e9ff6fbe6b6e7.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/businesses/page-ed89f5208c8daa8b.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/contacts/page-605ab8c6aef73120.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/home/page-275e7994fc1a2426.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/layout-669fc513de238e35.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/page-cd672fad6a0013af.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/app/works/page-1bf65de1c85927fe.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/fd9d1056-978526263752dadc.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/main-6a7f0b7e22e20673.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/main-app-70035d9f24eaefb0.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9488965f855c8f56.js",revision:"Yy0yfBXEXvmSat8e-ZndJ"},{url:"/_next/static/css/c66522c6742bc643.css",revision:"c66522c6742bc643"},{url:"/_next/static/css/d9277790ad52bf8a.css",revision:"d9277790ad52bf8a"},{url:"/_next/static/css/d95c7b31bbda551b.css",revision:"d95c7b31bbda551b"},{url:"/_next/static/media/634216363f5c73c1-s.p.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/icons/cross.svg",revision:"39f238a7efee48409dfb26d9e567b58f"},{url:"/icons/done.svg",revision:"00efcb02b8a4bc8c0fc3737673e1159c"},{url:"/icons/icon1.svg",revision:"faf8df7f0a7477dc9f8dc6e7d1b8ad02"},{url:"/icons/icon2.svg",revision:"a6efe00ada4555717068fbbdb4da5f08"},{url:"/icons/icon3.svg",revision:"31dcf468e243c1c3a5da540212157cd1"},{url:"/icons/icon4.svg",revision:"9555c3cd246c51a03a2d8a6881476479"},{url:"/icons/phone.svg",revision:"750dd04d140257204dda0df9cd8941bb"},{url:"/images/aboutus.png",revision:"a473d5ba2d36b44574891ca8c6979a41"},{url:"/images/cond.png",revision:"9a0ec77460bae0acd68d2277cdf1ade4"},{url:"/images/dishwash.png",revision:"42c951458e0a1ae5869940486d52aa65"},{url:"/images/foto.png",revision:"e474ee6d9fb5f861f765545043ba6305"},{url:"/images/mb.png",revision:"1a42589039c88c333df955c5753bc437"},{url:"/images/monitor.png",revision:"cec38f131ad46b7ab42a7bc3c7e808a5"},{url:"/images/notebook.png",revision:"df3bab0d2c19d2df29dd89fe8376c587"},{url:"/images/pc.png",revision:"a60aadd89c4ed0bea8a865487fb27242"},{url:"/images/tv.png",revision:"74bb9e0680a32c547416ee3cd48261bd"},{url:"/images/wash.png",revision:"cde8ef6a2a77eb224d8cc829b45bd6f1"},{url:"/lightning192.jpg",revision:"62866a426db95267fc58ef01cea040c3"},{url:"/manifest.json",revision:"a71879c9e433c252226ada9a163ce861"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/slide/slideCover.svg",revision:"128c8a49b767b7b7bf350b5b66491cc5"},{url:"/underSlide/icon 1.svg",revision:"95a143d01a85f71487b4e308b32cb067"},{url:"/underSlide/icon 2.svg",revision:"0308a6732191526bc82b2f25fb710aed"},{url:"/underSlide/icon 3.svg",revision:"5ebaf7b0ad00e95c17d35ee8ab00e56a"},{url:"/underSlide/icon 4.svg",revision:"d34f26bdeb03aed72731f7c6cb9fb886"},{url:"/vectors/vector.svg",revision:"bcfb9e1385b495b55346a1f842febf43"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
