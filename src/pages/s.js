/* 
var,let and const are the keywords used to declare the variables in javascript.
let and const are considered as block scope that means those variables strictly availble for that block,
while var is functional scoped means var is hoisted in function level , means it available any where in 
the function even if it declared inside the block in the function. those theree will be hoised but let and
const be stayed in tdz,var will be hoisted and initialized as undefined

*/


/* 
primitive is a small and least piece of data, means that cant be decreased(split) more than that, like numbers,
boolean etc, while reference datatype stores reference to it not the actual value , like arrays , objects.
for arrays and objects the variable holds the reference to it not the value, any operation done through the reference only.
for primitives operation will be done direclty on the value.
*/

/* 
console.log(0 == false);
console.log(0 === false);
console.log(typeof null);

1-> true , because in almost every programming lanugage ,0 is considered as falsy value
2->false, here we are using strict equality operation , that evaluates both value and type of the both operands
   so it will output as false, because 0 is number and false is a boolean type
3->null is type of object

*/

/* 
Hoisting is a javascript default behaviour of moving declaration to the top of the scope.
var,let and const will be hoisted in memory allocation phase , let and const will be hoisted
but stay in tdz until the actual line executes, var will be hoisted and initialized with undefined
, it simply attached to the global object , and accessing var before initialization gives output as undefined,
but let and const will give reference error
*/


/* 
function counter(){
    let count=0;
    return ()=>{
        count++;
        console.log(count);
    }
}

let a=counter();
let b=counter();

a();
a()
b()
b()
 */

/* 

let obj1 = { name: "A" };
let obj2 = obj1;
obj2.name = "B";

console.log(obj1.name);
console.log(obj2.name);

obj2 = { name: "C" };

console.log(obj1.name);
console.log(obj2.name);

"B"
"B"

"B"
"C"

*/

/* 
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

arr2 = [10, 20, 30]; 

console.log(arr1);
console.log(arr2); */

// [1,2,3,4],[1,2,3,4], [1,2,3,4],[10,20,30]

let x = { value: 1 };

function modify(obj) {
  obj.value = 2;
  obj = { value: 3 };
}

modify(x);

console.log(x.value);



