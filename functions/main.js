function getSolutions (a, b, c) {
    let D = Math.pow(b,2) - (4 * a * c);
    let x1 = (-b / 2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
  
    if (D < 0) {
      return {
      D: D
    }
    } else if (D === 0) {
      return {
      roots: [x1],
      D: D
    }
    } else {
      let x1 = (-b + Math.sqrt(D)) / (2 * a);
      return {
      roots: [x1, x2],
      D: D,
      }
    }
  }
  
  getSolutions(10,23,3);
  
  function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} = 0` );
    console.log(`Значение дискриминанта: ${result.D}`);
  
    if (result.D < 0) {
      console.log('Уравнение не имеет вещественных корней')
    } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
    } else {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
  }
  
  showSolutionsMessage(1, 2, 3);
  showSolutionsMessage(7, 20, -3);
  showSolutionsMessage(2, 4, 2);


function getAverageScore(data) {
    let averageMarks = {};
    for (let prop in data) {
      let value = 0;
      for (let i = 0; i < data[prop].length; i++) {
        value += data[prop][i];
      }
      averageMarks[prop] = value / data[prop].length;
    }
    return averageMarks;
  }
  
  function getAverageMark(data) {
    let averageScores = getAverageScore(data);
    let sum = 0;
    let tick = 0;
    for (let prop in averageScores) {
      sum += averageScores[prop];
      tick++;
    }
    let average = sum / tick;
    averageScores.average = average;
    return averageScores;
  }
  
  console.log(getAverageMark({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
  }));


  function getPersonData(secretData) {
	return {firstName: personDecod(secretData.aaa), lastName: personDecod(secretData.bbb)};
}

function personDecod (cod) {
	return cod ? 'Эмильо' : 'Родриго';
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));