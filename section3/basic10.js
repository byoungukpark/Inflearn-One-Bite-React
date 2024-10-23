console.log("section3 ch10 - date 객체와 날짜");
//date 객체
let dateOBJ = new Date();
console.log("date 객체 생성 : " + dateOBJ);

//date 객체에서 시간요소 뽑기
console.log(dateOBJ.getFullYear());

//시간 수정
dateOBJ.setFullYear(2025);
console.log("수정한 date :" + dateOBJ);

//시간을 여러방법으로 추출 하는법
console.log(dateOBJ.toDateString());


console.log("section3 ch11 - 동기 비동기");
/**
 * 자바스크립트에서는 스레드가 하나다, 그래서 비동기를 사용하는데
 * 비동기를 사용할때는 js의 엔진이 아니라 브라우저의 관리를 받아실행된다 - web apis 같은거
 * 
 * 몇몇 함수가 비동기를 지원한다
 * setTimeout(콜백함수, 시간)
 * 
 */


console.log("section3 ch12 - 비동기 작업처리하기1 - 콜벡함수");
function add(a, b, callback) {
    setTimeout(() => {
        let sum = a + b;
        callback(sum);
    }, 3000);
};

// add(1, 2, (value) => {console.log("비동기 a + b : " + value);});

function orderfood(food, callback) {
    const makedfood = "맛있는 " + food;
    setTimeout(() => {
        callback(makedfood);
    }, 3000);
};

function cooldownfood(food, callback) {
    setTimeout(() => {
        const coolfood = `식은 ${food}`;
        callback(coolfood)
    }, 2000);
}

// orderfood("닭꼬치", (food) => {
//     console.log(food);

//     cooldownfood(food, (coolfood) => {
//         console.log(coolfood);
//     });
// });


console.log("section3 ch13 - 비동기 작업처리하기2 - promise");
/**
 * promise - 비동기 작업 관리
 * promise(콜벡함수 - executer)
 * executer의 매계변수 resolve(결과값) - 성공 상태로 바꿈, reject(결과값) - 실패 상태로 바꿈
 * 
 * then - promise 성공시 결과값을 이용
 * catch - promise 실패시 결과값을 이용
 * 
 */

function testpromise(num1) { //이렇게 함수내에 넣어서 동적으로 객체 생성 가능
    const promise = new Promise((resolve, reject) => { //promose 객체 생성
        setTimeout(() => {
            if(typeof num1 === "number"){
                resolve(num1 * 2);
            }else{
                reject("실패");
            }
    
            console.log("비동기 실행 성공");
        }, 3000);
    });

    return promise;
}

let p = testpromise(23);
// p.then((value) => {// 함수를 통해 promise 객체를 받으면 이런 동적 행동이 가능
//     console.log("비동기 결과 : " + value);

//     const new_p = testpromise(value);
//     new_p.then((value) => {
//         console.log("한번더 비동기 결과 : " + value);
//     });
// }).catch((value) => {
//     console.log(value);
// });
p.then((value) => {// 함수를 통해 promise 객체를 받으면 이런 동적 행동이 가능
    console.log("비동기 결과 : " + value);

    const new_p = testpromise(value);
    return new_p; //이런식으로 하면 객체반환 아래에 then을 쓸수있 - 콜백지옥 방지
}).then((value) => {
    console.log("한번더 비동기 결과 : " + value);
}).catch((value) => {
    console.log(value);
});


console.log("section3 ch14 - 비동기 작업처리하기3 - Async Await");
/**
 * async - 함수를 비동기 함수로 변환해주는 키워드, 함수가 promise 객채가 반환됨!
 * 
 * await - 비동기 함수 내부에서만 사용가능 한 키워드, 비동기 함수가 다 처리되기 기다리는 역할!
 * 
 */

async function gettime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "박박",
                age : 23
            });
        }, 2000);
    });
}

let data1 = gettime();
console.log(data1);

async function printdata(){
    const data2 = await gettime();
    console.log(data2);
}

printdata();