$(function(){
    //�ֲ�ͼ�Ĺ���
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:1000
    });
    //ҳ��Ĺ���
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
})

