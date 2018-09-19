$(function(){
//修改密码
    /*1.获取修改密码按钮并添加点击事件
     * 2.获取用户输入的信息
     * 3.对用户输入的信息做校验
     * 4.调用修改密码接口，实现修改密码功能
     * 5.跳转到登陆页面，重新登陆*/
    $(".modify-btn").on('tap',function(){
        var originPass = $("[name = 'originPass']").val().trim();
        var newPass = $("[name = 'newPass']").val().trim();
        var confirmPass = $("[name = 'confirmPass']").val().trim();
        var vCode = $("[name = 'vCode']").val();
        if(!originPass){
            mui.toast("请输入原密码");
            return;
        }
        if(!newPass){
            mui.toast("请输入原密码");
            return;
        }
        if(newPass!=confirmPass){
            mui.toast("原密码和新密码不一致");
            return;
        }
        $.ajax({
            url:"/user/updatePassword",
            type:"post",
            data:{
                oldPassword:originPass,
                newPassword:newPass,
                vCode:vCode
            },
            success:function(res){
                if(res.success){
                    mui.toast("修改密码成功");
                    setTimeout(function(){
                        location.href="login.html";
                    },2000);
                }
            }

        })

    });

//获取验证码
    $(".getCode").on('tap',function(){
        $.ajax({
            url:'/user/vCodeForUpdatePassword',
            type:'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    });
})