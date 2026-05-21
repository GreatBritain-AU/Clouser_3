'use strict';

function createFilter(callback){
    return function(arr){
        let res = [];

        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                res.push(arr[i])
            }
        }
        return res;
    }
}

const getOddNumbers = createFilter((el) => el % 2 !== 0);

const getNumbersBigThenthree = createFilter((el) => el > 3);

console.log(getOddNumbers([1, 2, 3, 4, 5]));

console.log(getNumbersBigThenthree([1, 2, 3, 4, 5]));