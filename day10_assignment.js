

// 1
let dog = {}

// 2
console.log(dog);

// 3

dog['name'] = 'Tom'
dog['legs'] = 4
dog['color'] = 'Black'
dog['age'] = 3
dog['bark'] = () => 'woff woff'

// 4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());


//5 

dog['breed'] = 'German Sephard'

let getInfo = ()  =>{
    console.log(dog.name);
    console.log(dog.color);
    console.log(dog.breed);
    console.log(dog.bark());
}

getInfo();

// Level -2
// Assignment of the Object Section
const persons = {
    Sandip: {
        email : 'sandeep47nepali@gmail.com',
        skills : ['HTML', 'CSS', 'JavaScript'],
        age : 22,
        isLoggedIn : true,
        points : 70
    },

        Isha: {
        email : 'Isha20hitang@gmail.com',
        skills : ['HTML', 'CSS', 'JavaScript','NodeJs', 'MongoDB'],
        age : 20,
        isLoggedIn : false,
        points : 26
    },

    Saru: {
        email : 'saru33maurati@gmail.com',
        skills : ['HTML', 'CSS','Python','Rust'],
        age : 21,
        isLoggedIn : true,
        points : 50
    },

    Anjan: {
        email : 'anjan23shrestha@gmail.com',
        skills : ['HTML', 'CSS', 'JavaScript','BlockChain','Artificial Intelligence'],
        age : 23,
        isLoggedIn : true,
        points : 60
    },
    Sadikshya: {
        email : 'sadikshya123@gmail.com',
        skills : ['HTML', 'CSS', 'JavaScript','Java','GitHub' ],
        age : 25,
        isLoggedIn : false,
        points : 22
    }
}

// 1
let max = 0;
let haveManySkills;

for(let person of Object.keys(persons)){
    if(persons[person].skills.length > max){
        max = persons[person].skills.length;
        haveManySkills = Object.assign({},persons[person]);
    }
}

console.log(haveManySkills.email, max);

// 2

let loggedInUser ;
let highestPointPerson=0;

for(let user of Object.keys[persons]){
    if(persons[user].points >=50){
    highestPointPerson ++;
    loggedInUser = Object.assign({},persons[user])
    }
}
console.log(loggedInUser.email, highestPointPerson)


