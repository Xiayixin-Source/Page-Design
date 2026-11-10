function displayDate(){
	document.getElementById("demo").innerHTML=Date();
	document.getElementById("demo").style.color="red";
}
function changeImage(){
	 element=document.getElementById('myimage');
    if (element.src.match("bulbon")){
        element.src="img/pic_bulboff.gif";
    }
    else{
        element.src="img/pic_bulbon.gif";
    }
}
function changeImage2(){
	 element=document.getElementById('myimage2');
    if (element.src.match("bulbon")){
        element.src="img/pic_bulboff.gif";
    }
    else{
        element.src="img/pic_bulbon.gif";
    }
}
