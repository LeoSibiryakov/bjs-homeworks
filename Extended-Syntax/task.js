

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
  "use strict"
  // код для задачи №1 писать здесь
  //return x;
  let D = Math.pow(b,2) - (4 * a * c);
  let x = [];
  
  if (D === 0) {
    x.push (-b/(2*a));
  } else if (D > 0) {
    x.push ((-b + Math.sqrt(D)) / (2 * a));  
    x.push ((-b - Math.sqrt(D)) / (2 * a));
  } return x;
  }

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
    let sum = 0;

    if (marks.length > 5) {
    	console.log("Количество оценок больше 5");
    	marks.splice(5);
    }
    console.log(marks);
    for (let i = 0; i < marks.length; i++) {
    	sum = sum + marks[i];
    }
    return sum / marks.length;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
    let year = new Date;
    let age = year.getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age > 18) {
    	result =`Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	result =  `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(result)
    return result;
}