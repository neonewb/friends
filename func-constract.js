// function Car(model) {
// 	this.model = model;

//     this.logModel = function() {
//         console.log(this.model)
//     }
// }

class Vehicle {
	constructor(model) {
		this.model = model;
	}

	logModel() {
		console.log(this.model);
	}
}

class Car extends Vehicle {
	type = 'Car'

	constructor(model) {
		super(model);
	}
}

const ford = new Car('Ford')
const bmw = new Car('BMW')

ford.logModel()
bmw.logModel()
