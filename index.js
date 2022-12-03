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
    name = "Alicia";
    height = "6.5ft";
    color = "brown";
  
    //defined an array
    listofClothes = ["black", "red", "purple"];
  
    constructor() {}
  
    //defining a function
    findClothSpecified() {
      //define a loop
      for (let i = 0; i < this.listofClothes.length; i++) {
        //define a conditions
        if (this.listofClothes[i] == "yellow") {
          console.log(`Hi master i found the ${this.listofClothes[i]} cloth`);
        } else {
          console.log(
            `Hi master i found the ${this.listofClothes[i]} cloth, seems yellow does not exist`
          );
        }
      }
    }
  
    // async bringClothToTheRoom() {}
  }
  
  const alicia = new Robot();
  console.log(alicia.findClothSpecified());
  