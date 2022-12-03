//1. Classes - done
//2. Functions - done
//3. Arrays - done
//4. Conditional - defined
//5. Loops - done
//6. This Keyword - done
//7. async/Await
//8. Constructor - done

class Robot {
  //defined instance properties
  //   name = "Alicia";
  //   height = "6.5ft";
  //   color = "brown";

  robotProperties = {
    name: "Alicia",
    height: "6.5ft",
    color: "brown",
  };

  //defined an array
  listofClothes = ["black", "yellow", "red", "purple"];

  constructor(_name, _height, _color) {
    this.robotProperties.name = _name;
    this.robotProperties.height = _height;
    this.robotProperties.color = _color;
  }

  //defining a function
  findClothSpecified() {
    //define a loop
    for (let i = 0; i < this.listofClothes.length; i++) {
      //define a conditions
      if (this.listofClothes[i] == "yellow") {
        console.log(`Initializing Robot ${this.robotProperties.name}`);
        console.log(`My height is ${this.robotProperties.height}`);
        console.log(`my color is ${this.robotProperties.color}`);
        console.log(`Hi master i found the ${this.listofClothes[i]} cloth`);
        this.bringClothToTheRoom();
        return;
      } else {
        console.log(
          `Hi master i found the ${this.listofClothes[i]} cloth, seems yellow does not exist`
        );
      }
    }
  }

  bringClothToTheRoom() {
    console.log("Bring the cloth to you");
  }
}

const alicia = new Robot("demtere", "7ft", "white");
console.log(alicia.findClothSpecified());
