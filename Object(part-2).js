// This is a "single turn object" .
// const tinderUser = new Object()
// console.log(tinderUser);    


// this is a "Non single turn object".
// const tinderUser = {}
// console.log(tinderUser);    



const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Diksha Gupta"
tinderUser.isloggedIn = true

// console.log(tinderUser);  


console.log(tinderUser);
console.log(Object.keys(tinderUser));    

console.log(Object.values(tinderUser));  

console.log(Object.entries(tinderUser));  


console.log(tinderUser.hasOwnProperty('isloggedIn'));  
console.log(tinderUser.hasOwnProperty('diksha'));      



const ragularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            firstname: "Simran",
            lastname: "Gupta"
        }
    }
}

console.log(ragularUser);  

console.log(ragularUser.fullname);    

console.log(ragularUser.fullname.userfullName);

console.log(ragularUser.fullname.userfullName.firstname);  




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "d"}


// const obj4 = Object.assign({}, obj1, obj2, obj3)
              // or
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);  



const user = [
    {
        id: 1,
        email:"Simrangupta123@.com"
    },
    {
        id: 2,
        email:"Simrangupta123@.com"
    },
    {
        id: 3,
        email:"Simigupta123@.com"
    },
    {
        id: 4,
        email:"Simran123@.com"
    },
]

console.log(user[1].email);      
console.log(user[2].email);     
console.log(user[3].email);      



const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
              //or
// const {courseInstructor} = course   
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);     


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JSON Format

// {
//     "name": "Simran",
//     "coursename": "JS in Hindi",
//     "price": "free"

// }


[
    {},
    {},
    {},
    {}
]







                                              



