$("form span").hide();

$("#pwd").keyup(pwderrmsg).keyup(togglesubmit).focus(showpwdreqbox).blur(hidepwdreqbox);
$("#pwdconf").keyup(pwdconferrmsg).keyup(togglesubmit);


function chkpwdlen() {
    return $("#pwd").val().length >= 8;
}


function chkpwdmatch() {
    return $("#pwdconf").val() === $("#pwd").val();
}


function cansubmit() {
    return chkpwdlen() && chkpwdmatch();
}


function showpwdreqbox() {
    $("#pwdreq").show();
}


function hidepwdreqbox() {
    $("#pwdreq").hide();
}


/** 
 * Show error message in span tags if pwd invalid
*/
function pwderrmsg() {
    if(chkpwdlen()) {
        $(this).next().hide();
    }
    else {
        $(this).next().show();
    }
}


/** 
 * Show error message in span tags if pwd conf invalid
*/
function pwdconferrmsg() {
    if(chkpwdmatch()) {
        $(this).next().hide();
    }
    else {
        $(this).next().show();
    }
}


/** 
 * Gray out the submit button if fields are invalid
*/
function togglesubmit() {
    $("#submit").prop("disabled", !cansubmit());
    if(!cansubmit()) {
        $("#submit").css({background: "#808080", color: "#000"});
    }
    else {
        $("#submit").css({background: "#ff8c00", color: "#fff"});
    }
}