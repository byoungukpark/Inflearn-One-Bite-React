console.log("section3 - ch01 - truthy, falsy")

// falsy : 조건문이 아니지만 거짓으로 여겨지는 값
// >> undefined, null, 0, -0, NaN, "", 0n

// truthy : 조건문이 아니지만 참으로 여겨지는 값
// >> falsy 한값 제외한 모든것

function printName(person) {
    if(!person) {
        console.log("no data")
        return;
    }
    console.log(person.name)
}
let person;
// printName(person);


console.log("section3 ch2 - 단락평가")
//단락평가란 : 이런 논리연산에서 첫 부분만 확인해도 결과가 확정되면 두번째 연산자에는 접근하지 않는다.
// a && b >> 둘다 t 라면 b 반환, a가 f 라면 a 반환
// a || b >> 둘다 t 라면 a 반환, a가 f 라면 b 반환

let varA = true;
let varb = () => false;
if(varA && varb()){console.log("varA 만 확인하고 확정")}
if(varA || varb()){console.log("varA 만 확인하고 확정")}

// 단락평가 응용
function printName2(person) {
    const name = person && person.name
    console.log(name || "값이 없음")
}
printName2({name : "값 있음"});
printName2();


console.log("section3 ch3 - 구조분해 할당")
//배열의 구조 분해 할당
let arr = [1,2,3];
let [one, two, three, four = "4값이 부족할때 추가 기본값", five] = arr;
console.log(one, two, three, four, five);

//객체 구조분해 할당
let data01 = {
    name : "이름",
    age : "나이",
    hobby : "취미"
}
let {name, age, hobby:hobbydata} = data01; //key랑 명칭이 같아야 되나?, 이름 바꿀라면 hobby 처럼
console.log(name, age, hobbydata);

//객체 구조분해 할당을 이용한 함수 매개변수 받기
const func01 = ({name, age, hobby, ectra="기타"}) => {
    console.log(name, age, hobby, ectra);
}
func01(data01);


console.log("section3 ch4 - Spread Rest")
//spread 연산자 >> ... >> 객체, 배열에 저장된값을 개별로 나눠 주는 연산자

//배열 spread
let arr1 = [1,2,3];
let arr2 = [4,...arr1,5,6];
console.log(arr2);

//객체 spread
let obj1 = {a:1, b:2};
let obj2 = {c:1, ...obj1, e:5};
console.log(obj2);

//Rest 매계변수
// 매개변수로 얼마나 많이 들어와도 다 배열에 저장해줌
const func02 = (one, two, ...allarr) => {
    console.log(`one : ${one}`);
    console.log(`two : ${two}`);
    console.log(allarr)
}
func02(...arr2)
