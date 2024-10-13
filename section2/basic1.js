//함수 표현식
console.log("chapter12")

function funcA(){
    console.log("ffff")
}

let varfun = funcA;
varfun();

let vatfun2 = function hello(){
    console.log("222");
}

//화살표 함수
let vatfun3 = (value) => value * 2;

console.log(vatfun3(4));


//콜벡 함수
function main(_func){
    console.log("mainnn")
    _func();
}

main(() => {
    console.log("subbbb");
});

//콜벡 활용
function repit(value, callb){
    for(let i = 1; i <= value; i++){
        callb(i);
    }
}

repit(5, (result) => {
    console.log(result);
});


//객체 생성