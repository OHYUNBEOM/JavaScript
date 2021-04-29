var Link = {
    setcolor:function (color)
    {
        // var alist = document.querySelectorAll('a');
        // var i=0;
        //     while(i<alist.length)
        //     {
        //         alist[i].style.color=color;
        //         i+=1;
        //     }
        $('a').css('color',color);//모든 a 태그를 jquery 로 제어하겠다 + css 함수를 통해 color 라는 이름의 것들을 color 로 변경하겠다
    }
}//Link 라는 객체 생성 후 , setcolor 라는 function (함수) 생성
var Body = {
    setcolor:function (color)
    {
       // document.querySelector('body').style.color=color;
        $('body').css('color',color);
    }, // 객체 끼리 구분하기위해 , 필요
    setBackgroundcolor:function (color)
    {
        $('body').css('backgroundColor',color);
        //document.querySelector('body').style.backgroundColor=color;
    }
}//Body 라는 객체 생성 후 , setcolor / setbackground 라는 함수 생성
function nightdayhandler(self)  
{
    var target=document.querySelector('body');
    if(self.value==='night')
    {
    Body.setBackgroundcolor('black');
    Body.setcolor('white');
    self.value = 'day';

    Link.setcolor('powderblue');
    }
    else 
    {
    Body.setBackgroundcolor('white');
    Body.setcolor('black');
    self.value = 'night';
    Link.setcolor('purple');
    }
}