function person(fName, lName){
     this.fName = fName;
     this.lName = lName;
};

const person1 = new person('musa', 'justini');
const person2 = new person('jonathan', 'chitemo');

person.prototype.fullName  = function(){
     return console.log(`My full name is ${this.fName} ${this.lName}`);
};

person1.fullName()
person2.fullName()

function student(name, school){
     this.name = name;
     this.school = school;
}

const student1 = new student('musa', 'majawanga');
const student2 = new student('Jonathan', 'Emeriko');

student.prototype.nameSchool = function(){
     return console.log(`My name is ${this.name}, My school name is ${this.school}`);
}

student1.nameSchool()
student2.nameSchool()
