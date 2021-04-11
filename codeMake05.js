
                function haAc() {
                        let haORac = prompt("헥타르를 입력하려면 ha, 에이커를 입력하려면 ac를 입력하세요.");

                        if (haORac == "ha") {
                                let ha = prompt("몇 헥타르 입니까?");
                                let p = ha * 3025;
                                alert(`${ha}헥타르는 ${p}평입니다.`);
                        } else if (haORac == "ac") {
                                let ac = prompt("몇 에이커 입니까?");
                                let p = ac * 1224;
                                alert(`${ac}에이커는 ${p}평입니다.`);
                        }
                }
                haAc();
     