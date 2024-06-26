$("input").click(function (e) { 
    if($(this).next().css("width")=="600px"){
        $(this).prop("checked",false);
    }
});