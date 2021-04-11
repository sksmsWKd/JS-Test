
                function degreeTransfer() {
                        let celOrFal = prompt("섭씨온도면1,화씨면2를 입력하세요");

                        if (celOrFal == 1) {
                                let Celsius = prompt("섭씨온도 입력");
                                let fahrenheit = `${Celsius}` * 1.8 + 32;
                                alert(`섭씨온도 ${Celsius} 도를 화씨온도로 바꾸면 :    ${fahrenheit} 도`);
                        } else if (celOrFal == 2) {
                                let fahrenheit = prompt("화씨온도 입력");
                                let Celsius = (`${fahrenheit}` - 32) / 1.8;
                                alert(`화씨온도 ${fahrenheit} 도를 섭씨온도로 바꾸면 :    ${Celsius} 도`);
                        }
                }
                degreeTransfer();
  