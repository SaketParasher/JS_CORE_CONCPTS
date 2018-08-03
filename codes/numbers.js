
function truncate(str,maxlength){
    var newstr = '';
    if(str.length > maxlength){
        str = str.substr(0,maxlength);
        console.log(str);
        for(let i=0;i<=str.length;i++){
            if(i != str.length)
                newstr = newstr+str[i];
            else
                newstr = newstr+'...' 
        }
    }
    return newstr;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));