const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const input_id = document.querySelector('#user_id')
console.log(btn3, btn4, btn5, input_id);//정상확인
//2. 이벤트 작성
//btn3을 클릭했을 때 경고창 띄우기
//객체.이벤트리스너('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error');
})
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua';
//this현재 이벤트 객체 대상 ==btn4
// 현재 대상.style.css속성 ='대입값'
})
btn5.addEventListener('click',function(){
    btn4.style.transform = 'skew(10deg)';//기울기
    btn3.style.backgroundColor ='yellow';
    // btn2.innerHTML ='결과';
})
input_id.addEventListener('focus',function(){
    this.style.backgroundColor ='lime';
})
input_id.addEventListener('blur',function(){
    this.style.backgroundColor ='gray';
})
// btn3.addEventListener('cleck',function(){window.alert('error')})
//변수.addEventListener('cleck',function(){window.alert('error)})
//변수.addEventListener('cleck',function(){window.alert('error)})