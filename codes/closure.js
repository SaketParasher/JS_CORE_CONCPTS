/*
let arr = [3,7,9,5,1,4,2];


function isBetween(start,end){
    return function(x){
        if(x>=start && x<=end)
            return x;
    }
}

function inArray(arr){
    return function(ele){
        for(let a of arr){
            if(a == ele)
                return ele;
        }
    }
}

let newArr = arr.filter(inArray([1,7,2, 10]));
console.log(newArr);

*/

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field){
    return function(ele1,ele2){
        if(ele1.field < ele2.field)
            return ele1;
        else
            return ele2;
    };
}

//let sortedUsers = users.sort(byField('name'));
users.sort(byField('name'));
console.log(users);