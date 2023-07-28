//null, undefined 데이터타입 차이
//null == 변수의 값을 삭제할때 사용
//''== 빈문자열은 DOM문자 데이터를 삭제할 때 사용
let a =10;
console.log(a);
a = null //빈값을 대입한다 (내용삭제) null에는 ''를 절대 넣으면 안됨 빈값이라는 키워드임
console.log(a);
//-----
console.log('-------------------------');
const pwd = document.querySelector ('#pwd');
const submit = document.querySelector ('#submit');
const reset = document.querySelector ('#reset');
console.log(pwd, submit, reset);
//사용자가 비밀번호 입력칸에 비밀번호 입력후
//submit 버튼 클릭시 윈도우 팝업창으로 '비밀번호 변경'
//reset버튼 클릭시 비밀번호 입력칸 값 초기화(제거)
submit.addEventListener('click',function(){
    window.alert ('비밀번호 변경')
})
reset.addEventListener('click',function(){
    // pwd.value = '';
    pwd.value = null;
})
//undefined 정의되지 않은 상태(값을 입력하지 않은 상태)
let b = 10;
let c 
console.log(b,c);
console.log(b + c);//10+undefined
//not a number = NaN(계산식을 넣은 것중 하나가 선언되지 않은 상태)
//문자+문자 = 문자
//문자+숫자 = 숫자
//-------------------------------------------------
console.log('-------------------------------------');
let num1 = 10;
num1++;
console.log(num1);//11
num1--;
console.log(num1);//10
console.log(num1++);
console.log(num1);
//출력 또는 대입 연산자와 함께할때 전위, 후위 연산자에 따른 결과값이 다르게 출력된다.
/*
출력 예) console.log(num1++) 콘솔 로그로 기준 num1의 값을 먼저 전송출력 후 
++ 증감 연산자로 num1의값을 
나중에 1 증가 한다.
개별 예) num1--
출력, 대입 관꼐없이 증감 연산자를 개별로 작성한 경우
전위,후위 연산과 관계없이 무조건 1증 가 또는 1 감소된다.
*/
let num2 = 5
let num3 = 0
console.log(`초기값 num2=${num2}, num3=${num3}`)
num3 = num2++
console.log(`num2=${num2}, num3=${num3}`)
num3 = ++num2;
console.log(`num2+${num2},num3=${num3}`)
//----------------
console.log('----------------')
let number1=10;
let number2=20;
let result;
number1--;
console.log(number1);//결과 9
number1++;
console.log(number1);//결과 10
resurt = number2++;
console.log(resurt);//결과 20
resurt = number2++;
console.log(resurt);//결과 21



