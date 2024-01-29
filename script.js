const questions=[{
    'que': 'What does HTML stands for?',
    'a' :'Hyper Text Markup Language ',
    'b' :'Home Tool Language',
    'c' :'Hyperlinks and Text Markup Language',
    'd' :'Hyper Text Message Lnaguage',
    'correct' :'a'
},
{ 
    'que': 'What is the correct HTML element for inserting a line break?',
     'a' :'<lb>',
     'b' :'<br>',
     'c' :'<break>',
     'd' :'none of the above',
     'correct' :'b'
},
{ 
    'que': 'What does CSS stand for?',
     'a' :'Hyper Text Markup Language',
     'b' :'Cascading Style Sheet',
     'c' :'Jason Object Notation',
     'd' :'Helicopters Terminals Motorboats Lamborginis',
     'correct' :'b'
},
{
    'que': 'Which HTML tag is used to define an internal style sheet?',
    'a': '<css>',
    'b': '<style>',
    'c': '<script>',
    'd': 'None of the above',
    'correct': 'b',        
 },
 {
    'que': 'Which CSS property is used to change the text color of an element?',
    'a': 'color',
    'b': 'text-color',
    'c': 'fgcolor',
    'd': 'font-color',
    'correct': 'b',
 },
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong=0;
const quesBox =document.getElementById("quesBox")
const optionInputs =document.querySelectorAll('.options') 
const loadQuestion = () => {
    if (index ===total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText =`${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h2>Thank you for playing the quiz</h2><br>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `
}

//initial call
loadQuestion();