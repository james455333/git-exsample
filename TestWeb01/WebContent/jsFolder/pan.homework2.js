footer.innerText="copyrigth \xA9 2020 just  copyrigth";

var bo1 = 0;

function checkAccount(){
    let accountObject = document.getElementById("name");
    let account = accountObject.value;
    let ida = document.getElementById("ida");
    let idaImage = document.getElementById("idImage");
    if( account.length >= 2){
        let length =  account.length;
        for (let i = 0; i < length; i++) {
            let char1 = account.charCodeAt(i);
            if(char1 <0x9fff && char1>0x4e00){
                if( i == account.length-1 ){
                    idaImage.innerHTML='<img src="../images/correct.png" style="height:15px; width:15px">';
                    ida.innerHTML="正確";
                    break;
                }
                continue;
            }else{
                idaImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
                ida.innerHTML="姓名需為全中文";
                break;
            }
            
        }
        
    }else{
        idImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
        ida.innerHTML="字數不可為空白或小於兩個字"
    }
    
}


function checkPwd(){
    let pwdObject = document.getElementById("pwd");
    let pwd = pwdObject.value;
    let idp = document.getElementById("idp");
    let idpImage = document.getElementById("idpImage");
    let tag1 = 0;
    let tag2 = 0;
    let tag3 = 0;
    if( pwd.length >= 6){
        let length =  pwd.length;
        for (let i = 0; i < length; i++) {
            let char1 = pwd.charCodeAt(i);
            if( (char1 >=65 && char1<=90) || (char1<=122 && char1>=97) ){
                tag1 = 1;
                continue;
            }else if( char1<=57 && char1>=48){
                tag2 = 1;
                continue;
            }else if(  char1<127 && !(char1>=0 && char1<=31)){
                tag3 = 1;
                continue;
            }else{
                idpImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
                idp.innerHTML="包含不合法字元";
                break;
            }
            
        }
        if( !tag1  || !tag2 || !tag3 ){
            idpImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
            idp.innerHTML="密碼至少需有1個數字、1個英文字母以及1個特殊字元";
        }else{
            bo1 = 1;
            idpImage.innerHTML='<img src="../images/correct.png" style="height:15px; width:15px">';
            idp.innerHTML="正確";
        }
    }else{
        idpImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
        idp.innerHTML="字數不可為空白或小於6個字"
    }
    
}


function repeatPwd(){
    if(bo1){
        let pwdObject = document.getElementById("pwd");
        let pwdV = pwdObject.value;
        let rePwdObj = document.getElementById("repwd");
        let rePwdV = rePwdObj.value;
        let idrp = document.getElementById("idrp");
        let idrpImage = document.getElementById("idrpImage");
        if( rePwdV == pwdV){
            idrpImage.innerHTML='<img src="../images/correct.png" style="height:15px; width:15px">';
            idrp.innerHTML="正確";
        }else{
            idrpImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
            idrp.innerHTML="重複密碼不正確，請重新輸入";
        }
    }else{
        idrpImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
        idrp.innerHTML="上列密碼設定不正確，請返回重新輸入";
    }
    
}


function checkDate(){
    let dateObj = document.getElementById("date1");
    let dateVal = dateObj.value;
    let iddImage = document.getElementById("iddImage")
    let idd = document.getElementById("idd")
    let d1 =  new Date(dateVal);
    if(d1 == "Invalid Date"){
        iddImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
        idd.innerHTML="非正式日期或格式錯誤,請重新輸入";
    }
    let year = d1.getFullYear()+"/";
    let M1 = (d1.getMonth()+1)+"/" ;
    let D1 = d1.getDate().toString();
    let dateLength = dateVal.length;
    let zero = "0";
    let final1 ,final2;
    switch (dateLength){
        case 8 :
            final1 = year+M1+D1;
            final2 = null;
            break;
        case 9 :
            // m/dd m/0d mm/d 0m/d
            if( (d1.getMonth()+1) < 10 ){
                final1 = null;
                final2 = year + M1 +D1;
                if( d1.getDate() <10 ){
                    final1 = year + M1 + zero +D1;
                    final2 = year + zero + M1 + D1;
                    break;
                }
                break;
            }else{
                final1 = year + M1 + D1 ;
                final2 = null ;
                break;
            }

        case 10 :
        // mm/dd 0m/dd mm/0d 0m/0d
        if( (d1.getMonth()+1) < 10 ){
            final1 = year + zero + M1 + D1;
            final2 = year + zero + M1 + zero + D1;
            break;
        }else{
            final1 = year + M1 + D1 ;
            final2 = year + M1 + zero + D1;
            break;
        }
        default :
            iddImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
            idd.innerHTML="非正式日期或格式錯誤,請重新輸入";
            break;

    }

    if( dateVal == final1 || dateVal == final2){
        iddImage.innerHTML='<img src="../images/correct.png" style="height:15px; width:15px">';
        idd.innerHTML="正確";
    }else{
        iddImage.innerHTML='<img src="../images/error.png" style="height:15px; width:15px">';
        idd.innerHTML="非正式日期或格式錯誤，請重新輸入";

    }

}


