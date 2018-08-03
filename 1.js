
// 3+7-2+1
function Calculator(){
    
    this.calculate = function(str){
        let operationArr = [];
        let finalArr = [];
        
        for(let val of str){
            if(val != ' '){
                operationArr.push(val);
            }
        }
        
        for(let vl=0;vl<operationArr.length;vl++){
            if(operationArr[vl] == '+')
                finalArr.push(Number(operationArr[vl-1]) + Number(operationArr[vl+1]));
            if(operationArr[vl] == '-')
                finalArr.push(Number(operationArr[vl-1]) - Number(operationArr[vl+1]));
        }
        return finalArr[0];
     }
    
    this.addMethod = function(operator,fun){
        
    }
}

var cal = new Calculator();
console.log(cal.calculate('9-1'));