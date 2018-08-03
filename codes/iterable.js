let obj = {
    'prop1':'name1',
    'prop2':'name2',
    'prop3':'name3',
}



obj[Symbol.iterator] = function(){
    
    let gCnt = 0;
    let cnt = 0;
        for(let pro in this){
            ++gCnt;
        }
    console.log(this);

    return {
        'prop1':this.prop1,
        'prop2':this.prop2,
        'prop3':this.prop3,
        'prop4':console.log(this),
            
        for(let objProp in this){
            
        }
        next(){
            let inCnt = 0;
            for(let pp in this){
                
                if((cnt == inCnt) && cnt != gCnt){
                    ++cnt;
                    return { done:false,value:pp+' : '+this[pp] };
                }else if(cnt != inCnt && cnt != gCnt){
                    ++inCnt;   
                }else{
                    return { done:true };
                }
            }
        }
        
    };
}


for(let gprop of obj){
    console.log(gprop);
}