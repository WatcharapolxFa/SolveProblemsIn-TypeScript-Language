function sayHello(){
    console.info("Hello World");
}

function sayWatcharapol(name:string , lastname: string = "None"){
    return name + " "+ lastname;
}
function sumNumber(numberOne : number , numberTwo:number, ...rest:number[]): number
{
    return numberOne + numberTwo + rest.reduce((numberOne,numberTwo)=> numberOne + numberTwo , 0);
}

function addNumber({x,y}:{x: number , y : number}):number
{
    return x+y ;
}
// sayHello();
// console.log("Hello "+ sayWatcharapol("Watcharapol","Yotadee"));
console.log(addNumber({y:5 , x:20}));