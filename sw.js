/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/25/problem-solution-of-luogu-p8716/index.html","659675f3b8fedc6b48ed527ca9210064"],["/2023/09/26/problem-solution-of-luogu-p8744/index.html","5e05c45aad524867ea9a992dd2fc80ab"],["/2023/09/26/use-algorithm/index.html","89a950ad0a42fb0e6b7e9d5236320925"],["/2023/09/26/use-pair/index.html","224b72b3bf06dc48a23f776ad9fccbd8"],["/2023/09/26/use-set/index.html","e757b1719140d93a710163ef42de9263"],["/2023/09/26/use-string/index.html","a3d10903e8663c5a1625abda2513825c"],["/2023/09/26/use-vector/index.html","40415c73ad5e7d06d467f985948197dd"],["/2023/09/27/elementary-introduction-of-dynamic-programming/index.html","010c1dc01c3db18e42c73c9cf9e6925f"],["/2023/09/27/elementary-introduction-of-dynamic-programming/pic1-elementary-introduction-of-dynamic-programming.jpg","d17b610c1e7df89109aadc48abcdc3da"],["/2023/09/29/univariate-quadratic-equation/index.html","77471323d141bf773af7d167d110647d"],["/2023/10/01/LOL/index.html","0be4452aab21f81c09a66ea6d49c5f9c"],["/2023/10/01/miscellaneous/index.html","9ab6d4b8c6c5acbe1bf76092ef3ac417"],["/404.html","a07cf5934d34e528937e23de4b2d5821"],["/archives/2023/09/index.html","5e9027278f1c047f2ab372027b1bf8c6"],["/archives/2023/10/index.html","91c0a269f860a4ebb3a9d210a3b949f7"],["/archives/2023/index.html","d974c60df869342b92c8a739a246957a"],["/archives/index.html","78238ef6a0da945b4d749db832c95a12"],["/categories/DP/index.html","a44ce1ff36d707a6e80e80aef2d1197d"],["/categories/STL/index.html","2c168956d173906f5fc5d410fe44e6f2"],["/categories/数学/index.html","0e56176a50d4626bdb66b4180b9ddf89"],["/categories/贪心/index.html","e9ddf8fc2f7df1b5f998a77b48fa9ffa"],["/categories/题解/index.html","57bf54e7df3954a2aa68e642e5caf67c"],["/css/index.css","17c22f8691d5f9e766a5332bcf1f355f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/cour.ttf","d8e98cd2725a3d8e80897fa55297dde0"],["/fonts/font.css","4a18d294884ae25f6cb3175136554413"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/WANGYUYAO.png","54e65f94eb25f1866faafaa5a2cf530a"],["/img/algorcover.png","ee467cee9478d2727087fdc4cad9fba4"],["/img/banner.jpg","1b7fe470f0f1c3f4791ac46ff12a92f9"],["/img/dpcover.png","fa80e81429635149365765822a8b78d3"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/fccover.jpg","5f47a192346519722b9af1049a906b93"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/stringcover.png","957a5bae4cec33bce7b859ce2937ec81"],["/img/vectorcover.png","a94c08c44f35f609dd3b22d4f0f494b6"],["/index.html","272e04d2dffaa611472f66b7f8342dfd"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/sw-register.js","eb255ed4c7ea916228d6f1ae9d326ea7"],["/tags/DP/index.html","1dd7b4f69c2eae56fc65f6c81abea745"],["/tags/STL/index.html","3e344852081921a4bbb13d65de255021"],["/tags/数学/index.html","ee6a6e990dafd51edb0edb1728245be0"],["/tags/算法/index.html","d0ad60e35461e8658972d7280e46ae22"],["/tags/贪心/index.html","7043727a5c43ecfa1414252db5329a62"],["/tags/题解/index.html","a517ec88becd24b75ed306d4a6e9c4c4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
