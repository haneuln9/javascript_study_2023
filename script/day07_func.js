//함수 생성 > 호출
// 항수 생성 후 호출식을 작성하지 않으면 함수 결과를 볼수 없다.
// 1. 생성 : function 함수명 (매개변수명){재사용함수문법}
// 2. 호출 : 함수명 ()
function func1(str){//접속 회원에 맞춤형 인사.
    console.log(`${str}님 어서오세요!`)
}//생성 함수 end
func1('홍길동')
func1('abc123')//호출
//함수 기능 : 리턴(return) 함수 결과값 외부로 반환명령
function func2(a){
    return a+1// return 활용 함수 결과값만 외부로 반환
}
func2(50)//함수 결과값을 출력하는 메서드가 없어 출력되지 않음
console.log(func2(50))//함수결과를 앞에 메서드가 있고 뒤에 호출이 되어 출력됨
// window.alert(func2(100))
document.write(func2(10))
//---------------------------
function func3(a, b){
    return a*b//함수 내 return 1개만 존재 해야함
}
console.log(func3(10,20))
console.log(func3(3,2))
//-------------------------------------
let total = 0
function func4(a){
    total = a
    total++
    return total
    total++ //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(func4(10))
console.log('----------------------------------------------')
//---------------------------------------------------------------
let num1 = 10
let num2 = 20
function func5(a, b){
    num1 += num2 //10+20=30
    num2 = a+b //2+4=6
    num1 += num2//30+6
    return num1//36
}
console.log(func5(2,4))
//----------------------------------------------------------------
console.log('-------------------------------------------')
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0],'yellow')
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1],'blue')
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2],'pink')
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용 문법 내 수정데이터 있을시 만듬
function bg (target, color){
    return target.style.backgroundColor = color
    
}
//------------------------------------------------------
console.log('----------------------------------------')
//관심 상품, 알림설정 이미지에 마우스를 올렸을 때 
//off -> on 이미지 변경
// 마우스를 나갔을 땐 on -> off 이미지 변경
const likeImg = document.querySelector ('.product .like img') 
const ideaImg = document.querySelector ('.product .idea img')
console.log(likeImg, ideaImg)
likeImg.addEventListener('mouseover',function(){
    // console.log('over')//이벤트 정상 확인
    // likeImg.src = './images/heart_on.png'
    onOff(likeImg, 'heart', 'on')
})
likeImg.addEventListener('mouseout',function(){
    // likeImg.src = './images/heart_off.png'
    onOff(likeImg, 'heart', 'off')
})
//-----------------------------------------------------
ideaImg.addEventListener('mouseover', function(){
    // console.log('over')
    // ideaImg.src = './images/idea_on.png'
    onOff(ideaImg,'idea','on')
})

ideaImg.addEventListener('mouseout',function(){
    // ideaImg.src = './images/idea_off.png'
    onOff(ideaImg,'idea','off')
})
function onOff(target, name, status){
    return target.src=`./images/${name}_${status}.png`
}