if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const u=e=>l(e,i),c={module:{uri:i},exports:a,require:u};s[i]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-a6545ba7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0e93390ef55c539c9a069a917e8d9948.obj",revision:null},{url:"10167062c9e9670a4a2070913d5d7622.obj",revision:null},{url:"1ccfd159b578eca9334d70b48d2b0344.mtl",revision:null},{url:"300.826710dfb91135f09c5d.css",revision:null},{url:"300.cdc5928b9f3f5b74c8fa.js",revision:null},{url:"300.cdc5928b9f3f5b74c8fa.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"323.01dd12106a886301b998.js",revision:null},{url:"329.30a838fa870129e68c7d.js",revision:null},{url:"329.8ef59ef4434d49cb087d.css",revision:null},{url:"37989bff61e1e138fc178da4c7962278.obj",revision:null},{url:"388.412d603852208811e878.js",revision:null},{url:"459.2d9c70506e4879336cec.js",revision:null},{url:"459.2d9c70506e4879336cec.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"459.6072c11d51879d06d029.css",revision:null},{url:"460.3e4fc0e94bdbb8762702.js",revision:null},{url:"460.52490036f24622cb7a3e.css",revision:null},{url:"5033c297a85516654b48ecd109848ba2.mtl",revision:null},{url:"534.21400c15b52724d2ceab.js",revision:null},{url:"5fbe9eaf9265cc5cbf665a59e3ca15b7.mtl",revision:null},{url:"650.76e4ae869b77785e668d.js",revision:null},{url:"650.76e4ae869b77785e668d.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"662.339ac311ef043fedd76b.js",revision:null},{url:"666.b22e350725ac77746489.js",revision:null},{url:"68ec784dbe4a4a6eb772b375b8c1a222.obj",revision:null},{url:"691.a3a77a120a7187b5ee41.js.LICENSE.txt",revision:"391777e8b687e1f5fd239ef9d827f5f0"},{url:"757.864d099bbd3672620a60.js",revision:null},{url:"781.f34ac560659802875955.js",revision:null},{url:"782.21a8aead2954145efad1.js",revision:null},{url:"782.beb2e4c477e5121cc328.css",revision:null},{url:"893.c76d617c16ecd56de589.js",revision:null},{url:"893.c76d617c16ecd56de589.js.LICENSE.txt",revision:"61de26bc0120bf0d2aadb5c24d9e9d8e"},{url:"907.352448b69fa8f18f02c9.js",revision:null},{url:"973.654b3708a1ed701596ad.js",revision:null},{url:"assets/0cce497115278bdf89ce.png",revision:null},{url:"assets/0cfea8a47806a82b1402.png",revision:null},{url:"assets/1059e010efe7a244160d.png",revision:null},{url:"assets/141914dc879a0f82314f.png",revision:null},{url:"assets/1c18bb2bcd7c10412c7f.png",revision:null},{url:"assets/1e24994cc32187c50741.png",revision:null},{url:"assets/1fe58add92fed45ab92f.png",revision:null},{url:"assets/29c2cd498cc16efe549a.jpg",revision:null},{url:"assets/3606dd992d934eae334e.png",revision:null},{url:"assets/3a03d84e0dac92d8820c.png",revision:null},{url:"assets/3acc318f286448bee7dc.png",revision:null},{url:"assets/3e88ec3d15c81c1d3731.png",revision:null},{url:"assets/49ea91b880a48a697f4a.png",revision:null},{url:"assets/57aa8c7f4d8b59e7499b.png",revision:null},{url:"assets/59972004cf3eaa2c2d3e.png",revision:null},{url:"assets/628b11f2a3dd915cca84.png",revision:null},{url:"assets/62cbc4fe65e3bf4b8051.png",revision:null},{url:"assets/6471c11397e249e4eef5.png",revision:null},{url:"assets/669e188b3d6ab84db899.gif",revision:null},{url:"assets/6e6e3a3a11b602aefc28.png",revision:null},{url:"assets/6f97f1f49bda1b2c8715.png",revision:null},{url:"assets/78278ed6c8385f3acc87.png",revision:null},{url:"assets/78aa93692257fde3a354.jpg",revision:null},{url:"assets/7a14c1067d60dfb620fe.png",revision:null},{url:"assets/90068dd81e463ba3b013.png",revision:null},{url:"assets/99dd94a5679379d86962.png",revision:null},{url:"assets/ad8142f1ed84eb3b85db.png",revision:null},{url:"assets/b7373cd9afa7a084249d.png",revision:null},{url:"assets/b92cbe1f5d67f1a72f08.png",revision:null},{url:"assets/b944657857b25e3fb827.png",revision:null},{url:"assets/b9cf07d3689b546f664c.png",revision:null},{url:"assets/c84edb54c92ecf68f694.png",revision:null},{url:"assets/ca4ccf6482f1c78566ad.png",revision:null},{url:"assets/d2a4a573f98b892c455f.png",revision:null},{url:"assets/d738c3de3ba125418926.png",revision:null},{url:"assets/ecaee6b507b72c0ac848.png",revision:null},{url:"assets/f2448b3abbe2488a8edc.png",revision:null},{url:"assets/f2a309ab7c8b57acb02a.png",revision:null},{url:"assets/f39b41544561ac965002.png",revision:null},{url:"assets/f3c1a3676f0fee26cf92.png",revision:null},{url:"assets/f89bdc6fb6cfc62848bb.png",revision:null},{url:"childWs.worker.64939b32ab9485d29d95.worker.js",revision:null},{url:"childWs.worker.64939b32ab9485d29d95.worker.js.LICENSE.txt",revision:"275fe79abee3b697f1673c8bd9c58856"},{url:"decoder.worker.a34f163ccad1d4473d23.worker.js",revision:null},{url:"decoder.worker.a34f163ccad1d4473d23.worker.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"f015f868c7133c9513a49d2e92dbca47.mtl",revision:null},{url:"index.html",revision:"9a8a0e18385f18b2f038d0d4b3f7d6c4"},{url:"main.4d306f9bb517692da767.js",revision:null},{url:"main.4d306f9bb517692da767.js.LICENSE.txt",revision:"df32743ed051aa784d347b8223c278a1"},{url:"manifest.json",revision:"b7c21d69bb9bc7990aaedbf924bbaff4"}],{}),e.registerRoute(/^http:\/\/apollo-studio-staging-public.cdn.bcebos.com\/dreamview\/panel.*/,new e.NetworkFirst({cacheName:"localhost-resources",networkTimeoutSeconds:3,plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET")}));
