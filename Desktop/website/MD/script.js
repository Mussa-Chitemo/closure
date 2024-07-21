// For learning Aim.
const person = {
     firstName: 'musa',
     middleName: 'justini',
     lastName: 'chitemo',
     age: 27,
     fullname(){
          console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
     }
}
person.fullname()

// person.forEach((onePerson)=>{
//      console.log(`my name is ${onePerson}`);
// })


const students = ['mussa', 'justini', 'jonathan', 'chitemo']

students.forEach((student)=>{
     console.log(`My name is ${student}`);
});

for(i =0; i < students.length; i++){
     console.log(`my name is ${students[i]}`);
}

for(i = 0; i < students.length; i++){
     console.log('my name is ' + students[i]);
};

students.push('juma');

const arr1 = new Array('mussa', 'justini');
console.table(arr1);

const obj = new Object({
     location: 'dodoma',
     country: 'tanzania'
});

console.table(obj)


