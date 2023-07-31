// 배열과 객체 
const a = 1 //상수 (변하지 않는 값)
//a = 2 (상수값을 변경할때 에러 발생)
let b =2 //변수 (변할수 있는 값)
b += 4  //새로운 값이 대입될 경우 기존 값 2가 제거되고 4로 새로 대입
console.log(b)
//연관된 데이터 2개 이상을 배열로 합칠 수 있다.
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log(`오늘은${yoil[1]}요일입니다!`)

const colorArray = ['red', 'blue','skyblue', 'yellow', 'pink']
const weatherArray = ['흐림', '맑음', '비', '눈', '태풍']

console.log(`오늘의 날씨는 ${weatherArray[1]}`)

const weatherCls = document.querySelector('.weather')
const colorCls = document.querySelector('.color')
console.log(weatherCls, colorCls)
//
//
colorCls.innerHTML = colorArray[1]+','+colorArray[2] 
weatherCls.innerHTML = `${weatherArray[1]}입니다!`

let optionArray = new Array(4) // 빈배열 4 자리를 준비하겠다라는 뜻
console.log (optionArray) //emptyx4 비어있다라는 뜻
optionArray[0] = 'white'
optionArray[1] = 'M'
console.log (optionArray)