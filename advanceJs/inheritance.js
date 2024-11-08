//__proto__ is used for inheritance
const user = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//inherit from TeachingSupport
}
console.log(TASupport.isAvailable);

Teacher.__proto__ = user;
console.log(Teacher.name)

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.makeVideo);
console.log(TeachingSupport.fullTime);//undefined
