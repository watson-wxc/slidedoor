window.onload=function(){  //匿名函数
	//获取容器对象
	var box = document.getElementById("container");
	//获取图片的集合
	var imgs = box.getElementsByTagName("img");
	//获取单张图片的宽度 476
	var imgWidth = imgs[0].offsetWidth;
	//设置隐藏门体的宽度
	var  exposeWidth = 160;
	//容器的宽度
	var  boxWidth = imgWidth +(imgs.length-1)*exposeWidth;
	box.style.width = boxWidth + 'px';
	//设置每到门的初始位置
	function setImgsPos(){
	  for(var i=1,len=imgs.length;i<len;i++){
		  imgs[i].style.left = imgWidth + exposeWidth *(i-1)+'px';
	  }
	}
	setImgsPos();
	//计算每到门打开时应该移动的距离
	var translate = imgWidth - exposeWidth;
	//为每一道门绑定事件
	
	for(var i=0,len=imgs.length;i<len;i++){
		//为了循环退出以后我们还可以保存不同的i值
		//使用立即调用函数表达式，为了获取不同的i值
		(function(i){
			imgs[i].onmouseover = function(){
				//将每道门复位
				setImgsPos();
				//打开门
				for(var j=1;j<=i;j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate+'px';
				}
			}
		})(i);
	}
};