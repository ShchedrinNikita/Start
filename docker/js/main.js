/* A $( document ).ready() block.
//$( document ).ready(function() {
    console.log( "ready!" );
    $(".boxes > .box").mouseenter(function(){
        showCard($(this).find('.hidden-card'),$(this).find('.hidden-img'))
    })
    $(".boxes > .box").mouseleave(function(){
        hideCard($(this).find('.hidden-card'),$(this).find('.hidden-img'))
    })
});
//var timer = {}
//function showCard(hiddenCard, logo) {
    hiddenCard.css("top","-30%").css("left","-30%")
    clearTimeout(timer)
    timer = setTimeout(function(){
            logo.css("display","flex").css("opacity","1")
    },140)
}
//function hideCard(hiddenCard, logo) {
    hiddenCard.css("top","-250%").css("left","-250%")
    clearTimeout(timer)
    timer = setTimeout(function(){
            logo.css("display","none").css("opacity","0")
    },140)
}*/