$("form span").hide();

$("#pwd").keyup(errmsg);


/** 
 * Returns true if pwd is 8 char or over, false otherwise
*/
function chkpwdlen() {
    return $("#pwd").val().length >= 8;
}


/** 
 * Show error message in span tags if pwd invalid
*/
function errmsg() {
    if(chkpwdlen()) {
        $(this).next().hide();
    }
    else {
        $(this).next().show();
    }
}