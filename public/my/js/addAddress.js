$(function(){
    var picker = new mui.PopPicker({layer:3});

    picker.setData(cityData);

    $("#selectCity").on("tap",function(){
        picker.show(function(selectItems){
            selectItems[0].text;
            selectItems[1].text;
            selectItems[2].text;
            $("#selectCity").val(selectItems[0].text + selectItems[1].text + selectItems[2].text );

        })
    })

    $("#addAddress-btn").on("tap",function(){
        var username = $("[name='username']").val();
        var postCode = $("[name='postCode']").val();
        var selectCity = $("[name='selectCity']").val();
        var detial = $("[name='detial']").val();

        if(!username){
            mui.toast("请输入收货人姓名");
            return;
        }
        if(!postCode){
            mui.toast("请输入正确的邮编");
            return;
        }
        if(!detial){
            mui.toast("请输入详细地址");
            return;
        }

        $.ajax({
            url:'/address/updateAddress',
            type:'post',
            data:{
                address:selectCity,
                addressDetail:detial,
                recipients:username,
                postcode:postCode
            },
            success:function(res){
                if(res.success){
                    console.log(res);
                    mui.toast('地址添加成功');
                    setTimeout(function(){
                        location.href="address.html";
                    },2000)
                }

            }

        })
         
    })




});