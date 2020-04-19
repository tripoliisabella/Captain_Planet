$(document).ready(function(){
   
    var growBtn = $("#grow");
    var shrinkBtn = $("#shrink");
    var normalBtn = $("#normal");
    var img = $("#captainImg");

    growBtn.on("click", function(){
        img.animate({width: "600px"})
    })

    shrinkBtn.on("click", function(){
        img.animate({width: "200px"});
    })

    normalBtn.on("click", function(){
        img.animate({width: "400px"});
    })
});