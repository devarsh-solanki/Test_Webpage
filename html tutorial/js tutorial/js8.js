'use strict';

// closure example

function newFunc(){
    let count = 0;
    return function(){
        if(count<1){
            console.log("Hi, You called me")
            count++;
        }
        else if(count >= 1 && count < 3){
            console.log(`Me already ${count} bar call ho chuka hu!!!`);
            count++;
        }
        else{
            console.log(`Choti Bacchi Ho Kya!! ..Samaj Nahi 
            Aata Me already ${count} bar call ho chuka hu!!!`);
            count++;
        }
    }
}

let okFunc = newFunc();
okFunc();
okFunc();
okFunc();
okFunc();
okFunc();
