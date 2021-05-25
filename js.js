let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };

function multiplyNumeric(){
        for(let key in menu){
                if (typeof menu[key] == 'number'){
                        //typeof "[입력값]"
                        menu[key] = (menu[key]*2);
                        alert(menu[key]); 
                }else{
                alert(menu[key]);
                }
        }  
     
      
}
multiplyNumeric(menu);
