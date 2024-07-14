// variable
const paragraphy = document.getElementById('p');
const btnOne = document.getElementById('twoRem');
const btnTwo = document.getElementById('threeRem');
const btnThree = document.getElementById('fourRem');
const resetBtn = document.getElementById('reset');


function myFunction(size){
     function innerFunction(){
          paragraphy.style.fontSize = `${size}rem`
     };
     return innerFunction
};

const functionOne = myFunction(1.2);
const functionTwo = myFunction(1.3);
const functionThree = myFunction(1.4);
const functionReset = myFunction(1);

btnOne.addEventListener('click', functionOne)
btnTwo.addEventListener('click', functionTwo)
btnThree.addEventListener('click', functionThree)
resetBtn.addEventListener('click', functionReset)


// variable for color change 
const blueBtn = document.getElementById('blueColor');
const redColor = document.getElementById('redColor');
const yellowColor = document.getElementById('yellowColor')
const colorChange = document.getElementById('colorChange');

// console.log(blueBtn);

blueBtn.addEventListener('click', function(event){
     event.target.style.color = 'blue';
     event.target.style.border = '2px solid blue';
     event.target.textContent = 'Blue'
     colorChange.style.background = 'blue';

     // for btn 
     redColor.style.color = 'black'
     redColor.textContent = 'black'
     redColor.style.border = '2px solid black'

     //for btn 
     yellowColor.style.color = 'black'
     yellowColor.textContent = 'black'
     yellowColor.style.border = '2px solid black'
})

redColor.addEventListener('click', function(event){
     event.target.style.color = 'red';
     event.target.style.border = '2px solid red';
     event.target.textContent = 'Red'
     colorChange.style.background = 'red';

     // for btn 
     blueBtn.style.color = 'black'
     blueBtn.textContent = 'black'
     blueBtn.style.border = '2px solid black'
     
     // for btn 
     yellowColor.style.color = 'black'
     yellowColor.textContent = 'black'
     yellowColor.style.border = '2px solid black'
})

yellowColor.addEventListener('click', function(event){
     event.target.style.color = 'yellow';
     event.target.style.border = '2px solid yellow';
     event.target.textContent = 'yellow'
     colorChange.style.background = 'yellow';

     // for btn 
     blueBtn.style.color = 'black'
     blueBtn.textContent = 'black'
     blueBtn.style.border = '2px solid black'

     // for btn 
     redColor.style.color = 'black'
     redColor.textContent = 'black'
     redColor.style.border = '2px solid black'
})
