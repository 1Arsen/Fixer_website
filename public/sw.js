if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>i(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192px.png",revision:"01ab3779b1ab89df450057179df53bc3"},{url:"/_next/app-build-manifest.json",revision:"6cc5c1f3f0451d0fbdaad69e0c222763"},{url:"/_next/static/chunks/320-62ead58e26196515.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/3d47b92a-541b1d2998d297a7.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/418-48178a0521732e0e.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/69-b48bbc5cdda95605.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/703-fda19fee1fd2eeb5.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/app/_not-found-0acf5ed75ee70dae.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/app/home/page-199ed2f7de79981e.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/app/layout-df1e976e018135fe.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/app/page-eb9cbc4f1c14f1d8.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/app/works/page-88b912649236ed73.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/fd9d1056-ee105b0a9581f84c.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/framework-c2bd435ba586f11b.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/main-aad3fc7c8b1de444.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/main-app-70035d9f24eaefb0.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5c00bccde380c37e.js",revision:"xcXalIXHhwEni488l4_NB"},{url:"/_next/static/css/22b3893f5e2ae54b.css",revision:"22b3893f5e2ae54b"},{url:"/_next/static/css/82b92c42ffac1587.css",revision:"82b92c42ffac1587"},{url:"/_next/static/css/f662963706c75d69.css",revision:"f662963706c75d69"},{url:"/_next/static/media/634216363f5c73c1-s.p.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/_next/static/xcXalIXHhwEni488l4_NB/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/xcXalIXHhwEni488l4_NB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/cross.svg",revision:"39f238a7efee48409dfb26d9e567b58f"},{url:"/icons/done.svg",revision:"00efcb02b8a4bc8c0fc3737673e1159c"},{url:"/icons/icon1.svg",revision:"75c30dad20b25d96bae96bc5c4732680"},{url:"/icons/icon2.svg",revision:"71f860efd9e523ad633c18d6d2897cb4"},{url:"/icons/icon3.svg",revision:"0f4c8c4d7092790bdd4856aa5981f68b"},{url:"/icons/icon4.svg",revision:"610595ea53b06461e5d8de9f79aa42ea"},{url:"/icons/icon5.svg",revision:"73a21058cf6e54d04e445860824c53a8"},{url:"/icons/menu.svg",revision:"51c23c44dab1d1a1c5bf8404ca816697"},{url:"/icons/phone.svg",revision:"750dd04d140257204dda0df9cd8941bb"},{url:"/images/aboutus.png",revision:"a473d5ba2d36b44574891ca8c6979a41"},{url:"/images/cond.png",revision:"9a0ec77460bae0acd68d2277cdf1ade4"},{url:"/images/dishwash.png",revision:"42c951458e0a1ae5869940486d52aa65"},{url:"/images/foto.png",revision:"e474ee6d9fb5f861f765545043ba6305"},{url:"/images/mb.png",revision:"1a42589039c88c333df955c5753bc437"},{url:"/images/monitor.png",revision:"cec38f131ad46b7ab42a7bc3c7e808a5"},{url:"/images/notebook.png",revision:"df3bab0d2c19d2df29dd89fe8376c587"},{url:"/images/pc.png",revision:"a60aadd89c4ed0bea8a865487fb27242"},{url:"/images/tv.png",revision:"74bb9e0680a32c547416ee3cd48261bd"},{url:"/images/wash.png",revision:"cde8ef6a2a77eb224d8cc829b45bd6f1"},{url:"/lightning192.jpg",revision:"62866a426db95267fc58ef01cea040c3"},{url:"/manifest.json",revision:"a71879c9e433c252226ada9a163ce861"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/screenshots/scrDesktop.png",revision:"93759c8b465ac3cd0f9ee78ecadd1a08"},{url:"/screenshots/scrMobile.png",revision:"b8c76b3890d8e3b3340a63fdd1071fd1"},{url:"/screenshots/scrTablet.png",revision:"d854d5d8850ca74074ab998b9f5a3062"},{url:"/slide/slideCover.svg",revision:"128c8a49b767b7b7bf350b5b66491cc5"},{url:"/underSlide/icon 1.svg",revision:"95a143d01a85f71487b4e308b32cb067"},{url:"/underSlide/icon 2.svg",revision:"0308a6732191526bc82b2f25fb710aed"},{url:"/underSlide/icon 3.svg",revision:"5ebaf7b0ad00e95c17d35ee8ab00e56a"},{url:"/underSlide/icon 4.svg",revision:"d34f26bdeb03aed72731f7c6cb9fb886"},{url:"/vectors/vector.svg",revision:"bcfb9e1385b495b55346a1f842febf43"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
