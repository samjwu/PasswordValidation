$("form span").hide();

$("#pwd").keyup(chkpwd).keyup(togglesubmit).focus(showpwdreqbox).blur(hidepwdreqbox);
$("#pwdconf").keyup(pwdconferrmsg).keyup(togglesubmit).focus(pwdconferrmsg).blur(hidepwdconf);


function chkpwd() {
    var pwdinput = $("#pwd").val();
    
    if(pwdinput.length < 8) {
        $("#length").removeClass("valid").addClass("invalid");
    }
    else {
        $("#length").removeClass("invalid").addClass("valid");
    }

    if(!pwdinput.match(/[a-zA-Z]/)) {
        $("#alpha").removeClass("valid").addClass("invalid");
    }
    else {
        $("#alpha").removeClass("invalid").addClass("valid");
    }

    if(!pwdinput.match(/\d/)) {
        $("#numeric").removeClass("valid").addClass("invalid");
    }
    else {
        $("#numeric").removeClass("invalid").addClass("valid");
    }
}


function chkpwdmatch() {
    return $("#pwdconf").val() === $("#pwd").val();
}


function cansubmit() {
    return chkpwd() && chkpwdmatch();
}


function showpwdreqbox() {
    $("#pwdreq").show();
}


function hidepwdreqbox() {
    $("#pwdreq").hide();
}


function hidepwdconf() {
    $("#pwdcon span").hide();
}


function pwderrmsg() {
    if(chkpwdlen()) {
        $(this).next().hide();
    }
    else {
        $(this).next().show();
    }
}


function pwdconferrmsg() {
    if(chkpwdmatch()) {
        $(this).next().hide();
    }
    else {
        $(this).next().show();
    }
}


function togglesubmit() {
    $("#submit").prop("disabled", !cansubmit());
    if(!cansubmit()) {
        $("#submit").css({background: "#808080", color: "#000"});
    }
    else {
        $("#submit").css({background: "#ff8c00", color: "#fff"});
    }
}