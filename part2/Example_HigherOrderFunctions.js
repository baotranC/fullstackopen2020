/*
* Following 'Higher-order functions - Part 1 of Functional Programming in JavaScript'
* URL: https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
* 
* Following 'Higher-order functions - Part 1 of Functional Programming in JavaScript'
* URL: https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
*
* Following 'Higher-order functions - Part 1 of Functional Programming in JavaScript'
* URL: https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
*/

//Command to run: node Example_HigherOrderFunctions.js

//Transform a list into something else 

//Map: will take an array and transform that into a array of the same length but with each individual item transform
//Filter: transforms an array into a smaller array 
//Reject: Does the same thing as filter, but inverted
//Find: Same thing as filter, but only returns the first item (transforms an array into a single item) 
//Reduce: It can be used to express any list transformation

//=====================
// Regular function
//=====================
var triple = function(x){
	return x * 3
}
console.log(triple(3))

//=====================
// Higher-order functions
//=====================

var animals = [
	{name: 'Bob', species: 'dog'},
	{name: 'Charles', species: 'cat'},
	{name: 'Stacy', species: 'dog'},
	{name: 'Jojo', species: 'fish'},
	{name: 'James', species: 'bird'}
]

//=====================
// filter
//=====================
console.log('============')
console.log('filter')
console.log('============')

//(0) regular loop
var dogs = []
for(var i = 0; i < animals.length; i++){
	if (animals[i].species === 'dog')
		dogs.push(animals[i])
}
console.log(dogs)

//(1) function in another function 
var dogs = animals.filter(function(animal){
	return animal.species == 'dog'
})
console.log(dogs)

//(2) separate the two functions
var isDog = function(animal){
	return animal.species == 'dog'
}
var dogs = animals.filter(isDog)
console.log(dogs)

//(3) shorter version of the function
var isDog = (animal) => (animal.species == 'dog')

var dogs = animals.filter(isDog)
console.log(dogs)

//=====================
// map
//=====================
console.log('============')
console.log('map')
console.log('============')

//(0) regular loop
var names = []
for(var i = 0; i < animals.length; i++){
	names.push(animals[i].name)
}
console.log(names)

//(1) using map
var names = animals.map(function(animal){
	return animal.name
})
console.log(names)

//(2) using map and returning a transformation of the original array
var names = animals.map(function(animal){
	return animal.name + ' is a '+animal.species
})
console.log(names)

//(3) shorter version of the function
var names = animals.map((animal) => (animal.name))
console.log(names)

//=====================
// reduce
//=====================
console.log('============')
console.log('reduce')
console.log('============')

var orders = [
	{ amount: 200},
	{ amount: 150 },
	{ amount: 50},
	{ amount: 100}
]

//(0) regular loop
var total = 0
for(var i = 0; i < orders.length; i++){
	total += orders[i].amount
}
console.log(total)

//(1) using reduce
var total = orders.reduce(function(sum, order){
	console.log(' =>', sum, order)
	return sum + order.amount 
},0)
console.log(total)

//(2) shorter version of the function
var total = orders.reduce((sum, order) => sum + order.amount ,0)
console.log(total)

