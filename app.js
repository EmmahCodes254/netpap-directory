$(document).ready(function(){
    $(".dropdown").click(function(){
        $(".dropdown-list ul").toggleClass("active")
    });


    //dropdown selection
    $(".dropdown-list ul li").click(function(){
        var icon_text = $(this).html();
        $(".default-option").html(icon_text);
    });

    //hide dropdown when you click outside
    $(document).on("click",function(event){
        if(!$(event.target).closest(".dropdown").length){
            $(".dropdown-list ul").removeClass("active")
        }
    });
});