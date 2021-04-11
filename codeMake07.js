function times1(){      
let nowTime = prompt("지금 서울 시간을 입력해 주세요. 오후8시12분이면 2012 입니다.");

if (nowTime<1300){
alert(`뉴욕은 한국보다 하루 느리며, 지금시간은  ${parseInt((2400+(nowTime-1300))/100)}시 ${parseInt((2400+(nowTime-1300))%100)} 분입니다`);
}else {
        alert(`미국의시간은? ${parseInt((nowTime-1300)/100)}시 ${parseInt((nowTime-1300)%100)}분  입니다.`);
}
}times1();