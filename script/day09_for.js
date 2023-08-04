//반복문 for
/*
    for(반복문 변수생성 ; 변수활용 조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    }반복문 변수 조건이 거짓일때 for가 끝나는 위치
*/
//1~10까지 반복하는 반복문  
//for 에서 자주 이용하는 지역변수명 = i, j, m, n, k
for(let i = 0; i<11; i++ ){
    console.log('hello js'+(i+1))
}
//0~5 반복문
for(let i = 0; i<6; i++){
    console.log (i)
}
//5~0으로 작아지는 반복문
for(let i = 5; i>=0; i--){
    console.log (i)
}
//10~30반복문 + 10~30 중에 홀수만 반복출력
for(let i= 10; i<=30; i++){
    if(i%2===1){
        console.log(i)
    }
}
//dom, 배열 사용하는 반복문
const study = ['html','css','javcascript','figma','photoshop','illustrator']
// console.log(study[0])
// console.log(study[1])
// console.log(study[2])
//객체의 수  length 속성
/*
1.html공부
2.css공부
3.javcascript공부
4.figma공부
5.photoshop공부
6.illustrator공부
*/
for(let i=0; i<study.length; i++){
    console.log(`${i+1}.${study[i]} 공부`)
}
console.log('---------------------')
// 위 study 배열을 역순 으로 출력하기
for(let i=study.length-1; i>=0 ; i--){
    console.log(`${i+1}.${study[i]} 공부`)
}
console.log('-----------------------------------')
/*-----------------------------------------------------------------------------------*/
//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
//반복문 이용 coffee배열 모두 출력
for(let i=0; i<coffee.length;i++){
    console.log(coffee[i])
}
