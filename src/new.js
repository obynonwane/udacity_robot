// 1. Class - done
// 2. Function - done
// 3. Loops - done
// 4. Conditional
// 5. Object
// 6. this keyword - done
// 7. cli/terminal
// 8. Arrays - done
// 9. properties - done
//Problem statement: build a robot system that search through
//a basket of plate and retrives requested plate.

//defined a class
class Robot {
  constructor(_name, _color, _height) {
    this.robotProps.name = _name;
    this.robotProps.color = _color;
    this.robotProps.height = _height;
  }

  robotProps = {
    name: "alicia",
    color: "brown",
    height: "6.1ft",
    plateColor: "purple",
  };

  //defined an array
  basketOfPlates = ["yellow", "black", "blue", "purple"];

  searchthroughbasket(_plateColor) {
    //define a loop, define the this keyword
    for (let i = 0; i < this.basketOfPlates.length; i++) {
      //define a conditional
      if (this.basketOfPlates[i] == _plateColor) {
        console.log(`${this.robotProps.name} starting activity`);
        console.log(`hi obinna ${this.basketOfPlates[i]} plate found`);
        this.bringThePlateToMe();
        return;
      } else {
        console.log(
          `Hi Obinna I found ${this.basketOfPlates[i]} still searching for ${_plateColor} plate `
        );
      }
    }
  }

  bringThePlateToMe() {
    console.log(`Bringing the plate to you obinna`);
  }

  robotStartSweeping() {
    console.log("Hey I am sweeping the room now");
  }
}

const alicia = new Robot("siri", "white", "7ft");
console.log(alicia.searchthroughbasket("yellow"));
console.log(alicia.robotStartSweeping());
