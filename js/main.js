$(document).ready(function() {
    $("#boton").click(function(){
        if($("#first-name").val() == ''){
            $("#error1").css("display", "block");
            $("#imagen1").css("display", "block");
        }
        if($("#last-name").val() == ''){
            $("#error2").css("display", "block");
            $("#imagen2").css("display", "block");
        }
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $("#error3").css("display", "block");
            $("#imagen3").css("display", "block");
        }
        if($("#password").val() == ''){
            $("#error4").css("display", "block");
            $("#imagen4").css("display", "block");
        }
    });
});