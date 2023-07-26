//dom = document object model
//자바 스크립트 = 객체 지향언어
//bom = browser object model 웹 브라우저의 기본 객체
// let hello ='hello js' ;
// // window.alert(hello)//객체 . 메소드//arlert 팝업창
// // window.prompt(hello);
// // let qa = window.prompt('1+1?')
// // window.alert('정답은 '+qa+'입니다.')
// let ox = window.confirm('자바스크립트는 객체지향언어다.');
// window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언키워드(const 버튼은 변경되지 않기 때문) 변수명(버튼 아이디) 대입연산자(=) 대입객체문법
const btn1  =  document.getElementById('btn1');
console.log(btn1);
btn1.style.color = 'red';
//-------------------------------------
console.log('------------------------------')
const loginBtn  =  document.getElementById('login');
const payBtn = document.getElementById('pay');
console.log(login);
console.log(pay);

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last');
console.log(li_first);
console.log(li_second);
console.log(li_last);
console.log(li_first[0])

//태그 객체 변수 생성하기
let header = document.getElementsByTagName('header');
console.log(header);
let h1 = document.getElementsByTagName('h1');
console.log(h1);
const nav =document.getElementsByTagName('nav');
console.log(nav);
const a_tag =document.getElementsByTagName('a');
console.log(a_tag);

//innerHTML 속성 활용
//객체.속성//읽기
//객체.속성 = 대입값 //수정 or 삭제
console.log(header.innerHTML) ;//undefined
console.log(header[0].innerHTML) ;
console.log(h1[0].innerHTML);
console.log(li_first[1].innerHTML);
h1[0].innerHTML ='로<br>고';
li_first[0].innerHTML = '첫번째의 1';
nav[0].style.backgroundColor = 'aqua';
nav[0].style.border = '2px solid black';
li_first[1].style.color = 'pink';
li_first[1].style.fontSize = '2rem';
li_second[0].style.backgroundColor = 'rgb(50, 60, 20)'
li_last[0].style.background = 'linear-gradient(90deg, pink, lightyellow)';