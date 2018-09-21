$(function(){
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            console.log(res);
            var html = template("addressTpl",{result:res});
            $("#address-box").html(html);
        }
    })
});
