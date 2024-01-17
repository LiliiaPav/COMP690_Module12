// STEP 1
// Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
class Cat {
    constructor (name){
        this.name = name
    }
}

const Dog = class {
    constructor(name) {
        this.name = name
    }
  };

// STEP 2
// Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
const myCat = new Cat('Snow')
console.log(`Cat's name is ${myCat.name}`)
const myDog = new Dog('Trezor', 'unbred');
console.log(`Dog's name is ${myDog.name}`)


// STEP 3
// Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.

/*class Animal{
    constructor(){
    }
    message = function(){
        console.log('The Animal has been created')
    }
}
const myAnimal = new Animal()
myAnimal.message()*/

// STEP 4
// Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
/*
class Animal{
    constructor(type){
        this.type=type
        console.log(`The Animal ${this.type} has been created`)
    }
}

const myAnimal= new Animal('fox')
*/

// STEP 5
// Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.
/*
class Animal{
    constructor(type, breed, color, height, length){
        this.type=type;
        this.breed = breed;
        this.color = color;
        this.height = height; 
        this.length =length;
        console.log(`The Animal ${this.type} has been created`)
    }
}

const myAnimal= new Animal('Red fox', 'Domesticated red fox', 'reddish', '16in', '1.5ft')

// STEP 6
// Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

for (const obj in myAnimal) {
    // print key and value on console
    console.log(`${obj}: ${myAnimal[obj]}`)
  }
*/
// STEP 7
// Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
/*
class Animal{
    constructor(type, breed, color, height, length){
        this.type=type.toLowerCase();
        this.breed = breed;
        this.color = color;
        this.height = height; 
        this.length =length;
    }
    speak(){
        if (this.type==='cat'){
            return (`The ${this.color} cat is meowing!`)
        }
        if (this.type==='dog'){
            return (`The ${this.color} dog is barking!`)
        }
    }
}

const myKitten =new Animal('Cat', 'Chartreux', 'blue-grey', '10in', '16"')
console.log(myKitten.speak())
const myPuppy = new Animal('Dog', 'German Shepherd', 'Black and Silver', '25in', '38"')
console.log(myPuppy.speak())
//const myCub = new Animal('Fox', 'Domesticated red fox', 'reddish', '16in', '1.5ft')
*/

// STEP 8
// Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

// class Animal{
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;
//     constructor(type, breed, color, height, length){
//         this.#type=type.toLowerCase();
//         this.#breed = breed;
//         this.#color = color;
//         this.#height = height; 
//         this.#length =length;
//     }

//     #checkType = function(){
//         if (this.#type==='cat'){
//             return ('cat')
//         }
//         if (this.#type==='dog'){
//             return ('dog')
//         }
//     }

//     speak(){
//         console.log(`The ${this.#checkType()} has made a noise!`)
//     }
// }

// const myKitten =new Animal('Cat', 'Chartreux', 'blue-grey', '10in', '16"')
// myKitten.speak()
// const myPuppy = new Animal('Dog', 'German Shepherd', 'Black and Silver', '25in', '38"')
// myPuppy.speak()


//OR

function Animal(type, breed, color, height, length){
    let  _type=type.toLowerCase();
    let _breed = breed;
    let _color = color;
    let _height = height; 
    let _length =length;

    let checkType = function(){
        if (_type==='cat'){
            return ('cat')
        }
        if (_type==='dog'){
            return ('dog')
        }
    }

    this.speak=function(){
        console.log(`The ${checkType()} has made a noise!`)
    }
}

const myKitten =new Animal('Cat', 'Chartreux', 'blue-grey', '10in', '16"')
myKitten.speak()
const myPuppy = new Animal('Dog', 'German Shepherd', 'Black and Silver', '25in', '38"')
myPuppy.speak()

// STEP 9
// Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.


String.prototype.findWords = function(word){
    var regex = new RegExp( word, 'gi' );
    return(this.match(regex).length);
}

const mytxt = new String('Red foxes have long snouts and red fur across the face, back, sides, and tail. Their throat, chin, and belly are grayish-white. Red foxes have black feet and black-tipped ears that are large and pointy. One of the most noticeable characteristics of the red fox is the fluffy white-tipped tail. Red foxes are about three feet long and two feet tall.')

alert(`The number of time that word 'fox' was found in the paragraph: ${mytxt.findWords('fox')}`)