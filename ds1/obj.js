const obj = {
    name : "Nihala" ,
    age : 21 ,
    "hai" : 1 ,
    myNma : function(){
        console.log(this.name);
    }
}
obj.hai = "klklkl"
delete obj.hai
console.log(obj);
console.log(obj.name);
console.log(obj['age']);
console.log(obj['hai']);
obj.myNma()