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
setTimeout(() => {
    console.log(1);
}, 3000);
console.log(2);


