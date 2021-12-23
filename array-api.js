
// Q1. make a string out of an array

    const fruits = ['apple', 'banana', 'orange'];
    const makingString = fruits.toString();
    //const MakingString = fruits.join();   
    console.log(makingString);

  // Q2. make an array out of a string
  
    const fruit = '🍎, 🥝, 🍌, 🍒';
    const makingArray = fruit.split(',', 4);
    console.log(makingArray);
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  
    const array = [1, 2, 3, 4, 5];
    const reverse = array.reverse();
    console.log(reverse);
  
  // Q4. make new array without the first two elements
  
    const array1 = [1, 2, 3, 4, 5];
    const minus = array1.slice(2, 5);
    console.log(minus);
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  const findStudent = students.find((student)   => {
    return student.score === 90;
  })
  console.log(findStudent);
  // Q6. make an array of enrolled students
  const  enrolled = students.filter((student) => student.enrolled);
  console.log(enrolled);    
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  const makingNewArray = students.map((student)=>student.score);
  console.log(makingNewArray);
  
  // Q8. check if there is a student with the score lower than 50
  const  grade = students.filter((student) => student.score < 50);
  //    const  grade = students.some((student) => student.score < 50);
  console.log(grade);  
  
  // Q9. compute students' average score
  const average = students.reduce((prev, curr)=>{
  console.log(prev)
  console.log(curr)}
  ); 
  console.log(average);
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  const Array2 = students.map((student)=>student.score).join();
  console.log(Array2);
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  const Array3 = students.map((student)=>student.score).sort((a, b) =>a-b);
  console.log(Array3);