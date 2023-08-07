//for 
//0~4반복문
let i
for(let i =0; i<5; i++){
    console.log(i)
}

const list = document.querySelectorAll ('.test li')
console.log(list)
for(let i =0; i<list.length; i++){
    console.log(list[i])
    // list[i].style.backgroundColor = 'yellow'
    //홀수 노랑
    //짝수 아쿠아
    if(i%2==1){
        list[i].style.backgroundColor ='yellow'
    }else{
        list[i].style.backgroundColor ='aqua'
    }
}
//다중 for
for(i=0; i<2; i++){//0> 1까지 2번 반복문
console.log(i)
for(let j=1; j<6; j++){//1에서 5까지 5번 반복문
    console.log(`j = ${j}`)
}
}
console.log('----------------------------------------')
//ul-li*3-span*2
// let ulTag = document.createElement('ul')
// const answer1 = document.querySelector('.answer1')
// console.log(ulTag, answer1)

// for(let i=0; i<3; i++){//1단 for li*3
//     console.log(` li = ${i}`)
//     ulTag.innerHTML += `<li>li=${i+1}`
//     for(let j=0; j<2; j++){//2단 for span*2
//         console.log(`span = ${j}`)
//         ulTag.innerHTML +=`<span>span=${j+1}</span><br>`
//     }
//     ulTag.innerHTML += `<li>`
// }
// answer1.appendChild(ulTag)
// console.log(ulTag)
//innerHTML 작성은 가장 마지막에 속한 내용 =inner or img등 
let ulTag = document.createElement('ul')
let liTag = document.createElement('li')
const answer1 = document.querySelector('.answer1')
//-------------------------------------------------
console.log(ulTag, answer1,liTag)
for(let i=0; i<3; i++){//1단 for li*3
    liTag = document.createElement('li')
    liTag.innerHTML += `li=${i+1}<br>`
    for(let j=0; j<2; j++){//2단 for span*2
        liTag.innerHTML +=`<span>span=${j+1}</span><br>`
    }
    ulTag.appendChild(liTag)
}
answer1.appendChild(ulTag)
console.log(ulTag)




