$("form span").hide();

$("#pwd").keyup(pwderrmsg);
$("#pwdconf").keyup(pwdconferrmsg);


/** 
 * Returns true if pwd is 8 char or over, false otherwise
*/
function chkpwdlen() {
    return $("#pwd").val().length >= 8;
}


/** 
 * Return true if text in pwd confirmation field matches first pwd
*/
function chkpwdmatch() {
    return $("#pwdconf").val() === $("#pwd").val();
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