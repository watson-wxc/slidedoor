window.onload=function(){  //��������
	//��ȡ��������
	var box = document.getElementById("container");
	//��ȡͼƬ�ļ���
	var imgs = box.getElementsByTagName("img");
	//��ȡ����ͼƬ�Ŀ�� 476
	var imgWidth = imgs[0].offsetWidth;
	//������������Ŀ��
	var  exposeWidth = 160;
	//�����Ŀ��
	var  boxWidth = imgWidth +(imgs.length-1)*exposeWidth;
	box.style.width = boxWidth + 'px';
	//����ÿ���ŵĳ�ʼλ��
	function setImgsPos(){
	  for(var i=1,len=imgs.length;i<len;i++){
		  imgs[i].style.left = imgWidth + exposeWidth *(i-1)+'px';
	  }
	}
	setImgsPos();
	//����ÿ���Ŵ�ʱӦ���ƶ��ľ���
	var translate = imgWidth - exposeWidth;
	//Ϊÿһ���Ű��¼�
	
	for(var i=0,len=imgs.length;i<len;i++){
		//Ϊ��ѭ���˳��Ժ����ǻ����Ա��治ͬ��iֵ
		//ʹ���������ú������ʽ��Ϊ�˻�ȡ��ͬ��iֵ
		(function(i){
			imgs[i].onmouseover = function(){
				//��ÿ���Ÿ�λ
				setImgsPos();
				//����
				for(var j=1;j<=i;j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate+'px';
				}
			}
		})(i);
	}
};