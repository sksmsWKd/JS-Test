
                function welfareCal() {
                        let asset = prompt("복리 계산금액을 입력하세요");
                        let welfare = prompt("복리 이자를 입력해주세요. 1%면 1.01입니다.")
                        let period = prompt("기간을 입력해주세요. 달 수를 숫자로 입력하세요");
                        let result;

                        for (let i = 1; i <= +period; i++) {
                                asset = asset * welfare;

                        }

                        alert(`당신이 ${period} 개월간 복리로 투자하면 ${asset} 금액이 됩니다.`);
                }
                welfareCal();
