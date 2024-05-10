//Data types
/*
//1.Primitive data type:- number, string, boolean, null, undefined
let a:number=10;
a="abc"
let s:string="abc"
s=1
*/

/*
// 2.Non-primitive data type
// Array's, Objects's

let arr: number[] = [1, 2, 3, 4, 5, 6]
let arr: Array<number> = [1, 2, 3, 4, 5, 6]
arr.push("abc")
*/

// type

type Person = {
    name: string;
    email: string;
    id: number;
    pin: number;
    status: boolean;
    loan?: number;
};

let person: Person = {
    name: "abc",
    email: "abc@gmail.com",
    id: 1,
    pin: 517651,
    status: true,
    loan: 212
}
// person.address="addres"  //its not possible in typescript

//what keys will be present
//Data types of all the keys

/*
type Users = {
    name: string;
    batch: string;
    id: number;
    status?: boolean;
    score?: number;
}

const users: Users[] = [
    {
        name: "abc",
        batch: "bc",
        id: 2,
        score: 55,
    },
    {
        name: "xyz",
        batch: "yz",
        id: 3,
        score: 66,
        status:true,
    }
]
// console.log(users);
*/

/*
function sum1(a: number, b: number): number {
    return a + b
}

function sum2(a: number=10, b: number): string {
    return `${a + b}`
}

function sum3(a: number, b: number, c: (c:number,d:number) => string): string {
    return `${a + b}`
}
*/

//ENUMs

//Tuple

// let user = {
//     name:"abc",
//     batch:"RCT211",
//     id:1,
//     status:true,
// };
/*
// let user: [string, string, number, boolean] = ["abc", "RCT211", 1, true]
//            OR
type Tuple = [string, string, number, boolean]
let user: Tuple = ["abc", "RCT211", 1, true]

// user[0] //name
*/

/*
let a: number | string = 12
a = "12";

// let arr:(number|string)[] =[1,2,3,4,"5"];
//      OR
let arr: Array<number | string> = [1, 2, 3, 4, "5"];

//union and intersection

type User = {
    name: string;
    id: number;
    status?: boolean | string;
};

type Student = {
    score?: number;
}

let user: User & Student = {
    name: "abc",
    id: 1,
    status: "no",
    score: 212

}
*/

/*
//GENERIC FUNCTION

//useState()

function useState<T>(state: T): T {
    return state
}

useState<number>(5);
useState<string>("")
useState<boolean>(false)
*/

//CLASS

//fuelTypes=> "Disel","Petrol","Electric","CNG"
type FuelType = "Disel" | "Petrol" | "CNG" | "Electirc"

class Car {
    name: string;
    brand: string;

    constructor(name: string, brand: string) {
        this.name = name;
        this.brand = brand;
    }
}


class Thar extends Car {
    drive: number;
    color: string;
    fuelType: FuelType
    constructor(name: string, brand: string, drive: number, color: string, fuelType: FuelType) {
        super(name, brand);
        this.drive = drive;
        this.color = color;
        this.fuelType = fuelType
    }

    fuelTypes(a: string): string {
        return a;
    }
}

let myCar = new Thar("Thar", "Mahindra", 4, "black", "Disel")


// let fun = (a: number, b: number): number => {
//     return a + b;
// }

function arr(a: number, b: number): number[] {
    return [a, b];
}


//interface
let Obj: ObjType = {
    title: "Example",
    status: true,
    id: 123
};

interface ObjType {
    title: string;
    status: boolean;
    id: number;
}