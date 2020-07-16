var names_arr = ["Fern","Alexa","Constance","Daniella","Connie","Flora","Hannah","Maddie"];
let even_names_arr = [];
let odd_names_arr = [];

function even_or_odd (arr1, arr2, arr3) { 
    var even= "b";
    var odd ="c";
    for(var i = 0; i < arr1.length; i++) {
        if (names_arr[i].length % 2 == 0) {
            arr2.push(even.concat(arr1[i].slice(1)));
        }
        else {  
            arr3.push(arr1[i].slice(0, -1).concat(odd));
        }
    }
    return;
};

even_or_odd(names_arr, even_names_arr, odd_names_arr);
console.log(even_names_arr);
console.log(odd_names_arr);