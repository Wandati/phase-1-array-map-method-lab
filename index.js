const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = (function(){
 // return tutorials
const titleCased = tutorials.map((student) => {
    let title = student.split(" ");
    let newTitle = "";
    for(let i = 0; i < title.length; i++){
      let word = title[i].charAt(0).toUpperCase()+title[i].slice(1);
      newTitle += word + " "
    }
    return newTitle.trim();
  })
