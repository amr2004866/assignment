var mode=document.getElementsByClassName("modelist");
document.getElementsByClassName("bt")[0].addEventListener("click",function(){
for(x of mode){
    if(x.style.display=="none"){x.style.display="block";}
    else x.style.display="none";
}
});

document.getElementById("light").addEventListener("click",function(){

document.documentElement.style.setProperty("--bg-color","white");
document.documentElement.style.setProperty("--third-color","black");
document.documentElement.style.setProperty("--signup-color","white");
document.documentElement.style.setProperty("--signup-ground","black");
document.documentElement.style.setProperty("--text-color","black");
document.documentElement.style.setProperty("--element-ground","grey");
document.documentElement.style.setProperty("--courses-ground","	#FCF5E5");
document.documentElement.style.setProperty("--creat-ground","#E2DFD2");
document.documentElement.style.setProperty("--application-ground","#FFDEAD");
document.documentElement.style.setProperty("--ready1-ground","#E2DFD2");
document.documentElement.style.setProperty("--ready2-ground","#E2DFD2");
document.documentElement.style.setProperty("--apps-ground","#FCF5E5");
document.documentElement.style.setProperty("--footer-ground","#FFDEAD");
document.documentElement.style.setProperty("--coursetext-ground","#FFDEAD");
document.documentElement.style.setProperty("--designt-ground","#FFDEAD");
document.documentElement.style.setProperty("--container-ground","#E2DFD2");
document.documentElement.style.setProperty("--a-color","black");
document.documentElement.style.setProperty("--mode-ground","black");
document.documentElement.style.setProperty("--mode-color","white");
document.documentElement.style.setProperty("--details-ground","white"); 
document.documentElement.style.setProperty("--details-color","black");
document.documentElement.style.setProperty("--adv-color"," #fdf6e4");
document.documentElement.style.setProperty("--secondary-color","black");




});

document.getElementById("dark").addEventListener("click",function(){

document.documentElement.style.setProperty("--bg-color","black");
document.documentElement.style.setProperty("--third-color","white");
document.documentElement.style.setProperty("--a-color","white");
document.documentElement.style.setProperty("--text-color","white");
document.documentElement.style.setProperty("--signup-color","white");
document.documentElement.style.setProperty("--signup-ground","blue");
document.documentElement.style.setProperty("--element-ground","grey");
document.documentElement.style.setProperty("--courses-ground","	#111184");
document.documentElement.style.setProperty("--creat-ground","#070738");
document.documentElement.style.setProperty("--application-ground","#070738");
document.documentElement.style.setProperty("--ready1-ground","#070738");
document.documentElement.style.setProperty("--ready2-ground","#070738");
document.documentElement.style.setProperty("--apps-ground","black");
document.documentElement.style.setProperty("--footer-ground","#070738");
document.documentElement.style.setProperty("--coursetext-ground","white");
document.documentElement.style.setProperty("--designt-ground","white");
document.documentElement.style.setProperty("--container-ground","black");
document.documentElement.style.setProperty("--mode-ground","white");
document.documentElement.style.setProperty("--mode-color","black");
document.documentElement.style.setProperty("--details-ground","black");
document.documentElement.style.setProperty("--details-color","white");
document.documentElement.style.setProperty("--adv-color","black");
document.documentElement.style.setProperty("--secondary-color","white");


});
document.getElementById("light").addEventListener("click",function(){

for(x of mode){
    x.style.display="none";
}
});


document.getElementById("dark").addEventListener("click",function(){

for(x of mode){
    x.style.display="none";
}
});

 var options=document.getElementById("custom");
 var list=document.getElementsByClassName("customlist")[0];
 var themes=document.getElementsByClassName("theme")[0];
 var active=document.getElementById("submit");
 list.style.visibility="hidden";
 options.addEventListener("click",function(){
    if(list.style.visibility==="hidden"){list.style.visibility="visible"}
    else list.style.visibility="hidden" ;

    

 });
themes.addEventListener("click",function(){
    if(themes.style.backgroundColor==""){themes.style.backgroundColor="yellow"}
    else themes.style.backgroundColor="";
 });

active.addEventListener("click",function(){
    
    if(themes.style.backgroundColor=="yellow"){
 document.documentElement.style.setProperty("--bg-color","#fcdf4f");
document.documentElement.style.setProperty("--third-color","white");
document.documentElement.style.setProperty("--a-color","black");
document.documentElement.style.setProperty("--text-color","black");
document.documentElement.style.setProperty("--signup-color","black");
document.documentElement.style.setProperty("--signup-ground","yellow");
document.documentElement.style.setProperty("--element-ground","grey");
document.documentElement.style.setProperty("--courses-ground","#97852f");
document.documentElement.style.setProperty("--creat-ground","#7e6f27");
document.documentElement.style.setProperty("--application-ground","#4b4217");
document.documentElement.style.setProperty("--ready1-ground","#64591f");
document.documentElement.style.setProperty("--ready2-ground","#64591f");
document.documentElement.style.setProperty("--apps-ground","black");
document.documentElement.style.setProperty("--footer-ground","#4b4217");
document.documentElement.style.setProperty("--coursetext-ground","white");
document.documentElement.style.setProperty("--designt-ground","white");
document.documentElement.style.setProperty("--container-ground","#322c0f");
document.documentElement.style.setProperty("--mode-ground","black");
document.documentElement.style.setProperty("--mode-color","#b09c37");
document.documentElement.style.setProperty("--details-ground","#e2c847");
document.documentElement.style.setProperty("--details-color","white");
document.documentElement.style.setProperty("--adv-color","#c9b23f");
document.documentElement.style.setProperty("--secondary-color","black");
localStorage.setItem("lasttheme","active");
    }

})





