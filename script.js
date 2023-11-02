var header = document.getElementById("header")
var ms = document.getElementById("models")
var m3 = document.getElementById("model3")
var mx = document.getElementById("modelx")
var my= document.getElementById("modely")
var ml= document.getElementById("model")
var st= document.getElementById("st")
var st1= document.getElementById("st1")
var sp= document.getElementById("sp")
var mi=document.getElementById("mi")






ms.onclick=function(){
    header.style.backgroundImage='url(images/image-1.png)'
    ml.innerHTML="Model S"
    st.innerHTML="1.9 s"
    st1.innerHTML="60 mph"
    sp.innerHTML="200 mph"
    mi.innerHTML="396 mi"
}
m3.onclick=function(){
    header.style.backgroundImage='url(images/image-2.png)'
    ml.innerHTML="Model 3"
    st.innerHTML="2.9 s"
    st1.innerHTML="70 mph"
    sp.innerHTML="220 mph"
    mi.innerHTML="350 mi"



}
mx.onclick=function(){
    header.style.backgroundImage='url(images/image-3.png)'
    ml.innerHTML="Model X"
    st.innerHTML="3.9 s"
    st1.innerHTML="80 mph"
    sp.innerHTML="240 mph"
    mi.innerHTML="546 mi"



}
my.onclick=function(){
    header.style.backgroundImage='url(images/image-4.png)'
    ml.innerHTML="Model Y"
    st.innerHTML="4.9 s"
    st1.innerHTML="50 mph"
    sp.innerHTML="230 mph"
    mi.innerHTML="496 mi"



}


