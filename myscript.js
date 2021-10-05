var img = ["img/dance1.png","img/dance2.png","img/dance3.png","img/dance4.png","img/dance5.png"];
var t =300;
var i =0;
function dance_img(){
    // for(var i =0 ; ; i++){
    //     document.getElementById("dd").src = img[i];    
    // }
    document.getElementById("dd").src = img[i];
    i++;
    setTimeout("dance_img()",t);
    if(i+1>img.length){
        i=0;
    }
    // document.getElementById("dd").src = img[0];
}
function stop(){
    location.reload();
}
