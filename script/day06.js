//배열과 객체
const array1 = ['html','css', 'js']
// 전체 배열 출력 (테스트용 전체정상 확인)
console.log(array1)
//개별 배열 직접 출력(이벤트,속성,메서드 동적결과 제작시 사용하는 방법)
console.log(array1[0]) 
//DOM변수 생성
const li = document.querySelectorAll ('ul li')
console.log(li)//전체 정상출력, 인덱스 번호 확인등
console.log(li[0],li[1],li[2])//개별출력 (이벤트,속성,메서드 활용)
//-------------------------------객체
//배열은 2개 이상의 데이터가 서로 연관되어 있어야 한다.
//ex) 쇼핑몰 옵션 : size배열, color배열, option배열 등등 각각 개별로 구성 되어있어야함
// const product_size = ['s','m','l']
// const product_color = ['white','red','blue']
const shop ={
    size:['S','M','L'],
    color:['white','red','blue']
}
console.log(shop)
console.log(shop.size[1])
console.log(shop.color[2])


//객체는 2개 이상의 데이터가 속성:값 으로 이루어져 있기 때문에 큰분류만 같다면 다양한 속성을 하나의 객체로
//취급할수 있다.
//의미만 맞으면 이름 으로 사용할 수 있음 문자or 숫자 인지 유무에 따라 따옴표("") 작성
const cat1 = {
    color:'black',//속성은 ""작성 안함
    age:1
}
console.log(cat1)//전체 확인
console.log(cat1.age)//객체. 속성 개별 출력
console.log(cat1.color)//객체. 속성 개별 출력
//객체 내 속성 값으로 배열 삽입한 경우
const cat2 = {
    color:['black','white','brown'],
    age:2
}
console.log(cat2)//전체 확인
console.log(cat2.age)
console.log(cat2.color[0])
console.log(cat2.color[1])
console.log(cat2.color[2])