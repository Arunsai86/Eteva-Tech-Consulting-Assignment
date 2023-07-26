const array1 = ["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"];
const array2 = [ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"];

// a. Get a unique set of users from List1 which are not in List2
let uniqueSetFromArray1NotInArray2 = [];
for (let eachName of array1){
    if (array2.includes(eachName)){
        continue;
    }else {
        uniqueSetFromArray1NotInArray2.push(eachName);
    }
}
console.log(uniqueSetFromArray1NotInArray2);

// b. Get a unique set of users from List2 which are not in List1
let uniqueSetFromArray2NotInArray1 = [];
for (let eachName of array2){
    if (array1.includes(eachName)){
        continue;
    }else {
        uniqueSetFromArray2NotInArray1.push(eachName);
    }
}
console.log(uniqueSetFromArray2NotInArray1);

// c. Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)

let intersectionOfArray1AndArray2 = array1.filter(eachName => (array2.includes(eachName)))
console.log(intersectionOfArray1AndArray2);