active.addEventListener("click",function(){
    if(list.style.visibility=="hidden")list.style.visibility="visible";
    else list.style.visibility="hidden";
})

reset.addEventListener("click",function(){

 document.documentElement.style.setProperty("--bg-color"," #f9c265");
document.documentElement.style.setProperty("--third-color","white");
document.documentElement.style.setProperty("--a-color","black");
document.documentElement.style.setProperty("--text-color","black");
document.documentElement.style.setProperty("--signup-color","white");
document.documentElement.style.setProperty("--signup-ground","black");
document.documentElement.style.setProperty("--element-ground","white");
document.documentElement.style.setProperty("--courses-ground","black");
document.documentElement.style.setProperty("--creat-ground","white");
document.documentElement.style.setProperty("--application-ground","#fdf6e4");
document.documentElement.style.setProperty("--ready1-ground","white");
document.documentElement.style.setProperty("--ready2-ground","#fdf6e4");
document.documentElement.style.setProperty("--apps-ground","black");
document.documentElement.style.setProperty("--footer-ground","#fdf6e4");
document.documentElement.style.setProperty("--coursetext-ground","white");
document.documentElement.style.setProperty("--designt-ground","#f9c265");
document.documentElement.style.setProperty("--container-ground","black");
document.documentElement.style.setProperty("--mode-ground","black");
document.documentElement.style.setProperty("--mode-color","white");
document.documentElement.style.setProperty("--details-ground","white");
document.documentElement.style.setProperty("--details-color","black");
document.documentElement.style.setProperty("--adv-color"," #fdf6e4");
document.documentElement.style.setProperty("--secondary-color","black");
localStorage.setItem("lasttheme","reset");

})
reset.addEventListener("click",function(){
    if(list.style.visibility=="hidden")list.style.visibility="visible";
    else list.style.visibility="hidden";
})






//local storage

var last=localStorage.getItem("lasttheme");
if(last==="active"){

 document.documentElement.style.setProperty("--bg-color","#fcdf4f");
document.documentElement.style.setProperty("--third-color","white");
document.documentElement.style.setProperty("--a-color","black");
document.documentElement.style.setProperty("--text-color","black");
document.documentElement.style.setProperty("--signup-color","black");
document.documentElement.style.setProperty("--signup-ground","yellow");
document.documentElement.style.setProperty("--element-ground","grey");
document.documentElement.style.setProperty("--courses-ground","#97852f");
document.documentElement.style.setProperty("--creat-ground","#7e6f27");
document.documentElement.style.setProperty("--application-ground","#4b4217");
document.documentElement.style.setProperty("--ready1-ground","#64591f");
document.documentElement.style.setProperty("--ready2-ground","#64591f");
document.documentElement.style.setProperty("--apps-ground","black");
document.documentElement.style.setProperty("--footer-ground","#4b4217");
document.documentElement.style.setProperty("--coursetext-ground","white");
document.documentElement.style.setProperty("--designt-ground","white");
document.documentElement.style.setProperty("--container-ground","#322c0f");
document.documentElement.style.setProperty("--mode-ground","black");
document.documentElement.style.setProperty("--mode-color","#b09c37");
document.documentElement.style.setProperty("--details-ground","#e2c847");
document.documentElement.style.setProperty("--details-color","white");
document.documentElement.style.setProperty("--adv-color","#c9b23f");
document.documentElement.style.setProperty("--secondary-color","black");


}
else if(last==="reset"){

 document.documentElement.style.setProperty("--bg-color"," #f9c265");
document.documentElement.style.setProperty("--third-color","white");
document.documentElement.style.setProperty("--a-color","black");
document.documentElement.style.setProperty("--text-color","black");
document.documentElement.style.setProperty("--signup-color","white");
document.documentElement.style.setProperty("--signup-ground","black");
document.documentElement.style.setProperty("--element-ground","white");
document.documentElement.style.setProperty("--courses-ground","black");
document.documentElement.style.setProperty("--creat-ground","white");
document.documentElement.style.setProperty("--application-ground","#fdf6e4");
document.documentElement.style.setProperty("--ready1-ground","white");
document.documentElement.style.setProperty("--ready2-ground","#fdf6e4");
document.documentElement.style.setProperty("--apps-ground","black");
document.documentElement.style.setProperty("--footer-ground","#fdf6e4");
document.documentElement.style.setProperty("--coursetext-ground","white");
document.documentElement.style.setProperty("--designt-ground","#f9c265");
document.documentElement.style.setProperty("--container-ground","black");
document.documentElement.style.setProperty("--mode-ground","black");
document.documentElement.style.setProperty("--mode-color","white");
document.documentElement.style.setProperty("--details-ground","white");
document.documentElement.style.setProperty("--details-color","black");
document.documentElement.style.setProperty("--adv-color"," #fdf6e4");
document.documentElement.style.setProperty("--secondary-color","black");



}
