$(function(){
// 一级分类
	$.ajax({
		type:'get',
		url:'/category/queryTopCategory',
		success:function(result){	
			$('#leftCate').html(template('leftCateTpl',{data:result.rows}))
			//如果一级分类有数据的话
			if(result.rows.length > 0){
				var id = result.rows[0].id;
				$.ajax({
					type:'get',
					url:'/category/querySecondCategory',
					data:{
						id:id
					},
					success:function(result){
						$('#rightCate').html(template('rightCateTpl',{data:result.rows}))
						//给第一个一级分类添加选中状态
						$('#leftCate').find('a:first-child').addClass('active');

					}
				})
			}

		}
	});
// 二级分类
	$('body').on('tap','.getSecond',function(){
		
		var id = $(this).attr('data-id');

		$(this).addClass('active').siblings().removeClass('active');

		$.ajax({
			type:'get',
			url:'/category/querySecondCategory',
			data:{
				id:id
			},
			success:function(result){
				$('#rightCate').html(template('rightCateTpl',{data:result.rows}))
			}
		})

	});

})