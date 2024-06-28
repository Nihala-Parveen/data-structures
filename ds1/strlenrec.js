function lenStr ( str) {
    if (str === "") return 0
    return lenStr(str.substr(1)) + 1
}

console.log(lenStr("nihala"));
console.log(lenStr(""));
console.log(lenStr("hai"));
console.log(lenStr("plkhdhdncfjfdcxc"));