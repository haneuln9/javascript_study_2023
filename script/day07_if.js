//전역 변수 , 지역변수(함수 내부, 외부 에서 생성한 변수 위치 차이)
let b = 20
let c = 30
function test(){
    let a = 10
    console.log(a+b)
}
test()
// console.log(a)
// console.log(a+b)
console.log(b+c)
console.log('-----------------------------')
//조건문 - 논리 데이터 참(true), 거짓(false)를 나누는것
let num1 = 5
let num2 = 7
let num3 ='5'
console.log(num1==num2)//false
console.log(num1 < num2)//true
console.log(num1==num3)//true (데이터 타입 구분 하지 못함)
console.log(num1===num3)//false (데이터 타입 구분함)
console.log(num1!=num3)//false (서로 같으면 거짓이 됨)(데이터 타입 구분x)
console.log(num1!==num3)//true (서로 다르면 참이 됨)(데이터 타입 구분 o)
console.log(num1>=num2)//false
console.log(num1<=num2)//true
console.log('--------------------------------')
//조건문
//if(조건식){조건식이 참일 때 실행 결과} 조건식 종료
//상황 1. 주말에 날씨가 좋으면 등산 가자 라는 상황
//조건 = 날씨가 좋으면 (조건식)
//실행 결과 = 등산 가자

let weather = ['비','맑음','흐림']
if(weather[1]==='맑음'){
    console.log('등산을 가자')
}
console.log('-----------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행')} // d는 true와 같은지     true
if(f>10){console.log('실행2')} // f가 10보다 큰지          false
if(g<=20){console.log('실행3')} //20이 g보다 작거나 같은지  true
if(e!==true){console.log('실행4')} // e 가 트루가 아닌지    true
console.log('--------------------------------------')
//관리자만 접속할수 있는 페이지 
//관리자 아이디일 경우만 접속 가능 (접속후 인사말 출력)
//관리자 아이디는 admin
// const userId = window.prompt('아이디를 입력하세요')
// if(userId === 'admin'){
//     window.alert('관리자님 환영합니다.')
// }
//-------------------------------------------------------------------------------
//사용자의 나이를 입력 받고 10살 이하 라면 '놀이기구 탑승 불가' 메시지 노출
// const userAge = Number(window.prompt('나이를 입력하세요'))
// if(userAge < 10){
//     window.alert('놀이기구 탑승 불가')
// }
const userPrint = window.confirm('인쇄할까요')
if(userPrint === true){
    window.print()
}