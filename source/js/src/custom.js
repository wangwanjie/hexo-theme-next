/*页面载入完成后，修改手机上跳转 github 样式 */
!function (e, t, a) {
    var browser = {
        versions: function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), // || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1
                //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    if (browser.versions.mobile) {
        var headerStr = '<div class="site-nav-toggle">' +
            '    <button aria-label="切换导航栏">' +
            '      <span class="btn-bar"></span>' +
            '      <span class="btn-bar"></span>' +
            '      <span class="btn-bar"></span>' +
            '    </button>' +
            '  </div>' +
            '  <div class="site-meta ">' +
            '    <div class="custom-logo-site-title">' +
            '      <a href="/" class="brand" rel="start" style="opacity: 1;">' +
            '        <span class="logo-line-before"><i class="" style="transform: translateX(100%);"></i></span>' +
            '        <span class="site-title" style="opacity: 1; top: 0px;">VanJay\'s Blog</span>' +
            '        <span class="logo-line-after"><i class="" style="transform: translateX(-100%);"></i></span>' +
            '      </a>' +
            '    </div>' +
            '        <p class="site-subtitle" style="opacity: 1; top: 0px;">一个爱折腾工程师的全栈梦</p>' +
            '  </div>';
        $('.header .site-brand-wrapper').html(headerStr);
    }
}(window, document);