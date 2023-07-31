let a = 10 //숫자 데이터
let b = '10' //문자데이터
let total = a+b //숫자+문자 =문자
console.log(`total >> ${total}`) // 1010\
console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`)
console.log('--------------------------------------------')
//명시적 형변환(문자>숫자, 숫자>문자), 개발자가 직접 데이터 형식 결정
console.log(`b=${typeof(b)},b+1=${b+1}`)
//형변환 메서드 ===number()
//괄호안에 작성한 데이터를 숫자 데이터로 변환한다.
//메서드를 사용할 때만 1회성으로 숫자 데이터로 인식한다.
//데이터를 다른 변수에 대입해서 일반적으로 사용한다.
console.log(`b=${typeof(Number(b))},${typeof(b)}`)//b = 숫자 ,문자
let c = Number(b)
console.log(`c=${typeof(c)}, c=${c}, a+c=${a+c}`)//c=숫자 c=10 a+c=20
console.log('---------------------------------------------------------')
// const d = Number(window.prompt('1+1=?'))
// console.log(`d=${d}, ${typeof(d)}`)
//Number메서드는 객체 없이 사용 가능 하다.
//다른 메서드를 괄호안에 넣어 사용할 수있다.
//예)) Number(객체.메서드())
const userInput = document.querySelector ('#user')
const resultBtn = document.querySelector ('#result')
console.log(userInput, resultBtn); //dom*2 출력
//동작 이벤트 없이 input의 값 확인 은 초기값만 인식한다.
//input value의 값은
//숫자 데이터로 입력해도 문자데이터로 자동 암시적 형변환이 된다.
userInput.value = 1234 //초기값 미리대입
console.log(`userInput typeof=${typeof(userInput)}`)
console.log(`userInput value=${userInput.value}`)

let userInputNumber = Number(userInput.value) //숫자로 형변환한 userInput의 값

console.log (`userInputNumber type = ${typeof(userInputNumber)}`);
console.log (`userInputNumber value = ${userInputNumber}`);
//버튼 클릭 기준 input 의 현재 값을 파악후 결과 출력하기
// resultBtn.addEventListener('click',function(){
//     userInputNumber = Number(userInput.value)
//     console.log (`userInputNumber type = ${typeof(userInputNumber)}`);
//     console.log (`userInputNumber value = ${userInputNumber}`);
//     //버튼 클릭시 input 값에 +1 한 결과가 console에 출력되게 만들기
//     console.log(userInputNumber + 1) // 값에 +1 시킴
// })
console.log('---------------------------------------------------------------------------')
//구구단 과제풀이
const dan2 = document.querySelector('#dan2')
const calc = document.querySelector('#calc')
const result = document.querySelector('#result')
const test = document.querySelector('#test')

console.log (dan2, calc, result)
console.log(typeof(dan2.value), typeof(calc.value))
console.log(`2*2=${'2' * '2'}, 2+2=${'2'+'2'}`)
//연산자 좌우 피연산자가 문자 데이터일 경우
//더하기 연산자(+)라면 무자 +문자 = 문자로 연결 결과로 보여준다.
//나머지 연산자(-, *, /, %)>> 문자를 암시적형변환으로 자동으로 
//숫자 데이터로 변경해서 문자*문자=숫자 결과로 보여준다.
test.addEventListener('click', function(){
    let first = Number(dan2.value)
    let last = Number(calc.value)
    console.log(first*last)
    result.value = first*last
})

