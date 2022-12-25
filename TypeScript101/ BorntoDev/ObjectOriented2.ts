class Point {
    x : number = 0  ; 
    y : number = 0 ;
    readonly version:string ="1.0.1";
    constructor(x : number = 0 , y : number = 0 ){
        this.x = x ;
        this.y = y ; 
    }
}
const point = new Point(10,20);
console.log(`${point.x}  ${point.y}`)
class Points{
    _x:number;
    get x() : number{
        return this._x ;
    }
    set x(value:number){
        this._x = value ;
    }
}
const points = new Point();


class Person{
    name : string = "";
    constructor (name){
        this.name = name ; 
    }
    sayHi(){
        console.log (`Hi , I'm ${this.name}`);
    }
}

class Employee extends Person{
    salary:number = 0 ; 
    constructor (name,salary:number){
        super(name);
    }
    sayHi(){
        super.sayHi();
        console.log (`Salary: ${this.salary}`);
    }
}

