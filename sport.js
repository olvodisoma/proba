let quiz=document.getElementById("quiz")
for(let obj of data){
    quiz.innerHTML+=`<li>${obj.question}<br> ${radioGomb(obj.answers,obj.correctAnswer,obj.id,obj.img)}</li>`
}

function radioGomb(o,h,id,img){
    let radioStr=""
    for(let kulcs in o){
        radioStr+=`<input type="radio" name="${id}" value="${kulcs}" 
        data-ok="${h}"/> ${o[kulcs]}<br>
        `

    }
    return radioStr
}


function ellenoriz(){
    let counter=0
    let asd=0
    let inputRadioArr=document.querySelectorAll("input[type=radio]")
    for(let elem of inputRadioArr){
        if(elem.checked){
            asd++
            if(elem.dataset.ok==elem.value){
                elem.style.accentColor="green"
                counter+=1
            }
            else{
                elem.style.accentColor="red"
            }
        }
    } 
    console.log(`${counter}/${data.length}`)
    console.log(asd)
    if(asd==10){
        document.getElementById("eredmeny").innerHTML=`Az ön által elért pontszám: ${counter}/${data.length}`
    }
    
    
    
}