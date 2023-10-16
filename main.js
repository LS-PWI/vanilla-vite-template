let a = [2, 4, 6]
a.forEach(e => console.log(e))

if (a[0] === 3) {
    console.log("equals")
} else {
    console.log("not equals")
}

class Car {
    constructor(numWheels) {
        this.numWheels = numWheels
    }
    printWheels() {
        console.log(this.numWheels)
    }
}

let car = new Car(4)
car.printWheels()