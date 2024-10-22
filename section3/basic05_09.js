console.log("section3 ch5 - 원시타입 객체타입")
//원시 타입 : 불변값, 객체 타입 : 가변값 > 포인터 개념 같음

//객체 복사 할때 얕은복사, 깊은 복사가 c랑 java 같은 개념과 반대 같음

//얕은 복사가 "=" 대입연산자를 통해 같은 주소를 가르켜서 같은 메모리를 참조함
//깊은 복사가 개별의 메모리의 저장되는 것임 "..." spread 연산자를 활용함
// 객체에서 주의점 : 깊은 복사로 복사한 두 객체는 "===" 비교 연산이 거짓임 > 참조값이 달라서
/**
 * 비교법
 * 
 * 얕은 비교 o1 === o2
 * 깊은 비교 JSON.stringify(o1) === JSON.stringify(o2) - 객체를 문자열로 바꾸는 내장함수
 * 
 */


console.log("section3 ch6 - 배열 객체 순회하기")
//for of 반복문 // 배열에서만 사용
let arr1 = [1,2,3];
for(let item of arr1){
    console.log(item);
}

//객체 순회 방법
//1 Object.keys 사용 객체에서 키만 뽑아 배열 저장
let person = {
    name : "이름",
    age : "나이",
    hobby : "취미"
}
let keys = Object.keys(person);
for(let key of keys){
    console.log(key, person[key]);
}

//2 for in >> 객체이서만 사용
for(let key in person){
    const value = person[key];
    console.log(key, value);
}


console.log("section3 ch7 - 배열 메서드 1")
/**
 * 매서드 종류
 * push - 맨 뒤 추가, unshift - 맨 앞에 값 추가
 * pop - 맨뒤 삭제 및 반환, shift - 맨 앞 제거후 반환
 * slice - 배열 자르기, concat - 두 배열 이어 붙여서 반환
 * 
 */


console.log("section3 ch8 - 배열 메서드 2")
// 배열 순회 방법
let arr3 = [1,2,3,4,5]; 

//1. forEach - 각각 반복
arr3.forEach((item, index) => {
    console.log(index, item * 2);
})

//2. includes - 해당 값이 있는지
console.log(arr3.includes(4));

//3. indexOf - 원시타입 값 찾을때
console.log(arr3.indexOf(3));

//4. findIndex - 모든 요소 순회하면서 콜백함수를 만족하는 인덱스 반환 - 보통 객체 타입 값 찾을때
console.log(arr3.findIndex((item) => item === 3))
let arr4 = [
    {name : "첫번째"},
    {name : "두번째"}
];
console.log(arr4.findIndex((item) => item.name === "두번째")) //이건 indexOf 가 못함

//5. find - findIndex 같이 동작하지만 객체 자체를 반환
console.log(arr4.find((item) => item.name === "두번째"));


console.log("section3 ch9 - 배열 메서드 3")
//5가지의 배열 변형 메소드

let humanHobby = [
    {name : "김철수", hobby: "테니스"},
    {name : "김짱구", hobby: "테니스"},
    {name : "김유리", hobby: "축구"}
];

let arr5 = [3,1,2];

//1. filter 기존 배열에서 특정 조건을 만족하는 요소만 반환
console.log(humanHobby.filter((item) => item.hobby === "테니스"))

//2. map 배열의 모든 요소 순회, 각 콜백 함수 실행후 결과값 배열로 만들어 반환
let names = humanHobby.map((item) => item.name);
console.log(names);

console.log(arr5.map((item) => {
    return item * 2;
}));

//3. sort 배열을 사전순으로 정렬, 오름차순은 기본, 오름차순은 아래와 같이 - arr5
let arr6 = ["b", "a", "c"];
console.log(arr6.sort());

console.log("오름차순" + arr5.sort());
console.log("내림차순" + arr5.sort((a,b) => {
    if(a > b) return -1;
    else if(a < b) return 1;
    else return 0;
}));

//toSorted 배열을 반환 원본은 안건듬
const arrsorted = arr5.toSorted();
console.log("정렬 전것" + arr5);
console.log("정렬된것" + arrsorted);

//join - 배열의 모든 요소를 합쳐줌
const joined = arr6.join("-");
console.log("join 은 배열내의 모든 요소를 합쳐서 문자열로 만들어줌" + joined);