import { New2 } from "./class2";
import { Weekend } from "./enum";
import { Student, Person } from "./student.interface";
export class New {
  newClass;
  constructor() {
    this.newClass = new New2();
  }

  //arrays
  arr1: number[] = [1, 2, 3, 4];

  //using union type
  arr2: (string | number)[] = [1, 2, 3, 4, 6, "obinna"];
  name: string | number = 200;

  //using an extended interface
  newPerson: Person = {
    name: "Obi",
    age: 20,
    height: "16ft",
    married: true,
  };
  //using an interface
  newStudent: Student = { name: "Mag", age: 12, height: "12ft" };

  //using tuple
  students: [number, number, string] = [10, 20, "magnus"];

  async new() {
    this.newClass.new1();
    console.log(Weekend.Friday);
    console.log(...this.arr2);
    console.log(this.name);
    console.log(this.arr1);
    console.log(this.students);
  }

  //generics definition;
  // getItem = <T>(arr: Array<T>) => {
  //   console.log(arr);
  // };

  getItem<T>(arr: Array<T>) {
    console.log(arr);
  }
}

//enums

//instance of the class
const n = new New();
n.new();

//calling generics
const data = n.getItem([1, 2, 3, 4]);
const data2 = n.getItem(["Obi", "Imma", "Use"]);

//numbers
//booleans
//array
//tuple - typed array with a predefined length and types for each index
//union - for variable that will accept two or more types
//enums - for contanst
//interface - object type definition
//extend interface
//Access modifiers - (private, public & protected)
//Optional Properties interface - Object typing
//readonly interface property - cannot be reassigned
