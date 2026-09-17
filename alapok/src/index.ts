// export function sayHello(name:string):string{
//    return `Hello, ${name}!`;
//}
//console.log(sayHello("szilasi"));


//let name:string = "Szilasi István";
//name = "Szalkai Krisztian";

//let age:number = 30;
//let price:number = 19.99;

//let isActive:boolean=true;

//let nigNumber:bigint=90090909909n;

//let id:symbol=Symbol("userid");

//let obj={
    //[id]:1,
    //name:"Alice",
    //age:25,
    //isActive:false
//};
//console.log(obj[id]);


//let fuggv:symbol=Symbol("fuggv")
//class Osztaly{
  //  [fuggv](){
    //    return "Osztaly fuggveny";
    //}
//}

//let osztaly:any = new Osztaly();

//let osztalynev = osztaly[fuggv]();

//console.log(osztalynev);
//console.log(obj[id]);

//let name:unknown;
//name=2;
//name=true;
//console.log(name);
//console.log(typeof(name))

//if (typeof(name)==="undefined"){
//    console.log("rosz")
//}

const numbers: number[]=[1,2,3,4,5];
const names:string[]=['Alice','Bob','Cecil','David','Eve']

const numbers2:Array<number>=[6,7,8,9,10]

//const user:[number, string, boolean]=[1,'Alice', true];

enum Role{
    Admin,
    User,
    Guest
}
const userRole:Role=Role.User;
console.log(userRole)

//type User={
//    id:number;
//    name:string;
//    email:string;
//}

//const user:User ={
//    id:1,
//    name:"Jhon dane"
//    email:"asd@gmail.com"
//}

interface User{
    id:number;
    name:string;
    email?:string;
}

const user:User ={
    id:1,
    name:"Jhon dane"
}

console.log(user)