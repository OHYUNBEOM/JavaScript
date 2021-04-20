function big(a,b)
{
    if(a>b)
    {
        console.log(a+"가"+b+"보다 큽니다");
    }
    else if(a<b)
    {
        console.log(a+"가"+b+"보다 작습니다");
    }
    else
    {
        console.log(a+"와"+b+"는 같습니다")
    }
}
big(10,20);
big(20,10);
big(100,100);