if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const f=e=>a(e,c),n={module:{uri:c},exports:b,require:f};i[c]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(r(...e),b)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"archives/2017/07/index.html",revision:"8aaeff10a4a08ce6ca27a10a11c52a9f"},{url:"archives/2017/08/index.html",revision:"109605fe1c0a27440e7217ad8d64fedd"},{url:"archives/2017/09/index.html",revision:"1eda90713f4faa3f49ddb8ac5eb390a1"},{url:"archives/2017/11/index.html",revision:"7205bf0c5f18a6b4906c21f8819a581d"},{url:"archives/2017/index.html",revision:"458f54fa4288854ce54e77c25048088f"},{url:"archives/2017/page/2/index.html",revision:"c29b60fe4b54e1e4a50b8ac3d6142437"},{url:"archives/2018/01/index.html",revision:"6803eba1d2eedbb40b4957c64012fff8"},{url:"archives/2018/08/index.html",revision:"2109d3a2b029cdb4b9073eaf0e80c88a"},{url:"archives/2018/index.html",revision:"a73c3640d4d3eb46ad861ad773005776"},{url:"archives/2019/01/index.html",revision:"e20f1b7b64ca6fc9e023dbe6b8fbede8"},{url:"archives/2019/09/index.html",revision:"db2ebc25035c2f13f77eb5cfc7c54919"},{url:"archives/2019/10/index.html",revision:"0abb3e5c813ad59853048cdbd50c2ad6"},{url:"archives/2019/index.html",revision:"96db0a52006d54e6ebfd8482a5143ce3"},{url:"archives/2020/11/index.html",revision:"ea81bb715c7182834a9bcdb06027877f"},{url:"archives/2020/12/index.html",revision:"1693dde951ebe6f05143e68de81f69cd"},{url:"archives/2020/index.html",revision:"d6f10faf0ee8fe88787a7cd5f0455b94"},{url:"archives/2021/01/index.html",revision:"dd821a2346018460c5b9b4f92eebccc8"},{url:"archives/2021/03/index.html",revision:"63f479688e958c5d57a9abd9a0a6cd82"},{url:"archives/2021/04/index.html",revision:"bc94d9e67a722fe5692c5abca10232ea"},{url:"archives/2021/06/index.html",revision:"9b2ab5023c1534f2defab052b49c40da"},{url:"archives/2021/07/index.html",revision:"66a1b5a9ec97f414f304f29ba5209598"},{url:"archives/2021/08/index.html",revision:"87316ccf0e77c2e5ed757064866b87a1"},{url:"archives/2021/09/index.html",revision:"7dd22dd4fca0d41c319f2313b77b43c8"},{url:"archives/2021/10/index.html",revision:"784a9abef8e19dacf3954a4494dc4898"},{url:"archives/2021/12/index.html",revision:"c0fb30f590fd99e35ba28c6e042236ec"},{url:"archives/2021/index.html",revision:"7114f73694f120da64b4d8766925344e"},{url:"archives/2021/page/2/index.html",revision:"61ce4cfff1b09c396122ccff33728e40"},{url:"archives/2022/01/index.html",revision:"4ab38b668bae2dc8311c5b894865be0b"},{url:"archives/2022/03/index.html",revision:"e06b3a119e50af56e3e411c8496c0191"},{url:"archives/2022/09/index.html",revision:"857ff7a881be526249b38a618d94f623"},{url:"archives/2022/index.html",revision:"7f6f093210a62e2e7760bd38dc026345"},{url:"archives/index.html",revision:"c8f9a3d0cc5445eaafd209414573b2cd"},{url:"archives/page/2/index.html",revision:"48d7f5bc726aad8aa991428f0f2d3958"},{url:"archives/page/3/index.html",revision:"713b0b5d1e05722f0b3157945ee3e4e6"},{url:"archives/page/4/index.html",revision:"1d0170dd10a121bf3e0abb3c67046c2c"},{url:"archives/page/5/index.html",revision:"d53a954fb17d8fbaffc851d0dfb4b2fc"},{url:"categories/index.html",revision:"107514920b1251779f92760044aa4d44"},{url:"categories/不求甚解学经济/index.html",revision:"81eb5254d3c31db93cf68badff8c6842"},{url:"categories/不求甚解學經濟/index.html",revision:"4ec6589ac1dc1b8ac7b10c3a747b38dc"},{url:"categories/不求甚解學經濟/page/2/index.html",revision:"043c2bdbfb1be93bba5576dbb5a89fc0"},{url:"categories/信息設計/index.html",revision:"c957373673afaee3911cedce3515ed6c"},{url:"categories/信息設計/page/2/index.html",revision:"21fa6984b2197ba49617a2a9e36af544"},{url:"categories/技术/index.html",revision:"815508f4f254acb4f080c894a35c5ce9"},{url:"categories/數理經濟學/index.html",revision:"2242b2f35ae9850f99df02ba94ddeece"},{url:"categories/杂感/index.html",revision:"b89ccbebcac2c7b83584792f532ce9db"},{url:"categories/現實關注/index.html",revision:"0024a282242ba514a1caf501cdf59ca7"},{url:"categories/翻译/index.html",revision:"99d1d418627c614952ef92f8b2febb0c"},{url:"categories/論文解讀/index.html",revision:"46e20e0ddfd7ce06eae312bd59d0a28b"},{url:"categories/计量经济学/index.html",revision:"80a13be21d9b44a23739d4e8d37faf8e"},{url:"css/index.css",revision:"757ea5cd243207931cfc70faa6082e82"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-0.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-1.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-2.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"433e03d0f94f255fef841cff6dd98bce"},{url:"img/alipay.jpg",revision:"20ec5766a33dd9aa2cd3a65f0972a90e"},{url:"img/android-chrome-144x144.png",revision:"5538a5af09b8fe4f28b45a3e598c8963"},{url:"img/android-chrome-192x192.png",revision:"998d91ef097464d03fc2b2c4d8f55308"},{url:"img/android-chrome-256x256.png",revision:"df11e1e9a50bdb82e93ec02ebcf32cea"},{url:"img/android-chrome-36x36.png",revision:"d91bbf1b701d435780f9dc186b086f41"},{url:"img/android-chrome-384x384.png",revision:"2947bb8b7f86285107297c488b3a7434"},{url:"img/android-chrome-48x48.png",revision:"515dd11e1f79eb6300b36d6ca0524012"},{url:"img/android-chrome-512x512.png",revision:"37cad902643fccfa193e9c47b825c936"},{url:"img/android-chrome-72x72.png",revision:"e56757bc8858c3aac782c5b857a05777"},{url:"img/android-chrome-96x96.png",revision:"9d52e1645226b45c7fa87c92c22ed51d"},{url:"img/apple-touch-icon-precomposed.png",revision:"3acb363b095eb8e0c78ece5f5a555258"},{url:"img/apple-touch-icon.png",revision:"2dbba9bee7f4dcc4e612edf49a6f64b6"},{url:"img/favicon-16x16.png",revision:"ba8ca6d2b06670b7474358e9c3b978fa"},{url:"img/favicon-32x32.png",revision:"408f30dd36c2e2346908f101ca8854a8"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"2e76a0962b96ac870d185aa7fd52c82d"},{url:"img/index2.jpg",revision:"91f4af3208c42a42dbf6a2ebafa4265a"},{url:"img/index4.jpg",revision:"06f738398563cb14d8492397297e50c4"},{url:"img/index5.jpg",revision:"3da8131db5b2b9e816f97e0017f87864"},{url:"img/indexpng.jpg",revision:"35863f24541be839beb0fb1e914c09f6"},{url:"img/mstile-150x150.png",revision:"65f35d98412a250942cf558b9ea14ce2"},{url:"img/README.html",revision:"884aeaa68e106e3134065edd9f085dd7"},{url:"img/safari-pinned-tab.svg",revision:"19fed02e507e673fcc3a77547a145707"},{url:"img/wechat.png",revision:"3cd1ab52cab53bb0bc7739eba635a20a"},{url:"index.html",revision:"5f30d8adea2e71d023680d887f65e226"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"a5799f4c3b4a98c5975c24c09e37a8e0"},{url:"p/0a743s09.html",revision:"8ef10217105d309561b1d879dfab1943"},{url:"p/0a743s19.html",revision:"7e8b39b0d80b54c068addd5506ef5477"},{url:"p/2a05ba20.html",revision:"d161b1291f078ac9f36ccd9407a1f1f8"},{url:"p/2b451b99.html",revision:"46c19188560d7f59aab26121c0c4ca52"},{url:"p/2b781b99.html",revision:"23918a1f341a71a9be33e587b30da6c3"},{url:"p/2b871s90.html",revision:"3f7ea1118f54674e62ddcb3151a9761c"},{url:"p/2b881b2d.html",revision:"5c8efb6e07ace4f6d3834aae7d243694"},{url:"p/2b881b54.html",revision:"9ba1ebdac634c02f93061eed163f62f7"},{url:"p/2b881b66.html",revision:"895011748fcc68a9c698d49463353320"},{url:"p/2b881b90.html",revision:"997f70b16ab4dbba20d4664b15493515"},{url:"p/2b881b98.html",revision:"30b3b2c2c2d9a3863ea8ca954df7fdfb"},{url:"p/2b882b10.html",revision:"f4c74b9c40e4221401e16f79cd144520"},{url:"p/2b882b99.html",revision:"d7faecd616b03ada7fa6c9b6e114d664"},{url:"p/2b883h99.html",revision:"e417b5dd9f95c99b28b6bbdc0ed812d5"},{url:"p/3a483h91.html",revision:"51e41f71f758c38515f5b43414828a67"},{url:"p/3e891b09.html",revision:"394ab5e98db221997553f72cbb707378"},{url:"p/485c51d0.html",revision:"73a8c09e83834d2f3e1d8519441b25ba"},{url:"p/4d882b10.html",revision:"35cd73858107e9a756e8bac005a9c670"},{url:"p/5e28e5ae.html",revision:"e9aae1c39e6647b9606b292eac950f06"},{url:"p/6da8d1b9.html",revision:"1fb24d5dd56dce28511ac7c7d4edc2b9"},{url:"p/70ea6e02.html",revision:"1e270ccff52ebb358f5487b84c46791a"},{url:"p/826e0694.html",revision:"9c8a0b094c2b1d11e0c4c8ceb23f9627"},{url:"p/8ca4f8b6.html",revision:"362f538c193a11feb3de3b6ff8634bda"},{url:"p/8ca4f9a7.html",revision:"61a7c4d28103cc97b3cb20060eaced98"},{url:"p/8ca4f9b9.html",revision:"2af03247ab7d41482c6c2318843e5b62"},{url:"p/8ca8d8b6.html",revision:"9522bb6b419951931c448aed52a1b791"},{url:"p/9a243s12.html",revision:"4ba07acb005bb0b9c8a0f8ac9959fd58"},{url:"p/9a723l99.html",revision:"1057ada1c56e1ae51e0b65a81b4b52e1"},{url:"p/9a743s09.html",revision:"275fc4fa1ad570a6991151fa6b0af528"},{url:"p/9da8ca38.html",revision:"44780d9b4ee9765632426ed76fc60d92"},{url:"p/a008ab02.html",revision:"87d36b7645d0ea9809e37c52f81e7ab0"},{url:"p/a008de02.html",revision:"e95266ea0668941f0b4a542042431d11"},{url:"p/a6db2415.html",revision:"abf36a59d3bb5cda1b991971b69985f5"},{url:"p/ab30d9p9.html",revision:"fbe2d29d66e660d3b45790377c94dae2"},{url:"p/b353e5e0.html",revision:"38982ed2c09bbd4d76b7de730a383ec9"},{url:"p/bcce376c.html",revision:"8a76e7df26b3c4e6a630029743ad428d"},{url:"p/c9c31a7a.html",revision:"13000b052d2654182b6b227c14573055"},{url:"p/d3a8a9d2.html",revision:"d24f5c80867758d59a9e9f44b106e735"},{url:"p/db900c1b.html",revision:"3ede5059f2551ae33907b96fb0fd2cbd"},{url:"p/dd33e338.html",revision:"72ae2e1853af05f6a1d99b04454e7b42"},{url:"p/df84da2.html",revision:"90160a4961363d2f0fd2403532e2bbe9"},{url:"p/eb86e0c3.html",revision:"0038e2d53140b220e2dec94bb9ed679a"},{url:"p/undefined.html",revision:"2fd15d01f53b960529610b69acd461d0"},{url:"page/2/index.html",revision:"1d12fefd81234a842f4115efe805594e"},{url:"page/3/index.html",revision:"58843baf95bd513558695dbe0ace3dd0"},{url:"page/4/index.html",revision:"707fe7607b6ea79750f5629d0e66e6b8"},{url:"page/5/index.html",revision:"b800fdb46aed9075591953bb8cf2a6a2"},{url:"project/index.html",revision:"cf87ff6c40c60a296301553db5bd8810"},{url:"series/index.html",revision:"e56d963c33c8b43c6511c254f926695b"},{url:"tags/index.html",revision:"9a420b2a095e19671f34924eeaae8123"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
