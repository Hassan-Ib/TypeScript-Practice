// console.log("typescript");
// const a = 1;
// console.log(a);

// let namee: string = "name";
// namee = "pelumi";
// console.log(namee);

// // adding type to functions parameters (params: type = defaultValue): return type =>{}
// const getFullName = (name: string, surname: string = "pelumi") => {
//   return name + " " + surname;
// };

// console.log(getFullName("ibrahim", "ayomide"));

// // objects interface, interfaces are specified for objects

// const user: {name: string, age : number} = {
//     name: "hassan",
//     age : 3
// }

// // const user2: { name: string; age: number } = {
// //   name: "jack",
// // };

// // reusable interface

// interface IUser {
//     name: string;
//     age?: number;
//     // function in interface
//     getMessage(): string;
// }

// const newUser: IUser = {
//     name: "hassan",
//     age: 3,
//     getMessage : ()=>{
//         return "Hello" + name
//     }
// }
// console.log(newUser.getMessage());

// // types and unions
// // union operator // union is mostly use for checking for null

// let username : string = "alex";
// let pageName : string | number = "1";

// //checking for null;
// let errorMessage : string | null = null;

// let milkUser : IUser | null = null;

// //type aliases // CREATING YOUR OWN TYPE

// type ID = String | null;

// let popis : ID = null;

// // VOID type, when we return anything from a function
// // the function is void e.g

// const doSomething = (): void =>{
//     console.log("doSomething")
//     //return "wow" // throws  an error
// }

// // ANY type
// // mean your variable can take any data types
// let anny: any = null;

// // NEVER type
// const doSomething1 = (): never => {
//     throw "Never"
//   // means function will never happen
// };

/// UNKNOWN type

// let vANY: any = 10;
// let vUknown: unknown = 10;

// let s1: string = vANY as string;
// let s2: string = vUknown as string;
// console.log(typeof s1);
// console.log(typeof s2);

/// working with DOM // type casting
// let someElement = (document.querySelector(".foo") as HTMLInputElement).value;
// console.log({someElement}); // this will work bcus we cast someElement to HTMLInputElement;

// // working with eventListeners
// let someOtherElement = document.querySelector(".foo");

// someOtherElement.addEventListener("blur", (event)=>{
//     // to access value from input Element with event.taget.value
//     //we have to specify our event to be that of HTMLInputElement
//     const target = event.target as HTMLInputElement
//     console.log("event", target.value);

// })

/// classes

// class User {
//     private firstName : string
//     private lastName : string

//     constructor(firstName :string, lastName: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(): string {
//         return this.firstName + " " + this.lastName
//     }

// }

// const newUser = new User("Monster", "lesson");
// console.log(newUser.getFullName());

// classes with interface

// interface IUser {
//     getFullName(): string
// }
// class User implements IUser{
//   private firstName: string;
//   private lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const newUser = new User("Monster", "lesson");
// console.log(newUser.getFullName());

// private public protected static readonly
// readonly can be intialize at declearation and by constructor only
// private means it can only be accessed in the the class
// public mean it can be accessed anywhere
// protected can be used in class and its children not instances
// classes is used by its class only not istances

/// inheritance

interface IUser {
  getFullName(): string;
}
class User implements IUser {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends User {
  private editor: string = "hassan";

  getEditor() {
    // accessor problem
    return this.editor;
  }
}

const newAdmin = new Admin("foo", "maa");

/// generics

const addGen = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};
