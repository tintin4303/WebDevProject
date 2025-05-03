// $("h1").css("color","red")
$("h1").addClass("big-title"); //removeClass()
$("h1").text("Bye");
$("a").attr("href","https://www.yahoo.com");
// $("h1").click(function(){
//     $("h1").css("color","green");
//     setTimeout(function(){
//         $("h1").css("color","purple");
//     },1000)
// });


// for (var i = 0; i < 4; i++) {
//     $("button")[i].addEventListener("click",function(){
//         $("h1").css("color","green");
//         setTimeout(function(){
//             $("h1").css("color","purple");
//         },1000);
//         setTimeout(function(){
//             $("h1").css("color","yellow");
//         },2000);
//     });
// }


$("#click").click(function(){
            $("h1").css("color","green");
            setTimeout(function(){
                $("h1").css("color","purple");
            },1000);
            setTimeout(function(){
                $("h1").css("color","yellow");
            },2000);
        });

$("input").keypress(function(e){
    $("h1").text(e.key)
})

$("h1").on("click", function(){
    $("h1").css("color","red")
})

//.before() .after() .prepend() .append() .show .hide .toggle .fadeIn .fadeOut .fadeToggle
$("#slide").click(function(){
    $("h1").slideToggle();
});

$("#animate").on("click", function(){
    $("h1").animate({opacity:0.5,margin:20})
})
