class Human{
    name : string = '' ;
    lastname : string = ''; 
    age : number = 0 ;

    sayHello(){
        return "Hello ! I'm "+this.name +" and "+this.age +" year old.";
    }
}

const userOne : any = new Human();
userOne.name = 'Watcharapol';
userOne.age = 20
console.log(userOne.sayHello());