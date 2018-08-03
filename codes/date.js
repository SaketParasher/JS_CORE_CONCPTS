function getDateAgo(date,days){
    //console.log(date.getDate());
    let locDate = new Date(date.getTime() - days*(24*60*60*1000));
    
    return locDate;
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


function getLastDayOfMonth(year, month){
    let lastDate = new Date(year,month+1,0);
    console.log(lastDate.getDate());
}

getLastDayOfMonth(2018,1);
getLastDayOfMonth(2012, 1);
getLastDayOfMonth(2018,2)


function getSecondsToday(){
    let dte = new Date();
    return ( dte.getHours()*60*60 + dte.getMinutes()*60 + dte.getSeconds() );
}

function getSecondsToTomorrow(){
    let newDte = new Date();    
    let tomDte2 = new Date(newDte.getFullYear(),newDte.getMonth(),newDte.getDate()+1); // it will give tomorrow's date with time as 00:00 i.e. midnight
    
    return ( tomDte2 - newDte )/1000; // subtract tommorrow date with todays date to get the difference in milliseconds then divide by 1000 to convert it into seconds from milliseconds.
    
}
/*
function printList(list){
    if(list.next == null){
        console.log(list.value);
        console.log((Date.now() - inow)/1000);
    }
    else{
        console.log(list.value);
        printList(list.next);
    }
}
*/

function printList(list){
    while(list.next != null){
        console.log(list.value);
        list = list.next;
    }
    console.log(list.value);
    console.log((Date.now() - inow)/1000);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let inow = Date.now();
printList(list);
