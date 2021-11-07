var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {

    var btn=this.innerHTML;
    console.log(btn);
    shout(btn);
    
  });
}
document.addEventListener("keypress",function(event){
    console.log(event);
    var key= event.key;
    shout(key);
    
})
function shout(key){
    switch(key)
    {
        case 'w': new Audio("bits1.wav").play();
        case 'a': new Audio("bits2.wav").play();
        case 's': new Audio("bits3.wav").play();
        case 'd': new Audio("bits4.wav").play();
        case 'j': new Audio("bits5.wav").play();
        case 'k': new Audio("bits6.wav").play();
        case 'l': new Audio("bits7.wav").play();
    }
    btn_flash(key);
}
function btn_flash(key){
    var btn=document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100)
}