// 1
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 't', 'r', 's', 'u', 'v', 'q', 'w', 'x', 'y', 'z'];

function palindrome(str) {
    let thatWord = [];
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < alphabet.length; j++){
            if(str[i] == alphabet[j]){
                thatWord.push(str[i])
            };
        };
    };
    if(thatWord.length % 2 == 0){
        var opposite = thatWord.length/2;
        for(let i = thatWord.length/2 - 1; i > -1; i--){
            if(thatWord[i] == thatWord[opposite]){
                opposite++;
            }else{
                break
            };
        };
        if(opposite == thatWord.length){
            return true
        }else{
            return false
        }
    }else{
        var opposite = thatWord.length/2 + 0.5;
        for(let i = thatWord.length/2 - 1.5; i > -1; i--){
            if(thatWord[i] == thatWord[opposite]){
                opposite++;
            }else{
                break
            };
        };
        if(opposite == thatWord.length){
            return true
        }else{
            return false
        }
    };
};
  
  
// console.log(palindrome("a b @Y&*@* bc b ba2@#(*$&*("));




// 2
function checkCashRegister(price, cash, cid) {
    var change = cash - price;

    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);




// 3
class Employees {
    constructor(name, taskList){
        this.name = name;
        this.taskList = taskList;
    };

    displayInfo(){
        console.log(this.name, this.taskList, this.managed);
    }
};

class Manager extends Employees {
    constructor(name, taskList){
        super(name, taskList);
        this.managed = [];
    };

    addEmployee(e){
        this.managed.push(e)
    }
}

mal = new Manager('mal', 'manager');
// mal.addEmployee('lam')
// mal.displayInfo()




// 4 
// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;

// var Roman = {
//     {I: 1}
// }
function convertToRoman(num){
    var romanNum = '';
    var n = 0;
    arrayNum = [];
    for(let i = String(num).length-1; i > -1; i--){
        arrayNum.push(Number(String(num)[i])*Math.pow(10, n));
        n++;
    }
    for(let i = arrayNum.length-1; i > -1; i--){
        if(arrayNum[i] < 10){
            if(String(arrayNum[i])[0] == 1){
                romanNum += 'I'
            }else if(String(arrayNum[i])[0] == 2){
                romanNum += 'II'
            }else if(String(arrayNum[i])[0] == 3){
                romanNum += 'III'
            }else if(String(arrayNum[i])[0] == 4){
                romanNum += 'IV'
            }else if(String(arrayNum[i])[0] == 5){
                romanNum += 'V'
            }else if(String(arrayNum[i])[0] == 6){
                romanNum += 'VI'
            }else if(String(arrayNum[i])[0] == 7){
                romanNum += 'VII'
            }else if(String(arrayNum[i])[0] == 8){
                romanNum += 'VIII'
            }else if(String(arrayNum[i])[0] == 9){
                romanNum += 'IX'
            }
        }else if(arrayNum[i] < 100){
            if(String(arrayNum[i])[0] == 1){
                romanNum += 'X'
            }else if(String(arrayNum[i])[0] == 2){
                romanNum += 'XX'
            }else if(String(arrayNum[i])[0] == 3){
                romanNum += 'XXX'
            }else if(String(arrayNum[i])[0] == 4){
                romanNum += 'XL'
            }else if(String(arrayNum[i])[0] == 5){
                romanNum += 'L'
            }else if(String(arrayNum[i])[0] == 6){
                romanNum += 'LX'
            }else if(String(arrayNum[i])[0] == 7){
                romanNum += 'LXX'
            }else if(String(arrayNum[i])[0] == 8){
                romanNum += 'LXXX'
            }else if(String(arrayNum[i])[0] == 9){
                romanNum += 'XC'
            }
        }else if(arrayNum[i] < 1000){
            if(String(arrayNum[i])[0] == 1){
                romanNum += 'C'
            }else if(String(arrayNum[i])[0] == 2){
                romanNum += 'CC'
            }else if(String(arrayNum[i])[0] == 3){
                romanNum += 'CCC'
            }else if(String(arrayNum[i])[0] == 4){
                romanNum += 'CD'
            }else if(String(arrayNum[i])[0] == 5){
                romanNum += 'D'
            }else if(String(arrayNum[i])[0] == 6){
                romanNum += 'DC'
            }else if(String(arrayNum[i])[0] == 7){
                romanNum += 'DCC'
            }else if(String(arrayNum[i])[0] == 8){
                romanNum += 'DCCC'
            }else if(String(arrayNum[i])[0] == 9){
                romanNum += 'CM'
            }
        }else if(arrayNum[i] < 4000){
            if(String(arrayNum[i])[0] == 1){
                romanNum += 'M'
            }else if(String(arrayNum[i])[0] == 2){
                romanNum += 'MM'
            }else if(String(arrayNum[i])[0] == 3){
                romanNum += 'MMM'
            }
        }
    }
    return romanNum
};

console.log(convertToRoman(3999));