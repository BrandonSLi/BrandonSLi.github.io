const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Brandon Song Li"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d35acfc4cc62bd52ba152f72fe0a16ea","url":"./about/index.html"},{"revision":"7183cd3a2c44d72028447f1bcf67355b","url":"./archives/2017/07/index.html"},{"revision":"1a319fc161f30f8627fca79c7c0f8c5d","url":"./archives/2017/08/index.html"},{"revision":"50e8dc20797ea6aea81b83cb5142f681","url":"./archives/2017/09/index.html"},{"revision":"4d7dffc5d46832da5b2c7f5bfa644743","url":"./archives/2017/11/index.html"},{"revision":"f488c6ed6e4c5fec6ab61f9e1da13677","url":"./archives/2017/index.html"},{"revision":"f91b3193b032c583146ceedf70c8c396","url":"./archives/2017/page/2/index.html"},{"revision":"0786f63b0cc64cd4d45b4aa9f93927a0","url":"./archives/2018/01/index.html"},{"revision":"276c23c73afebbb95c612ac96e9cb696","url":"./archives/2018/08/index.html"},{"revision":"caed6ad4eaaed6ba422c537913d89590","url":"./archives/2018/index.html"},{"revision":"9fe1c984455d568e12a96d880696235b","url":"./archives/2019/01/index.html"},{"revision":"93d8937e95167c62eb6930c777525512","url":"./archives/2019/09/index.html"},{"revision":"6ed397e14a12b75064d2f60b2eedcaf9","url":"./archives/2019/10/index.html"},{"revision":"f70aecfd7f6b0bdb319a5445e2962499","url":"./archives/2019/index.html"},{"revision":"accc89f9de1c5029c9eaa2ea07703c85","url":"./archives/2020/11/index.html"},{"revision":"b758a70146e627454a54d7f574b81354","url":"./archives/2020/12/index.html"},{"revision":"4146e0e945c768fa814658e5daffc48a","url":"./archives/2020/index.html"},{"revision":"584e1e6da0dccdedb9184a01a998dc9d","url":"./archives/2021/01/index.html"},{"revision":"7130589873d90eee794d5fe2656c6f60","url":"./archives/2021/03/index.html"},{"revision":"3083b11009c2e79fcba980361f745de1","url":"./archives/2021/04/index.html"},{"revision":"26dd74348fcbe3152246cbc714c37e7d","url":"./archives/2021/06/index.html"},{"revision":"d507cfd46f210b1f63603dfc90434863","url":"./archives/2021/07/index.html"},{"revision":"49c46bf10b635bf5c8255a8a01a10216","url":"./archives/2021/08/index.html"},{"revision":"7672b7621fde201d9f8ebef687359b44","url":"./archives/2021/09/index.html"},{"revision":"1db3e9152bb6eae36e193e25115a8ac1","url":"./archives/2021/10/index.html"},{"revision":"eb9b74818dcd6e5376023bc94b18c427","url":"./archives/2021/index.html"},{"revision":"76615a044824fa7edd2b0e30e71f8add","url":"./archives/2021/page/2/index.html"},{"revision":"9b8a5e16d23da81c14dbdc5c8be4cca0","url":"./archives/index.html"},{"revision":"b68d38f91794a2e6aa32ff198a219f3d","url":"./archives/page/2/index.html"},{"revision":"c0c2dba253523313eb89809e56e51604","url":"./archives/page/3/index.html"},{"revision":"81872c0c00fb661a5190a8b60247c21c","url":"./archives/page/4/index.html"},{"revision":"273326702068129bd224787b8aecae1f","url":"./categories/index.html"},{"revision":"2e875802c0cba774cc407a543f16385e","url":"./categories/不求甚解学经济/index.html"},{"revision":"6bf70c9fb7372b2369245983c170396b","url":"./categories/不求甚解學經濟/index.html"},{"revision":"a231a383e32926127efd31989d7585e5","url":"./categories/信息設計/index.html"},{"revision":"8f5896f00e8587a66abd38810781ae24","url":"./categories/信息設計/page/2/index.html"},{"revision":"f6a112d941673c8fa145bc9dc6379862","url":"./categories/技术/index.html"},{"revision":"686d09df9b8dcffaef5695639fafcad4","url":"./categories/數理經濟學/index.html"},{"revision":"9c8e0af85dc4f474367a3fe1e94739e9","url":"./categories/杂感/index.html"},{"revision":"fb1c23fb1dff902f22b7fd79f8df0d5a","url":"./categories/翻译/index.html"},{"revision":"27a49d711d817203d0fae910473c40a6","url":"./categories/論文解讀/index.html"},{"revision":"9d277002be10ec65a11bb0d36290def9","url":"./categories/计量经济学/index.html"},{"revision":"f735b370b61aec5bee1b33a84e0a8abf","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1cd09ab44dec183fbd172b4b54039696","url":"./img/manifest.json"},{"revision":"efa08481e4fa6acef5dee1ed7b175a8e","url":"./img/README.html"},{"revision":"5ee5d9f68707ef082ddd9cbcbaa436cf","url":"./index.html"},{"revision":"240e062def7897dd4c03a12bf07fdc65","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"33b3c0e197c029d5b198059220bbd5ab","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"701394f6edc119a75aec18cb5064aff1","url":"./link/index.html"},{"revision":"1cd09ab44dec183fbd172b4b54039696","url":"./manifest.json"},{"revision":"d1504a33afce28961383fc0c8e3db756","url":"./p/0a743s09.html"},{"revision":"40632a14abe4419498e483630b62532b","url":"./p/2a05ba20.html"},{"revision":"07a73f24550c833968bcb28705c0bb74","url":"./p/2b451b99.html"},{"revision":"29088c87867a72d56b88fb79681a2e56","url":"./p/2b781b99.html"},{"revision":"4b2bbeba3dc026afd80ba75e1f1157ea","url":"./p/2b871s90.html"},{"revision":"50c88e4373a34f6dc691f5a27dd92814","url":"./p/2b881b2d.html"},{"revision":"aff3e75bc9473bd988cc415aa959022f","url":"./p/2b881b66.html"},{"revision":"de7eb45dabbd40d2f5076418eaf50042","url":"./p/2b881b90.html"},{"revision":"ec8ef6475a6f5a7bda9f100a25d670cc","url":"./p/2b881b98.html"},{"revision":"7ee16ce65e9fa6d39c2ba7bf6ea81efe","url":"./p/2b882b10.html"},{"revision":"c38288e3698594662f7e39771f935906","url":"./p/2b882b99.html"},{"revision":"a3645ef5f1bb1584f9ae39a55a3a8db0","url":"./p/2b883h99.html"},{"revision":"612964cb2de0140f7914c4e1d208446c","url":"./p/3a483h91.html"},{"revision":"6f81b271ba4fcba3e1c9d63f91618ef0","url":"./p/3e891b09.html"},{"revision":"f5f1a721eaa3817e97ce73f611b02ac2","url":"./p/485c51d0.html"},{"revision":"9a255d1694d48bea966136c9e4445c97","url":"./p/4d882b10.html"},{"revision":"bc072a73ff09d5f937f2efb46d3c5272","url":"./p/5e28e5ae.html"},{"revision":"cfdbfc4e2fdfe0f9a13fdd48ae69db90","url":"./p/70ea6e02.html"},{"revision":"bf726ce805b5ac8a89790f28f6450e28","url":"./p/826e0694.html"},{"revision":"6770df33e2a5b473d5e57cbb47ed508c","url":"./p/8ca4f9b9.html"},{"revision":"9983fc160ccf859f09319afe855acc51","url":"./p/9a243s12.html"},{"revision":"40e72ad3753f5343e846ed17b2394b78","url":"./p/9a723l99.html"},{"revision":"bae685514207008c85b596d3cd1a8a49","url":"./p/9a743s09.html"},{"revision":"b5afb4a768112626c983a25f81e48946","url":"./p/9da8ca38.html"},{"revision":"d2776c12053fa760930f1594ba930a0d","url":"./p/a008ab02.html"},{"revision":"0f86fc951a6689c59202e26728e4a7c8","url":"./p/a008de02.html"},{"revision":"898f9afb9dbd576efd4d4450a60e9123","url":"./p/a6db2415.html"},{"revision":"989dc81e630f619b846b78fdfbfcafd0","url":"./p/ab30d9p9.html"},{"revision":"1f5b7ba7368e73d3bca0a90bd4ee7b9c","url":"./p/b353e5e0.html"},{"revision":"cf0ec18abe2c7e7e62f928180fe91b89","url":"./p/bcce376c.html"},{"revision":"5e1b18348750d6ac75d70eaa97d83015","url":"./p/c9c31a7a.html"},{"revision":"2f3ef365f5fdcb83955335cde9910094","url":"./p/d3a8a9d2.html"},{"revision":"8bac928e78b10db60cfd79ab8510d9a7","url":"./p/db900c1b.html"},{"revision":"243f65791f10a26ce59b5b353246cc46","url":"./p/dd33e338.html"},{"revision":"96f46eaac930af1f6ac792f30a219e1b","url":"./p/df84da2.html"},{"revision":"d8ca6c4befd0f38c34f78a4935c14933","url":"./p/eb86e0c3.html"},{"revision":"5469d9b4bb705891fa43f583e9d33e72","url":"./page/2/index.html"},{"revision":"8d95318b0616e1ffd9f3a2ce1212814e","url":"./page/3/index.html"},{"revision":"dd28b137445cda63f025beef0cd09697","url":"./page/4/index.html"},{"revision":"207512d3b890e52e3b28171d53c4382a","url":"./project/index.html"},{"revision":"e67a9f879638395c63e9ac03933307ff","url":"./series/index.html"},{"revision":"4c3277c7bc5e3ca4e0a6cefbbc90e4f0","url":"./tags/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
