console.log("hello world")

var number = 1
number += 3
number /= 2
// number /= 'seven' 
console.log(number)

var string = "hello world"
var stringNew = string
stringNew = "hello another World"
string = string.toUpperCase()
console.log(string, stringNew)

var bool = true 
console.log(bool)

var emptyValue = null
console.log(null)

var undf = undefined
console.log(undefined) // Самому не присваивать, понадобится для отладки.


// Objects

var obj = {
    name: 'vasya',
    age: 13,
    skilled: true,
    salary: null,
    sex: 'man',
    bf: {
        name: 'Anya',
        age: 18,
        skilled: false,
        salary: null,  
        sex: 'woman'
    }
}

var objwa = { ...obj }
delete objwa.bf
// var bf = { ...obj.bf }
objwa.bf2 = { ...obj.bf }
console.log(obj, objwa)

obj.age += 34
obj.name = 'Vasiliy Ivanovich'

obj.bf.name = 'Anna Petrovna'
obj.bf.age += 34
obj.bf.skilled = true

console.log(obj)

var array = [obj.bf, obj, 1, "hello Vasya and Anya"]
console.log(array, array.length)
var arr1 = [[1,2,3],[1,2,3],[1,2,3]]

// Functions 

var sum = function(num1, num2) {
    var newNum = num1 + num2
    return newNum
}
var consoling = function() {
    console.log("consoling")
}
console.log(sum(number, obj.bf.age))
fff()

// func delegation
var funcSlave = function() {
    console.log("im slave")
} // functional expression

function fff() {

} // function declaration
var funcMaster = function(x, y, z) {
    x(y, z)
    return x(y, z)
}
funcMaster(sum, obj.bf.age, obj.age)
console.log(funcMaster(sum, obj.bf.age, obj.age))

// Logic 

var checkPerson = function(person) {
    if ((person.age >= 20) && (person.sex === 'man')) {
        console.log('Old faggot')
    } else if ((person.age >= 20) && (person.sex === 'woman')) {
        console.log('Old slut')
    } else if ((person.age <= 20) && (person.sex === 'man')) {
        console.log('Young faggot')
    } else {
        console.log('Young slut')
    }
}

checkPerson(obj) 
checkPerson(obj.bf)
checkPerson(objwa)

var checkPersonReturn = function(person) {
    if ((person.age >= 20) && (person.sex === 'man')) {
        return 'Old faggot'
    } else if ((person.age >= 20) && (person.sex === 'woman')) {
        return 'Old slut'
    } else if ((person.age <= 20) && (person.sex === 'man')) {
        return 'Young faggot'
    } else {
        return 'Young slut'
    }
}
console.log(checkPersonReturn(obj), checkPersonReturn(obj.bf), checkPersonReturn(objwa))
checkPersonReturn(obj) 
checkPersonReturn(obj.bf)
checkPersonReturn(objwa) 

// Loops

var numbers = [4, 14, 73, 8, 7]

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}