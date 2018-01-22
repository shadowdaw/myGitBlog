function request(url, method, params, successCallback, errorCallback) {
    var formData = new FormData();
    for (key in params) {
        formData.append(key, params[key]);

    }
    //创建xhr对象
    var xhr = new XMLHttpRequest();
    //设置xhr请求的超时时间
    xhr.timeout = 5000;
    //设置响应返回的数据格式
    xhr.responseType = "json";
    //创建一个 post 请求，采用异步
    xhr.open(method, url, true);
    //注册相关事件回调处理函数
    xhr.onload = function(e) {
        if (this.status == 200 || this.status == 304) {
            if (successCallback && successCallback instanceof Function) {
                successCallback(this.response.data);
            }
        }
    };
    xhr.ontimeout = function(e) {
        alert('请求超时，请检查网络!');
    };
    xhr.onerror = function(e) {
        if (errorCallback && errorCallback instanceof Function) {
            errorCallback(err);
        }
        alert('请求错误，请稍后重试!');
    };
    //发送数据
    xhr.send(formData);

} 

function getWechatConifg() {
    request('/wxconfig',
        'GET', { url: encodeURIComponent(window.location.href.split('#')[0]) },
        function(res) {
            var wxconfig = res; 
            wx.config({
                debug: false,
                appId: wxconfig.appId,
                timestamp: wxconfig.timestamp,
                nonceStr: wxconfig.nonceStr,
                signature: wxconfig.signature,
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
            });
        });
} 

function prepareShare(content) {
    wx.ready(function() {
        wx.onMenuShareAppMessage({
            title: content.title, // 分享标题
            desc: content.summary, // 分享描述
            link: content.shareUrl, // 分享链接
            imgUrl: content.imgUrl, // 分享图标
            success: function() { 
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: content.title, // 分享标题
            desc: content.summary, // 分享描述
            link: content.shareUrl, // 分享链接
            imgUrl: content.imgUrl, // 分享图标
            success: function() { 
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
    });
}