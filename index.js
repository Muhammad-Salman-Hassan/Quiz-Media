const correctAns=['A','B','A']
const form=document.querySelector('.quiz-form')
const scoretag=document.querySelector('.score')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let score=0
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value]

    // userAnswer.forEach((answer,index)=>{
    //     if(answer === correctAns[index]){
    //         score+=25
    //     }
    // })
    // console.log(score)
    correctAns.forEach((answer,index)=>{
        if(userAnswer[index]===answer){
            score+=25
        }
    })
    

    let output=0;
    let timer=setInterval(()=>{
        scoretag.innerHTML=`Your Score : ${output}%`
        if(output===score){
            clearInterval(timer)
        }else{
            output++
        }
    },10)


    window.scrollTo(0,0)
})