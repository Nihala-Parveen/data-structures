function nihala() {
    return harif()
}

function harif() {
    return shinas() 
}

function shinas(){
    return shameera()
}

function shameera() {
    return fazal()
}

function fazal() { //base
    return true
}

//console.log(nihala());

function lunch( person ) {
    if ( person === 5 ) return true
    console.log(person);
    return lunch(person+1)
}
console.log("outcome" , lunch(1));