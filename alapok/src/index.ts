/*
export function sayHello(name:string):string{
    return `Hello, ${name}!`;
}
console.log(sayHello("szilasi"));


let name:string = "Szilasi István";
name = "Szalkai Krisztian";
*/
/*
let age:number = 30;
let price:number = 19.99;

let isActive:boolean=true;

let nigNumber:bigint=90090909909n;

let id:symbol=Symbol("userid");

let obj={
    [id]:1,
    name:"Alice",
    age:25,
    isActive:false
};
console.log(obj[id]);
*/

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

//const numbers: number[]=[1,2,3,4,5];
//const names:string[]=['Alice','Bob','Cecil','David','Eve']

//const numbers2:Array<number>=[6,7,8,9,10]

//const user:[number, string, boolean]=[1,'Alice', true];

//enum Role{
//    Admin,
//    User,
//    Guest
//}
//const userRole:Role=Role.User;
//console.log(userRole)

//type User={
//    id:number;
//    name:string;
//    email:string;
//}

//const user:User | null ={
//    id:1,
//    name:"Jhon dane"
//    email:"asd@gmail.com"
//}

//type Userisnull = User | null;

//interface IUser{
//    id:number,
//    name:string,
//    email?:string,
//    avatar?:string
//}

//const userI:IUser ={
//    id:1,
//    name:"Jhon dane",
//    email:"macilacika@gmail.com"
//}

//class User implements IUser{
//    id:number;
//    name:string;
//    email?:string;
//    avatar?:string;
//    isactive?:boolean;
//    constructor(id:number,name:string,email:string,avatar:string) {
//        this.id=id;
//        this.name=name;
//        this.email=email;
//        this.avatar=avatar;
//
//    }
//}

//const user = new User(5,"asd","gmail","fiu")

//console.log(userI);

//type User ={
//    id:number;
//    name:string;
//}


//type Admin ={
//    name:string;
//    permission:string[];
//}

//type UserAdmin = User | Admin | null

//const userAdmin :UserAdmin={
//    id:1,
//    name:"Bence",
//    permission : ["Admin"]
//}
//console.log(userAdmin);

/*
function uzenet(uzi:string):void{
    console.log(uzi)
}

function greet(name:string,title?:string):string{
    if(title){
        return `hello ${title} ${name}`
    }
    return `Hello ${name}`
}
console.log(greet("miki"));

const fuggv =(a:number,b:number):number => a+b;

const user:{
    id:number;
    name:string;
    active:boolean;
}={
    id:1,
    name:"anna",
    active:true
};
const value : unknown = "hello";
const text = <string>value;
//console.log(value.toUpperCase());
console.log(text.toUpperCase());
*/

//--------------------interface MŰveletek
/*
interface User{
    id:number;
    name:string;
    email:string;
    avatar?:string;
}

//csak részét
const updateUser: Partial<User>={
    name:"Bela"
}

//A lehetsegeseket IS
const user:Required<User>={
    name:"Bela",
    id:1,
    email:"asdsafsdf",
    avatar:"asd"
}

//Ezt azt
const UserPreview:Pick<User, "id" | "name">={
    id:2,
    name:"falafel"
}

//MIndent kivéve ezt
const userWithoutId: Omit<User, "id">={
    name:"Anna",
    email:"anna@gmail.com",
    avatar:"valami"
}

//nem modosíthato utolag!
const ReadOnlyUser:Readonly<User>={
    name:"Bela",
    id:1,
    email:"asdsafsdf",
    avatar:"asd"
}
*/

/*
interface User{
    id:number;
    name:string;
    email:string;
    avatar?:string;
}

type UserKey=keyof User;

let b:UserKey;//id|name|email|avatar

function userLeker(user:User,kulcs:UserKey):any{
    return user[kulcs]
}
const user:User={
    name:"Bela",
    id:1,
    email:"asdsafsdf",
    avatar:"asd"
}
console.log(userLeker(user,"name"));

const user2={
    name:"Bela",
    id:1,
    email:"asdsafsdf"
}

type User2 = typeof user2

function kiir(name:string|null):void{
    if(name!==null){
        console.log(name.toUpperCase());
    }
}
*/

interface IUser{
    id:number;
    name:string;
    email:string;
    age:number;
}

const getUser=(): Promise<IUser>=>{
    return new Promise((resolve,reject)=>{
        resolve({id:10,name:"maci",email:"asd@gmail.com",age:30})
    })
}

async function main ():Promise<void>{
    const user:IUser = await getUser();
    console.log(user);
}

main();