$(function(){
    //轮播图的滚动
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:1000
    });
    //页面的滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
})

