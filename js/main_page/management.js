function load()
{
				document.getElementById("management").style.minHeight = window.innerHeight+"px";
}
function getinto(x)
{
	document.getElementById("system"+x).style.visibility = "visible";
	document.getElementById("figcaption"+x).style.opacity = "0";
}
function getout(x)
{
	document.getElementById("system"+x).style.visibility = "hidden";
	document.getElementById("figcaption"+x).style.opacity = "0.5";
}