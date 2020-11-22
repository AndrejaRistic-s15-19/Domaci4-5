$(document).ready(function (){
    $(".ikonica").click(function (){
        $(".dropdown-content").slideToggle(500);
    })
    if($(".ikonica").css("display") == "none"){
        $(".dropdown-content").css("display","none");
    }
})  