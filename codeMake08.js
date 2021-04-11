function trapezoid(){
        let top = prompt("윗면의 길이를 입력하세요");
        let bottom = prompt("아랫면의 길이를 입력하세요");
        let height = prompt("높이의 길이를 입력하세요");

        alert(`사다리꼴의 넓이는${((top+bottom)*height)/2}입니다`);
}trapezoid();