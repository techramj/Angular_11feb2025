# JavaScript


## DataType
1. Number

2. string

3. boolean
```
true and false are boolean

falsely value
----------
a. false
b. 0
c. NaN
d. 0n
e. null
f. undefined
g. '' or ""  or ``
```

4. undefined
```
let a ;
console.log(a, typeof a); //undefined  undefined
```

5. object
```
let person = {name:"dipak",
              age:20, 
              gender:"male", 
              isMarried:false};

 person is an object.
 null is the value of object.             
```

6. function
```
function add(a,b){
  return a+b;
}

let c = add(2,3);
console.log("sum = "+c);

let add1 = function(a,b){
  return a +b;
}

c= add1(20,30);
console.log("sum = "+c);

let add2 = (a,b) => {
  return a+b;
}

c= add2(200,300);
console.log("sum = "+c);

console.log(typeof add, typeof add2, typeof add1);

```

7. Bigint
```
let a = 1234567891234567892233445566n;
console.log(a, typeof a);
let b = a / BigInt(10);
console.log(b, typeof b);

```

8. symbol
```
let a = Symbol(10);
let b = Symbol(10);
console.log(a == b);
console.log(a, typeof a);

```


## equality in js
```
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

//== compare the value
//=== compare the value and type

```

## difference between  var and let
```
var is function scoped
let is block scope

```

## OBJECT

### array

## for loop
```
let arr =[10,20,11,40,50];
console.log(arr);
console.log(typeof arr);

for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
console.log('');

// for in loop
for(let item of arr){
   console.log(item);
}
console.log('');


// foreach
arr.forEach(function(a){
  console.log(a)
});
console.log('');


// foreach
arr.forEach((a)=> console.log(a));
console.log('');

```

## example of map, find
```
let arr =[10,20,11,40,51];


let barr =[];

for(let a of arr){
  barr.push(a*a*a);
}

console.log(barr);

let carr = arr.map(a => a*a*a);
console.log(carr);

/*let oddArr = [];

for(let a of arr){
  if(a%2 != 0){
    oddArr.push(a);
  }
}
*/
let oddArr = arr.filter(a => a%2 != 0);
let oddArr2 = arr.filter(function(a){
  return a%2 != 0;
});

let oddFilter =function(a){
  return a%2 != 0;
};
let oddArr3 = arr.filter(oddFilter);
console.log(oddArr2);




```

