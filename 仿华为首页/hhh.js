function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}

//main
//{ 
var index1=0;
var timer=null;
var pics1=[byId('mpic1'),byId('mpic2'),byId('mpic3')];
var middle1=byId('middle1');
middle1.onmouseover=function(){   //清除定时器
    if(timer) clearInterval(timer);
}
middle1.onmouseout=function(){   //图片轮播
    timer=setInterval(autochange,2000);  //间歇调用  setTimeout()超时调用
}
middle1.onmouseout();  //不用鼠标滑过自动触发

var dots=byId('dots').getElementsByTagName('span')
for(var d=0;d<3;d++){
    dots[d].id=d;
    dots[d].onclick=function(){
        index1=this.id;
        for(var i=0;i<3;i++)
            dots[i].className=null;
        this.className="active";
        changeImg1();
    }
} 

var index2=0;
var prev=byId('prev');
var next=byId('next');
var pics2=[byId('row1'),byId('row2'),byId('row3')];
prev.onclick=function(){
    if(index2==0)
        index2=2;
    else
        index2--;
    changeImg2();
}
next.onclick=function(){
    if(index2==2)
        index2=0;
    else
        index2++;
    changeImg2();
}

//菜单
var zmenu1=byId('zmenu1');
var zmenu2=byId('zmenu2');
var menu1=byId('men1');
var menu2=byId('men2');
menu1.onclick=function(){zmenu2.style.display='none';zmenu1.style.display='block';}
menu2.onclick=function(){zmenu1.style.display='none';zmenu2.style.display='block';}
zmenu1.onmouseover=function(){zmenu1.style.display='block';}
zmenu2.onmouseover=function(){zmenu2.style.display='block';}
zmenu1.onmouseout=function(){zmenu1.style.display='none';}
zmenu2.onmouseout=function(){zmenu2.style.display='none';}
//}

function autochange(){
    index1++;
    if(index1==3){
        index1=0;
    }
    for(var i=0;i<3;i++)
            dots[i].className=null;
    dots[index1].className="active";
    changeImg1();    
}

function changeImg1(){  //图片切换  
    for(var i=0;i<3;i++){
        pics1[i].style.display='none';
    }
    pics1[index1].style.display='block';
}
 
function changeImg2(){
    for(var i=0;i<3;i++){
        pics2[i].style.display='none';
    }
    pics2[index2].style.display='block';
}