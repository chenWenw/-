//保存的用户信息
var userInfo = null;
//获取用户信息，并且处理用户未登录的问题
$.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    async:false,
    success:function(res){
        console.log(res);
        if(res.error && res.error==400){
            location.href = 'login.html';
        }
        userInfo = res;
    }
});

$(function(){
//退出登录
    $("#logout-btn").on('tap',function(){
        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(res){
                if(res.success){
                    console.log(res);
                    return;
                    mui.toast('退出登录成功');
                    setTimeout(function(){
                        location.href="index.html";
                    },2000)
                }
            }
        })

    });

//展示信息,拼接模板
    var html = template('userTpl',userInfo);
    $("#userInfo-box").html(html);


})