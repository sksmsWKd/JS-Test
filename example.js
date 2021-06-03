function goHome(bus, hello){
        alert (`go home by ${bus}`);
        hello();
}
function destination(){
        alert(`도착했습니다`);

}
goHome('파란버스',destination);

//콜백 함수는 비동기 함수의 완료이후 결과를 반환.
//동작에 필요한 준비가 끝난후에 동작을 수행하도록 할 수 있는 함수.
