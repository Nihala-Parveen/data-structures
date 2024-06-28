// Truncate the text if maxlength reached
function truncate( str , maxlength ) {
    if(str.length > maxlength)
        return str.slice( 0 , maxlength ) + "..."
    else 
        return str
}

console.log(truncate("Javascript" , 4 ));