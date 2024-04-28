
function   changeDisplay(answer){
    if(answer.classList.contains('display')){
        answer.classList.remove('display')
    }
    else{
        answer.classList.add("display")
    }
         }
for(i=1;i<=6;i++){
    let question = document.getElementById(`question-${i}`)
    let answer = document.getElementById(`answer${i}`)
     question.addEventListener('click', function(){ changeDisplay(answer)})


}