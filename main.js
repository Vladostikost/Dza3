let str = "Привет, меня зовут Влад"
console.log(str.length);



function count(n1, n2) {
    return Math.min(n1, n2)
}
console.log(count(7,45));




let arr1 = ['привет, как у тебя дела?']
let arr2 = ['здравствуйте, как ваши дела?']

function twoMass (arr1, arr2){
    if (arr1.length > arr2.length){
        return arr1;
    } else if (arr1.length < arr2.length){
        return arr2;
    } else {
        return arr1 = arr2
    }
}
console.log(twoMass(arr1, arr2));