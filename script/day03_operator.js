let a =10;
let b =5;
let c=1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}x${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log('-------------------------------')
//연결 연산자
console.log('10'+10);//1010연결 연산자
console.log(10+10);//20더하기 연산자
console.log(typeof('10'+10));//string
console.log(typeof(10+10));//number
console.log('-------------------------------')
let age = 20;
// age = age+1
age += 1;//age+1
console.log(`${age}살`)
age -= 1;//age-1
console.log(`${age}살`)
age *= 2;//age*2
console.log(`${age}살`)
age /= 2;-//age/2
console.log(`${age}살`)
age %= 2;//age%2
console.log(`${age}살`)
console.log('--------------------------------------')
//복합대입 연산자를 이용한 태그 생성 방법
let cart_li = '<ul>';//빈 장바구니 (초기)
console.log(cart_li);
//참기를 1개 장바구니 담기
cart_li +='<li>참기를1개</li>';
console.log(cart_li);
//베이글 2개 장바구니 담기
cart_li +='<li>베이글 2개</li></ul>';
console.log(cart_li);
cart_li +='</ul>'
console.log(cart_li)
console.log('--------------------------------------')
//태그 생성 메서드 createElement('생성태그명')
let cartNewLi = document.createElement('ul');
const cart_contents = document.querySelector('#cart .contents');
cartNewLi.innerHTML ='<li>참기름 1개</li>';
cartNewLi.innerHTML +='<li>베이글 2개</li>';
console.log(cartNewLi);
console.log(cart_contents);
cart_contents.appendChild(cartNewLi);




