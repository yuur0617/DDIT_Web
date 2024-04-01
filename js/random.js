//랜덤 정수를 발생시키는 함수
function f_random(/*최소값, 최대값*/ minVal, maxVal){
    //                                (최대값 - 최소값 +1) 최소값
    return Math.floor(Math.random() * (maxVal -minVal +1) +minVal);
}