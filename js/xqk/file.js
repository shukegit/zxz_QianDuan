
function next()
{
	count++;
      if(count > 5){
        count = 0;
      }
      catc();
	var div2=document.getElementById("div2");
	var newleft;
	if(div2.style.left=="-4550px")
	{
		newleft=-1300;
	}
	else
	{
	newleft=parseInt(div2.style.left)-650;
	}
	div2.style.left=newleft+"px";
}
function before()
{
	count--;
	if(count<0)
	{
		count=5;
	}
	 catc();
	var div2=document.getElementById("div2");
	var newleft;
	if(div2.style.left=="0px")
	{
		newleft=-3250;
	}
	else
	{
	newleft=parseInt(div2.style.left)+650;
	}
	div2.style.left=newleft+"px";
}
var t = null;
function autoplay()
{
	t=setInterval(function (){
    next();
  },2000);
}
autoplay();
var div1=document.getElementById("div1")
 function stop()
{
	clearInterval(t);
}

function cont()
{
	autoplay();
}

var count=0;
var bot=document.getElementsByTagName("span");
function catc()
{
	for(var i=0,len=bot.length;i<len;i++)
	{
		bot[i].className = "";
	}
	bot[count].className="on";
}
function huan1()
{
	var bot=document.getElementsByTagName("span");
	var x=document.getElementById("div2");
	x.style.left="-650px";
	count=0;
	catc();
}
function huan2()
{
	var bot=document.getElementsByTagName("span");
	var x=document.getElementById("div2");
	x.style.left="-1300px";
	count=1;
	catc();
}
	function huan3()
{
	var bot=document.getElementsByTagName("span");
	var x=document.getElementById("div2");
	x.style.left="-1950px";
	count=2;
	catc();
}
	function huan4()
{
	var bot=document.getElementsByTagName("span");
	var x=document.getElementById("div2");
	x.style.left="-2600px";
	count=3;
	catc();
}
	function huan5()
{
	var bot=document.getElementsByTagName("span");
	var x=document.getElementById("div2");
	x.style.left="-3250px";
	count=4;
	catc();
}
function huan6()
{
	var bot=document.getElementsByTagName("span");
	var x=document.getElementById("div2");
	x.style.left="-3900px";
	count=5;
	catc();
}

