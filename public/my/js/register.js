
//实现注册功能
/*1.给注册按钮添加点击事件
 * 2.获取用户注册的信息
 * 3.表单校验
 * 4.调用数据接口，实现注册功能
 * 5.给出提示，告诉用户是否注册成功
 * 6.成功后跳转到登陆页面*/
$(function(){
    //注册
    $(".register-btn").on('tap',function(){
        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againPass"]').val();
        var vCode = $('[name="vCode"]').val();
        if(!username){
            mui.toast('请输入用户名!');
            return;
        }
        if(mobile.length!=11){
            mui.toast('请输入合法的手机号!');
            return;
        }
        if(password!=againPass){
            mui.toast('两次输入的密码不一样!');
            return;
        }

        $.ajax({
            url:'/user/register',
            type:'post',
            data:{username:username,
                password:password,
                mobile:mobile,
                vCode:vCode
            },
            success:function(res){
                mui.toast('注册成功!');
                setTimeout(function(){
                    location.href="login.html";
                },2000);

            }
        })

    });

    //获取验证码
    $(".getCode").on('tap',function(){
        $.ajax({
            url:'/user/vCode',
            type:'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    });


})