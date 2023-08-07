//ES6 DOM 쉽게 관리할 수 있는 for ~ in ~ of ~ Each
const study = ['html','css', 'javascript','design']
//기본 for 문법 (변수 생성; 조건식;증감식{실행 결과})
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
//for ~ in 문법(DOM index number)
for(let i in study){
    console.log(i)
}
//for ~ of 문법(DOM)
for(let i of study){
    console.log(i)
}
//------------------
console.log('--------------------------------')
const boxA = document.querySelectorAll ('.box a')
console.log(boxA)
for(let i in boxA){
    console.log(i)
}
for(let i of boxA){
    console.log(i)
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.background = 'aqua'
    })//mouseover end
    i.addEventListener('mouseout',function(){
        i.style.background = 'coral'
    })//mouse end
    i.addEventListener('click', function(){
        window.alert('준비중입니다.')
    })
}
//for ~ in
//for ~ of
//forEach 인덱스 , 객체, 배열 동시제어
const num=[20, 21, 22, 23, 24, 25]
/*
    객체.forEach(function(객체매게변수, 인덱스매게변수, 배열매개변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
})
* 매개변수명은 의미만 맞게 자유롭게 설정가능.
* 매개변수 순서에 따라 객체, 인덱스, 배열 지정이니 순서주의
* 매개변수 필요한 대상만 작성 가능
*/
boxA.forEach(function(target, index, array){
    console.log(target)//num 안의 번호(데이터20,21등등)
    console.log(`index=${index}`)//num 의순서(0,1,2 등)
    console.log(`array=${array}`)//num 안에 있는 배열 정보 (20~25까지 다)
    console.log('---------------------')
    target.addEventListener('mousedown',function(){
        target.style.color = 'red'
    })
})//forEach는중복생성 가능
