if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const n=e=>a(e,c),f={module:{uri:c},exports:b,require:n};i[c]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),b)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"archives/2017/07/index.html",revision:"c5aa45b8b1f09516b059593e2af28078"},{url:"archives/2017/08/index.html",revision:"4ce954f7d0e5e5676a545ec7c7d633b4"},{url:"archives/2017/09/index.html",revision:"75c4087af26f137972ee32af4c5a6b88"},{url:"archives/2017/11/index.html",revision:"7196a2c568ece775326cb623bba6b77c"},{url:"archives/2017/index.html",revision:"2d359215ccf8fab3bb090ea589f8af56"},{url:"archives/2017/page/2/index.html",revision:"5171ff87e43994d0ce9fb888775aa358"},{url:"archives/2018/01/index.html",revision:"00e410e11dee6238ca42aa586e16444f"},{url:"archives/2018/08/index.html",revision:"48afbb71fa1143fd07d135da7a4311d7"},{url:"archives/2018/index.html",revision:"0dcc8372a8962507162509e8c4104935"},{url:"archives/2019/01/index.html",revision:"dc63de419d8b428d1ce5e16fc9f2e82a"},{url:"archives/2019/09/index.html",revision:"a97a94b6d8ace01da8ec9c81248505fb"},{url:"archives/2019/10/index.html",revision:"248694cecc496c82d823e98b74d16a6c"},{url:"archives/2019/index.html",revision:"2fbd7e1fd7bf58a215945a44b8eb392d"},{url:"archives/2020/11/index.html",revision:"37fdcfc07ee39b12d6a5eb0b97fb7540"},{url:"archives/2020/12/index.html",revision:"70e7733bcdba521224f618158178eed1"},{url:"archives/2020/index.html",revision:"f0aa665d6105642f655640f39cfddf8b"},{url:"archives/2021/01/index.html",revision:"2dfb918915568d1dc87a033822165bc8"},{url:"archives/2021/03/index.html",revision:"812def0ea3b75464d1b82c252a45f561"},{url:"archives/2021/04/index.html",revision:"9b71c1e20453a8aa8da8a48f9d1808d1"},{url:"archives/2021/06/index.html",revision:"d82c7519694ff7138c2377f38f37b666"},{url:"archives/2021/07/index.html",revision:"64b06efdc3bd2c7f484945c5dfc2b553"},{url:"archives/2021/08/index.html",revision:"31f9c0bfb004775ba5897c003712aa59"},{url:"archives/2021/09/index.html",revision:"1fa8899a8e143a2da33d23fc40b6fd5c"},{url:"archives/2021/10/index.html",revision:"b8ac1e8fccb67297b433c0f69be0979f"},{url:"archives/2021/12/index.html",revision:"2278025af6ae38cac3c250d41bddb934"},{url:"archives/2021/index.html",revision:"898988c39b809b7f4d87ec91269e5ff5"},{url:"archives/2021/page/2/index.html",revision:"7084d4d612d637d56843cc2253fdca53"},{url:"archives/2022/01/index.html",revision:"4ae035eca82da6898c2ee938803e7352"},{url:"archives/2022/03/index.html",revision:"e21c5558696227772cc8dfe21e38d398"},{url:"archives/2022/09/index.html",revision:"926b58934bfeb90118daa613c5d94db7"},{url:"archives/2022/index.html",revision:"3541a8925957b3293957cd9ec792df2f"},{url:"archives/index.html",revision:"053663a463fd4673027a31983ec7d55a"},{url:"archives/page/2/index.html",revision:"d135e720ca48087fab8a4ac37baf2677"},{url:"archives/page/3/index.html",revision:"c03d038164608ae224743ecd5546b784"},{url:"archives/page/4/index.html",revision:"1320bb8bc521792fcec4750a2f3294ea"},{url:"archives/page/5/index.html",revision:"7f70964320946fc22a6a5a96731054ba"},{url:"categories/index.html",revision:"92ef3901936de8428dd6c994aea77207"},{url:"categories/不求甚解学经济/index.html",revision:"f84a0ae7ed1a71d58c907da3ea9645a1"},{url:"categories/不求甚解學經濟/index.html",revision:"be1a4571906532c126dbe47cb2a74fb9"},{url:"categories/不求甚解學經濟/page/2/index.html",revision:"3eca13275d1f3747a98e67058513f659"},{url:"categories/信息設計/index.html",revision:"ce0f091a8e9a78bd805a24d1ccd166da"},{url:"categories/信息設計/page/2/index.html",revision:"9f5d8d17832c10b9cc69f0b257b83a97"},{url:"categories/技术/index.html",revision:"34599f150f9e0250d5dc27166684dd65"},{url:"categories/數理經濟學/index.html",revision:"93013e604ad049c5c0db7fb3b9f99ce0"},{url:"categories/杂感/index.html",revision:"ba91f5351a9f805b382d196c77238de8"},{url:"categories/現實關注/index.html",revision:"75281d57e850efa22837013418a4ca44"},{url:"categories/翻译/index.html",revision:"1e4102c9539b956be8c5691c8420ec86"},{url:"categories/論文解讀/index.html",revision:"9df2f275b5ba6417b799a477ddba232a"},{url:"categories/计量经济学/index.html",revision:"70039e9f6a43fee477032da234da4d9f"},{url:"css/index.css",revision:"757ea5cd243207931cfc70faa6082e82"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-0.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-1.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-2.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"433e03d0f94f255fef841cff6dd98bce"},{url:"img/alipay.jpg",revision:"20ec5766a33dd9aa2cd3a65f0972a90e"},{url:"img/android-chrome-144x144.png",revision:"5538a5af09b8fe4f28b45a3e598c8963"},{url:"img/android-chrome-192x192.png",revision:"998d91ef097464d03fc2b2c4d8f55308"},{url:"img/android-chrome-256x256.png",revision:"df11e1e9a50bdb82e93ec02ebcf32cea"},{url:"img/android-chrome-36x36.png",revision:"d91bbf1b701d435780f9dc186b086f41"},{url:"img/android-chrome-384x384.png",revision:"2947bb8b7f86285107297c488b3a7434"},{url:"img/android-chrome-48x48.png",revision:"515dd11e1f79eb6300b36d6ca0524012"},{url:"img/android-chrome-512x512.png",revision:"37cad902643fccfa193e9c47b825c936"},{url:"img/android-chrome-72x72.png",revision:"e56757bc8858c3aac782c5b857a05777"},{url:"img/android-chrome-96x96.png",revision:"9d52e1645226b45c7fa87c92c22ed51d"},{url:"img/apple-touch-icon-precomposed.png",revision:"3acb363b095eb8e0c78ece5f5a555258"},{url:"img/apple-touch-icon.png",revision:"2dbba9bee7f4dcc4e612edf49a6f64b6"},{url:"img/favicon-16x16.png",revision:"ba8ca6d2b06670b7474358e9c3b978fa"},{url:"img/favicon-32x32.png",revision:"408f30dd36c2e2346908f101ca8854a8"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"2e76a0962b96ac870d185aa7fd52c82d"},{url:"img/index2.jpg",revision:"91f4af3208c42a42dbf6a2ebafa4265a"},{url:"img/index4.jpg",revision:"06f738398563cb14d8492397297e50c4"},{url:"img/index5.jpg",revision:"3da8131db5b2b9e816f97e0017f87864"},{url:"img/indexpng.jpg",revision:"35863f24541be839beb0fb1e914c09f6"},{url:"img/mstile-150x150.png",revision:"65f35d98412a250942cf558b9ea14ce2"},{url:"img/README.html",revision:"f19a35493fd1ec3d1f2d0c050a6dcdaa"},{url:"img/safari-pinned-tab.svg",revision:"19fed02e507e673fcc3a77547a145707"},{url:"img/wechat.png",revision:"3cd1ab52cab53bb0bc7739eba635a20a"},{url:"index.html",revision:"7d906b7cfa29bd2d4950b2f6670b1d40"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"9b1757ba238c14a96e8b44ae57a66236"},{url:"p/0a743s09.html",revision:"8ef10217105d309561b1d879dfab1943"},{url:"p/0a743s19.html",revision:"890dfc98de6ee9f61694b3d1193e0adc"},{url:"p/2a05ba20.html",revision:"d161b1291f078ac9f36ccd9407a1f1f8"},{url:"p/2b451b99.html",revision:"3bd656e10ee8e475e36b04744acbe06d"},{url:"p/2b781b99.html",revision:"37a4341699e01371cc1f9111c839196c"},{url:"p/2b871s90.html",revision:"bf6f37a4bf0ef39795a7d8337e4f39c3"},{url:"p/2b881b2d.html",revision:"1a6a60d31151012e540e3a6b89778b3e"},{url:"p/2b881b54.html",revision:"8e64d2910a25817b2a653c1b4e05600d"},{url:"p/2b881b66.html",revision:"e122bca072c1f36fc85276ea3462e0d7"},{url:"p/2b881b90.html",revision:"978025952d877fc3960a5e2a3e0af88e"},{url:"p/2b881b98.html",revision:"b70e29e283aa246fb47ade39cea91468"},{url:"p/2b882b10.html",revision:"8c7f7e7903773d1e84887025279e7202"},{url:"p/2b882b99.html",revision:"6030497eb30195457cb3eaa0fad5b7d0"},{url:"p/2b883h99.html",revision:"90d327e463159631b6a7fc754f5e5382"},{url:"p/3a483h91.html",revision:"51e41f71f758c38515f5b43414828a67"},{url:"p/3e891b09.html",revision:"394ab5e98db221997553f72cbb707378"},{url:"p/485c51d0.html",revision:"a93a5232a5da41980e54dfe0a24ad696"},{url:"p/4d882b10.html",revision:"fa4afe1833bac89ee3cc649d690efbe9"},{url:"p/5e28e5ae.html",revision:"e9aae1c39e6647b9606b292eac950f06"},{url:"p/6da8d1b9.html",revision:"1fb24d5dd56dce28511ac7c7d4edc2b9"},{url:"p/70ea6e02.html",revision:"2b096572dc04ad0146ae52fdb83b838d"},{url:"p/826e0694.html",revision:"10f223d04439b498da9803abf5a352f0"},{url:"p/8ca4f8b6.html",revision:"362f538c193a11feb3de3b6ff8634bda"},{url:"p/8ca4f9a7.html",revision:"61a7c4d28103cc97b3cb20060eaced98"},{url:"p/8ca4f9b9.html",revision:"2af03247ab7d41482c6c2318843e5b62"},{url:"p/8ca8d8b6.html",revision:"9522bb6b419951931c448aed52a1b791"},{url:"p/9a243s12.html",revision:"8f18c4d5a9efd16f2282ea49d84c9905"},{url:"p/9a723l99.html",revision:"1057ada1c56e1ae51e0b65a81b4b52e1"},{url:"p/9a743s09.html",revision:"c18fac8fd067c26fe454fc8fa6189f72"},{url:"p/9da8ca38.html",revision:"830813b7bc1ef609d3ef5ee18383b88c"},{url:"p/a008ab02.html",revision:"87d36b7645d0ea9809e37c52f81e7ab0"},{url:"p/a008de02.html",revision:"cf3766931e4c45505bf90c30c4a3347b"},{url:"p/a6db2415.html",revision:"3df452f6a9a38d520ee14a0357a8c3fd"},{url:"p/ab30d9p9.html",revision:"4a9f5fd1cd4fd0181b192ed0b09096c7"},{url:"p/b353e5e0.html",revision:"a401dfeb05b4611d21dd55268dbfd767"},{url:"p/bcce376c.html",revision:"8a76e7df26b3c4e6a630029743ad428d"},{url:"p/c9c31a7a.html",revision:"2d087c8dfcc4081c17d8c00b034e28b9"},{url:"p/d3a8a9d2.html",revision:"d24f5c80867758d59a9e9f44b106e735"},{url:"p/db900c1b.html",revision:"7264b2df58459530a574a9a50039a1f8"},{url:"p/dd33e338.html",revision:"673ab4b7e0462896d719b202cde0edad"},{url:"p/df84da2.html",revision:"da969067c85136ece4e75d6058966caa"},{url:"p/eb86e0c3.html",revision:"a8708cdc9412e8695674dd7f6acde9be"},{url:"p/undefined.html",revision:"2fd15d01f53b960529610b69acd461d0"},{url:"page/2/index.html",revision:"69d2091d0a980ef0a217a6ab33b6833e"},{url:"page/3/index.html",revision:"51d39b3ee4fd2e6e453e0b213e1e274f"},{url:"page/4/index.html",revision:"5f6c544c958bd0bb6db736d891ebab05"},{url:"page/5/index.html",revision:"9205162d9486202a06bad4e00e4ee6a9"},{url:"project/index.html",revision:"3aa63d526db42d15c8eea63b65d5cbc8"},{url:"series/index.html",revision:"55ee0286a3d02388dfcbad0cf1364090"},{url:"tags/index.html",revision:"434cf5b12391648f6e7ddc5e2d376151"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
